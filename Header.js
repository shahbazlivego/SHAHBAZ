export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-yellow-400 text-white p-5 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">SHAHBAZ 🦅</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/chat" className="hover:underline">Chat</a>
          <a href="/video-call" className="hover:underline">Video Call</a>
          <a href="/jobs" className="hover:underline">Jobs</a>
          <a href="/wallet" className="hover:underline">Wallet</a>
          <a href="/admin" className="hover:underline">Admin</a>
        </nav>
      </div>
    </header>
  )
}