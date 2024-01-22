import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './stageos.css'
import React from "react";
import NavPanel from "@/portfolio_frontend/_components/nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trevor DePew',
  description: 'Software Engineering Portfolio for Trevor DePew',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavPanel/>
      {children}
      </body>
    </html>
  )
}
