import { useEffect } from "react";
import { useState } from "react";

function UserProfilePage({ user }) {
    const [name,setName]=useState(user.name)
  return (
    <>
      <h2>user-profile : {name}</h2>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      user: { name: "ali" },
    },
  };
}
export default UserProfilePage;
