import { Card, Grid, Text, Link, Button } from "@nextui-org/react";
import { getSession, signOut } from "next-auth/react";

function Profile({ user }) {
  return (
    <div>
      <Link href="/home">
      <Button color="secondary">Courses</Button></Link>
      <br />
      <div>
        <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Header>
            <img
              alt="nextui logo"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width="34px"
              height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  User Name
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>{user.address}</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>
              Make beautiful websites regardless of your design experience.
            </Text>
          </Card.Body>
          <Card.Footer>
            <Button color="error" onClick={() => signOut({ redirect: "/" })}>
              Logout
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
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
