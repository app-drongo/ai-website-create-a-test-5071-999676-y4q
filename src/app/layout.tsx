import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Collabify',
  description: 'Elevate your team\'s productivity with Collabify',
  keywords: ['saas', 'software', 'productivity', 'collaboration'],
  openGraph: {
    title: 'Collabify',
    description: 'Elevate your team\'s productivity with Collabify',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}