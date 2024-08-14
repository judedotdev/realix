import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import AppKitProvider from '@/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Realix - Tokenizing the Future",
  description: "Tokenizing the Future, One Asset at a Time",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'));
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>
      </body>
    </html>
  );
}
