import urllib.request
import urllib.parse
import json
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://youtube.com/playlist?list=PL6A08EB4EEFF3E91F&si=mNT-dQenkkJr_t9L",
    "https://youtube.com/playlist?list=PL8FB14A2200B87185&si=H0Cl68MtVLB1IwIC",
    "https://youtube.com/playlist?list=PLUl4u3cNGP61E-vNcDV0w5xpsIBYNJDkU&si=ecOXofUqOZyXnffY",
    "https://www.youtube.com/playlist?list=PLfSdLxXHrKiSAoUBh0IHubmbW9NOvgaVP",
    "https://www.youtube.com/playlist?list=PLGwmAEmjn4fmL_kCTOR-N4fXOlXvLa8dG",
    "https://youtube.com/playlist?list=PLHRqg9vG6nrMv593olVJ47wqNcT8MYInY&si=zvoE5bDt1N_BRkZU",
    "https://youtube.com/playlist?list=PLtN43kak3fFEEDNo0ks9QVKYfQpT2yUEo&si=59p9ugVcBlQr8SM7",
    "https://youtube.com/playlist?list=PL848F2368C90DDC3D&si=ixfn5CZXAoM6K-LO",
    "https://youtube.com/playlist?list=PLGoCQBlsj_-75nQYWf-U8dDW_gutX8oL-&si=6MIYi75ZU0e2qP3t",
    "https://www.youtube.com/playlist?list=PLrAXtmErZgOdEfD2VtObCncE4psXYAcpq",
    "https://www.youtube.com/playlist?list=PLQ-uHSnFig5MaafmEhFox7rO-b0RxQth-",
    "https://youtube.com/playlist?list=PL30C13C91CFFEFEA6&si=JTiWUso95y9kwOXN",
    "https://youtube.com/playlist?list=PLTp9Bu0cTGUwTDYvupbPlnQNvtXBHpF_T&si=NtCiUCJxcAWJBDBn",
    "https://www.davidrumsey.com/",
    "https://books.google.com/ngrams/",
    "https://www.metmuseum.org/art/collection",
    "https://www.oldbaileyonline.org/search/name",
    "https://www.poetryfoundation.org/articles/69400/tradition-and-the-individual-talent",
    "https://guides.jstor.org/researchbasics",
    "https://paulgraham.com/disagree.html",
    "https://yalereview.org/article/virginia-woolf-essay-how-should-read-book",
    "https://www.theculturium.com/michel-de-montaigne-on-solitude/"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}

results = []

for u in urls:
    print(f"Fetching: {u}")
    res = {"url": u, "title": "", "og_title": "", "og_description": "", "og_image": "", "error": None}
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=12, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # title
            t_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            if t_match:
                res["title"] = t_match.group(1).strip()
                
            # og:title
            og_t = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE)
            if not og_t:
                og_t = re.search(r'<meta\s+content=["\'](.*?)["\']\s+property=["\']og:title["\']', html, re.IGNORECASE)
            if og_t:
                res["og_title"] = og_t.group(1).strip()

            # og:description
            og_d = re.search(r'<meta\s+property=["\']og:description["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE)
            if not og_d:
                og_d = re.search(r'<meta\s+content=["\'](.*?)["\']\s+property=["\']og:description["\']', html, re.IGNORECASE)
            if not og_d:
                og_d = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE)
            if og_d:
                res["og_description"] = og_d.group(1).strip()

            # og:image
            og_i = re.search(r'<meta\s+property=["\']og:image["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE)
            if not og_i:
                og_i = re.search(r'<meta\s+content=["\'](.*?)["\']\s+property=["\']og:image["\']', html, re.IGNORECASE)
            if og_i:
                res["og_image"] = og_i.group(1).strip()
    except Exception as e:
        res["error"] = str(e)
        print(f"Error for {u}: {e}")
    results.append(res)

with open(r"C:\YashHQ\General-Knowledge-Library\scraped_metadata.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Done! Scraped metadata saved.")
