type Props = {
  className?: string;
};

export function IconBook({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      className={className}
    >
      {" "}
      <path d="M16,4c-1.657,0-3,1.343-3,3v10c0,0.552-0.448,1-1,1h0c-0.552,0-1-0.448-1-1V7c0-1.657-1.343-3-3-3H3C2.448,4,2,4.448,2,5v13 c0,1.105,0.895,2,2,2h6.277c0.346,0.595,0.984,1,1.723,1s1.376-0.405,1.723-1H20c1.105,0,2-0.895,2-2V5c0-0.552-0.448-1-1-1H16z" />
    </svg>
  );
}
