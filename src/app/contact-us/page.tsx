import Header from "../components/header";
import Footer from "../components/footer";
export default function Contact(){
   return ( <div className="bg-black h-max">
        <Header/><div className="container mx-auto bg-black pb-10">
            <h1 className="text-center font-bold text-5xl text-blue-500 pt-10">Contact Us</h1>
        <form action="" className="bg-zinc-950 text-black grid grid-cols-1 md:grid-cols-3 mt-20 mx-2  px-2 md:px-10 py-10 rounded-2xl shadow-lg shadow-white">
            <label htmlFor="" className="text-white font-medium text-xl">Full Name</label>
            <br />
            <input type="text" name="" id="" required placeholder="Full Name" className="focus:border-1 outline-blue-500 placeholder:ps-4 ps-4 md:col-span-2 mt-2 mb-20 rounded-md focus:ring-2 focus:ring-inset focus:ring-blue-500 h-14" /><br />
            <label htmlFor="" className="text-white font-medium text-xl">Email</label>
            <br />
            <input type="text" name="" id="" required placeholder="Email" className="focus:border-1 outline-blue-500 placeholder:ps-4 ps-4 md:col-span-2 mt-2 mb-20 rounded-md focus:ring-2 focus:ring-inset focus:ring-blue-500 h-14" />
            <br />
            <label htmlFor="" className="text-white font-medium text-xl" >Message</label> <br />
            <textarea name="" id="" rows={10} placeholder="Message" className="focus:border-1 outline-blue-500 placeholder:ps-4 placeholder:pt-5 ps-4 md:col-span-2 mt-2 mb-20 rounded-md focus:ring-2 focus:ring-inset focus:ring-blue-500"></textarea>
            <br />
            <input type="submit" name="sumbit" id="" className="text-white bg-blue-500 w-[100%] md:w-[80%] rounded-3xl h-[50px] my-2" />
        </form></div>
        <Footer/>
    </div>)
}