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
            <FormField
              control={form.control}
              name="email"
              render={({ field: { ...rest } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...rest}
                      type="email"
                      placeholder="Insert your email"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field: { ...rest } }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...rest} type="password" placeholder="********" autoComplete="off" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
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
