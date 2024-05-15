import { ComponentPropsWithRef, ComponentType } from "react";
import "../assets/styles/buttonIcon.css";

type Props = {
  Icon: ComponentType<{ className?: string | undefined }>;
  title: string;
  className?: string;
} & ComponentPropsWithRef<"button">;

export function ButtonIcon({ Icon, className, ...buttonProps }: Props) {
  return (
    <button className={`button_icon ${className}`} {...buttonProps}>
      <Icon />
      {buttonProps.title}
    </button>
  );
}
