import Layout from "@/layout";
import { useEffect } from "react";
import Image from "next/image";

export default function Main({ children }) {

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log('response => ', res))
      .catch((err) => console.log('err => ', err))
  }, [])
  return (
    <>
      <Layout metaTitle="Home" metaDescription="Ini Home">
        <div className="content container mx-auto  flex  flex-col justify-center">
          <p className="text-center bg-purple-300 rounded-md py-3 mb-2 text-white font-semibold">Home</p>
          <div className="flex flex-col md:flex-row gap-5 justify-center mb-5">
            {/* render using tag image bawaan html */}
            <img src="/cat.jpg" style={{ width: 300, height: 300 }} alt="cat" />
            {/* render using comp bawaan next js */}
            <Image src="/cat.jpg" width={300} height={300} alt="cat" />
          </div>
        </div>
      </Layout>
    </>
  )
}