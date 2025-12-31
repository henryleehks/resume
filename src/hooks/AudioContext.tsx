"use client";

import React, { createContext, useContext, useCallback, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

const SF_URL = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'; 
const LO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3'; 

interface AudioContextType {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  playClick: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const lofiRef = useRef<Howl | null>(null);
  const clickRef = useRef<Howl | null>(null);

  useEffect(() => {
    lofiRef.current = new Howl({
      src: [LO_URL],
      loop: true,
      volume: 0.1,
      html5: true,
    });

    clickRef.current = new Howl({
      src: [SF_URL],
      volume: 0.3,
    });

    return () => {
      lofiRef.current?.unload();
      clickRef.current?.unload();
    };
  }, []);

  const toggleMusic = useCallback(() => {
    if (!lofiRef.current) return;
    if (isMusicPlaying) {
      lofiRef.current.pause();
    } else {
      lofiRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  }, [isMusicPlaying]);

  const playClick = useCallback(() => {
    if (!clickRef.current) return;
    clickRef.current.rate(0.9 + Math.random() * 0.2);
    clickRef.current.play();
  }, []);

  return (
    <AudioContext.Provider value={{ isMusicPlaying, toggleMusic, playClick }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
