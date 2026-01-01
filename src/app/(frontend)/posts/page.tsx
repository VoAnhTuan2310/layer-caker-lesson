import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/component/postCard'

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Post index</h1>


      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>

      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  )
}