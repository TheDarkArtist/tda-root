"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

import CardWrapper from "./card-wrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { newVerification } from "@/lib/actions/auth/new-verification";
import FormSuccess from "./form-success";
import FormError from "./form-error";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
        if (!data.error) {
          setTimeout(() => {
            router.replace("/auth/login");
          }, 3000);
        }
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, router]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirm your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex justify-center items-center w-full">
        {!success && !error && (
          <Oval height={24} width={24} color="cyan" secondaryColor="gray" />
        )}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
