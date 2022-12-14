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

      <main className = "bg-gray-900">

        <div className = "flex w-full h-screen">
          <div className = "w-full h-full ">
            <div className = "h-full bg-cover bg-[url('https://img.freepik.com/free-vector/colorful-abstract-liquid-effect-background_1393-321.jpg?w=2000')]">
              <header className = "flex justify-center">
                <h1 className = "text-red-400 text-5xl font-bold mt-20">Ball Racers</h1>
              </header>

              <article className = "flex justify-center mt-14">
                <p className = "text-gray-900 text-2xl font-semibold w-1/2 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, aperiam quasi? Ab delectus illum iste esse ad ipsam amet porro!</p>
              </article>
            </div>
          </div>

        

        </div>
      </main>
    </>
  )
}

export default ballBonkersDownload