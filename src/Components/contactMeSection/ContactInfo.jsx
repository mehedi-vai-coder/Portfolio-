import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="md.mehedihasan27bd@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="01310715382" Image={FiPhone} />
      <SingleInfo text="Noakhali, Basurhat" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
