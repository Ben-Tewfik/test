import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
const Hero = () => {
  return (
    <header className="bg-[#F3F3F3] h-screen pt-12 pb-5 flex items-center justify-center ">
      <div>
        <h1 className="text-center capitalize text-4xl font-medium  ">
          hi,I'm{" "}
          <span className="text-[#00A2F0] capitalize ">
            benarba mohammed tewfik
          </span>
        </h1>
        <h3 className="text-center text-3xl mt-6 capitalize font-medium max-w-[25rem] mx-auto  md:max-w-full ">
          a passionate front-end developer from algeria
        </h3>
        <p className="text-center mt-6 text-xl w-[90%] mx-auto md:max-w-[35rem]">
          I have a passion for front-end development creating visually appealing
          and user-friendly web interfaces. Let's collaborate to bring your
          digital projects to life.
        </p>
        <div className="mt-6 flex justify-center gap-4">
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
      </div>
      {/* <div className="relative w-80 h-80 mt-10 bg-teal-600 rounded-full mx-auto overflow-hidden">
          <Image
            src={"/tewfik.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="0px 1px"
          />
        </div> */}
    </header>
  );
};
export default Hero;
