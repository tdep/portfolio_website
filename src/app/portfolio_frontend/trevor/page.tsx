import NavPanel from "@/portfolio_frontend/_components/nav";
import Footer from "@/portfolio_frontend/_components/footer";
import Image from "next/image";
import duck from '@/portfolio_frontend/_resources/duck.jpg'

export default function Duck() {
  return (
      <>
        <header>
          <div className={"container"}>
            <h1>Trevor DePew</h1>
            <h1>Duck</h1>
          </div>
        </header>
        <NavPanel></NavPanel>
        <main id={"main"} tabIndex={-1}>
          <div className={"container"}>
            <h1>Here be a duck.🐤</h1>
            <Image
                src={duck}
                width={500}
                height={500}
                alt={"Image of a rubber duck in front of WTC 1"}
            />
          </div>
        </main>
        <Footer></Footer>
      </>
  )
}