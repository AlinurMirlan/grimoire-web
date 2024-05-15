type Props = {
  className?: string;
};

export function IconAdd({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      className={className}
    >
      {" "}
      <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M15,13h-2v2c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-2H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h2V9c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v2h2 c0.552,0,1,0.448,1,1v0C16,12.552,15.552,13,15,13z" />
    </svg>
  );
}
