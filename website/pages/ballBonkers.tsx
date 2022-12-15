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

      <main className = "bg bg-gray-900">

        <section className = "flex items-center flex-col">
          <div className = "border text-center p-5 rounded-xl w-2/3">
            <span className = "text-3xl font-bold text-red-400">About Ball Bonkers</span>
            <p className = " text-white text-l text-center mt-5 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus facilis nobis vel aperiam aliquam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nihil enim itaque..</p>
          </div>
        </section>

        <section className = "flex items-center flex-col">
          <div className = "border text-center p-5 rounded-xl w-2/3">
            <span className = "text-3xl font-bold text-red-400">About Ball Bonkers</span>
            <p className = " text-white text-l text-center mt-5 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus facilis nobis vel aperiam aliquam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nihil enim itaque..</p>
          </div>
        </section>


      </main>


    </>
  )
}

export default ballBonkersDownload