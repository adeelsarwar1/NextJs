import Link from "next/link"

export default function Home() {
  return (
    <>
    <h1>Home Page !!</h1>
    <Link href="/blog" className="mr-4">Blog</Link>
    <Link href="/product">Product</Link>

    </>
  )
}

