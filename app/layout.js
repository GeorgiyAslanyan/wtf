import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'FROGE 2.0',
  description: 'When life gives you a second chance you take it!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-[#D9D9D9] flex flex-col items-center relative">
        <div className='max-w-[1250px] mx-3 flex flex-col pb-5'>
          <Navbar />
        {children}
        </div>
        
        </body>
    </html>
  )
}
