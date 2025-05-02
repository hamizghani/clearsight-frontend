'use client';

import React from 'react';
import Image from 'next/image';

interface Logo1Props {
  color?: string;
}

export default function Logo1({ color = 'text-white' }: Logo1Props) {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <Image src="/clearsight-logo-1.png" alt="ClearSight Logo" width={60} height={60} />
      {/* Logo Text */}
      <h1 className={`text-3xl font-bold ${color}`}>ClearSight AI</h1>
    </div>
  );
}