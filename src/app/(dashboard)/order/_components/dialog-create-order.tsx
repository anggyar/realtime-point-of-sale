import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Table } from "@/validations/table-validation";

import {
  createOrderForm,
  createOrderSchema,
} from "@/validations/order-validation";
import {
  INITIAL_CREATE_ORDER_FORM,
  STATUS_CREATE_ORDER,
} from "@/constants/order-constant";
import { createOrder } from "../actions";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/input-form";
import FormSelect from "@/components/common/form-select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function DialogCreateOrder({
  tables,
}: {
  tables: Table[] | undefined | null;
}) {
  const form = useForm<createOrderForm>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: INITIAL_CREATE_ORDER_FORM,
  });

  const [createOrderState, createOrderAction, isPendingCreateOrder] =
    useActionState(createOrder, INITIAL_CREATE_ORDER_FORM);

  // const [preview, setPreview] = useState<Preview | undefined>(undefined);
  // FUNGSI SUBMIT
  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      createOrderAction(formData);
    });
  });

  useEffect(() => {
    if (createOrderState?.status === "error") {
      toast.error("Create Order Failed", {
        description: createOrderState.errors?._form?.[0],
      });
    }

    if (createOrderState?.status === "success") {
      toast.success("Order Created Successfully");
      form.reset();
      // setPreview(undefined);
      document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click();
    }
  }, [createOrderState]);
  return (
    <DialogContent className='sm:max-w-[425px] max-h-[90vh]'>
      <DialogHeader>
        <DialogTitle className='items-center font-bold text-2xl'>
          Create Order
        </DialogTitle>
        <DialogDescription className='font-semibold'>
          Add a new order from customer
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
              name='customer_name'
              label='Customer Name'
              placeholder='Insert costumer name here'
            />

            <FormSelect
              form={form}
              name='table_id'
              label='Table'
              selectItem={(tables ?? []).map((table: Table) => ({
                value: `${table.id}`,
                label: `${table.name} - ${table.status} (${table.capacity})`,
                disabled: table.status !== "available",
              }))}
            />

            <FormSelect
              form={form}
              name='status'
              label='Status'
              selectItem={STATUS_CREATE_ORDER}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
              <Button
                type='submit'
                className='text-white'
              >
                {isPendingCreateOrder ? (
                  <Loader2 className='animate-spin' />
                ) : (
                  "Create"
                )}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}
