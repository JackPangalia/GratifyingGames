import Navbar from "../components/Navbar"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

      </Head>

      <section className = "h-screen bg-gray-900 flex justify-center  ">
        <div className = "mt-20 rounded-xl  flex bg-cover justify-center text-center items-center w-5/6 h-3/4 flex-col bg-[url('https://images.hdqwalls.com/wallpapers/planet-space-art-ka.jpg')]">
          <span className = "text-4xl text-white font-bold ">Race into Ball Racers</span>
          <p className = "text-white text-l w-1/2 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aperiam rem quibusdam, eos ratione dicta!</p>
          
          <div className = "mt-10 space-x-5">
            <Link href = "#" className = " font-bold pr-12 pl-12 pt-4 pb-4 hover:bg-white hover:text-red-400 bg-red-400 rounded-3xl  hover: text-white ">Learn more</Link>
            <Link href = "#" className = " font-bold pr-12 pl-12 pt-4 pb-4 hover:bg-white hover:text-red-400 bg-red-400 rounded-3xl  hover: text-white">Download Now</Link>
          </div>
        </div>
      </section>

      <section className = "h-screen bg-white flex justify-center items-center">
        <div className = "rounded-xl flex bg-cover justify-center items-center text-center w-5/6 h-3/4 flex-col bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/3792.jpg')]">
          <span className = "text-4xl text-white outline-8  font-bold">Roll into Ball Bonkers</span>
          <p className = "text-white text-l w-1/2 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse tenetur sapiente amet quos dolorem?</p>

          <div className = "mt-10 space-x-5">
            <Link href = "/ballBonkers" className = " font-bold pr-12 pl-12 pt-4 pb-4 bg-emerald-300 rounded-3xl mt-10 text-white hover:bg-white hover:text-emerald-300">Learn more</Link>
            <Link href = "/ballBonkers" className = " font-bold pr-12 pl-12 pt-4 pb-4 bg-emerald-300 rounded-3xl mt-10 text-white hover:bg-white hover:text-emerald-300">Download Now</Link>
          </div>
        </div>
      </section>
    </>
  )
}
