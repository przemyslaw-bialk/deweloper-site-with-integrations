import FooterSectionTittle from "./FooterSectionTittle";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
const FooterContactInfo = () => {
  return (
    <div>
      <FooterSectionTittle>kontakt</FooterSectionTittle>
      <div className="flex flex-col gap-2">
        <div className="mt-2 flex items-center gap-2">
          <BsTelephone className="text-accent" />
          <p className="text-muted text-sm tracking-wide">
            <a href="tel:+48501136736">+48 501 136 736</a>
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <MdOutlineMail className="text-accent" />
          <p className="text-muted text-sm tracking-wide">
            <a href="mailto:biuro@novahome.pl">
              biuro@sprzedazdoradztwoizarzadzaniepiotrcywinski.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;
