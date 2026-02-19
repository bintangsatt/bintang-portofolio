import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Bintang Satrio Aji — Full-Stack Developer & Microservice Enthusiast',
  description:
    'Fresh Graduate Informatics Engineering student building scalable web systems with microservice architecture, Laravel, Express.js, and React.',
  keywords: [
    'Bintang Satrio Aji', 'Full-Stack Developer', 'Microservice',
    'Laravel', 'Next.js', 'React', 'Backend Developer', 'Software Engineer', 'Indonesia',
  ],
  authors: [{ name: 'Bintang Satrio Aji' }],
  creator: 'Bintang Satrio Aji',
  openGraph: {
    type: 'website',
    title: 'Bintang Satrio Aji — Full-Stack Developer',
    description: 'I build scalable web systems using microservice architecture and modern web technologies.',
    siteName: 'Bintang Satrio Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bintang Satrio Aji — Full-Stack Developer',
    description: 'I build scalable web systems using microservice architecture and modern web technologies.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // class "dark" diset secara default; ThemeProvider akan toggle via JS
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080C14" />
        {/* Prevent flash of wrong theme — baca localStorage sebelum render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="noise">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
