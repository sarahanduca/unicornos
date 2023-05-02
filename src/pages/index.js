import PatchNotes from "./PatchNotes";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <header className="pt-10 h-40 text-center">
        <h1 className="text-4xl">Unicornos 🦄</h1>
        <br />
        <span>somos cavalos de troia 🐎 (cornos) e gays 🌈 (unicornos)</span>
      </header>
      <main className="flex justify-center">
        <div className="w-1/2">
          <PatchNotes />
        </div>
      </main>
      <Footer />
    </div>
  );
}
