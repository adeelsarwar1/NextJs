import React from 'react'

export default function AuthLayout({children}) {
  return (
    <>
        <h2>Inner Layout</h2>
        {children}
    </>
  )
}
