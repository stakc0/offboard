(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = document.querySelectorAll('.reveal, .drift');
  if (reduced || !('IntersectionObserver' in window)) { nodes.forEach(node => node.classList.add('in-view')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; if (entry.target.classList.contains('drift')) { const direction = Number(entry.target.dataset.drift || 0); entry.target.style.setProperty('--drift-x', `${direction * 2.5}vw`); } entry.target.classList.add('in-view'); observer.unobserve(entry.target); }), { threshold: .18, rootMargin: '0px 0px -8% 0px' });
  nodes.forEach(node => observer.observe(node));
})();
