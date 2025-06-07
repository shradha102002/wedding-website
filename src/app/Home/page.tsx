'use client';

import React from 'react';

import Work from './work';
import ValueSection2 from './work1';
import OurProcessPage from './ourprocess';
import FounderMessagePage from './founder';
import OurChoose from './ourchoose'; // ✅ Fixed capitalization
import History from './history'


export default function Home() {
  return (
    <main>
      <Work />
      <ValueSection2 />
      <OurProcessPage />
      <FounderMessagePage />
      <OurChoose /> {/* ✅ Matches import */}
      <History />
      
    </main>
  );
}
