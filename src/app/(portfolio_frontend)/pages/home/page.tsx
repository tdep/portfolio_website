'use client';
import About from "@/app/(portfolio_frontend)/pages/home/components/about";
import Experience from "@/app/(portfolio_frontend)/pages/home/components/experience";
import Portfolio from "@/app/(portfolio_frontend)/pages/home/components/portfolio";
import Contact from "@/app/(portfolio_frontend)/pages/home/components/contact";
import Footer from "@/app/(portfolio_frontend)/_components/footer";
import Portrait from "@/app/(portfolio_frontend)/_components/portrait";
//TODO: eventually build admin interface with login to edit the site
//TODO: migrate JSON to gCloud and refactor to make API calls to a new Java service
//TODO: deploy new site on personal domain
//TODO: internationalization - look into how its done
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