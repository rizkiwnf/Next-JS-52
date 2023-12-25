import Layout from "@/layout";

export default function Main({ children }) {
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