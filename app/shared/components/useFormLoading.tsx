import { useTransition } from "@remix-run/react";

export const useFormLoading = () => {
  const transition = useTransition();
  return ["submitting", "loading"].includes(transition.state);
};
