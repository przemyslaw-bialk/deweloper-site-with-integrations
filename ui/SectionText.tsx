type Props = {
  children: React.ReactNode;
  classname?: string;
};

const SectionText = ({ children, classname }: Props) => {
  return (
    <p className={`text-muted mt-2 tracking-wider text-sm ${classname}`}>
      {children}
    </p>
  );
};

export default SectionText;
