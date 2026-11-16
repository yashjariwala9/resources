/**
 * General Knowledge Resource Library
 * Inspired by mlresources-main aesthetic & minimal structure
 */

const CATEGORIES = [
  { id: "philosophy", title: "Philosophy & Cognitive Science", count: 5 },
  { id: "business", title: "Business, Economics & Startups", count: 4 },
  { id: "essays", title: "Master Essays & Narrative", count: 4 },
  { id: "archives", title: "Historical & Legal Archives", count: 3 },
  { id: "research", title: "Research Tools & Learning Methods", count: 4 },
  { id: "technology", title: "Technology & Cybersecurity", count: 2 }
];

const RESOURCES = [
  // Philosophy & Cognitive Science
  {
    id: "yale-psychology",
    category: "philosophy",
    title: "Introduction to Psychology",
    creator: "Prof. Paul Bloom",
    source: "Yale University",
    code: "PSYC 110",
    scope: "20 Lectures",
    format: "Video Series",
    url: "https://youtube.com/playlist?list=PL6A08EB4EEFF3E91F&si=mNT-dQenkkJr_t9L",
    image: "https://i.ytimg.com/vi/7emS3ye3cVU/hqdefault.jpg",
    desc: "A comprehensive survey of human perception, memory, dreams, moral intuition, and the neurological basis of thought."
  },
  {
    id: "mit-society-of-mind",
    category: "philosophy",
    title: "The Society of Mind",
    creator: "Prof. Marvin Minsky",
    source: "MIT OpenCourseWare",
    code: "6.868J",
    scope: "Full Course",
    format: "Video Series",
    url: "https://youtube.com/playlist?list=PLUl4u3cNGP61E-vNcDV0w5xpsIBYNJDkU&si=ecOXofUqOZyXnffY",
    image: "https://i.ytimg.com/vi/-pb3z2w9gDg/hqdefault.jpg",
    desc: "AI pioneer Marvin Minsky's model of human intelligence as an emergent federation of non-thinking cognitive agents."
  },
  {
    id: "stanford-human-behavioral-biology",
    category: "philosophy",
    title: "Human Behavioral Biology",
    creator: "Prof. Robert Sapolsky",
    source: "Stanford University",
    code: "BIO 150",
    scope: "25 Lectures",
    format: "Video Series",
    url: "https://youtube.com/playlist?list=PL848F2368C90DDC3D&si=ixfn5CZXAoM6K-LO",
    image: "https://i.ytimg.com/vi/NNnIGh9g6fA/hqdefault.jpg",
    desc: "A multidisciplinary examination of human behavior integrating neurobiology, genetics, endocrinology, and evolution."
  },
  {
    id: "harvard-justice",
    category: "philosophy",
    title: "Justice: What's The Right Thing To Do?",
    creator: "Prof. Michael Sandel",
    source: "Harvard University",
    code: "PHIL 101",
    scope: "12 Episodes",
    format: "Video Series",
    url: "https://youtube.com/playlist?list=PL30C13C91CFFEFEA6&si=JTiWUso95y9kwOXN",
    image: "https://i.ytimg.com/vi/kBdfcR-8hEY/hqdefault.jpg",
    desc: "Harvard's famous moral and political philosophy lectures examining utilitarianism, Kantian ethics, Aristotle, and fairness."
  },
  {
    id: "montaigne-on-solitude",
    category: "philosophy",
    title: "On Solitude",
    creator: "Michel de Montaigne",
    source: "The Culturium / Essais",
    code: "ESSAIS (1580)",
    scope: "Classic Essay",
    format: "Essay",
    url: "https://www.theculturium.com/michel-de-montaigne-on-solitude/",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    desc: "Montaigne's timeless Renaissance meditation on cultivating an inner sanctuary free from vanity and external acclaim."
  },

  // Business, Economics & Startups
  {
    id: "yale-financial-markets",
    category: "business",
    title: "Financial Markets",
    creator: "Prof. Robert J. Shiller",
    source: "Yale University",
    code: "ECON 252",
    scope: "23 Lectures",
    format: "Video Series",
    url: "https://youtube.com/playlist?list=PL8FB14A2200B87185&si=H0Cl68MtVLB1IwIC",
    image: "https://i.ytimg.com/vi/WQui_3Hpmmc/hqdefault.jpg",
    desc: "Nobel Laureate Robert Shiller examines how financial institutions, behavioral psychology, and markets drive enterprise and crises."
  },
  {
    id: "yc-how-to-start-a-startup",
    category: "business",
    title: "How to Start a Startup",
    creator: "Sam Altman & Y Combinator",
    source: "Stanford University",
    code: "CS183B",
    scope: "20 Lectures",
    format: "Video Series",
    url: "https://www.youtube.com/playlist?list=PLQ-uHSnFig5MaafmEhFox7rO-b0RxQth-",
    image: "https://i.ytimg.com/vi/3Fx5Q8xGU8k/hqdefault.jpg",
    desc: "The definitive startup playbook taught by Peter Thiel, Reid Hoffman, and Dustin Moskovitz on building tech companies."
  },
  {
    id: "think-school-case-studies",
    category: "business",
    title: "Business Case Studies",
    creator: "Think School",
    source: "Think School",
    code: "CASE STUDIES",
    scope: "Video Series",
    format: "Video Series",
    url: "https://www.youtube.com/playlist?list=PLGwmAEmjn4fmL_kCTOR-N4fXOlXvLa8dG",
    image: "https://i.ytimg.com/vi/M9bhCVqGaOI/hqdefault.jpg",
    desc: "Analytical dissections of corporate strategy, logistics policies, competitive moats, and business transformations."
  },
  {
    id: "the-ken-two-by-two",
    category: "business",
    title: "Two by Two",
    creator: "The Ken",
    source: "The Ken Media",
    code: "PODCAST",
    scope: "Investigative Audio",
    format: "Podcast",
    url: "https://youtube.com/playlist?list=PLGoCQBlsj_-75nQYWf-U8dDW_gutX8oL-&si=6MIYi75ZU0e2qP3t",
    image: "https://i.ytimg.com/pl_c/PLGoCQBlsj_-75nQYWf-U8dDW_gutX8oL-/studio_square_thumbnail.jpg",
    desc: "Investigative reporting breaking down platform economics, the gig economy, and tech battles across modern markets."
  },

  // Master Essays & Narrative
  {
    id: "paul-graham-how-to-disagree",
    category: "essays",
    title: "How to Disagree",
    creator: "Paul Graham",
    source: "Paul Graham",
    code: "ESSAY (2008)",
    scope: "15 min read",
    format: "Essay",
    url: "https://paulgraham.com/disagree.html",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    desc: "Outlines the seven levels of disagreement (DH0 to DH6)—from name-calling to refuting the central point of an argument."
  },
  {
    id: "virginia-woolf-how-to-read-a-book",
    category: "essays",
    title: "How Should One Read a Book?",
    creator: "Virginia Woolf",
    source: "The Yale Review",
    code: "ARCHIVE ESSAY",
    scope: "Master Essay",
    format: "Essay",
    url: "https://yalereview.org/article/virginia-woolf-essay-how-should-read-book",
    image: "https://d181q449nqu6en.cloudfront.net/content/craft/articles/a15338_1_0_0_0_0_0_0_0_0_0_0.jpg",
    desc: "Virginia Woolf's classic essay on reading as an act of personal freedom, sympathetic imagination, and critical independence."
  },
  {
    id: "ts-eliot-tradition",
    category: "essays",
    title: "Tradition and the Individual Talent",
    creator: "T.S. Eliot",
    source: "Poetry Foundation",
    code: "CRITICISM (1919)",
    scope: "Critical Essay",
    format: "Essay",
    url: "https://www.poetryfoundation.org/articles/69400/tradition-and-the-individual-talent",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    desc: "T.S. Eliot's landmark 1919 critical essay arguing that artistic originality requires conscious communion with the literary tradition."
  },
  {
    id: "this-american-life",
    category: "essays",
    title: "This American Life",
    creator: "Ira Glass",
    source: "WBEZ Chicago",
    code: "AUDIO JOURNALISM",
    scope: "Audio Series",
    format: "Podcast",
    url: "https://youtube.com/playlist?list=PLHRqg9vG6nrMv593olVJ47wqNcT8MYInY&si=zvoE5bDt1N_BRkZU",
    image: "https://i.ytimg.com/vi/nKEE3swqA3A/hqdefault.jpg",
    desc: "The gold standard of radio and audio storytelling, exploring themed human experiences that unfold like movies for the ear."
  },

  // Historical & Legal Archives
  {
    id: "david-rumsey-maps",
    category: "archives",
    title: "David Rumsey Historical Map Collection",
    creator: "David Rumsey",
    source: "Stanford Libraries",
    code: "CARTOGRAPHY",
    scope: "130,000+ Maps",
    format: "Archive",
    url: "https://www.davidrumsey.com/",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    desc: "Over 130,000 rare, high-resolution historical maps and atlases spanning 1500 to the present with georeferenced GIS overlays."
  },
  {
    id: "met-museum-collection",
    category: "archives",
    title: "The Met Collection",
    creator: "Curatorial Staff",
    source: "The Met (NYC)",
    code: "OPEN ACCESS",
    scope: "490,000+ Artworks",
    format: "Archive",
    url: "https://www.metmuseum.org/art/collection",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    desc: "Open access archive of over 490,000 public domain artworks representing 5,000 years of global visual culture."
  },
  {
    id: "old-bailey-proceedings",
    category: "archives",
    title: "Old Bailey Online (1674–1913)",
    creator: "Univ. of Sheffield & Hertfordshire",
    source: "Historical Court Records",
    code: "197,745 TRIALS",
    scope: "Full Database",
    format: "Archive",
    url: "https://www.oldbaileyonline.org/search/name",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    desc: "Searchable proceedings of 197,745 criminal trials, providing an unvarnished record of non-elite life and spoken speech across 240 years."
  },

  // Research Tools & Learning Methods
  {
    id: "google-ngram-viewer",
    category: "research",
    title: "Google Books Ngram Viewer",
    creator: "Google & Harvard",
    source: "Cultural Observatory",
    code: "CULTUROMICS",
    scope: "8M+ Books",
    format: "Tool",
    url: "https://books.google.com/ngrams/",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    desc: "Charts the cultural frequency of words and concepts across millions of digitized books printed between 1500 and 2019."
  },
  {
    id: "jstor-research-basics",
    category: "research",
    title: "JSTOR Research Basics",
    creator: "JSTOR / ITHAKA",
    source: "LibGuides at JSTOR",
    code: "COURSE",
    scope: "Open Course",
    format: "Tool",
    url: "https://guides.jstor.org/researchbasics",
    image: "https://guides.jstor.org/ld.php?screenshot=iffgci.png&size=facebook&cb=1794846698",
    desc: "An open modular course on framing research hypotheses, evaluating peer-reviewed credibility, and using Boolean search logic."
  },
  {
    id: "study-skills-learning-techniques",
    category: "research",
    title: "Evidence-Based Learning Techniques",
    creator: "Cognitive Science Lab",
    source: "Meta-Learning Lab",
    code: "TUTORIALS",
    scope: "Study Protocols",
    format: "Video Series",
    url: "https://youtube.com/playlist?list=PLTp9Bu0cTGUwTDYvupbPlnQNvtXBHpF_T&si=NtCiUCJxcAWJBDBn",
    image: "https://i.ytimg.com/pl_c/PLTp9Bu0cTGUwTDYvupbPlnQNvtXBHpF_T/studio_square_thumbnail.jpg",
    desc: "Scientifically substantiated protocols for memory retention, active recall, spaced repetition, and the Feynman technique."
  },
  {
    id: "farnam-street-knowledge-project",
    category: "research",
    title: "The Knowledge Project",
    creator: "Shane Parrish",
    source: "Farnam Street",
    code: "DECISION MAKING",
    scope: "Interviews",
    format: "Podcast",
    url: "https://www.youtube.com/playlist?list=PLfSdLxXHrKiSAoUBh0IHubmbW9NOvgaVP",
    image: "https://i.ytimg.com/pl_c/PLfSdLxXHrKiSAoUBh0IHubmbW9NOvgaVP/studio_square_thumbnail.jpg",
    desc: "In-depth conversations deconstructing mental models, second-order thinking, and decision architectures from master thinkers."
  },

  // Technology & Cybersecurity
  {
    id: "darknet-diaries",
    category: "technology",
    title: "Darknet Diaries",
    creator: "Jack Rhysider",
    source: "Jack Rhysider",
    code: "CYBERSECURITY",
    scope: "Audio Series",
    format: "Podcast",
    url: "https://youtube.com/playlist?list=PLtN43kak3fFEEDNo0ks9QVKYfQpT2yUEo&si=59p9ugVcBlQr8SM7",
    image: "https://i.ytimg.com/vi/6-yGx_rfSgY/hqdefault.jpg",
    desc: "Investigative true stories from the digital dark side: nation-state espionage, penetration testing, and shadow hacking syndicates."
  },
  {
    id: "lex-fridman-ama",
    category: "technology",
    title: "AMA & Scientific Reflections",
    creator: "Lex Fridman",
    source: "Independent / MIT",
    code: "AI & ROBOTICS",
    scope: "Conversations",
    format: "Video Series",
    url: "https://www.youtube.com/playlist?list=PLrAXtmErZgOdEfD2VtObCncE4psXYAcpq",
    image: "https://i.ytimg.com/vi/_ySbzVXiwzQ/hqdefault.jpg",
    desc: "Candid reflections on artificial intelligence, humanoid robotics, deep work discipline, physics, and scientific inquiry."
  }
];
