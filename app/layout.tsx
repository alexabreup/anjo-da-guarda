import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Projeto Anjo da Guarda - Senai Saga - 2025',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
