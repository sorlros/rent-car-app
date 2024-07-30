import Header from '@/components/header'
import Content from '@/components/content'
import RentDay from '@/components/rent-day'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-50">
      <Header />
      <Content />
      <RentDay />
    </main>
  )
}
