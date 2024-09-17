import { notFound } from 'next/navigation'

export default function Reviewa({params}) {
    if(params.reviewid > 1000)
    {
        notFound();
    }
  return (
    <h1>Review {params.reviewid} for the Product {params.productid}</h1>
  )
}
