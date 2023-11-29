import email_icon from "../../../../public/images/email-icon.png";
import phone_icon from "../../../../public/images/phone-icon.png";
import { HiMail } from "react-icons/hi";
import { FaMap } from "react-icons/fa";
// socails media logos
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export const info = [
  {
    text: "info@company.com",
    img: <HiMail size={25} fill="#f25525" className=" me-2" />,
  },
  {
    text: "info@company.com",
    img: <FaMap size={25} fill="#f25525" className=" me-2" />,
  },
];

export const social = [
  {
    name: "facebook",
    logo: <BsFacebook size={13} fill="white" />,
  },
  {
    name: "twitter",
    logo: <BsTwitter size={13} fill="white" />,
  },
  {
    name: "linkedin",
    logo: <BsLinkedin size={13} fill="white" />,
  },
  {
    name: "instagram",
    logo: <BsInstagram size={13} fill="white" />,
  },
];
