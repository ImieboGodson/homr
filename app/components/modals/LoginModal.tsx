"use client";

import { useCallback, useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import useRegisterModal from "@/app/hooks/useRegisterModal";

interface LoginModal {}

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast.success("oh wow, toast works");
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  if (!loginModal.isOpen) {
    return null;
  }

  let body = (
    <div className="w-full flex flex-col gap-6 items-start">
      <Heading title="Welcome to Homr" />
      <div className="w-full flex flex-col gap-4 items-start">
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
          onClick={() => {}}
          socialLogin
          outline
        />
        <Button
          title="Continue with Github"
          icon={FaGithubAlt}
          onClick={() => {}}
          socialLogin
          outline
        />
      </div>
      <div
        className=" w-full flex items-center justify-center
      text-neutral-500 text-center mt-4 text-sm font-light"
      >
        <p>
          Don&apos;t have an acoount yet?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Create an account
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Log in or sign up"
      onClose={loginModal.onClose}
      body={body}
    />
  );
};

export default LoginModal;
