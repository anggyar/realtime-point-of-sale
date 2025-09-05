import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Dialog } from "@/components/ui/dialog";
import { updateTable } from "../actions";
import {
  Table,
  updateTableForm,
  updateTableSchema,
} from "@/validations/table-validation";
import { INITIAL_STATE_UPDATE_TABLE } from "@/constants/table-constant";
import FormTable from "./form-table";

export default function DialogUpdateTable({
  refetch,
  currentData,
  handleChangeAction,
  open,
}: {
  refetch: () => void;
  currentData?: Table;
  open: boolean;
  handleChangeAction?: (open: boolean) => void;
}) {
  const form = useForm<updateTableForm>({
    resolver: zodResolver(updateTableSchema),
    // defaultValues: INITIAL_CREATE_USER_FORM,
  });

  const [updateTableState, updateTableAction, isPendingUpdateTable] = useActionState(
    updateTable,
    INITIAL_STATE_UPDATE_TABLE
  );

  // const [preview, setPreview] = useState<Preview | undefined>(undefined);
  // FUNGSI SUBMIT
  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("id", currentData?.id ?? "");

    startTransition(() => {
      updateTableAction(formData);
    });
  });

  useEffect(() => {
    if (updateTableState?.status === "error") {
      toast.error("Update Table Failed", {
        description: updateTableState.errors?._form?.[0],
      });
    }

    if (updateTableState?.status === "success") {
      toast.success("Table Update Successfully");
      form.reset();
      handleChangeAction?.(false);
      refetch();
    }
  }, [updateTableState]);

  useEffect(() => {
    if (currentData) {
      form.setValue("name", currentData.name as string);
      form.setValue("description", currentData.description);
      form.setValue("capacity", currentData.capacity.toString());
      form.setValue("status", currentData.status);
    }
  }, [currentData]);

  return (
    <Dialog
      open={open}
      onOpenChange={handleChangeAction}
    >
      <FormTable
        form={form}
        isLoading={isPendingUpdateTable}
        type='Update'
        onSubmit={onSubmit}
      />
    </Dialog>
  );
}
