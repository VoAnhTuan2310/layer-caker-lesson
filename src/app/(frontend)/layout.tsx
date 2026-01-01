git remote add origin https://github.com/VoAnhTuan2310/layer-caker-lesson.git
git branch -M main
git push -u origin mainimport { SanityLive } from '@/sanity/lib/live'

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  )
}