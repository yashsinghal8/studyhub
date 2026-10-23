const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const resourceCards = [...document.querySelectorAll('.resource-card')];
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const subjectCards = [...document.querySelectorAll('.subject-card')];
const noResults = document.getElementById('noResults');
let activeCategory = 'all';

function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  resourceCards.forEach(card => {
    const category = card.dataset.category;
    const matchesCategory = activeCategory === 'all' || category === activeCategory;
    const matchesText = !term || card.textContent.toLowerCase().includes(term);
    const show = matchesCategory && matchesText;
    card.hidden = !show;
    if (show) visible++;
  });
  noResults.hidden = visible > 0;
}

function setCategory(category) {
  activeCategory = category;
  filterButtons.forEach(button => button.classList.toggle('active', button.dataset.filter === category));
  applyFilters();
}

filterButtons.forEach(button => button.addEventListener('click', () => setCategory(button.dataset.filter)));
subjectCards.forEach(card => card.addEventListener('click', () => {
  setCategory(card.dataset.filter);
  document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
}));
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  activeCategory = 'all';
  filterButtons.forEach(button => button.classList.toggle('active', button.dataset.filter === 'all'));
  applyFilters();
  document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
});
searchInput.addEventListener('input', applyFilters);
document.getElementById('clearFilter').addEventListener('click', () => {
  searchInput.value = '';
  setCategory('all');
});
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('open');
}));
document.getElementById('year').textContent = new Date().getFullYear();
