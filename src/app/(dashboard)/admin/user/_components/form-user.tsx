import FormImage from "@/components/common/form-image";
import FormSelect from "@/components/common/form-select";
import FormInput from "@/components/common/input-form";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ROLE_LIST } from "@/constants/auth-constant";
import { Preview } from "@/types/general";
import { Loader2 } from "lucide-react";
import { FormEvent } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export default function FormUser<T extends FieldValues>({
  form,
  onSubmit,
  isLoading,
  type,
  preview,
  setPreview,
}: {
  form: UseFormReturn<T>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  type: "Create" | "Update";
  preview?: Preview;
  setPreview?: (preview: Preview) => void;
}) {
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle className='items-center font-bold text-2xl'>{type} User</DialogTitle>
        <DialogDescription className='font-semibold'>
          {type === "Create" ? "Register a new user" : "Make changes user here"}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          className='space-y-4'
          onSubmit={onSubmit}
        >
          <FormInput
            form={form}
            name={"name" as Path<T>}
            label='Name'
            placeholder='Insert your name'
          />

          {type === "Create" && (
            <FormInput
              form={form}
              name={"email" as Path<T>}
              label='Email'
              placeholder='Insert your email here'
              type='email'
            />
          )}

          <FormImage
            form={form}
            name={"avatar_url" as Path<T>}
            label='Avatar'
            preview={preview}
            setPreview={setPreview}
          />

          <FormSelect
            form={form}
            name={"role" as Path<T>}
            label='Role'
            selectItem={ROLE_LIST}
          />

          {type === "Create" && (
            <FormInput
              form={form}
              name={"password" as Path<T>}
              label='Password'
              placeholder='******'
              type='password'
            />
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
            <Button
              type='submit'
              className='text-white'
            >
              {isLoading ? <Loader2 className='animate-spin' /> : type}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
