import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "@nextui-org/react";

const Index = ({ notes }) => {
  return (
    <>
      <div>
        <Link href="/profile">
          <Button color="secondary">Profile</Button>
        </Link>
        <br/>
        <Link href="/home">
          <Button color="warning" flat>Back to student</Button>
        </Link>
        <br/>
        <Link href="/Educator/new">
          <Button color="warning" flat>Create New Course</Button>
        </Link>
        <br />
        <div>
          <h1>My Courses</h1>
          <div>
            {notes.map((note) => {
              return (
                <div key={note._id}>
                  <Card>
                    <Card.Header>
                      <Link href={`/course/${note._id}`}>{note.title}</Link>
                    </Card.Header>
                    <Card.Body>
                      <Link href={`/Educator/course/${note._id}`}>
                        <Button>View</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
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
