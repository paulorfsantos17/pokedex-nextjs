import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext } from 'react'
import MainTheme from '@/components/MainTheme'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="pt-br">
        <body className={`${openSans.className} min-h-screen`}>
          <MainTheme children={children}></MainTheme>
        </body>
      </html>
    </ThemeProvider>
  )
}
