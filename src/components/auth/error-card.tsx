import React from "react";
import CardWrapper from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Opps! something went wrong!"
      backButtonLabel="Back to logn"
      backButtonHref="/auth/login"
    >
      <div className="flex justify-center items-center">
        <ExclamationTriangleIcon className="text-red-600 h-6 w-6" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
