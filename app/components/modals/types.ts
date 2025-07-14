export type ModalType = "confirm";

export interface ModalInstance {
  id: string;
  type: ModalType;
  props?: any;
}
