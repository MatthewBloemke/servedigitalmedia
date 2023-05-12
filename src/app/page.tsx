import Image from "next/image";
import webDesign from "../../public/webDesign.png";
import socialHome from "../../public/socialHome.png";
import generalBranding from "../../public/generalBranding.png";
import videoHome from "../../public/videoHome.png";
import Link from "next/link";

export default function Home() {
  return (
    <div id="homePage">
      <div className="flex flex-row justify-evenly m-5 flex-wrap mt-5">
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5">
            <Link href="/services#video">
              <div className="absolute bg-gradient-to-b from-[#c5ff52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
              <div className="absolute bg-gradient-to-t from-[#c5ff52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
              <Image
                src={videoHome}
                alt="placeholder"
                className="bg-white relative -z-[1] "
              />
            </Link>
          </div>
          <h3 className="mt-[3px]">Video options & packages</h3>
        </div>
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5">
            <Link href="/services#social">
              <div className="absolute bg-gradient-to-b from-[#c5ff52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
              <div className="absolute bg-gradient-to-t from-[#c5ff52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
              <Image
                src={socialHome}
                alt="placeholder"
                className="bg-white relative -z-[1]"
              />
            </Link>
          </div>
          <h3 className="mt-[3px]">
            Social media promotions options & packages
          </h3>
        </div>
      </div>
      <div className="flex justify-evenly m-5 flex-wrap mt-5">
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5">
            <Link href="/services#web">
              <div className="absolute bg-gradient-to-b from-[#c5ff52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
              <div className="absolute bg-gradient-to-t from-[#c5ff52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
              <Image
                src={webDesign}
                alt="placeholder"
                className="bg-white relative -z-[1]"
              />
            </Link>
          </div>
          <h3 className="mt-[3px]">Web design options & packages</h3>
        </div>
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5 ">
            <Link href="/services#branding">
              <div className="absolute bg-gradient-to-b from-[#c5ff52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
              <div className="absolute bg-gradient-to-t from-[#c5ff52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
              <Image
                src={generalBranding}
                alt="placeholder"
                className="bg-white relative -z-[1]"
              />
            </Link>
          </div>
          <h3 className="mt-[3px]">General branding options & packages</h3>
        </div>
      </div>
    </div>
  );
}
