import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link='https://www.linkedin.com/in/md-mehedi-hasan-61a3a81a3/' Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/mehedi-vai-coder" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/mehedi_hasan_02_bd/?hl=en" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
