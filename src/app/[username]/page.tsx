import Footer from "@/components/footer/footer";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";
import Header from "./header";
import Body from "./body";
import { Metadata } from "next";
import { getUserByUsername } from "@/lib/actions/users/get-user";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const user = await getUserByUsername(params.username);

  return {
    title: user?.name || user?.username,
    description: user?.bio,
    keywords: user?.username,
    publisher: "Kushagra Sharma",
    twitter: {
      card: "summary_large_image",
      title: user?.image as string,
      description: user?.bio as string,
      site: "@TheDarkArtist",
      creator: "@TheDarkArtist",
    },
    openGraph: {
      title: (user?.name as string) || user?.username,
      type: "website",
      url: `https://thedarkartist.in/projects/${user?.username}`,
      description: user?.bio as string,
      images: user?.image as string,
    },
  };
}

const ProfilePage = ({ params }: { params: Params }) => {
  return (
    <main className="pt-12 h-full flex flex-col justify-between">
      <div className="max-w-screen-lg mx-auto w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Header username={params.username} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Body username={params.username} />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
};

export default ProfilePage;
