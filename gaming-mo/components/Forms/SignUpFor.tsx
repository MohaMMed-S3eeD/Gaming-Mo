"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormInput from "../FormInput";
import MotionItem from "../defaults/MotionItem";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import Logo from "../defaults/Logo";
import Link from "next/link";

// تعريف الاسكيمـا بشكل صحيح
const loginSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }),
    name: z.string().min(5, { message: "User Name must be at least 5 characters" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    rePassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      rePassword: "",
    },
  });

  const [isPending] = useTransition();

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <MotionItem animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }}>
      <MaxWidthWrapper
        customPadding="py-14"
        className=" flex flex-col gap-4 items-center w-full bg-black/60 rounded-2xl border border-input"
      >
        <Logo />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-6">
            <FormInput name="email" label="Email" type="text" />
            <FormInput name="name" label="User Name" type="text" />
            <FormInput name="password" label="Password" type="password" />
            <FormInput name="rePassword" label="Confirm Password" type="password" />

            <Button disabled={isPending} type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <div className="capitalize text-base font-semibold flex items-center gap-2">
          <p className="text-gray-50">Do you have an account ?!</p>
          <Link className="text-rose-500 hover:underline" href="/Login">
          Login with Us Now!
          </Link>
        </div>
      </MaxWidthWrapper>
    </MotionItem>
  );
};

export default Login;
