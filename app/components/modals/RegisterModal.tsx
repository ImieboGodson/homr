"use client";

import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useRouter } from "next/navigation";

interface RegisterModal {}

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(false);

    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
        toast.success("Sign up successfull");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  if (!registerModal.isOpen) {
    return null;
  }

  let body = (
    <div className="w-full flex flex-col gap-6 items-start">
      <Heading
        title="Welcome to Homr"
        subtitle="Start your journey with us today."
      />
      <div className="w-full flex flex-col gap-4 items-start">
        <Input
          id="name"
          type="text"
          label="Name"
          register={register}
          errors={errors}
          isDisabled={isLoading}
          required
          animateLabel
          modalType
        />
        <Input
          id="email"
          type="email"
          label="Email"
          register={register}
          errors={errors}
          isDisabled={isLoading}
          required
          animateLabel
          modalType
        />
        <Input
          id="password"
          type="password"
          label="Password"
          register={register}
          errors={errors}
          isDisabled={isLoading}
          required
          animateLabel
          modalType
        />
        <Button title="Continue" onClick={handleSubmit(onSubmit)} authType />
      </div>
      <hr />
      <div className="w-full flex flex-col gap-4 items-start">
        <Button
          title="Continue with Google"
          icon={FcGoogle}
          onClick={() => signIn("google")}
          socialLogin
          outline
        />
        <Button
          title="Continue with Github"
          icon={FaGithubAlt}
          onClick={() => signIn("github")}
          socialLogin
          outline
        />
      </div>
      <div
        className=" w-full flex items-center justify-center
      text-neutral-500 text-center mt-4 text-sm font-light"
      >
        <p>
          Already got an account?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Sign in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Register"
      onClose={registerModal.onClose}
      body={body}
    />
  );
};

export default RegisterModal;
