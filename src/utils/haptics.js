/**
 * haptics.js — Lycoris Haptic Feedback Utility
 *
 * Wraps the Web Vibration API with safe fallbacks.
 * Works on Android Chrome / PWA. No-op on iOS and desktop.
 *
 * Usage:
 *   import { triggerHaptic } from '../utils/haptics';
 *   triggerHaptic(18);       // single pulse, 18ms
 *   triggerHaptic([15, 60, 15]); // double-tap pattern
 */

/**
 * @param {number | number[]} pattern  Duration in ms, or vibration pattern array.
 */
export const triggerHaptic = (pattern = 15) => {
  if (typeof window === 'undefined') return;
  if (!('vibrate' in navigator)) return;
  try {
    navigator.vibrate(pattern);
  } catch {
    // Silently ignore: some browsers throw on certain patterns
  }
};
