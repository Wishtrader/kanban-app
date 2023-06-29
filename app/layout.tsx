import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'


const plusJakarta = Plus_Jakarta_Sans({
  weight: '700',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Kanban App',
  description: 'Kanban task management web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>{children}
      </body>
    </html>
  )
}
