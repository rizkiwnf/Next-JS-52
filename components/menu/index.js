export default function Menu() {
  return (
    <div className="container mx-auto py-10">
      <div className="content">
        <ul className="flex flex-col md:flex-row justify-center gap-8 ">
          <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
            <a href="/">Home</a>
          </li >
          <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
            <a href="/profile">Profile</a>
          </li>
          <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
            <a href="/users">Users</a>
          </li>
          <li className="py-2 px-4 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600">
            <a href="/users/detail">User Detail</a>
          </li>
        </ul>
      </div>

    </div>
  )
}