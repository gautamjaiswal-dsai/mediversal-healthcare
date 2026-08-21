/* ============================================================
   SHARED CHROME + BEHAVIORS
   ============================================================ */

const EMERGENCY_NUMBER = "0612-3500111";
const CONTACT = {
  email: "info@mediversal.in",
  phones: ["0612-3500010","0612-3500110","0612-3500111"],
  address: "Doctors' Colony, Kankarbagh, Patna – 800 020, Bihar"
};

function pulseDividerSVG(){
  return `<div class="pulse-divider" aria-hidden="true"><svg viewBox="0 0 1200 34" preserveAspectRatio="none">
    <path d="M0 17 H480 L508 17 L522 3 L538 31 L554 17 L580 17 H1200"/>
    <path class="pulse-accent" d="M480 17 L508 17 L522 3 L538 31 L554 17 L580 17" />
  </svg></div>`;
}

function renderHeader(active){
  const nav = (key,label,href) => `<a href="${href}" class="nav-link" data-key="${key}" style="${active===key?'color:var(--teal)':''}">${label}</a>`;
  return `
  <div class="topbar">
    <div class="container">
      <span>Advanced Healthcare. Human Care. — Mediversal Healthcare Network, Patna</span>
      <a href="contact.html" class="topbar-emergency">${icon('phone',14)} Emergency: ${EMERGENCY_NUMBER}</a>
    </div>
  </div>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <header class="site-header">
    <div class="container header-row">
      <a href="index.html" class="logo">
        <span class="logo-mark">${icon('heart-pulse',20)}</span>
        Mediversal
      </a>
      <nav class="main-nav" aria-label="Primary">
        <ul>
          <li class="nav-item">
            <span class="nav-link" tabindex="0">Hospitals ${icon('chevron-down',14)}</span>
            <div class="mega mega-hospitals">
              <div class="mega-grid">
                ${HOSPITALS.map(h => `
                  <a class="mega-card" href="hospital-detail.html?slug=${h.slug}">
                    <span class="mega-icon">${icon(h.icon,20)}</span>
                    <span><h4>${h.name}</h4><p>${h.description}</p></span>
                  </a>`).join("")}
              </div>
            </div>
          </li>
          <li class="nav-item">
            <span class="nav-link" tabindex="0">Specialties ${icon('chevron-down',14)}</span>
            <div class="mega mega-specialties">
              <div class="mega-cols">
                ${SPECIALTY_GROUPS.map(g => `
                  <div><h5>${g.group}</h5><ul>
                    ${g.items.map(id => { const s = specialtyById(id); return s ? `<li><a href="specialty-detail.html?id=${s.id}">${s.name}</a></li>` : ''; }).join("")}
                  </ul></div>`).join("")}
              </div>
            </div>
          </li>
          <li class="nav-item">${nav('doctors','Doctors','doctors.html')}</li>
          <li class="nav-item">
            <span class="nav-link" tabindex="0">Patient Care ${icon('chevron-down',14)}</span>
            <div class="mega" style="width:260px;">
              <ul>
                <li><a href="patient-care.html" style="display:block;padding:8px 0;">Before Your Visit</a></li>
                <li><a href="patient-care.html" style="display:block;padding:8px 0;">Insurance & Cashless</a></li>
                <li><a href="patient-care.html" style="display:block;padding:8px 0;">Patient Rights</a></li>
                <li><a href="patient-care.html" style="display:block;padding:8px 0;">Brochures & FAQs</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <span class="nav-link" tabindex="0">Health & Wellness ${icon('chevron-down',14)}</span>
            <div class="mega" style="width:240px;">
              <ul>
                <li><a href="blog.html" style="display:block;padding:8px 0;">Health Articles</a></li>
                <li><a href="hospital-detail.html?slug=health-studio" style="display:block;padding:8px 0;">Health Studio</a></li>
                <li><a href="hospital-detail.html?slug=homecare" style="display:block;padding:8px 0;">Homecare Services</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">${nav('about','About Us','about.html')}</li>
          <li class="nav-item">${nav('contact','Contact','contact.html')}</li>
        </ul>
      </nav>
      <div class="header-actions">
        <button class="icon-btn" aria-label="Search" onclick="location.href='doctors.html'">${icon('search',18)}</button>
        <select class="lang-select lang-select-desktop" aria-label="Language" onchange="setLanguage(this.value)">
          <option value="en">EN</option>
          <option value="hi">हिं</option>
        </select>
        <a href="contact.html" class="header-emergency">${icon('phone',16)} ${EMERGENCY_NUMBER}</a>
        <a href="appointment.html" class="btn btn-primary btn-sm">Book Appointment</a>
        <button class="icon-btn menu-toggle" aria-label="Open menu" onclick="toggleMobileMenu()">${icon('menu',18)}</button>
      </div>
    </div>
  </header>
  <nav class="mobile-bottomnav" aria-label="Mobile primary">
    <ul>
      <li><a href="index.html" class="${active==='home'?'active':''}">${icon('home',20)}Home</a></li>
      <li><a href="doctors.html" class="${active==='doctors'?'active':''}">${icon('user',20)}Doctors</a></li>
      <li class="mb-book-wrap"><a href="appointment.html" class="mb-book"><span class="mb-book-inner">${icon('calendar',20)}<br>Book</span></a></li>
      <li><a href="contact.html">${icon('phone',20)}Call</a></li>
      <li><a href="#" onclick="toggleMobileMenu();return false;">${icon('menu',20)}Menu</a></li>
    </ul>
  </nav>`;
}

