"use client";

import { useCallback, useRef } from "react";

let sharedCtx: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!sharedCtx) {
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    sharedCtx = new Ctx();
  }
  return sharedCtx;
}

export function useHoverSound({
  frequency = 720,
  duration = 0.09,
  volume = 0.05,
}: { frequency?: number; duration?: number; volume?: number } = {}) {
  const lastPlayed = useRef(0);

  const play = useCallback(
    (overrideFrequency?: number) => {
      const now = performance.now();
      if (now - lastPlayed.current < 60) return;
      lastPlayed.current = now;

      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const tone = overrideFrequency ?? frequency;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(tone, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        tone * 1.6,
        ctx.currentTime + duration,
      );

      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + duration,
      );

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    },
    [frequency, duration, volume],
  );

  return play;
}
