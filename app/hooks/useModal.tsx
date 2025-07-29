import { useState, Dispatch, SetStateAction } from "react";
import { ModalInstance, ModalType } from "@app/components/modals";

const subscribers = new Set<Dispatch<SetStateAction<ModalInstance[]>>>();

let modalStore: ModalInstance[] = [];

const generateId = () => `modal_${Date.now()}`;

const updateScrollLock = () => {
  if (modalStore.length > 0) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }
};

export const useModal = () => {
  const [modals, setModals] = useState<ModalInstance[]>(modalStore);

  if (!subscribers.has(setModals)) {
    subscribers.add(setModals);
  }

  const emit = () => {
    for (const subscriber of subscribers) {
      subscriber([...modalStore]);
    }

    updateScrollLock();
  };

  const open = (type: ModalType, props: any) => {
    const id = generateId();

    modalStore.push({
      id,
      type,
      props: {
        ...props,
        onClose: () => props.onClose?.(id),
      },
    });
    emit();
    return id;
  };

  const close = (id: string) => {
    modalStore = modalStore.filter((m) => m.id !== id);
    emit();
  };

  return { modals, openModal: open, closeModal: close };
};
