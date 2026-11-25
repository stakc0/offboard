(() => {
  const nodes = document.querySelectorAll('[data-offboard-reveal]');
  if (!nodes.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    nodes.forEach(node => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .2, rootMargin: '0px 0px -10% 0px' });
  nodes.forEach(node => observer.observe(node));
})();
