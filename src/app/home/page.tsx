'use client';
import About from "@/app/home/components/about";
import Experience from "@/app/home/components/experience";
import Portfolio from "@/app/home/components/portfolio";
import Contact from "@/app/home/components/contact";
import Footer from "@/_includes/footer";
import Portrait from "@/_includes/portrait";
//TODO: eventually build admin interface with login to edit the site
//TODO: migrate JSON to gCloud and refactor to make API calls to a new Java service
//TODO: deploy new site on personal domain
export default function Home() {
  return (
      <>
        <header>
          <div className={"container"}>
            <h1>Trevor DePew</h1>
            <h1>Portfolio</h1>
          </div>
        </header>
        <main id={"main"} tabIndex={-1}>
          <div className={"container"}>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
          </div>
        </main>
        <Portrait></Portrait>
        <Footer></Footer>
      </>
)
}