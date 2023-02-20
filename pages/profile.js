import { Card, Grid, Text, Link, Button } from "@nextui-org/react";
import { getSession, signOut } from "next-auth/react";
import { TbEdit, TbLogout } from "react-icons/tb";
import styles from "../styles/Course.module.css";

function Profile({ user }) {
  return (
    <section class="text-gray-400 bg-[#f6fafd] body-font h-screen	">
      <div
        className="bg-gradient-to-r from-[#c7abff] to-[#ffc4eb]"
        style={{ width: 3000, height: 190 }}
      />
      <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
        <img
          class="w-1/6 mb-10 object-cover object-center -m-36 rounded-full"
          alt="hero"
          src="https://i.pravatar.cc/150?img=68"
        />
        <div class="text-center w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <Text css={{ color: "$accents8" }}>
              <h4>My address</h4> <br />
              {user.address}
            </Text>
          </h1>
          <p class="leading-relaxed mb-8">Chain Id : {user.chainId}</p>
          <div class="flex justify-center">
            <Button color="error" onClick={() => signOut({ redirect: "/" })}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      {/* new section */}
      <section class="text-gray-400 bg-[#f6fafd] body-font h-screen">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="shadow flex rounded-lg bg-[#2563EA] p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-[#2563EA] flex-shrink-0">
                  <TbLogout size={30} />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    Courses
                  </h2>
                  <p class="leading-relaxed text-base text-white">
                    All the courses that have been uploaded on this platform
                    witch you can study and earn NFT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: { user: session.user }
  };
}
export default Profile;
