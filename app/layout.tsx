import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })
 const toggleUppercase = () => {
    setIsUppercase(!isUppercase)
  }

export const metadata = {
  title: 'INNERCIRCLE.STORE',
  description: 'Browse and download files from INNERCIRCLE.STORE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider></body>
    </html>
  )
}