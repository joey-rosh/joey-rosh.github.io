/* Mobile menu, and the contents list on a guide page. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }


  /* Wide reference tables get their own scroll container. */
  [].slice.call(document.querySelectorAll('.prose table')).forEach(function (t) {
    if (t.parentNode.classList.contains('table-scroll')) return;
    var box = document.createElement('div');
    box.className = 'table-scroll';
    t.parentNode.insertBefore(box, t);
    box.appendChild(t);
  });

  var list = document.getElementById('toc-list');
  if (!list) return;
  var headings = [].slice.call(document.querySelectorAll('.prose > h2'));
  if (!headings.length) { document.getElementById('toc').hidden = true; return; }

  headings.forEach(function (h, i) {
    if (!h.id) {
      h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section-' + i;
    }
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace(/^\d+\.\s*/, '');
    li.appendChild(a);
    list.appendChild(li);
  });

  var links = [].slice.call(list.querySelectorAll('a'));
  if (!('IntersectionObserver' in window)) return;
  var seen = new Map();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { seen.set(e.target.id, e.isIntersecting); });
    var current = headings.filter(function (h) { return seen.get(h.id); })[0] ||
      headings.filter(function (h) { return h.getBoundingClientRect().top < 120; }).pop();
    links.forEach(function (a) {
      a.classList.toggle('active', !!current && a.getAttribute('href') === '#' + current.id);
    });
  }, { rootMargin: '-80px 0px -70% 0px' });
  headings.forEach(function (h) { io.observe(h); });
})();
