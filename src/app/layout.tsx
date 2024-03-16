import React from 'react';
import type { Metadata } from 'next';
import './styles/globals.scss';

export const metadata: Metadata = {
  title: 'Brenda & José Luis',
  description: 'Save The Date',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
