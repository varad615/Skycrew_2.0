import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Input, Loading, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
// editor
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";
import { BsBackspaceFill, BsVimeo, BsImageFill } from "react-icons/bs";

const NewCourse = ({ user }) => {
  const [wysiwyg, setWysiwyg] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    subtitle: "",
    price: "",
    learn: "",
    vimeo: "",
    userid: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleEditorChange = (event) => {
    setWysiwyg(event.target.getContent());
    console.log(wysiwyg);
  };
  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        alert("success");
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      router.push("/Educator/mycourse");
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = "Title required";
    }
    if (!form.description) {
      err.description = "desc required";
    }
    if (!form.subtitle) {
      err.subtitle = "subtitle required";
    }
    if (!form.price) {
      err.price = "price required";
    }
    if (!form.learn) {
      err.learn = "learn required";
    }
    if (!form.vimeo) {
      err.vimeo = "vimeo required";
    }

    return err;
  };
  return (
    <div className="bg-gradient-to-r from-white to-indigo-50 text-black">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#F6FAFD] ">
          <a href="#" class="flex items-center pl-2.5 mb-5">
            <img
              src="https://i.ibb.co/FD2d1L4/Sky-Crew-Logo-PNG.png"
              class="h-10 mr-3"
              alt="SkyCrew Logo"
            />
          </a>
          <ul class="space-y-2">
            <li>
              <Link href="/Educator/mycourse">
                <div className="w-50 h-12">
                  <div className="flex space-x-7 text-[#6F7784] items-center justify-end flex-1 h-full py-3 pl-3 pr-6 bg-gray-200 rounded-lg">
                    <BsBackspaceFill />
                    <p className="text-xl font-medium">Back to Courses</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <p className="text-3xl font-semibold tracking-wide">Create Course</p>
          <br />
          <div className="text-lg font-medium tracking-wide mb-2 ">
            Course Name
          </div>
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Eg. Basic of Java"
          />
          <br />
          <div className="text-lg font-medium tracking-wide mb-2 ">
            Subtitle
          </div>
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Eg. Beginner guide of java"
          />
          <br />
          <div className="text-lg font-medium tracking-wide mb-2 ">
            Course Description
          </div>
          <textarea
            rows="7"
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Write a description for your course"
          />
          <br />
          <div className="text-lg font-medium tracking-wide mb-2 ">
            What would students learn here? Mention the goals and objectives in
            points.
          </div>
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Eg. Programming Fundamentals - variables, conditionals"
          />
          <br />
          <div className="text-lg font-medium tracking-wide mb-2 ">
            Thumbnail URL
          </div>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 text-white left-0 flex items-center rounded-l-lg pl-2 pr-2 bg-[#19B7EA] pointer-events-none">
              <BsImageFill />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
              placeholder="Vimeo url"
            />
          </div>
          <br />
          <div className="text-lg font-medium tracking-wide mb-2 ">
            Video Url (Vimeo)
          </div>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 text-white left-0 flex items-center rounded-l-lg pl-2 pr-2 bg-[#19B7EA] pointer-events-none">
              <BsVimeo />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
              placeholder="Vimeo url"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { user: session.user }
  };
}

export default NewCourse;
