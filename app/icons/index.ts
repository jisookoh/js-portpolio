import { icons } from "./lib-icons";

type IconKey = keyof typeof icons;

export const Icon = ({ name }: { name: IconKey }) => {
  return icons[name];
};
