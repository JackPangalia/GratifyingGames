import Link from "next/link"

const Navbar = () =>
{
  return (
    <nav className = "flex justify-center flex-wrap bg-gray-900 p-6 ">

      <div className = "w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className = "flex items-center flex-shrink-0 mr-10">
          <h1 className = "text-red-400 text-2xl font-bold">Gratifying Games</h1>
        </div>

        {/* MAIN Navagation */}
        <div className = "text-sm sm:flex-grow">

          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">Home</Link>
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">Games</Link>
          <Link href = "/about" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">About</Link>
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">Blog</Link>

        </div>  

      </div>

    </nav>
  )
}

export default Navbar