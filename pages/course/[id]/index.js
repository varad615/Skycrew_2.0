import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import Router from "next/router";
import { Button, Loading, useModal, Modal } from "@nextui-org/react";
import Link from "next/link";
import YouTube from "react-youtube";
const getVideoId = require("get-video-id");
import Vimeo from "@u-wave/react-vimeo";

const Note = ({ note }) => {
  const { setVisible, bindings } = useModal();
  const videoid = getVideoId(note.vimeo).id;
  return (
    <div>
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
      <Button auto color="success" onPress={() => setVisible(true)}>
        Collect NFT
      </Button>
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
