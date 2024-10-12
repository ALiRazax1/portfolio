import Header from "./components/header";
import Link from "next/link";
import Footer from "./components/footer";
export default function home() {
  return (
    <div className="text-white bg-black">
      <Header />

      <section className="flex justify-center container mx-auto">
        <div className="bg-black text-[40px] md:text-[48px] font-bold pt-10 fade-in-text">
          <span>Hi,</span> <span>I</span> <span>am</span>{" "}
          <span className="text-blue-500 ">Ali Raza</span> <br />{" "}
          <span>The </span>
          <span className="text-blue-500 pl-3"> Front End </span>{" "}
          <span>Developer</span>
        </div>
        
      </section>

      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16 py-32">
        <div className="fade-in mx-3 border-transparent hover:border-blue-600 hover:duration-500 bg-slate-200 text-black border-[3px] rounded-md px-3 card">
          <h1 className="mb-5 text-blue-500 text-2xl font-medium">
            TypeScript vs. JavaScript: Key Differences
          </h1>
          <p
            className="pb-3
"
          >
            This blog will explore the key differences between TypeScript and
            JavaScript, focusing on the benefits of TypeScript's static typing,
            improved tooling, and error detection.It will also discuss why
            developers are adopting TypeScript for large-scale projects.
          </p>
          <Link href={"./js-vs-ts"}>
            <button className="bg-blue-600 w-36 h-12 xl:mt-5 md:mt-[50px] rounded-3xl text-white my-5 hover:bg-black hover:text-white duration-500">
              Read More
            </button>
          </Link>
        </div>
        <div className="fade-in mx-3 border-transparent hover:border-blue-600 hover:duration-500 bg-slate-200 text-black border-[3px] rounded-md px-3 card">
          <h1 className="mb-5 text-blue-500 text-2xl font-medium">
            Building Scalable Web Applications with Next.js and React
          </h1>
          <p
            className="pb-3
"
          >
            In this post, we will cover how Next.js enhances React by providing
            server-side rendering, static site generation, and API routes. We'll
            guide readers through building a scalable web application by using
            Next.js features to optimize performance
          </p>
          <Link href={"./web-app-with-nextjs-and-react"}>
            <button className="bg-blue-600 w-36 h-12 rounded-3xl text-white my-5 hover:bg-black hover:text-white duration-500">
              Read More
            </button>
          </Link>
        </div>
       
        <div className="fade-in mx-3 border-transparent hover:border-blue-600 hover:duration-500 bg-slate-200 text-black border-[3px] rounded-md px-3 card">
          <h1 className="mb-5 text-blue-500 text-2xl font-medium">
            React and TypeScript: How to Build Strongly-Typed Components{" "}
          </h1>
          <p
            className="pb-3
"
          >
            This blog will focus on using TypeScript in a React environment,
            explaining how to create strongly-typed components, manage props,
            and handle state. Readers will learn how TypeScript can improve code
            readability, maintainability, and help catch bugs early.
          </p>
          <Link href={""}>
            <button className="bg-blue-600 w-36 h-12 rounded-3xl text-white my-5 hover:bg-black hover:text-white duration-500">
              Read More
            </button>
          </Link>
        </div>
        <div className="fade-in mx-3 border-transparent hover:border-blue-600 hover:duration-500 bg-slate-200 text-black border-[3px] rounded-md px-3 card">
          <h1 className="mb-5 text-blue-500 text-2xl font-medium">
            Next.js Performance Optimization Tips for Lightning-Fast Websites{" "}
          </h1>
          <p
            className="pb-3
"
          >
            Performance is critical for modern web applications. This post will
            provide practical tips for optimizing Next.js applications, such as
            lazy loading, image optimization, and leveraging Next.js's built-in
            tools to improve site speed and user experience.
          </p>
          <Link href={""}>
            <button className="bg-blue-600 w-36 h-12 xl:mt-10 rounded-3xl text-white my-5 hover:bg-black hover:text-white duration-500">
              Read More
            </button>
          </Link>
        </div>
        <div className="fade-in mx-3 border-transparent hover:border-blue-600 hover:duration-500 bg-slate-200 text-black border-[3px] rounded-md px-3 card">
          <h1 className="mb-5 text-blue-500 text-2xl font-medium">
            From JavaScript to TypeScript: A Beginner's Guide to Type Safety{" "}
          </h1>
          <p
            className="pb-3
"
          >
            This beginner-friendly guide will walk readers through the
            transition from JavaScript to TypeScript, highlighting the key
            concepts of type safety. It will provide step-by-step examples to
            demonstrate how TypeScript helps developers catch potential errors
            at compile-time and improve overall code reliability.
          </p>
          <Link href={""}>
            <button className="bg-blue-600 w-36 h-12 rounded-3xl text-white my-5 hover:bg-black hover:text-white duration-500">
              Read More
            </button>
          </Link>
        </div>
        <div className="fade-in mx-3 border-transparent hover:border-blue-600 hover:duration-500 bg-slate-200 text-black border-[3px] rounded-md px-3 card">
          <h1 className="mb-5 text-blue-500 text-2xl font-medium">
            Top 10 Best Practices for Writing Clean JavaScript Code{" "}
          </h1>
          <p
            className="pb-3
"
          >
            Writing clean, maintainable, and efficient code is critical for any
            JavaScript developer. This blog will outline ten essential best
            practices, including proper variable naming and avoiding common
            pitfalls, to help developers improve the quality of their JavaScript
            code.
          </p>
          <Link href={"./best-practice-for-js"}>
            <button className="bg-blue-600 w-36 h-12 rounded-3xl text-white my-5 hover:bg-black hover:text-white duration-500">
              Read More
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
