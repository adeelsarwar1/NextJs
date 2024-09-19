"use client"
import { notFound } from 'next/navigation';

function getRandomInt(count){
  return Math.floor(Math.random() * count); 
}

export default function Reviewa({params}) {
  const random = getRandomInt(2);
  
  if(random === 1) { 
    throw new Error("Failed To Load Review");
  }
  
  if(params.reviewid > 1000) {
    notFound();
  }
  
  return (
    <>
      <h1>Review {params.reviewid} for the Product {params.productid}</h1>
      <h1>{random.toString()}</h1>
    </>
  );
}
