
function getRandomInt(count){
  return Math.floor(Math.random() * count); 
}


export default function ProductDetails({params}) {
  const random = getRandomInt(2);
  
  if(random === 1) { 
    throw new Error("Failed To Load Product");
  }
  return (
    <> <h1>ProductDetails {params.productid} </h1>
    </>
  )
}

export const generateMetadata= async({params})=>{
  const title = await new Promise(resolve=>{
    setTimeout(
      ()=>{
        resolve(`IPhone ${params.productid}`)
      },1000
    )
  });
  return{
    title: `Product ${title}`
  }
}
