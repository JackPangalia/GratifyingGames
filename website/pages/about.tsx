import Footer from "../components/Footer"

const about = () =>
{
  return (
    <>
      <main className = "bg-gray-900">
        <header className = "flex justify-center">
          <h1 className = "text-red-400 text-4xl mt-20 font-bold">About Us</h1>
        </header>

        <div className = "text-center m-auto lg:w-1/3 w-full mb-20 lg:mb-0 ">
            <p className = "text-xl mr-5 ml-5 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quasi illum officiis, corrupti sunt numquam! Lorem ipsum dolor sit amet.</p>
        </div>

        <div className = "h-fit lg:h-screen">
          <section className = "flex h-full flex-col lg:flex-row items-center lg:items-center space-y-10 lg:space-y-0 lg:space-x-10 mr-6 ml-6">
            <div className = "  lg:w-1/2 w-full lg:h-1/2 bg-gray-800 border bg-cover border-red-400 rounded-xl flex justify-center items-center flex-col text-center h-fit bg-[url('https://media.istockphoto.com/id/1281085673/photo/closeup-of-abstract-colorful-fluid-background-highly-textured-high-quality-details.jpg?s=170667a&w=0&k=20&c=ns8UQ8W6iFo5AYXNXAJx8Itjfmvs3ZwoCYwMqwr4Ers=')]">
              <span className = "text-white text-3xl font-bold mt-10">The Orgin</span>
              
              <p className = "font-semibold mb-10 mt-5 w-4/5 text-white">Jack is a young boy from the streets of Boliva. He grew up with only his mom as his dad was killed by the cartel when he was a young boy. Jack got taken by the cartel and forced to make websites so they could sell their illegal drugs. But after Jack was finsished with the cartel he decided to make video games, and this is the first one he made called Ball Bonkers.</p>
            </div>

            <div className = "lg:w-1/2 w-full h-1/2 bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center bg-cover bg-[url('https://w0.peakpx.com/wallpaper/922/842/HD-wallpaper-violet-liquid-background-liquid-textures-waves-textures-wavy-backgrounds-violet-backgrounds-water-textures-abstract-waves-backgrounds.jpg')]">
              <span className = "mt-10 text-white text-3xl font-bold">Our Plans</span>

              <p className = "mt-5 w-4/5 mb-10 font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora similique adipisci illo corporis eius!</p>
            </div>
            
            <div className = " lg:w-1/2 h-1/2 w-full bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/006/110/064/original/vibrant-liquid-wavy-decorative-background-in-abstract-style-colorful-fluid-wallpaper-free-vector.jpg')] ">
              <span className = "mt-10 text-white text-3xl font-bold">What We Do</span>

              <p className = "mb-10 mt-5 w-4/5 font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora similique adipisci illo corporis eius!</p>
            </div>

          </section>
        </div>
      </main>
    </>
  )
}

export default about
