import Link from "next/link"

const Navbar = () =>
{
  return (
    <nav className = "flex justify-center flex-wrap bg-gray-800 p-6 shadow-blue-400 w-screen">
      <div className = "w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className = "flex items-center flex-shrink-0 mr-6">
          <h1 className = "text-white text-2xl font-bold">Gratifying Games</h1>
        </div>

        {/* MAIN Navagation */}
        <div className = "text-sm sm:flex-grow">
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white pl-2 pr-2">Home</Link>
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white pl-2 pr-2">Games</Link>
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white pl-2 pr-2">About</Link>
          <Link href = "/" className = "block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white pl-2 pr-2">Blog</Link>
        </div>  

        {/* SEARCH BAR */}
        <div className = "sm:inline-block flex-col mt-4 md:mt-0  py-3 w-full sm:w-1/3">
          <input className = "p-3 rounded-xl text-center text-teal-200 bg-gray-700 w-full " type = "text" placeholder="Search"></input>
        </div>
      </div>
    </nav>
  )
}

export default Navbar