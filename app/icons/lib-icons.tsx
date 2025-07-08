const LetterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="black"
      strokeWidth={2}
      viewBox="0 0 24 24"
      role="img"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
};

export const icons = {
  letter: <LetterIcon />,
} as const;
