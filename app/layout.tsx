import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreelanceTrack — Track Billable Time with Auto Project Detection',
  description: 'Automatically track billable hours, categorize work by project using AI, and generate professional invoices. Built for freelance developers and consultants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fac04134-ba25-4d58-b8b5-b4e4523c1877"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
