import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const ButtonSecondary = ({ children, href, className = "" }: Props) => {
  return (
    <Link
      href={href}
      className={`group mt-10 inline-flex w-fit items-center gap-10 border border-accent px-6 py-2 text-sm text-accent ${className}`}
    >
      <span className="text-sm tracking-wider">{children}</span>

      <BsArrowRight className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
};

export default ButtonSecondary;
