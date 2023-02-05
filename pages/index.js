import { Button } from "@nextui-org/react";
import Link from "next/link";

function Home() {

  return (
    <>
      <Link href="/signin">
      <Button>Signin</Button></Link>
    </>
  );
}

export default Home;
