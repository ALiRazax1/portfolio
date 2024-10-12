import Header from "../components/header";
import Footer from "../components/footer";
export default function About() {
  return (
    <div className="bg-black">
      <Header /><section className=" text-white container mt-20 mx-auto">
      <h1 className="text-5xl text-center font-bold text-blue-500 underline ">About Us</h1>
      <p className="text-center mx-20 text-justify text-3xl my-16">
        I&apos;m a passionate web developer specializing in modern technologies like
        HTML, CSS, JavaScript, TypeScript, and Next.js. My focus is on building
        responsive, user-friendly websites and applications that deliver great
        experiences. Whether it&apos;s a simple page or a complex project, I aim to
        bring your ideas to life with clean code and innovative solutions.
      </p></section>
      <Footer />
    </div>
  );
}
