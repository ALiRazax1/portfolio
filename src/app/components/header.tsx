import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral-950 text-white font-semibold text-[11px] md:text-base  ">
      <nav className="flex justify-center h-[80px] items-center container mx-auto">
      
        <ul className=" flex gap-x-24 sm:gap-28">
          <li className="hover:text-blue-500  ">
            <Link href="/" className="focus:text-blue-500 acactive:text-blue-500">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="./aboutus">About Us</Link>
          </li>
          <li className="hover:text-blue-500 focus:text-blue-500">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
