type Props = {
  children: React.ReactNode;
};

const FooterSectionTittle = ({ children }: Props) => {
  return <p className="text-xs uppercase tracking-widest">{children}</p>;
};

export default FooterSectionTittle;
