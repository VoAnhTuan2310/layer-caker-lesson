import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity"; // Import PortableText
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { components } from "@/sanity/portableTextcomponents";
import { Post } from '@/components/post'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {/* Ảnh bìa (Main Image) */}
      {post?.mainImage ? (
        <Image
          className="w-full aspect-[800/300] object-cover rounded-lg"
          src={urlFor(post.mainImage)
            .width(800)
            .height(300)
            .quality(80)
            .auto("format")
            .url()}
          alt={post?.mainImage?.alt || ""}
          width={800}
          height={300}
        />
      ) : null}

      {/* Tiêu đề bài viết */}
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>

      {/* Nội dung bài viết (Rich Text) */}
      {post?.body ? (
        <div className="prose lg:prose-xl"> {/* Class 'prose' kích hoạt Tailwind Typography */}
          <PortableText value={post.body} components={components} />
        </div>
      ) : null}

      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}