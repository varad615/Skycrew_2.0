import Image from "next/image";
import Logo from "../public/Logo.png";
import WhiteLogo from "../public/Logo_White.png";
import Trophy from "../public/Trophy.png";
import Saly from "../public/Saly.png";
import Shapes from "../public/Shapes.png";
import Bulb from "../public/lightbulb.png";
import Community from "../public/community.png";
import Calendar from "../public/Calendar.png";
import Build from "../public/Build.png";
import StudGuy from "../public/StudGuy.png";
import Sections from "../public/Sections.png";
import NFT from "../public/NFT.png";

function Home() {
  return (
    <>
      <div>
        {/* Hero */}
        <div className="h-screen overflow-hidden bg-gradient-to-r  from-[#171717] to-[#361748] md:bg-hero bg-cover bg-no-repeat bg-center">
          {/* Navbar */}
          <div className="flex justify-between items-center md:max-w-6xl bg-white mx-auto p-3 md:px-7 xl:mt-5 xl:rounded-md">
            <Image src={Logo} width={100} height={100} alt="Logo" />

            <button className="bg-gradient-to-r from-[#5808FB] to-[#DD78BB] text-white px-5 py-2 text-base font-normal rounded-md">
              Connect
            </button>
          </div>

          {/* hero section  */}
          <div className="flex flex-col justify-center md:justify-start md:max-w-5xl mx-auto max-w-xl md:w-70 xl:w-full my-8 px-5 text-white py-5  relative">
            {/* Tagline */}
            <div className="flex flex-col items-center md:flex-row justify-center xl:justify-start">
              <Image
                src={WhiteLogo}
                width={100}
                height={100}
                alt="white logo"
              />
              <p className="pl-2 pt-2 md:mb-2 font-oxy text-center md:align-baseline">
                Rewarding the Next Generation of Learners
              </p>
            </div>

            {/* flex image and content */}
            <div className="flex flex-row justify-center xl:justify-start items-center py-3">
              {/* boxes */}
              <div className="my-5 flex flex-col items-center justify-center">
                {/* Row 1 */}
                {/* Container 1 */}
                <div className="bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] p-5 rounded-lg border px-10 border-slate-500">
                  <h1 className="text-3xl font-bold lg:text-5xl lg:leading-[60px]">
                    {" "}
                    <span className="text-[#d1d4fb]"> SkyRocket </span> your
                    Skills <br /> by building{" "}
                    <span className="text-[#d1d4fb]">EPIC</span> Stuff.
                  </h1>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row items-center justify-around py-5">
                  {/* container 2 */}
                  <div className="flex items-center flex-col text-center w-[17rem] md:w-full mr-3 md:mr-8 bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] p-4 lg:px-9 rounded-lg border border-slate-500">
                    <Image
                      src={Trophy}
                      height={200}
                      width={200}
                      alt="trophy image"
                    />
                    <h2 className="text-base font-semibold pt-3 lg:text-xl">
                      Rewards & Incentives <br /> for Active Learners
                    </h2>
                  </div>
                  {/* container 3 */}
                  <div className=" flex items-center flex-col text-center h-[16.8rem] md:h-full bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] px-3 py-10 lg:py-5 lg:px-10 md:w-full rounded-lg border border-slate-500">
                    <Image
                      src={Saly}
                      height={200}
                      width={200}
                      alt="trophy image"
                    />
                    <h2 className="text-base font-semibold pt-3 lg:text-xl">
                      Learn along with <br /> the Community
                    </h2>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="hidden xl:block absolute -right-[14rem] top-[5rem] ">
                <Image
                  src={Shapes}
                  width={600}
                  height={600}
                  alt="shapes image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <div className="md:h-screen py-[10rem] bg-white flex justify-center items-center">
          <div className="inline-flex flex-col space-y-10 items-center justify-end">
            <div className="flex flex-col space-y-7 items-center justify-end px-5">
              <p className="text-2xl md:text-6xl font-bold text-black">
                Learn by{" "}
                <span className="text-[#8E58B0]"> Actually Making Stuff </span>
              </p>
              <p className="text-sm md:text-2xl md:tracking-wide text-center text-black font-medium">
                Say goodbye to 30-Hour Long recorded courses that are difficult
                to finish.
                <br />
                Say Hello to a mode of learnig that focuses on actually doing
                the thing.
              </p>
            </div>

            {/* Card rows */}
            <div className="grid grid-rows-1 gap-y-5 mx-12 md:grid-cols-3 md:gap-x-6 md:max-w-4xl md:py-5">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-[#481D52] to-[#291D58] rounded-3xl flex flex-col justify-evenly px-5 py-10">
                <div className="flex justify-center py-5 md:pb-12">
                  {" "}
                  <Image
                    src={Calendar}
                    height={100}
                    width={100}
                    alt="Calender"
                  />{" "}
                </div>
                <h2 className="text-2xl font-semibold text-left px-3">
                  Weekly Challenges
                </h2>
                <p className="py-3 px-3 text-xl">
                  Getting started is difficult so we make the start of every
                  cohort a special event.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gradient-to-r from-[#481D52] to-[#291D58] rounded-3xl flex flex-col justify-evenly  px-5 py-10">
                <div className="flex justify-center pb-5">
                  <Image
                    src={Community}
                    height={100}
                    width={100}
                    alt="Communityr"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-left px-3 ">
                  Pro-active community.
                </h2>
                <p className="py-3 px-3 text-xl">
                  Make progress on your project alongside other builders to keep
                  you accountable
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-r from-[#481D52] to-[#291D58] rounded-3xl flex flex-col justify-evenly px-5 py-10">
                <div className="flex justify-center pb-5">
                  <Image src={Bulb} height={100} width={100} alt="Light Bulb" />{" "}
                </div>
                <h2 className="text-2xl font-semibold text-left px-3">
                  Unique Project Guides
                </h2>
                <p className="py-3 px-3 text-xl">
                  Projects that you can customize + make your own. Build it.
                  Deploy it. Share it
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <div className="md:h-screen bg-gradient-to-r  from-[#171717] to-[#361748] md:bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col py-14 pb-28 px-8 md:pt-32">
            {/* Row 1 */}
            <div className="relative md:w-full md:max-w-4xl">
              <div className=" bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] border-2 rounded-3xl px-6 pt-5 pb-16">
                <p className="text-3xl md:text-4xl font-bold py-3 md:px-5">
                  Build alongside other
                  <br />
                  <span className="text-[#BE89F2]">
                    Developers & Designers.
                  </span>
                </p>
                <p className="text-base pr-10 md:w-[35em] md:px-5 md:text-md md:pt-3">
                  All Great things were built in TEAMS. Once you enroll we'll
                  assign you a channel where you'll get to share progress with a
                  plethora of skilled and talented professionals.
                </p>
              </div>
              {/* Image */}
              <div className="absolute -right-8 -bottom-16 md:-right-20">
                <Image
                  src={Build}
                  width={200}
                  height={200}
                  alt="build photo"
                  className="md:h-[25rem] md:w-[25rem] "
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative md:w-full md:max-w-4xl mt-24 md:mt-28">
              <div className=" bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] border-2 rounded-3xl px-6 pt-5 pb-16">
                <p className="text-3xl md:text-4xl font-bold py-3 md:px-5 text-right md:text-start md:pl-[20rem]">
                  Learning Opportunities
                  <br />
                  <span className="text-[#BE89F2]">Get an Internship!</span>
                </p>
                <p className="text-base pl-10 md:pl-[20rem] md:text-start md:text-md md:pt-3  md:pr-32 text-right">
                  The Tokens and NFTs you have earned will act as a Proof of
                  your work. You can use these tokens to apply for various Jobs
                  and Internship based on the skills you have acquired.
                </p>
              </div>
              {/* Image */}
              <div className="absolute -left-8 -bottom-20 md:-left-20">
                <Image
                  src={StudGuy}
                  width={200}
                  height={200}
                  alt="build photo"
                  className="md:h-[25rem] md:w-[25rem] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white py-10 px-5 md:py-28">
          <div className="text-black">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center py-3">
              How does the{" "}
              <span className="text-[#8E58B0]">Rewarding System Work?</span>{" "}
            </h1>
            <p className="text-center font-base md:text-xl ">
              Section wise Incentivization is provided to the Learners. After
              every section <br /> tokens are awarded to the Learner, directly
              transferred in their digital wallet.
            </p>
            <div className="flex justify-center items-center py-8">
              <Image
                src={Sections}
                width={450}
                height={450}
                alt="sections"
                className="md:w-[30rem] md:h-[3rem]"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="md:h-screen overflow-hidden bg-gradient-to-r  from-[#171717] to-[#361748] md:bg-hero bg-cover bg-no-repeat bg-center p-10 md:flex md:justify-center ">
          <div className="flex flex-col items-center md:flex-row justify-center">
            {/* Left */}
            <div className="z-10">
              <Image src={NFT} height={500} width={500} alt="NFT" className="md:h-[23rem] md:w-[23rem]"/>
            </div>

            {/* Right */}
            <div className="md:-ml-10">
              <div className="bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] rounded-lg border p-5 border-slate-500 md:h-[20rem] md:w-[45rem]">
                <h1 className="text-2xl text-center font-bold lg:leading-[60px] md:text-3xl md:text-left md:pl-10">
                  Mint your Own{" "}
                  <span className="text-[#D8B0FE]">NFT Certificates!</span>
                </h1>
                <p className="text-center py-3 px-5 md:text-left md:pl-10 md:pr-24">All the Certifications on the platform are in the form of NFT Certificates. These ensure that the Learner has actually completed all sections of the course thoroughly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
