import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import Router from "next/router";
import { Button, Loading } from "@nextui-org/react";

const Note = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <Button>Back</Button>
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
