import Link from 'next/link'
import { Title } from '@/components/title'

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Layer Caker Home Page</Title>
      <hr />
      <Link href="/posts" className="text-blue-600 font-bold hover:underline">
        Go to Posts index &rarr;
      </Link>
    </section>
  )
}