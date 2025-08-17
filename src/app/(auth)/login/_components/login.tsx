"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginForm, loginSchema } from "../../../../../validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { INITIAL_LOGIN_FORM } from "@/constants/auth-constant";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/common/input-form";

const Login = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  // FUNGSI SUBMIT
  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Login to access all features</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={onSubmit}>
            <FormInput
              form={form}
              name="email"
              label="Email"
              placeholder="Insert your email here"
              type="email"
            />

            <FormInput
              form={form}
              name="password"
              label="Password"
              placeholder="******"
              type="password"
            />

            <Button type="submit" className="">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;
