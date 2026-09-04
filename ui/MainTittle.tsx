type Props = {
  children: React.ReactNode;
  className?: string;
};

const MainTitle = ({ children, className }: Props) => {
  return (
    <h2 className={`text-4xl font-heading tracking-tight ${className}`}>
      {children}
    </h2>
  );
};

export default MainTitle;
