/**
 * timeLighting.js — LYCORIS Time-of-Day Adaptive Lighting
 *
 * Smoothly shifts atmospheric lighting, hero aura, and glow undertones
 * based on the user's local hour without degrading text readability:
 *  - Morning / Dawn (05:00 - 11:59): Cool mountain mist, silvery lavender aura
 *  - Afternoon / Sunset (12:00 - 17:59): Warm dusk, soft golden-rose ambient hues
 *  - Night / Midnight (18:00 - 04:59): Deep midnight obsidian, moonlit floral glow
 */

export const getTimePeriod = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon';
  } else {
    return 'night';
  }
};

export const applyTimeLighting = () => {
  if (typeof document === 'undefined') return;
  const period = getTimePeriod();
  const root = document.documentElement;

  if (period === 'morning') {
    // Fajar / Pagi: Cool misty mountain ambiance, pale lilac & silver frost
    root.style.setProperty('--ambient-aura', 'rgba(180, 195, 230, 0.15)');
    root.style.setProperty('--ambient-sky', 'rgba(164, 190, 235, 0.10)');
    root.style.setProperty('--ambient-hero-top', 'rgba(10, 22, 45, 0.3)');
    root.style.setProperty('--ambient-hero-mid', 'rgba(3, 8, 17, 0.92)');
    root.style.setProperty('--ambient-highlight', 'rgba(195, 215, 245, 0.2)');
    root.setAttribute('data-time-period', 'morning');
  } else if (period === 'afternoon') {
    // Siang / Senja: Warm golden hour dusk, soft amber-rose glow
    root.style.setProperty('--ambient-aura', 'rgba(237, 180, 199, 0.18)');
    root.style.setProperty('--ambient-sky', 'rgba(245, 175, 150, 0.10)');
    root.style.setProperty('--ambient-hero-top', 'rgba(28, 12, 24, 0.35)');
    root.style.setProperty('--ambient-hero-mid', 'rgba(4, 10, 22, 0.92)');
    root.style.setProperty('--ambient-highlight', 'rgba(237, 180, 199, 0.25)');
    root.setAttribute('data-time-period', 'afternoon');
  } else {
    // Malam / Dini Hari: Deep midnight obsidian, cinematic moonlit floral
    root.style.setProperty('--ambient-aura', 'rgba(164, 125, 171, 0.14)');
    root.style.setProperty('--ambient-sky', 'rgba(100, 70, 120, 0.08)');
    root.style.setProperty('--ambient-hero-top', 'rgba(3, 8, 17, 0.2)');
    root.style.setProperty('--ambient-hero-mid', 'rgba(3, 8, 17, 0.94)');
    root.style.setProperty('--ambient-highlight', 'rgba(164, 125, 171, 0.22)');
    root.setAttribute('data-time-period', 'night');
  }
};
