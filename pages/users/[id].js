import dynamic from "next/dynamic";
const LayoutComponent = dynamic(() => import("@/layout"));
import { useRouter } from "next/router";


export default function UsersByName() {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <>
      <LayoutComponent>
        <div className="content container mx-auto w-44">
          <p className="text-center bg-purple-300 rounded-md py-3 mb-2 text-white font-semibold">Name User is {id}</p>
        </div>
      </LayoutComponent>
    </>
  )
}