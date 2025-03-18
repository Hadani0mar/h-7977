
import { SVGProps } from "react";
import { Github, Facebook, Instagram, Mail } from "lucide-react";

export { Github, Facebook, Instagram, Mail };

export const TiktokIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path d="M16 8v8a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0-8" />
      <path d="M22 2 L22 10" />
      <path d="M17 5.17a5 5 0 0 0 5-1.17v0" />
    </svg>
  );
};
