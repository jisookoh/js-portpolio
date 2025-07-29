"use client";

import { useMemo } from "react";
import { useModal } from "@app/hooks";
import { ModalType } from "./types";
import { ConfirmModal } from "./ui/ConfirmModal";
import { InformationModal } from "./ui/InformationModal";

const MODAL_COMPONENTS: Record<ModalType, React.ComponentType<any>> = {
  confirm: ConfirmModal,
  information: InformationModal,
};

export const ModalOutlet = () => {
  const { modals } = useModal();

  const ModalComponent = useMemo(
    () =>
      modals.map(({ id, type, props }) => {
        const ModalComponent = MODAL_COMPONENTS[type];
        return <ModalComponent key={id} {...props} />;
      }),
    [modals]
  );

  return <>{ModalComponent}</>;
};
