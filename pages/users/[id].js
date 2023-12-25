import Layout from "@/layout";
import { useRouter } from "next/router";


export default function UsersByName() {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <>
      <Layout>
        <div className="content container mx-auto w-44">
          <p className="text-center bg-purple-300 rounded-md py-3 mb-2 text-white font-semibold">Name User is {id}</p>
        </div>
      </Layout>
    </>
  )
}