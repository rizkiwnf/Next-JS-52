import Layout from "@/layout";

export default function Profile() {
  return (
    <>
      <Layout metaTitle="Profile" metaDescription="Ini Profile">
        <div className="content container mx-auto w-32">
          <p className="text-center bg-purple-300 rounded-md py-3 mb-2 text-white font-semibold">Profile</p>
        </div>
      </Layout>
    </>
  )
}