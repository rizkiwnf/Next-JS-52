import Layout from "@/layout";
import { useEffect } from "react";

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
        <div className="content container mx-auto w-32">
          <p className="text-center bg-purple-300 rounded-md py-3 mb-2 text-white font-semibold">Home</p>
        </div>
      </Layout>
    </>
  )
}