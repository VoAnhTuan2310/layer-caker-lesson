import "../globals.css";
import { Header } from '@/component/header'
import { SanityLive } from '@/sanity/lib/live';

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  );
}