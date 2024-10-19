import Header from "./components/header";
import Link from "next/link";
import Footer from "./components/footer";
import Image from "next/image";


export default function home() {
  return (
    <div className="text-white bg-black">
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10 pt-10  container mx-auto">
        <div className="bg-black text-[40px] md:text-[48px] font-bold mt-20  fade-in-text ">
          <span>Hi,</span> <span>I</span> <span>am</span>{" "}
          <span className="text-blue-500 ">Ali Raza</span> <br />{" "}
          <span>The </span>{" "}
          <span className="text-blue-500"> Front End </span>{" "}
          <span>Developer</span>
        </div>
        <div><Image className="rounded-[50%] mx-auto" src={"/images/hero-img.png"} alt="coding image" width={500} height={500}/></div>
      </section>

      <section className="container bg-neutral-950 shadow-2xl shadow-blue-500 rounded-md mt-20 py-36 md:py-44  xl:py-24 mx-auto">
  <h1 className="text-[64px] font-bold text-blue-500 text-center mb-16">Blogs</h1>
      <div className="scene  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-4 md:px-4 xl:px-8 gap-y-32 md:gap-y-44 xl:gap-y-24  gap-x-3">
       
        <div className="card text-white w-[100%] md:[80%] xl:w-[100%] mx-auto">
          <div className="card__face w-full card__face--front">
            <Image className="h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] w-[100%] rounded-sm" src={"/images/js-vs-ts.jpeg"} alt="asd" width={300} height={300}/>
          </div>
          <div className="text-left p-5 bg-black shadow-md  shadow-white rounded-sm card__face w-full h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] card__face--back">
            <h2>Blog Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              autem suscipit laboriosam nesciunt reprehenderit voluptatum
              laudantium fugiat deleniti aliquam amet deserunt quisquam odit
              facilis earum, iure, non minus? Vero, exercitationem?
            </p><Link href={"./js-vs-ts"}>
            <button className="bg-blue-500 w-full md:w-40 h-12 mt-2 rounded-full border-2 border-transparent hover:text-blue-400 font-semibold  hover:bg-black hover:border-white duration-500">Read More</button>
            </Link></div>
        </div>
        <div className="card text-white w-[100%] md:[80%] xl:w-[100%] mx-auto">
          <div className="card__face  w-full  card__face--front">
            <Image className="h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] w-[100%] rounded-sm" src={"/images/build-app-with-nextjs.jpg"} alt="asd"width={300} height={300} />
          </div>
          <div className="text-left p-5 bg-black shadow-md  shadow-white rounded-sm card__face w-full h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] card__face--back">
            <h2>Blog Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              autem suscipit laboriosam nesciunt reprehenderit voluptatum
              laudantium fugiat deleniti aliquam amet deserunt quisquam odit
              facilis earum, iure, non minus? Vero, exercitationem?
            </p><Link href={"./web-app-with-nextjs-and-react"}>
            <button className="bg-blue-500 w-full md:w-40 h-12 mt-2 rounded-full border-2 border-transparent hover:text-blue-400 font-semibold  hover:bg-black hover:border-white duration-500">Read More</button>
            </Link></div>
        </div>
        <div className="card text-white w-[100%] md:[80%] xl:w-[100%] mx-auto">
          <div className="card__face  w-full  card__face--front">
            <Image className="h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] w-[100%] rounded-sm" src={"/images/react-and-ts.jpeg"} alt="asd" width={300} height={300} />
          </div>
          <div className="text-left p-5 bg-black shadow-md  shadow-white rounded-sm card__face w-full h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] card__face--back">
            <h2>Blog Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              autem suscipit laboriosam nesciunt reprehenderit voluptatum
              laudantium fugiat deleniti aliquam amet deserunt quisquam odit
              facilis earum, iure, non minus? Vero, exercitationem?
            </p><Link href={"./react-and-ts"}>
            <button className="bg-blue-500 w-full md:w-40 h-12 mt-2 rounded-full border-2 border-transparent hover:text-blue-400 font-semibold  hover:bg-black hover:border-white duration-500">Read More</button>
            </Link></div>
        </div>
        <div className="card text-white w-[100%] md:[80%] xl:w-[100%] mx-auto">
          <div className="card__face  w-full  card__face--front">
            <Image className="h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] w-[100%] rounded-sm" src={"/images/nextjs-optimizing-tips.png"} alt="asd" width={300} height={300} />
          </div>
          <div className="text-left p-5 bg-black shadow-md  shadow-white rounded-sm card__face w-full h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] card__face--back">
            <h2>Blog Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              autem suscipit laboriosam nesciunt reprehenderit voluptatum
              laudantium fugiat deleniti aliquam amet deserunt quisquam odit
              facilis earum, iure, non minus? Vero, exercitationem?
            </p><Link href={""}>
            <button className="bg-blue-500 w-full md:w-40 h-12 mt-2 rounded-full border-2 border-transparent hover:text-blue-400 font-semibold  hover:bg-black hover:border-white duration-500">Read More</button>
            </Link></div>
        </div>
        <div className="card text-white w-[100%] md:[80%] xl:w-[100%] mx-auto">
          <div className="card__face  w-full  card__face--front">
            <Image className="h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] w-[100%] rounded-sm" src={"/images/js-to-ts.jpg"} alt="asd" width={300} height={300}/>
          </div>
          <div className="text-left p-5 bg-black shadow-md  shadow-white rounded-sm card__face w-full h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] card__face--back">
            <h2>Blog Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              autem suscipit laboriosam nesciunt reprehenderit voluptatum
              laudantium fugiat deleniti aliquam amet deserunt quisquam odit
              facilis earum, iure, non minus? Vero, exercitationem?
            </p><Link href={""}>
            <button className="bg-blue-500 w-full md:w-40 h-12 mt-2 rounded-full border-2 border-transparent hover:text-blue-400 font-semibold  hover:bg-black hover:border-white duration-500">Read More</button>
            </Link></div>
        </div>
        <div className="card text-white w-[100%] md:[80%] xl:w-[100%] mx-auto">
          <div className="card__face  w-full  card__face--front">
            <Image className="h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] w-[100%] rounded-sm" src={"/images/best-practice-of-writing js-code.jpg"} alt="asd" width={300} height={300} />
          </div>
          <div className="text-left p-5 bg-black shadow-md  shadow-white rounded-sm card__face w-full h-[280px] sm:h-[300px] md:h-[350px] xl:h-[260px] card__face--back">
            <h2>Blog Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              autem suscipit laboriosam nesciunt reprehenderit voluptatum
              laudantium fugiat deleniti aliquam amet deserunt quisquam odit
              facilis earum, iure, non minus? Vero, exercitationem?
            </p><Link href={"./best-practice-for-js"}>
            <button className="bg-blue-500 w-full md:w-40 h-12 mt-2 rounded-full border-2 border-transparent hover:text-blue-400 font-semibold  hover:bg-black hover:border-white duration-500">Read More</button>
            </Link></div>
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
}
