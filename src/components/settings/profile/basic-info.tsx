import { getUserByUsername } from "@/lib/actions/utils/user";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import React from "react";

interface BasicInfoProps {
  username: string;
}

const BasicInfo: React.FC<BasicInfoProps> = async ({ username }) => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const response = await getUserByUsername(username);

  if (!response) {
    return (
      <section>
        <h2 className="text-2xl font-bold text-zinc-600">
          [404] Basic Profile info not found!
        </h2>
        <hr className="border-zinc-600" />
        <span className="text-zinc-400">
          <h3>Possible reasons:--</h3>
          <p>+ No user found with given username</p>
          <p>+ You are not authorized to access their details.</p>
          <p>+ User is suspended or banned</p>
          <p>+ User Deleted their account</p>
        </span>
      </section>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-zinc-600">Basic Profile info</h2>
      <hr className="border-zinc-600" />
      <span className="text-zinc-400">
        <p>User ID: {response.id}</p>
        <p>Name: {response.name}</p>
        <p>Username: {response.username}</p>
        <p>Access Level: {response.access}</p>
        <p>Login Email: {response.email}</p>
      </span>
    </div>
  );
};

export default BasicInfo;
