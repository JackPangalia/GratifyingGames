import Link from "next/link";
import Head from "next/head";

const ballBonkersDownload = () => {
  return (
    <>
      {/* HEAD CODE */}
      <Head>
        <title>Ball Bonkers Download</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <main className = "bg-white h-screen">
        <section className = "w-full lg:h-2/3 h-full bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/3792.jpg')] bg-cover font-bold flex items-center justify-center ">
          <div className = "flex flex-col text-center items-center lg:absolute lg:left-40 mr-5 ml-5">
            <p className = "text-white font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, saepe. Fugiat, qui ab.</p>
            <div className = "bg-gray-900 pr-10 pl-10 pt-5 pb-5 mt-8 rounded-xl">
            <Link href = "#" className = " text-white font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white rounded-2xl">Download</Link>

            </div>
          </div>

  
        </section>

        <section className = "w-full lg:h-1/2 h-full flex flex-col lg:flex-row bg-gray-900">
          <div className = "sm:mt-0 mt-10 h-full lg:w-1/2 text-center flex flex-col justify-center p-10">
            <span className = "text-2xl font-semibold text-red-400 overline">The Game</span>
            <p className = "text-l text-gray-400 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam voluptas aspernatur eveniet. Nostrum animi soluta ex aliquid, nemo delectus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste sapiente excepturi..</p>
          </div>

          <div className = "h-full lg:w-1/2 text-center flex flex-col justify-center p-10">
            <span className = "text-2xl font-semibold text-red-400 overline">Features</span>
            <p className = "text-l text-gray-400 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam voluptas aspernatur eveniet. Nostrum animi soluta ex aliquid, nemo delectus.</p>
          </div>

          <div className = "h-full lg:w-1/2 text-center flex flex-col justify-center p-10">
            <span className = "text-2xl font-semibold text-red-400 overline ">Content</span>
            <p className = "text-l text-gray-400 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam voluptas aspernatur eveniet. Nostrum animi soluta ex aliquid, nemo delectus.</p>
          </div>
  
        </section>
      </main>
    </>
  )
}

export default ballBonkersDownload