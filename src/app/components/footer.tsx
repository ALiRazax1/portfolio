import Link from "next/link"
export default function Footer(){
    return (
        <div className="bg-neutral-950">
            <footer className="text-white font-semibold text-[11px] md:text-base border-t-2 border-zinc-800  text-center container mx-auto">
<ul className="flex justify-center gap-x-20 sm:gap-x-28 md:gap-x-48 mt-20">
    <Link href={"./"}><li className=" hover:text-blue-500">Home</li></Link>
    <Link href={"./aboutus"}>
<li className=" hover:text-blue-500">About Us</li></Link>
<Link href={"./contact-us"}>
<li className=" hover:text-blue-500">Contact Us</li></Link></ul>
<p className="pb-8 pt-12 ">&copy;Copyright 2024. All rights reserved.</p>
            </footer>
            
        </div>
    )
}