import PatchNotes from "./PatchNotes";
import Footer from "./Footer";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Unicornos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-2 pt-10 h-40 text-center">
        <h1 className="text-3xl sm:text-4xl">Unicornos 🦄</h1>
        <br />
        <span className="">
          somos cavalos de troia 🐎 (cornos) e gays 🌈 (unicornos)
        </span>
      </header>
      <main className="flex justify-center">
        <div className="w-2/3 md:w-1/2">
          <PatchNotes />
        </div>
      </main>
      <Footer />
    </div>
  );
}
