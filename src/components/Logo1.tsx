'use client';

import React from 'react';
import Image from 'next/image';

export default function Logo1() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <Image src="/clearsight-logo-1.png" alt="ClearSight Logo" width={60} height={60} />
      {/* Logo Text */}
      <h1 className="text-3xl font-bold text-white">ClearSight AI</h1>
    </div>
  );
}