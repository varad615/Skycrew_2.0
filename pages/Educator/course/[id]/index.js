import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Button, Loading, Text, useModal, Modal } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import YouTube from "react-youtube";
const getVideoId = require("get-video-id");
import Vimeo from "@u-wave/react-vimeo";
import React from "react";
import { BsBackspaceFill } from "react-icons/bs";
import Redeem from "../../../../public/redeem.png";
import { AiFillDelete } from "react-icons/ai";
const Note = ({ note }) => {
  const { setVisible, bindings } = useModal();
  //model setting
  const [modelvisible, setModelVisible] = React.useState(false);
  const handler = () => setModelVisible(true);
  const closeModelHandler = () => {
    setModelVisible(false);
    console.log("closed");
  };

  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const videoid = getVideoId(note.vimeo).id;

  //modal action

  const open = () => setVisible(true);

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
  }, [isDeleting]);
  const deleteNote = async () => {
    const noteId = router.query.id;
    try {
      const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: "Delete"
      });
      router.push("/Educator/mycourse");
    } catch (error) {
      console.log(error);
    }
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const handelDelete = () => {
    setIsDeleting(true);
    closeHandler();
  };
  return (
    <div>
      {isDeleting ? (
        <Loading />
      ) : (
        <>
          <div className="bg-white">
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
              class="scrollbar-hide fixed shadow-xl top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div class="h-full px-3 py-4 overflow-y-auto bg-[#F6FAFD]">
                <a href="#" class="flex items-center pl-2.5 mb-5">
                  <img
                    src="https://i.ibb.co/FD2d1L4/Sky-Crew-Logo-PNG.png"
                    class="h-10 mr-3"
                    alt="SkyCrew Logo"
                  />
                </a>
                <ul class="space-y-1">
                  <li>
                    <p className="w-50 text-xl font-bold tracking-wide pr-2 text-black">
                      {note.title}
                    </p>
                    <br />
                    <p className="w-64 text-base pr-4 font-semibold tracking-wide text-black">
                      {note.description}
                    </p>
                  </li>
                  <div className=" pt-20"></div>
                  <hr className="border-gray-300  pb-5" />
                  <li className="pb-4">
                    <button onClick={handler} className="w-50 h-12">
                      <div className="flex space-x-7 text-white items-center justify-end flex-1 h-full py-3 pl-3 pr-6 bg-red-500 rounded-lg">
                        <AiFillDelete />
                        <p className="text-xl font-medium">Delete Course</p>
                      </div>
                    </button>
                  </li>
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
              <div class="p-4 border-2 border-white border-line rounded-lg h-full">
                <div className="bg-gray-50 rounded-lg shadow-md w-full text-xl h-30">
                  <p className="text-3xl font-bold tracking-wide bg-clip-text text-transparent p-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 ">
                    {note.title}
                  </p>
                </div>

                <br />
                <Vimeo
                  video={videoid}
                  style={{ width: "84%" }}
                  responsive
                  color="805AD4"
                  keyboard="false"
                  textTrack="true"
                  showTitle="flase"
                  showByline="false"
                />
                <br />
                <div
                  className="relative bg-gradient-to-r from-[#181718] to-[#311542]  rounded-lg"
                  style={{ width: 1004, height: 183 }}
                >
                  <p
                    className="w-80 h-6 absolute text-2xl font-bold tracking-wide text-white"
                    style={{ left: 32, top: 26 }}
                  >
                    Redeem NFT Certificate
                  </p>
                  <p
                    className="absolute text-base font-light text-justify text-white"
                    style={{ width: 758, height: 58, left: 32, top: 78 }}
                  >
                    This drop is provided for engaged learners in the form of
                    NFT Certificates.
                    <br />
                    The mint button might spin for many minutes before you
                    receive an NFT. Have patience.
                    <br />
                    Once you have approved the request on Metamask & it starts
                    spinning, don't reload the page.
                  </p>
                  <div
                    className="w-44 h-32 absolute"
                    style={{ left: 799, top: 27 }}
                  >
                    <button
                      onClick={() => setVisible(true)}
                      className="inline-flex flex-col items-center justify-end flex-1 h-full px-2.5 pt-5 pb-3 bg-white shadow rounded-lg"
                    >
                      <Image src={Redeem} />
                    </button>
                  </div>
                </div>

                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  {...bindings}
                >
                  <Modal.Header>Collect Your nft for {note.title}</Modal.Header>
                  <iframe
                    src="https://gateway.ipfscdn.io/ipfs/QmST2eo8EGsn1TsFp1oC5kffo3SqWQeNtikr9jiWMwfrTf/edition-drop.html?contract=0x3c3A22f8c54Cc91a239D26021D51C5aABfFB6c09&chainId=80001&tokenId=2"
                    width="600px"
                    height="600px"
                    frameborder="0"
                  ></iframe>
                </Modal>
              </div>
            </div>
          </div>
          {/* <h1>{note.title}</h1>
          <h2>{note.description}</h2>
          <Button onPress={open} color="error">
            Delete Course
          </Button>
          <Button color="warning">
            Edit Course
          </Button> */}
        </>
      )}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={modelvisible}
        onClose={closeModelHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Do you want to delete this course
          </Text>
        </Modal.Header>
        <Modal.Body>{note.title}</Modal.Body>
        <Modal.Footer>
          <Button auto flat color="success" onPress={closeHandler}>
            Close
          </Button>
          <Button auto color="error" onPress={closeHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();

  return {
    note: data
  };
};

export default Note;
