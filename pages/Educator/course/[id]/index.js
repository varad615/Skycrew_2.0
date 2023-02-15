import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Button, Loading, useModal, Modal } from "@nextui-org/react";
import Link from "next/link";
import YouTube from "react-youtube";
const getVideoId = require("get-video-id");
import Vimeo from "@u-wave/react-vimeo";
import React from "react";

const Note = ({ note }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const videoid = getVideoId(note.vimeo).id;

  //modal action
  const [visible, setVisible] = React.useState(false);
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
          <h1>{note.title}</h1>
          <h2>{note.description}</h2>
          <Button onPress={open} color="error">
            Delete Course
          </Button>
          <Button color="warning">
            Edit Course
          </Button>
        </>
      )}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <Button color="success" auto ghost onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handelDelete}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
      <br />

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
