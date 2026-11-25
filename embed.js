/* Social Ladder solar checks loader. Usage:
   <script src="https://kingsly-the-dog.github.io/solar-embed/embed.js" data-client="CLIENT_ID" async></script>
   The tools appear where this tag sits (or inside <div id="sl-solar"> if the page has one).
   On/off is controlled by Social Ladder's client sheet, not by this file. */
(function () {
  var H = 'https://kingsly-the-dog.github.io', s = document.currentScript;
  if (!s) return;
  var c = s.getAttribute('data-client') || '', f = document.createElement('iframe');
  f.src = H + '/solar-embed/tools-embed/index.html?c=' + encodeURIComponent(c) + '&p=' + encodeURIComponent(location.href.split('#')[0]) + (location.hash.indexOf('#try=') === 0 ? location.hash : '');
  f.title = 'Free solar checks';
  f.setAttribute('scrolling', 'no');
  f.style.cssText = 'display:block;width:100%;border:0;height:520px;overflow:hidden';
  var box = document.getElementById('sl-solar');
  if (box) box.appendChild(f); else s.parentNode.insertBefore(f, s.nextSibling);
  addEventListener('message', function (e) {
    var m = e.data;
    if (e.origin !== H || !m || typeof m !== 'object') return;
    if (m.type === 'slw-height') f.style.height = Math.max(0, +m.h) + 'px';
    if (m.type === 'slw-scroll') {
      var t = f.getBoundingClientRect().top + (+m.top || 0);
      if (t < 60 || t > innerHeight * 0.5) scrollTo({ top: Math.max(0, t + pageYOffset - 80), behavior: 'smooth' });
    }
  });
})();
