import email from "../../../public/images/email-icon.png";
import phone from "../../../public/images/phone-icon.png";
export const info = [
  {
    logo: phone,
    type: "213-0000-0000",
    name: "Phone Number",
  },
  {
    logo: email,
    type: "text@gmail.com",
    name: "Business Email",
  },
];

export const form = [
  {
    type: "text",
    name: "full name",
    placeholder: "your name ...",
    bb:true,
  },
  {
    type: "email",
    name: "email address",
    bb:true,
    placeholder: "your e-mail ...",
  },
  {
    type: "text",
    name: "subject",
    bb:true,
    placeholder: "subject ...",
  },
  {
    nameMessage: "message",
    bb:false,
    placeholderMessage: "your message ...",
  },
];
