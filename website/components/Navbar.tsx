import Link from "next/link"

const Navbar = () =>
{
  return (
    <nav className = "flex justify-center flex-wrap bg-gray-900 p-6 ">

      <div className = "w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className = "flex items-center flex-shrink-0 mr-10">
          <h1 className = "bg-gradient-to-r bg-clip-text text-transparent from-red-400 to-white text-2xl font-bold">Gratifying Games</h1>
        </div>

        {/* MAIN Navagation */}
        <div className = "text-sm sm:flex-grow">

          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">Home</Link>
          <Link href = "/ballBonkers" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">Games</Link>
          <Link href = "/about" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">About</Link>
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-red-400 pl-2 pr-2">Blog</Link>

        </div>  

      </div>

      <div className = "mr-auto sm:ml-auto sm:mt-0 mt-5 ">
        <a href = "#" className = "flex text-white bg-gradient-to-r from-red-300 to-red-400 p-4 rounded-2xl">
          Login
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </a>
      </div>

    </nav>
  )
}

export default Navbar