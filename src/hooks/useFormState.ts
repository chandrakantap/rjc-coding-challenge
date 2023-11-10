import { useReducer, useState } from "react";

type FormState = {
  status: "init" | "loading" | "error" | "success";
  message?: string;
};
export function useFormState(initialData: FormState = { status: "init" }) {
  const [state, setState] = useState<FormState>(initialData);
  const setLoading = (message: string = "Loading...") => {
    setState({
      status: "loading",
      message,
    });
  };
  const setSuccess = (message?: string) => {
    setState({
      status: "success",
      message,
    });
  };
  const setError = (message?: string) => {
    setState({
      status: "error",
      message,
    });
  };
  const resetFormState = () => {
    setState({ status: "init" });
  };
  return {
    message: state.message,
    isLoading: state.status === "loading",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    resetFormState,
    setLoading,
    setSuccess,
    setError,
  };
}
