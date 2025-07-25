"use client";

import FormInput from "@/components/common/form-input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { INITIAL_LOGIN_FOIRM } from "@/constants/auth-constant";
import { LoginForm, loginSchema } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Login() {
    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: INITIAL_LOGIN_FOIRM,
    });

    // Munculkan validasi dari var form.
    const onSubmit = form.handleSubmit(async (data) => {
        console.info(data);
    });
    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Welcome</CardTitle>
                <CardDescription>Login to access all feature</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-4">
                        {/* EMAIL FIELD */}
                        <FormInput
                            form={form}
                            name="email"
                            label="Email"
                            placeholder="Insert email here"
                            type="email"
                        ></FormInput>

                        {/* PASSWORD */}
                        <FormInput
                            form={form}
                            name="password"
                            label="Password"
                            placeholder="********"
                            type="password"
                        />

                        {/* LOGIN BUTTON */}
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
