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
        <div className = "mt-20 rounded-xl  flex bg-cover justify-center text-center items-center w-3/4 h-3/4 flex-col bg-[url('https://images.hdqwalls.com/wallpapers/planet-space-art-ka.jpg')]">
          <span className = "text-4xl text-white font-bold ">Dive into Ball Racers</span>

          <Link href = "#" className = " font-bold pr-12 pl-12 pt-4 pb-4 bg-red-400 rounded-3xl mt-10 hover:  text-white">Play Now</Link>
        </div>
      </section>

      <section className = "h-screen bg-slate-200 flex justify-center items-center">
        <div className = "rounded-xl flex bg-cover justify-center items-center text-center w-3/4 h-3/4 flex-col bg-[url('https://i.pinimg.com/originals/d3/cf/a6/d3cfa6dea2ac714d8c5d7b865459f7d3.jpg')]">
          <span className = "text-4xl text-white font-bold">Dive into Ball Bonkers</span>

          <Link href = "#" className = " font-bold pr-12 pl-12 pt-4 pb-4 bg-white rounded-3xl mt-10 hover:  text-black">Play Now</Link>
        </div>
      </section>
    </>
  )
}
