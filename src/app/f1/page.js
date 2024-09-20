import Link from 'next/link'
import React from 'react'

export default function F1() {
  return (
    <>
    <h1 className='text-xl font-bold my-4'>F1 Page</h1>
    <div className='mt-4 border border-red-600 rounded-md hover:bg-red-500 hover:text-white hover:text-lg'>
    <Link href="/f1/f2">Go to F2</Link>
    </div>
    </>
  )
}
