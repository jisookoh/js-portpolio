export type ModalType = "confirm" | "information";

export interface ModalInstance {
  id: string;
  type: ModalType;
  props?: any;
}
