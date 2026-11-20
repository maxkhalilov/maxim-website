// Light/dark toggle: remembers the visitor's choice, otherwise follows the system setting.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function label() {
    var t = root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    btn.setAttribute('aria-label', t);
    btn.setAttribute('title', t);
  }
  if (!btn) return;
  root.classList.add('has-js');
  label();
  btn.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
  mq.addEventListener('change', function (e) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) { root.dataset.theme = e.matches ? 'dark' : 'light'; label(); }
  });
})();
