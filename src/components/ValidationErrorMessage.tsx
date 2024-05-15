import { FieldError } from "react-hook-form";
import "../assets/styles/validationErrorMessage.css";

interface Props {
  error: FieldError | undefined;
}

export function ValidationErrorMessage({ error }: Props) {
  let errorMessage = "";
  if (error?.message) {
    errorMessage = error.message;
  }
  return <span className="validation_error_message">{errorMessage}</span>;
}
