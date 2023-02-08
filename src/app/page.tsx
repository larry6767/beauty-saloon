import { Header } from '@/layouts/Header'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={''}>
      <main>
        <Header />
      </main>
    </Suspense>
  )
}
