import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Licert Portal',
  description: 'portal for students and teachers and parents',
  icons: {
    icon: "/logo.jpg", 
  },
  
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
