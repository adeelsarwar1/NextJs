import React from 'react'

export default function Docs({params}) {
    if (params.slug.length === 2)
    {
  return (
    <h1>viewing docs features of {params.slug[0]} with the Concept of {params.slug[1]}</h1>
  )
}
else if (params.slug.length === 1)
    {
  return (
    <h1>viewing docs features of {params.slug[0]}</h1>
  )
}
return <h1>Docs home Page</h1>
}
