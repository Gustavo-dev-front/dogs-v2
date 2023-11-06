import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../../components/Title/Title";
import Feed from "../../Feed";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container">
      <Title>{user}</Title>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
