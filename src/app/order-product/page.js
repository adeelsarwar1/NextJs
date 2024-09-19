"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your Order");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick} className="m-4 px-8 rounded-md border bg-blue-600 text-white border-black">Order</button>
    </>
  );
}
