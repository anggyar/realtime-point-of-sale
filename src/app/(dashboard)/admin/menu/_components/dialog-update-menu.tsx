import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Preview } from "@/types/general";
import { Dialog } from "@/components/ui/dialog";
import { Menu, UpdateMenuForm, updateMenuSchema } from "@/validations/menu-validation";
import { updateMenu } from "../actions";
import { INITIAL_STATE_UPDATE_MENU } from "@/constants/menu-constant";

import FormMenu from "./form-menu";

export default function DialogUpdateMenu({
  refetch,
  currentData,
  handleChangeAction,
  open,
}: {
  refetch: () => void;
  currentData?: Menu;
  open: boolean;
  handleChangeAction?: (open: boolean) => void;
}) {
  const form = useForm<UpdateMenuForm>({
    resolver: zodResolver(updateMenuSchema),
    // defaultValues: INITIAL_CREATE_USER_FORM,
  });

  const [updateMenuState, updateMenuAction, isPendingUpdateMenu] = useActionState(
    updateMenu,
    INITIAL_STATE_UPDATE_MENU
  );

  const [preview, setPreview] = useState<Preview | undefined>(undefined);
  // FUNGSI SUBMIT
  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();

    if (currentData?.image_url !== data.image_url) {
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, key === "image_url" ? preview!.file ?? "" : value);
      });
      formData.append("old_image_url", currentData?.image_url ?? "");
    } else {
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }
    formData.append("id", currentData?.id ?? "");

    startTransition(() => {
      updateMenuAction(formData);
    });
  });

  useEffect(() => {
    if (updateMenuState?.status === "error") {
      toast.error("Update Menu Failed", {
        description: updateMenuState.errors?._form?.[0],
      });
    }

    if (updateMenuState?.status === "success") {
      toast.success("Menu Update Successfully");
      form.reset();
      handleChangeAction?.(false);
      refetch();
    }
  }, [updateMenuState]);

  useEffect(() => {
    if (currentData) {
      form.setValue("name", currentData.name as string);
      form.setValue("description", currentData.description);
      form.setValue("price", currentData.price.toString());
      form.setValue("discount", currentData.discount.toString());
      form.setValue("image_url", currentData.image_url);
      form.setValue("is_available", currentData.is_available.toString());
      setPreview({
        file: new File([], currentData.image_url as string),
        displayUrl: currentData.image_url as string,
      });
    }
  }, [currentData]);
  return (
    <Dialog
      open={open}
      onOpenChange={handleChangeAction}
    >
      <FormMenu
        form={form}
        isLoading={isPendingUpdateMenu}
        type='Update'
        onSubmit={onSubmit}
        preview={preview}
        setPreview={setPreview}
      />
    </Dialog>
  );
}
