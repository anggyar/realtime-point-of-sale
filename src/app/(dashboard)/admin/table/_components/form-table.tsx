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

import { STATUS_TABLE_LIST } from "@/constants/table-constant";

import { Loader2 } from "lucide-react";
import { FormEvent } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export default function FormTable<T extends FieldValues>({
  form,
  onSubmit,
  isLoading,
  type,
}: {
  form: UseFormReturn<T>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  type: "Create" | "Update";
}) {
  return (
    <DialogContent className='sm:max-w-[425px] max-h-[90vh]'>
      <DialogHeader>
        <DialogTitle className='items-center font-bold text-2xl'>
          {type} Table
        </DialogTitle>
        <DialogDescription className='font-semibold'>
          {type === "Create" ? "Add a new table" : "Make changes table here"}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          className='space-y-4'
          onSubmit={onSubmit}
        >
          <div className='space-y-4 max-h-[50vh] py-1 overflow-y-auto'>
            <FormInput
              form={form}
              name={"name" as Path<T>}
              label='Name'
              placeholder='Insert table name'
            />

            <FormInput
              form={form}
              name={"description" as Path<T>}
              label='Description'
              placeholder='Insert table description'
              type='textarea'
            />
            <FormInput
              form={form}
              name={"capacity" as Path<T>}
              label='Capacity'
              placeholder='Insert table capacity'
              type='number'
            />

            <FormSelect
              form={form}
              name={"status" as Path<T>}
              label='Status'
              selectItem={STATUS_TABLE_LIST}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
              <Button
                type='submit'
                className=''
              >
                {isLoading ? <Loader2 className='animate-spin' /> : type}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}
