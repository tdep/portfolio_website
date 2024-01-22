'use client';
import About from "@/portfolio_frontend/home/components/about";
import Experience from "@/portfolio_frontend/home/components/experience";
import Portfolio from "@/portfolio_frontend/home/components/portfolio";
import Contact from "@/portfolio_frontend/home/components/contact";
import Footer from "@/portfolio_frontend/_components/footer";
import Portrait from "@/portfolio_frontend/_components/portrait";
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