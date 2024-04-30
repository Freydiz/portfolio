import { About, Experience, Footer, Header, Hero, Portfolio, Skills } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <main className="w-11/12 md:w-4/5 max-w-5xl my-0 mx-auto">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
