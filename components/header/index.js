import Menu from "../menu";
import withAuth from "../with-auth";
// import styles from './styles.module.css'
import Link from "next/link";

function Header() {
  return (
    <div className="container mx-auto py-10">
      <ul className="flex flex-col md:flex-row justify-center gap-8 ">
        <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
          <Link href="/">Home</Link>
        </li >
        <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
          <Link href="/users">Users</Link>
        </li>
        <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
          <Link href="/users/detail">User Detail</Link>
        </li>
      </ul>
    </div>
  )
}

export default withAuth(Header);