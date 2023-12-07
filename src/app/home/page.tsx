import { Metadata } from 'next'
import NavPanel from "@/_includes/nav";
import About from "@/app/home/components/about";
import Experience from "@/app/home/components/experience";
import Portfolio from "@/app/home/components/portfolio";
import Contact from "@/app/home/components/contact";
import Footer from "@/_includes/footer";
import Portrait from "@/_includes/portrait";


export const metadata: Metadata = {
  title: 'Trevor DePew',
}
export default function Home() {
  return (
      <>
        <header>
          <div className={"container"}>
            <h1>Trevor DePew</h1>
            <h1>Portfolio</h1>
          </div>
        </header>
        <NavPanel></NavPanel>
        <main id={"main"} tabIndex={-1}>
          <div className={"container"}>
            <About></About>
            <Experience></Experience>
            <Portfolio></Portfolio>
            <Contact></Contact>
          </div>
        </main>
        <Portrait></Portrait>
        <Footer></Footer>
      </>
)
}