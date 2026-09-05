type BackgroundColor = "bg-background" | "bg-background-secondary" | string;

type Props = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: BackgroundColor;
};

const SectionWrapper = ({
  children,
  className,
  backgroundColor = "bg-background",
}: Props) => {
  return (
    <div className={backgroundColor}>
      <div className={`px-6 max-w-7xl mx-auto w-full ${className ?? ""}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
