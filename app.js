/**
 * General Knowledge Resource Library
 * Controller matching mlresources-main aesthetic
 */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    search: '',
    theme: localStorage.getItem('gk_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  };

  // Elements
  const htmlEl = document.documentElement;
  const sectionsContainer = document.getElementById('sections-container');
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const tocContainer = document.getElementById('toc-container');
  const emptyState = document.getElementById('empty-state');
  const resetSearchBtn = document.getElementById('reset-search-btn');

  // Initialize
  applyTheme(state.theme);
  renderSections();

  // Theme Management
  function applyTheme(theme) {
    state.theme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('gk_theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
    themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
  }

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Search Management
  let searchTimer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value.trim().toLowerCase();
      searchClearBtn.style.display = state.search ? 'inline-block' : 'none';
      renderSections();
    }, 120);
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    searchClearBtn.style.display = 'none';
    renderSections();
    searchInput.focus();
  });

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    searchClearBtn.style.display = 'none';
    renderSections();
  });

  // Render Category Sections
  function renderSections() {
    sectionsContainer.innerHTML = '';
    let totalVisible = 0;

    CATEGORIES.forEach(cat => {
      // Filter resources belonging to this category
      const catResources = RESOURCES.filter(item => {
        if (item.category !== cat.id) return false;
        if (state.search) {
          const q = state.search;
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchCreator = item.creator.toLowerCase().includes(q);
          const matchSource = item.source.toLowerCase().includes(q);
          const matchCode = item.code.toLowerCase().includes(q);
          const matchDesc = item.desc.toLowerCase().includes(q);
          if (!matchTitle && !matchCreator && !matchSource && !matchCode && !matchDesc) {
            return false;
          }
        }
        return true;
      });

      if (catResources.length === 0) return;

      totalVisible += catResources.length;

      // Section wrapper
      const section = document.createElement('section');
      section.className = 'category-section';

      // Section Header (matching mlresources-main h2)
      const h2 = document.createElement('h2');
      h2.id = cat.id;
      h2.innerHTML = `
        <span>${cat.title}</span>
        <span class="section-count">[${catResources.length}]</span>
      `;
      section.appendChild(h2);

      // Section Items List
      const listDiv = document.createElement('div');
      listDiv.className = 'resource-list';

      catResources.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'resource-item';

        itemEl.innerHTML = `
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-thumb-link" title="Open ${item.title}">
            <img class="resource-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80'">
          </a>
          <div class="resource-content">
            <div class="resource-meta">
              <code>${item.source.toUpperCase()} &bull; ${item.code}</code>
              <span class="scope-badge">${item.scope}</span>
            </div>
            <h3 class="resource-title">
              <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                ${item.title} ↗
              </a>
            </h3>
            <p class="resource-desc">${item.desc}</p>
          </div>
        `;

        listDiv.appendChild(itemEl);
      });

      section.appendChild(listDiv);
      sectionsContainer.appendChild(section);
    });

    // Empty state
    if (totalVisible === 0) {
      emptyState.style.display = 'block';
      tocContainer.style.display = 'none';
    } else {
      emptyState.style.display = 'none';
      tocContainer.style.display = state.search ? 'none' : 'block';
    }
  }

  // Keyboard shortcut for search
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') {
      if (e.key === 'Escape') {
        searchInput.blur();
      }
      return;
    }
    if (e.key === '/') {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
