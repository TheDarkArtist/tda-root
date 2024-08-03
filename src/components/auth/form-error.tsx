import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="flex items-center px-4 py-1.5 gap-x-2 text-sm rounded-sm bg-destructive/15 text-destructive">
      <ExclamationTriangleIcon className="h-6 w-6" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
