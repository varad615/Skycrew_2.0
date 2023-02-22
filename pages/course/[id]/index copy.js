import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import Router from "next/router";
import { Button, Loading, useModal, Modal } from "@nextui-org/react";
import Link from "next/link";
import YouTube from "react-youtube";
const getVideoId = require("get-video-id");
import Vimeo from "@u-wave/react-vimeo";
import Image from "next/image";
import Redeem from "../../../public/redeem.png";
import styles from "../../../styles/Course.module.css";

const Note = ({ note }) => {
  const { setVisible, bindings } = useModal();
  const videoid = getVideoId(note.vimeo).id;
  return (
    <div className={styles.container}>
      <p className="text-3xl font-bold tracking-wide">{note.title}</p>

      <h1>{note.title}</h1>
      <h2>{note.description}</h2>
      <Vimeo
        video={videoid}
        style={{ width: "70%" }}
        responsive
        color="DC77BB"
        keyboard="false"
        textTrack="true"
        showTitle="flase"
        showByline="false"
      />
      <Link href="/home">
        <Button>Back</Button>
      </Link>
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
          This drop is provided for engaged learners in the form of NFT
          Certificates.
          <br />
          The mint button might spin for many minutes before you receive an NFT.
          Have patience.
          <br />
          Once you have approved the request on Metamask & it starts spinning,
          don't reload the page.
        </p>
        <div className="w-44 h-32 absolute" style={{ left: 799, top: 27 }}>
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
      <br />
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
