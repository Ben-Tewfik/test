import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col justify-center items-center p-4 gap-y-4">
      <div>
        <Link href={"#top"}>
          <IoIosArrowUp className="text-4xl cursor-pointer" />
        </Link>
      </div>
      <div>
        <Image src={"/logo-white.png"} width={70} height={70} />
      </div>
      <div className="flex gap-3">
        <Link
          href={"https://www.linkedin.com/in/mohammed-tewfik-benarba/"}
          target="_blank"
          className="text-3xl"
        >
          <AiOutlineLinkedin />
        </Link>
        <Link href={"#"} className="text-3xl">
          <AiOutlineMail />
        </Link>
        <Link
          href={"https://github.com/Ben-Tewfik"}
          target="_blank"
          className="text-3xl"
        >
          <AiOutlineGithub />
        </Link>
      </div>
      <p>© Copyright 2023. Handcrafted by Benarba Mohammed Tewfik</p>
    </footer>
  );
}
export default Footer;
