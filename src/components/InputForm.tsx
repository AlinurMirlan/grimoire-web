import { ComponentPropsWithRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ValidationErrorMessage } from "./ValidationErrorMessage";
import "../assets/styles/inputForm.css";

type Props = {
  label: string;
  id: string;
  error?: FieldError | undefined;
  displayError?: boolean;
} & ComponentPropsWithRef<"input">;

export const InputForm = forwardRef<HTMLInputElement, Props>(function FormInput(
  { label, id, error, displayError = true, ...inputProps },
  ref
) {
  return (
    <div className="input_form">
      <label className="input_form_label">{label}</label>
      <input className="input_form_input" {...inputProps} ref={ref} id={id} />
      {displayError ? <ValidationErrorMessage error={error} /> : null}
    </div>
  );
});

InputForm.displayName = "FormInput";
