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

      <main className = "h-screen bg-gray-900 space-y-20">
        <header className = "flex justify-center items-center flex-col text-center">
          <h1 className = "mt-20 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white font-bold">Download Ball Bonkers</h1>
          <p className = "text-white font-semibold w-1/3 text-xl">Lorem . Commodi inventore igendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas ratione eos.</p>
        </header>

        <div className = "h-1/2 bg-gray-200 rounded-lg flex justify-center items-center">
          <div className = "w-1/3 h-20 text- rounded-xl bg-gray-900">
           <Link href = "#" className = "text-4xl bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent font-semibold ">Play Now</Link>

          </div>
        </div>

      </main>
    </>
  )
}

export default ballBonkersDownload