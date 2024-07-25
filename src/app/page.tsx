import Image from 'next/image'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-20 bg-white">
      <Header />
    </main>
  )
}
