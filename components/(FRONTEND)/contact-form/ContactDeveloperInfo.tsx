import SubtittleAccent from "@/ui/SubtittleAccent";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const ContactDeveloperInfo = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="flex gap-3">
        <div className="w-fit p-3 border border-accent rounded-sm">
          <BsTelephone className="text-accent" />
        </div>
        <div>
          <SubtittleAccent>Zadzwoń do nas</SubtittleAccent>
          <p className="text-muted text-sm tracking-wide">
            <a href="tel:+48530034701">+48 530 034 701</a>
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-fit p-3 border border-accent rounded-sm">
          <MdOutlineMail className="text-accent" />
        </div>
        <div>
          <SubtittleAccent>Napisz do nas</SubtittleAccent>
          <p className="text-muted text-sm tracking-wide">
            <a href="mailto:biuro@novahome.pl">biuro@novahome.pl</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDeveloperInfo;
