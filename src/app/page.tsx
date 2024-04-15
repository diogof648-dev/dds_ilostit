import content from "@/content/landing.content.json"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

const Home = () => {  
  return (
    <>
      <div className="home bg-[url('/home.png')] bg-cover bg-center">
        <div className="content h-[500px] max-sm:h-[300px]">
          <div className="darker w-full h-full bg-[rgb(0,0,0,0.2)] flex items-center justify-center">
            <pre className="text text-center text-white text-5xl text-shadow-lg max-sm:text-2xl">
                {content.home.text}
            </pre>
          </div>
        </div>
      </div>
      <div className="about w-11/12 lg:w-3/4 mx-auto" id="a-propos">
        <div className="content space-y-10 divide-y py-10">
          {
            content.about.map((content,key) => (
              <div className="info flex flex-col items-center md:flex-row" key={"about-" + key}>
                <div className="image">
                  <Image
                    src={content.image}
                    width={500}
                    height={500}
                    alt={"about-" + key}
                    className="lg:w-full md:w-4/5 w-1/2 mx-auto mb-10"
                  />
                </div>
                <div className="texts text-justify md:w-4/5 lg:ml-20">
                  <div className="title text-3xl mb-10 max-sm:text-xl max-sm:text-center">{content.title}</div>
                  <div className="description max-sm:text-sm max-sm:text-justify">{content.description}</div>
                </div>
                
              </div>
            ))
          }
        </div>
      </div>
      <div className="tutorial my-10" id="fonctionnement">
        <div className="content">
          <div className="title mb-5 md:mb-10 text-center text-xl md:text-3xl">Ok ok mais...<br/>Comment on fait ?</div>
          <Carousel className="w-3/4 mx-auto" opts={{loop: true}}>
            <CarouselPrevious />
            <CarouselContent>
              {
                content.tutorial.map((content,key) => (
                  <CarouselItem className="lg:basis-1/2 flex items-center" key={"tutorial-" + key}>
                    <div className="content mx-auto w-11/12 md:w-4/5 border rounded-2xl flex flex-col items-center p-10">
                      <div className="image">
                        <Image
                          src={content.image}
                          width={300}
                          height={300}
                          alt={"tutorial-" + key}
                          className="max-sm:w-1/2 mx-auto"
                        />
                      </div>
                      <div className="title max-sm:text-lg my-5">{content.title}</div>
                      <div className="description max-sm:text-sm text-justify">{content.description}</div>
                    </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="contact my-10" id="nous-contacter">
        <div className="content text-center">
          <div className="title mb-4 text-lg md:text-3xl">Une question ? Un problème ?</div>
          <div className="description w-10/12 md:w-1/2 mx-auto mb-10 md:mb-16 text-sm md:text-base">Si vous avez une question concernant cet outil ou alors vous avez rencontré un problème, n’hésitez pas à nous contacter, nous nous ferons un plaisir de vous aider !</div>
          <div className="information flex flex-col lg:flex-row items-center justify-center max-lg:space-y-8 lg:space-x-14">
            <div className="form w-9/12 lg:w-4/12">
              <form action="#" className="space-y-6">
                <input type="text" name="name" id="name" className="w-full border outline-primary-400 p-2" placeholder="Votre nom"/>
                <input type="email" name="email" id="email" className="w-full border outline-primary-400 p-2" placeholder="Votre email"/>
                <input type="text" name="object" id="object" className="w-full border outline-primary-400 p-2" placeholder="Objet du message"/>
                <textarea name="message" id="message" className="w-full resize-y border outline-primary-400 p-2" placeholder="Votre message"></textarea>
                <input type="submit" value="Envoyer" className="px-2 py-4 w-full bg-primary-400 cursor-pointer text-white hover:bg-primary-600 hover:duration-200"/>
              </form>
            </div>
            <div className="separation h-px w-9/12 lg:h-48 lg:w-px bg-black flex items-center justify-center">
              <p className="bg-white p-1 lg:p-2">OU</p>
            </div>
            <div className="other w-9/12 lg:w-4/12 flex items-center flex-col text-sm md:text-base">
              <Image
                src="/cpnv.png"
                width={200}
                height={100}
                alt="CPNV"
                className="mb-4 max-sm:w-1/2 max-sm:h-1/2"
              />
              Contactez le support via cet email :<br/>
              <a href="mailto://helpdesk.cpnv@eduvaud.ch" className="text-primary-400 underline hover:text-primary-600 hover:duration-200">helpdesk.cpnv@eduvaud.ch</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="content w-full p-2 bg-slate-700 flex items-center justify-between max-sm:justify-center">
          <a href="https://www.cpnv.ch" className="max-sm:hidden">
            <Image
              src="/cpnv.png"
              width={75}
              height={32.5}
              alt="CPNV"
              className="bg-white p-2"
            />
          </a>
          <div className="copyright text-white max-sm:text-sm">© 2024 - CPNV - Tous droits réservés.</div>
          <div className="top px-1 py-2 bg-white rounded-full max-sm:hidden">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home