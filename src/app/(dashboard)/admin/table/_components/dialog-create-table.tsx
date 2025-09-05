import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Preview } from "@/types/general";
import { INITIAL_CREATE_MENU_FORM } from "@/constants/menu-constant";
import { createTableForm, createTableSchema } from "@/validations/table-validation";
import { INITIAL_STATE_CREATE_TABLE } from "@/constants/table-constant";
import { createTable } from "../actions";
import FormTable from "./form-table";

export default function DialogCreateTable({ refetch }: { refetch: () => void }) {
  const form = useForm<createTableForm>({
    resolver: zodResolver(createTableSchema),
    defaultValues: INITIAL_CREATE_MENU_FORM,
  });

  const [createTableState, createTableAction, isPendingCreateTable] = useActionState(
    createTable,
    INITIAL_STATE_CREATE_TABLE
  );

  // const [preview, setPreview] = useState<Preview | undefined>(undefined);
  // FUNGSI SUBMIT
  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      createTableAction(formData);
    });
  });

  useEffect(() => {
    if (createTableState?.status === "error") {
      toast.error("Create Table Failed", {
        description: createTableState.errors?._form?.[0],
      });
    }

    if (createTableState?.status === "success") {
      toast.success("Table Created Successfully");
      form.reset();
      // setPreview(undefined);
      document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click();
      refetch();
    }
  }, [createTableState]);
  return (
    <FormTable
      form={form}
      isLoading={isPendingCreateTable}
      type='Create'
      onSubmit={onSubmit}
    />
  );
}
