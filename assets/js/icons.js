/* Minimal outline icon set, Lucide-inspired paths. One consistent
   library across the app per the design system spec. */
const ICONS = {
  "heart-pulse": '<path d="M19 14c1.5-1.5 3-3.5 3-6a4.5 4.5 0 0 0-8-2.8A4.5 4.5 0 0 0 6 8c0 2.5 1.5 4.5 3 6l5.2 5.5L19 14z"/><path d="M3.5 11h3l2-4 3 8 2-5h4"/>',
  "bone": '<path d="M17 10c1-1 2.5-1 3.4-.1a2.4 2.4 0 0 1 0 3.4c-1 .9-1 2.5 0 3.4a2.4 2.4 0 0 1-3.4 3.4c-.9-1-2.5-1-3.4 0L8 14.9c-.9.9-2.4.9-3.4 0a2.4 2.4 0 0 1 0-3.4c1-.9 1-2.5 0-3.4a2.4 2.4 0 0 1 3.4-3.4c.9 1 2.5 1 3.4 0L17 10z"/>',
  "brain": '<path d="M9.5 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3.5 3.5 0 0 0 1 6.5A3 3 0 0 0 9 21a3 3 0 0 0 3-3V7a3 3 0 0 0-2.5-3z"/><path d="M14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3.5 3.5 0 0 1-1 6.5A3 3 0 0 1 15 21a3 3 0 0 1-3-3V7a3 3 0 0 1 2.5-3z"/>',
  "stethoscope": '<path d="M5 3v6a4 4 0 0 0 8 0V3"/><circle cx="18" cy="16" r="3"/><path d="M13 9a5 5 0 0 0 5 5"/>',
  "droplet": '<path d="M12 2s6 7 6 11.5A6 6 0 0 1 6 13.5C6 9 12 2 12 2z"/>',
  "droplets": '<path d="M9 4s4 5 4 8a4 4 0 1 1-8 0c0-3 4-8 4-8z"/><path d="M16.5 11s2.5 3 2.5 5a2.5 2.5 0 1 1-5 0c0-2 2.5-5 2.5-5z"/>',
  "clipboard-pulse": '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M8 13h2l2 4 2-7 1.5 3H16"/>',
  "activity": '<path d="M22 12h-4l-3 8-4-16-3 8H2"/>',
  "wind": '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 16h14a3 3 0 1 1-3 3"/>',
  "siren": '<path d="M12 3a6 6 0 0 1 6 6v6H6v-6a6 6 0 0 1 6-6z"/><path d="M4 21v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/><path d="M12 3V1"/>',
  "scissors": '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M20 4 8.5 14"/><path d="M20 20 8.5 10"/>',
  "smile": '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
  "flask": '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/>',
  "scan": '<path d="M4 8V5a1 1 0 0 1 1-1h3"/><path d="M20 8V5a1 1 0 0 0-1-1h-3"/><path d="M4 16v3a1 1 0 0 0 1 1h3"/><path d="M20 16v3a1 1 0 0 1-1 1h-3"/>',
  "microscope": '<path d="M6 21h12"/><path d="M9 21v-4a3 3 0 0 1 3-3"/><path d="M13 7 8.5 11.5"/><circle cx="6.5" cy="13.5" r="2.5"/><path d="M13 3l4 4-2 2-4-4z"/>',
  "test-tube": '<path d="M9 3h6"/><path d="M10 3v13a2 2 0 1 0 4 0V3"/>',
  "sparkles": '<path d="M12 3v4M12 17v4M4 12H2M22 12h-2M6 6l1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18"/>',
  "brain-circuit": '<path d="M9 4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3"/><path d="M15 4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="9" r="1"/>',
  "syringe": '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 5 8.5 15.5 4 20l4.5-4.5L19 5z"/>',
  "hospital": '<path d="M12 3 4 7v13h16V7z"/><path d="M9 21v-6h6v6"/><path d="M12 8v4M10 10h4"/>',
  "baby": '<circle cx="12" cy="8" r="4"/><path d="M8 21c0-3 2-5 4-5s4 2 4 5"/>',
  "home": '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/>',
  "calendar": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  "phone": '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  "search": '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  "menu": '<path d="M3 6h18M3 12h18M3 18h18"/>',
  "close": '<path d="M18 6 6 18M6 6l12 12"/>',
  "map-pin": '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  "shield": '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "globe": '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "user": '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'
};
function icon(name, size=22){
  const body = ICONS[name] || ICONS["activity"];
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}