function renderFooter(){
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-emergency">${icon('phone',16)} Medical Emergency? Call ${EMERGENCY_NUMBER} — available 24/7</div>
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo" style="color:#fff;">${icon('heart-pulse',22)} Mediversal</a>
          <p style="color:#93a2b1;font-size:0.88rem;margin-top:12px;max-width:280px;">Advanced, patient-centered healthcare with clinical excellence and a human touch — across Patna, Bihar.</p>
        </div>
        <div><h5>Hospitals</h5><ul>
          ${HOSPITALS.map(h=>`<li><a href="hospital-detail.html?slug=${h.slug}">${h.name}</a></li>`).join("")}
        </ul></div>
        <div><h5>Specialties</h5><ul>
          ${SPECIALTIES.slice(0,6).map(s=>`<li><a href="specialty-detail.html?id=${s.id}">${s.name}</a></li>`).join("")}
          <li><a href="specialties.html">View all →</a></li>
        </ul></div>
        <div><h5>Patient Care</h5><ul>
          <li><a href="patient-care.html">Before Your Visit</a></li>
          <li><a href="patient-care.html">Insurance & Cashless</a></li>
          <li><a href="blog.html">Health Articles</a></li>
          <li><a href="appointment.html">Book Appointment</a></li>
        </ul></div>
        <div><h5>Contact</h5><ul>
          <li><a href="contact.html">${CONTACT.address}</a></li>
          <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li><a href="tel:${CONTACT.phones[0]}">${CONTACT.phones[0]}</a></li>
          <li><a href="about.html">About Mediversal</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Mediversal Healthcare. All rights reserved.</span>
        <span class="footer-legal">
          <a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a><a href="#">Medical Disclaimer</a><a href="#">Accessibility</a>
        </span>
      </div>
    </div>
  </footer>`;
}

function mountChrome(active){
  document.getElementById("site-header").innerHTML = renderHeader(active);
  document.getElementById("site-footer").innerHTML = renderFooter();
}

function toggleMobileMenu(){
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("mobile-open");
  nav.style.display = nav.classList.contains("mobile-open") ? "block" : "";
  if(nav.classList.contains("mobile-open")){
    nav.style.cssText = "display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:#fff;z-index:300;padding:24px;overflow:auto;";
    nav.querySelector("ul").style.cssText = "display:flex;flex-direction:column;gap:4px;";
    if(!document.getElementById("mobile-close-btn")){
      const closeBtn = document.createElement("button");
      closeBtn.id = "mobile-close-btn";
      closeBtn.className = "icon-btn";
      closeBtn.style.cssText = "position:absolute;top:20px;right:20px;";
      closeBtn.innerHTML = icon('close',18);
      closeBtn.onclick = toggleMobileMenu;
      nav.appendChild(closeBtn);
    }
  } else {
    nav.style.cssText = "";
  }
}

function setLanguage(lang){
  document.documentElement.lang = lang;
  // In production this triggers next-intl/i18next locale routing + persists
  // preference (localStorage in a real deploy; kept in-memory here per artifact rules).
  window.__mediversalLocale = lang;
  alert(lang === "hi" ? "भाषा हिंदी में बदल दी गई है (डेमो)।" : "Language set to English.");
}

/* ---------------- Smart search (Section 3) ---------------- */
function buildSearchIndex(){
  const index = [];
  DOCTORS.forEach(d => index.push({ type:"Doctors", label:d.name, sub:d.designation, href:`doctor-profile.html?id=${d.id}` }));
  SPECIALTIES.forEach(s => index.push({ type:"Specialties", label:s.name, sub:s.short, href:`specialty-detail.html?id=${s.id}` }));
  HOSPITALS.forEach(h => index.push({ type:"Hospitals", label:h.name, sub:h.description, href:`hospital-detail.html?slug=${h.slug}` }));
  index.push({ type:"Services", label:"Emergency Care", sub:"24/7 emergency and trauma response", href:"contact.html" });
  index.push({ type:"Services", label:"Book Appointment", sub:"Schedule a visit with a specialist", href:"appointment.html" });
  return index;
}

function initSmartSearch(inputId, resultsId){
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  if(!input || !results) return;
  const idx = buildSearchIndex();
  let t;
  input.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if(q.length < 2){ results.classList.remove("active"); results.innerHTML=""; return; }
      const matches = idx.filter(i => i.label.toLowerCase().includes(q) || (i.sub||"").toLowerCase().includes(q)).slice(0,8);
      if(matches.length === 0){
        results.innerHTML = `<div class="empty-state" style="border:none;"><h4>No results for "${input.value}"</h4><p>Try a doctor name, specialty, or service.</p></div>`;
        results.classList.add("active");
        return;
      }
      const groups = {};
      matches.forEach(m => { (groups[m.type] = groups[m.type]||[]).push(m); });
      results.innerHTML = Object.entries(groups).map(([type,items]) => `
        <div class="sr-group-label">${type}</div>
        ${items.map(i => `<a class="sr-item" href="${i.href}"><strong>${i.label}</strong><span class="sr-tag">— ${i.sub||""}</span></a>`).join("")}
      `).join("");
      results.classList.add("active");
    }, 250);
  });
  document.addEventListener("click", (e) => {
    if(!results.contains(e.target) && e.target !== input) results.classList.remove("active");
  });
}
