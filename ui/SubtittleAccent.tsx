type Props = {
  children: React.ReactNode;
  classname?: string;
};

const SubtittleAccent = ({ children, classname }: Props) => {
  return (
    <p className={`text-xs uppercase tracking-widest text-accent ${classname}`}>
      {children}
    </p>
  );
};

export default SubtittleAccent;
