import { defineQuery } from 'next-sanity'

// Lấy 12 bài viết mới nhất (đã có slug) để hiện ở trang chủ
export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

// Lấy chi tiết 1 bài viết dựa trên slug (để vào trang đọc bài)
export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)