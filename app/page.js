import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the welcome page</h1>
      <Link href="/login">Log in here!</Link>
    </main>
  )
}
