import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgressTracker from '@/components/ProgressTracker'
export default function Home() {
  return (
    <div>
      <Head>
        <title>SHAHBAZ Platform</title>
        <meta name="description" content="Social, Earning, Auto-sync, and Global User Empowerment Platform." />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
        <h1 className="text-5xl font-extrabold text-green-600 text-center mb-4">🦅 SHAHBAZ Platform</h1>
        <p className="text-center text-gray-700 max-w-3xl text-lg mb-6">
          A global platform for chat, earning, jobs, video calls, multilingual access, auto-sync public data and admin controls.
        </p>
        <ProgressTracker percent={80} />
      </main>
      <Footer />
    </div>
  )
}