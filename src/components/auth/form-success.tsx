import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="flex items-center px-4 py-1.5 gap-x-2 text-lg rounded-sm bg-green-600/15 text-green-600">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
