import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.scss';

import { siteConfig } from '@/constant/config';
import { StoreProvider } from '@/providers/StoreProvider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
