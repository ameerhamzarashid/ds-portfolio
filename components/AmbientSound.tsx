"use client";

import { useRef, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainRef = useRef<GainNode | null>(null);

  const startSound = () => {
    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextClass) return;

    const audioContext = new AudioContextClass();
    const gain = audioContext.createGain();

    gain.gain.value = 0.025;
    gain.connect(audioContext.destination);

    const frequencies = [174, 261.63, 329.63];

    const oscillators = frequencies.map((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const localGain = audioContext.createGain();

      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      localGain.gain.value = index === 0 ? 0.8 : 0.35;

      oscillator.connect(localGain);
      localGain.connect(gain);
      oscillator.start();

      return oscillator;
    });

    audioContextRef.current = audioContext;
    oscillatorsRef.current = oscillators;
    gainRef.current = gain;
    setIsPlaying(true);
  };

  const stopSound = () => {
    oscillatorsRef.current.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        // oscillator already stopped
      }
    });

    audioContextRef.current?.close();

    oscillatorsRef.current = [];
    audioContextRef.current = null;
    gainRef.current = null;
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-cyan-300/30 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-xl transition hover:border-cyan-300 hover:text-cyan-200"
    >
      {isPlaying ? <HiSpeakerWave /> : <HiSpeakerXMark />}

      <span>{isPlaying ? "Sound On" : "Sound Off"}</span>

      <span className="flex h-7 items-center gap-1">
        {[1, 2, 3, 4, 5].map((bar) => (
          <span
            key={bar}
            className={`audio-bar block w-1 rounded-full bg-cyan-300 ${
              isPlaying ? "" : "opacity-30"
            }`}
          />
        ))}
      </span>
    </button>
  );
}