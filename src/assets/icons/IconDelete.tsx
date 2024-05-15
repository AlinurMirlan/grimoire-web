type Props = {
  className?: string;
};

export function IconDelete({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={className}
    >
      {" "}
      <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9.4101562 10.414062 C 9.6654063 10.414062 9.9207344 10.510578 10.115234 10.705078 L 12 12.589844 L 13.884766 10.705078 C 14.273766 10.316078 14.905922 10.316078 15.294922 10.705078 C 15.683922 11.094078 15.683922 11.726234 15.294922 12.115234 L 13.410156 14 L 15.294922 15.884766 C 15.683922 16.273766 15.683922 16.905922 15.294922 17.294922 C 14.905922 17.683922 14.273766 17.683922 13.884766 17.294922 L 12 15.410156 L 10.115234 17.294922 C 9.7262344 17.683922 9.0940781 17.683922 8.7050781 17.294922 C 8.3160781 16.905922 8.3160781 16.273766 8.7050781 15.884766 L 10.589844 14 L 8.7050781 12.115234 C 8.3160781 11.726234 8.3160781 11.094078 8.7050781 10.705078 C 8.8995781 10.510578 9.1549062 10.414062 9.4101562 10.414062 z" />
    </svg>
  );
}
