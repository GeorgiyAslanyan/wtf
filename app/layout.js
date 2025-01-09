import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'WTF is this market ..?!',
  description: 'WTF is up with all these AI agents..  all u need is frogs and dogs and cats.. Memes dont need AI.. WTF!',
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
