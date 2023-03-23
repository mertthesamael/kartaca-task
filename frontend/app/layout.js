"use client"
import '@/style/reset.scss'
import '@/style/global.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { UserContextWrapper } from '@/store/userContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ItemContextWrapper } from '@/store/itemContext';


const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  const client = new QueryClient()
  return (
    <html lang="en" className={inter.className}>
      <body>
        <QueryClientProvider client={client}>
        <UserContextWrapper>
          <ItemContextWrapper>

        <div area-hidden="true" className='overlay' />
        {children}
        <ToastContainer theme='dark'/>
          </ItemContextWrapper>
        </UserContextWrapper>
        </QueryClientProvider>
        </body>
    </html>
  )
}
