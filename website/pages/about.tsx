const about = () =>
{
  return (
    <>
      <main className = "bg-gray-900">
        <header className = "flex justify-center">
          <h1 className = "text-white text-3xl font-bold">About</h1>
        </header>

        <section className = "flex justify-row h-screen items-center space-x-6">
          <div className = "w-1/2 h-1/2 bg-gray-600 border border-red-400 rounded-xl ml-5 text-center">
            <span className = "text-white text-2xl font-bold">The Orgin</span>

            <p></p>
          </div>
          <div className = "w-1/2 h-1/2 bg-gray-600 border border-red-400 rounded-xl"></div>
          <div className = "w-1/2 h-1/2 bg-gray-600 border border-red-400 rounded-xl mr-5"></div>
        </section>
      </main>
    </>
  )
}

export default about
