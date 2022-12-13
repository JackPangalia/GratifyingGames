const about = () =>
{
  return (
    <>
      <main className = "bg-gray-900">
        <header className = "flex justify-center">
          <h1 className = "text-white text-4xl mt-4 font-bold">About</h1>
        </header>

        <section className = "flex h-screen mt-20 flex-col items-center">
          <div className = "ml-10  w-1/2 h-1/2 bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center">
            <span className = "text-red-400 text-2xl font-bold">The Orgin</span>

            <p className = "mt-5 w-4/5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora similique adipisci illo corporis eius!</p>
          </div>

          <div className = "mr-10 ml-10 w-1/2 h-1/2 bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center">
            <span className = "text-red-400 text-2xl font-bold">Our Plans</span>

            <p className = "mt-5 w-4/5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora similique adipisci illo corporis eius!</p>
          </div>

          <div className = "mr-10 w-1/2 h-1/2 bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center ">
            <span className = "text-red-400 text-2xl font-bold">What We Do</span>

            <p className = "mt-5 w-4/5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora similique adipisci illo corporis eius!</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default about
