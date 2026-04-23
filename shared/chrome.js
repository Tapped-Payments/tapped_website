/* =============================================================
   Tapped — shared nav + footer injector
   Include on any sub-page under /pages/<dir>/<name>.html
   Set <body data-section="..." data-current="..."> to indicate
   the active section. All links are absolute-from-root style
   using a computed ROOT prefix based on folder depth.
   ============================================================= */
(function(){
  // Compute root-relative prefix based on current file location.
  // Sub-pages live at /pages/<subdir>/<file> → prefix "../../"
  // Pages at /pages/<file>                 → prefix "../"
  const path = location.pathname;
  const m = path.match(/\/pages\/(?:([^/]+)\/)?[^/]+\.html?$/);
  let ROOT = '../';
  if (m && m[1]) ROOT = '../../';
  // fallback: if nothing matches (e.g. opened via file:// at root), assume we're at root
  if (!/pages\//.test(path)) ROOT = '';
  const P = ROOT + 'pages/';

  // Which item in the top nav corresponds to which section (used for aria-current)
  const current = (document.body.getAttribute('data-current') || '').toLowerCase();

  const nav = `
<nav class="nav" aria-label="Primary"><div class="container nav-inner">
  <a href="${ROOT}Tapped Website.html" class="brand" aria-label="Tapped home">
    <img class="logo-img" src="${ROOT}assets/tapped-logo.png" alt="Tapped" width="34" height="34">
  </a>
  <div class="nav-center">
    <div class="nav-item ${current==='solutions'?'is-current':''}" data-mega="solutions">
      <button aria-haspopup="true" aria-expanded="false">Solutions
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-mega" style="min-width:560px;">
        <a href="${P}solutions/restaurant-pos.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11h18M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/></svg></div><div><span class="nm">Restaurant POS</span><span class="nd">Tap at the table or counter</span></div></a>
        <a href="${P}solutions/salon-wellness.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="5"/><path d="M3 21a9 9 0 0 1 18 0"/></svg></div><div><span class="nm">Salon &amp; Wellness</span><span class="nd">Embed into booking flows</span></div></a>
        <a href="${P}solutions/field-services.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7"/></svg></div><div><span class="nm">Field Services</span><span class="nd">Pay at the customer's door</span></div></a>
        <a href="${P}solutions/healthcare.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19v-6m-3 3h6"/></svg></div><div><span class="nm">Healthcare</span><span class="nd">Clinic copay collections</span></div></a>
        <a href="${P}solutions/hotels.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20h20M3 20V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12"/></svg></div><div><span class="nm">Hotels</span><span class="nd">PMS folio checkout</span></div></a>
        <a href="${P}solutions/fitness.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m6.5 6.5 11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M3 10l7-7M14 21l7-7"/></svg></div><div><span class="nm">Fitness &amp; Gyms</span><span class="nd">Studio and chain checkouts</span></div></a>
        <a href="${P}solutions/auto-repair.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg></div><div><span class="nm">Auto &amp; Repair</span><span class="nd">Mobile-first shop invoicing</span></div></a>
      </div>
    </div>
    <div class="nav-item ${current==='product'?'is-current':''}" data-mega="product">
      <button aria-haspopup="true" aria-expanded="false">Product
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-mega" style="min-width:620px;">
        <a href="${P}product/tap-core.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div><div><span class="nm">Tap Core</span><span class="nd">Certified EMV kernels &amp; rails</span></div></a>
        <a href="${P}product/tap-terminal.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="14" height="20" x="5" y="2" rx="2"/></svg></div><div><span class="nm">Tap Terminal</span><span class="nd">PIN-on-Glass SDK</span></div></a>
        <a href="${P}product/tapped-onboard.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg></div><div><span class="nm">Tapped Onboard</span><span class="nd">PSP-agnostic KYB</span></div></a>
        <a href="${P}product/tap-certify.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1"/></svg></div><div><span class="nm">Tap Certify</span><span class="nd">Scheme &amp; regulator filings</span></div></a>
        <a href="${P}product/tap-ledger.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h18v4H3zM3 11h12v10H3zM18 11h3v10h-3z"/></svg></div><div><span class="nm">Tap Ledger</span><span class="nd">Multi-currency payouts</span></div></a>
      </div>
    </div>
    <a class="nav-item ${current==='markets'?'is-current':''}" href="${P}markets.html"><button>Markets</button></a>
    <div class="nav-item ${current==='developers'?'is-current':''}" data-mega="developers">
      <button aria-haspopup="true" aria-expanded="false">Developers
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-mega" style="min-width:560px;">
        <a href="${P}developers.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div><span class="nm">Developer home</span><span class="nd">Quickstarts, SDKs, and integration patterns</span></div></a>
        <a href="${P}developers/documentation.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><div><span class="nm">Documentation</span><span class="nd">15-minute quickstart &amp; full guides</span></div></a>
        <a href="${P}developers/api-reference.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><div><span class="nm">API reference</span><span class="nd">Every resource, every endpoint</span></div></a>
        <a href="${P}developers/sdks.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg></div><div><span class="nm">SDKs &amp; libraries</span><span class="nd">Node, Swift, Kotlin, .NET, Ruby, Go</span></div></a>
        <a href="${P}developers/webhooks.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg></div><div><span class="nm">Webhooks</span><span class="nd">Signed events, exponential retries</span></div></a>
        <a href="${P}developers/changelog.html"><div class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg></div><div><span class="nm">Changelog</span><span class="nd">API &amp; SDK releases, market rollouts</span></div></a>
      </div>
    </div>
    <a class="nav-item ${current==='pricing'?'is-current':''}" href="${P}pricing.html"><button>Pricing</button></a>
  </div>
  <div class="nav-cta">
    <a class="btn btn-ghost" href="${P}company/sign-in.html">Sign in</a>
    <a class="btn btn-brand btn-arrow" href="${P}company/contact.html">Talk to sales</a>
  </div>
</div></nav>`;

  const footer = `
<footer class="footer"><div class="container">
  <div class="footer-grid">
    <div class="footer-col">
      <img class="logo-img" src="${ROOT}assets/tapped-logo.png" alt="Tapped">
      <p>Embedded tap-to-pay infrastructure for vertical SaaS platforms across APAC.</p>
    </div>
    <div class="footer-col">
      <h5>Solutions</h5>
      <a href="${P}solutions/restaurant-pos.html">Restaurant POS</a>
      <a href="${P}solutions/salon-wellness.html">Salon &amp; Wellness</a>
      <a href="${P}solutions/field-services.html">Field Services</a>
      <a href="${P}solutions/healthcare.html">Healthcare</a>
      <a href="${P}solutions/hotels.html">Hotels</a>
      <a href="${P}solutions/fitness.html">Fitness</a>
      <a href="${P}solutions/auto-repair.html">Auto &amp; Repair</a>
    </div>
    <div class="footer-col">
      <h5>Product</h5>
      <a href="${P}product/tap-core.html">Tap Core</a>
      <a href="${P}product/tap-terminal.html">Tap Terminal</a>
      <a href="${P}product/tapped-onboard.html">Tapped Onboard</a>
      <a href="${P}product/tap-certify.html">Tap Certify</a>
      <a href="${P}product/tap-ledger.html">Tap Ledger</a>
      <a href="${P}markets.html">Markets</a>
    </div>
    <div class="footer-col">
      <h5>Developers</h5>
      <a href="${P}developers/documentation.html">Documentation</a>
      <a href="${P}developers/api-reference.html">API reference</a>
      <a href="${P}developers/sdks.html">SDKs</a>
      <a href="${P}developers/webhooks.html">Webhooks</a>
      <a href="${P}developers/status.html">Status</a>
      <a href="${P}developers/changelog.html">Changelog</a>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <a href="${P}company/about.html">About</a>
      <a href="${P}customers.html">Customers</a>
      <a href="${P}company/press.html">Press</a>
      <a href="${P}company/careers.html">Careers</a>
      <a href="${P}company/contact.html">Contact</a>
      <a href="${P}company/security.html">Security</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div>&copy; 2026 Tapped Pte Ltd &middot; 1 Raffles Place, Singapore</div>
    <div class="lr">
      <a href="${P}legal/privacy.html">Privacy</a>
      <a href="${P}legal/terms.html">Terms</a>
      <a href="${P}legal/pci.html">PCI</a>
      <a href="${P}legal/licences.html">Licences</a>
    </div>
  </div>
</div></footer>`;

  // Inject
  const navMount = document.querySelector('[data-nav-mount]');
  if (navMount) navMount.outerHTML = nav;
  else document.body.insertAdjacentHTML('afterbegin', nav);

  const footerMount = document.querySelector('[data-footer-mount]');
  if (footerMount) footerMount.outerHTML = footer;
  else document.body.insertAdjacentHTML('beforeend', footer);

  // Mega-menu hover behavior
  document.querySelectorAll('.nav-item[data-mega]').forEach(i => {
    let t;
    i.addEventListener('mouseenter', () => { clearTimeout(t); i.classList.add('open'); });
    i.addEventListener('mouseleave', () => { t = setTimeout(() => i.classList.remove('open'), 120); });
  });
})();
