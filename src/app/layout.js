import Link from "next/link"
import "./globals.css"
export const metadata = {
  title: {
    absolute:"",
    default:"Learning Next.js",
    template:"%s | Adeel",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>
      <header style={{backgroundColor: "lightblue", padding:"1rem"}}>
        <Link href="/" className="font-bold text-4xl">Home</Link>
      </header>
      {children}
      <footer style={{backgroundColor: "lightblue", padding:"1rem"}}>
        <p>Footer</p>
      </footer>
      </body>
    </html>
  )
}
