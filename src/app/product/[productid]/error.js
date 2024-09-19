"use client"

export default function ErrorBoundary({error,reset}) {
  return (
    <>
        <h1 className="font-bold text-xl text-red-600"> {error.message}</h1>
        <button onClick={reset}>Try again</button>
    </>
  )
}
