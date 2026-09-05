import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const ButtonMain = ({ children, href, className }: Props) => {
  return (
    <Link
      href={href}
      className={`group  inline-block bg-accent px-6 py-3 text-sm font-semibold text-black ${className}`}
    >
      <div className="flex items-center justify-center gap-3">
        <span>{children}</span>

        <BsArrowRight className="transition-transform  group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ButtonMain;
