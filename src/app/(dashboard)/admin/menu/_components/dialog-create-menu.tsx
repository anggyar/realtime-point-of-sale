import { zodResolver } from "@hookform/resolvers/zod";

import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Preview } from "@/types/general";

import { createMenu } from "../actions";
import { CreateMenuForm, createMenuSchema } from "@/validations/menu-validation";

import {
  INITIAL_CREATE_MENU_FORM,
  INITIAL_STATE_CREATE_MENU,
} from "@/constants/menu-constant";
import FormMenu from "./form-menu";

export default function DialogCreateMenu({ refetch }: { refetch: () => void }) {
  const form = useForm<CreateMenuForm>({
    resolver: zodResolver(createMenuSchema),
    defaultValues: INITIAL_CREATE_MENU_FORM,
  });

  const [createMenuState, createMenuAction, isPendingCreateMenu] = useActionState(
    createMenu,
    INITIAL_STATE_CREATE_MENU
  );

  const [preview, setPreview] = useState<Preview | undefined>(undefined);
  // FUNGSI SUBMIT
  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, key === "image_url" ? preview!.file ?? "" : value);
    });

    startTransition(() => {
      createMenuAction(formData);
    });
  });

  useEffect(() => {
    if (createMenuState?.status === "error") {
      toast.error("Create Menu Failed", {
        description: createMenuState.errors?._form?.[0],
      });
    }

    if (createMenuState?.status === "success") {
      toast.success("Menu Created Successfully");
      form.reset();
      setPreview(undefined);
      document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click();
      refetch();
    }
  }, [createMenuState]);
  return (
    <FormMenu
      form={form}
      isLoading={isPendingCreateMenu}
      type='Create'
      onSubmit={onSubmit}
      preview={preview}
      setPreview={setPreview}
    />
  );
}
