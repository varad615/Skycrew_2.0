import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "@nextui-org/react";
import Logo from "../../public/sclogo.png";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import styles from "../../styles/Course.module.css";
import Intro from "../.././public/INTRO.png";

const Index = ({ notes }) => {
  return (
    <>
      <div className={styles.container}>
        {/* NvbR */}
        <div class="container px-9 py-4 mx-auto">
          <nav class="border-gray-200 shadow rounded-lg bg-white p-4">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" className="w-28 h-10 pl-5">
                <Image src={Logo} width={100} height={100} />
              </a>

              <button
                data-collapse-toggle="navbar-solid-bg"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-solid-bg"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                class="hidden w-full md:block md:w-auto"
                id="navbar-solid-bg"
              >
                <ul class="pr-5 flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="text-2xl font-semibold tracking-wide text-gray-700"
                      aria-current="page"
                    >
                      Courses
                    </a>
                  </li>

                  <li>
                    <Link
                      href="/home"
                      className="text-2xl font-semibold tracking-wide text-gray-700"
                    >
                      Student
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/Educator/profile"
                      className="text-2xl font-semibold tracking-wide text-gray-700"
                    >
                      <FaUserCircle size="35px" color="#9556d3" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* NAVBAR */}

        <br />
        <div>
          <div class="container px-9 py-4 mx-auto">
            <h1>My Courses</h1>
            <div>
              <div class="flex flex-wrap -m-4">
                {notes.map((note) => {
                  return (
                    <div key={note._id} class="p-4 md:w-1/3">
                      <div className="h-full border-2 border-[#C4C4C4] border-opacity-60 bg-white rounded-lg overflow-hidden">
                        <Image
                          class="lg:h-48 w-full object-cover object-center"
                          src={Intro}
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 className="text-xl font-semibold text-gray-700">
                            {note.title}
                          </h2>

                          <p
                            className="text-sm tracking-wide text-black"
                            style={{ width: 397 }}
                          >
                            {note.subtitle}
                          </p>
                          <br />
                          <hr
                            className="border-gray-400 border-opacity-40"
                            style={{ width: 388, height: 1 }}
                          />
                          <br />
                          <div class="flex items-center flex-wrap ">
                            <Link href={`/Educator/course/${note._id}`}>
                              <div
                                className="inline-flex items-center justify-center px-20 py-1.5 bg-purple-500 rounded-lg"
                                style={{ width: 388, height: 36 }}
                              >
                                <p className="text-lg font-semibold tracking-wide text-white">
                                  Edit Course
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();

  return { notes: data };
};
export default Index;
