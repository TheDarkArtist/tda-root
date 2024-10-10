import Header from "@/components/c2c/projects/header";
import Table from "@/components/c2c/projects/table";
import React from "react";

const Projectspage = () => {
  return (
    <div className="flex flex-col items-center border-4 border-zinc-900 w-full mx-auto bg-grid-lg-zinc-900">
      <Header />
      <Table />
    </div>
  );
};

export default Projectspage;
