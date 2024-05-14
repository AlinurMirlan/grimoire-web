import { FieldError } from "react-hook-form";

interface Props {
  error: FieldError | undefined;
}

export function ValidationErrorMessage({ error }: Props) {
  let visibility = "";
  let errorMessage = "";
  if (error?.message) {
    visibility = "";
    errorMessage = error.message;
  }
  return <span className={`${visibility}`}>{errorMessage}</span>;
}
