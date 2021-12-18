import React from "react";
import { useState } from "react";
import Container from "../../../components/Container";
import Modal from "../../../components/Modal";
import DisplayInfo from "./DisplayInfo";
import ModalContent from "./ModalContent";
import Dashboard from "./Dashboard";
import { AiOutlineTag } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrLinkedinOption } from "react-icons/gr";
import { useEffect } from "react";
import axios from "../../../axios";

const items = [
  {
    icon: AiOutlineTag,
    value: "profession",
    name: "profession",
    display: { eng: "Profession", kh: "ការងារ" },
    placeholder: { eng: "please enter your profession.", kh: "សូមបំពេញការងាររបស់អ្នក" },
    type: "text",
    required: true,
  },
  {
    icon: MdOutlineEmail,
    value: "email",
    name: "email",
    display: { eng: "Email", kh: "អុីមែល" },
    placeholder: { eng: "please enter your email.", kh: "សូមបំពេញអុីមែលរបស់អ្នក" },
    type: "email",
    required: true,
  },
  {
    icon: BiCalendar,
    value: "date_of_birth",
    name: "date_of_birth",
    display: { eng: "Date of Birth", kh: "ថ្ងៃខែឆ្នាំកំណើត" },
    placeholder: { eng: "please enter your date of birth.", kh: "សូមបំពេញថ្ងៃខែឆ្នាំកំណើតរបស់អ្នក" },
    type: "date",
    required: true,
  },
  {
    icon: BsTelephone,
    value: "contact_number",
    name: "contact_number",
    display: { eng: "Phone Number", kh: "លេខទូរសព្ទ" },
    placeholder: { eng: "please enter your phone number.", kh: "សូមបំពេញលេខទូរសព្ទរបស់អ្នក" },
    type: "number",
    required: false,
  },
  {
    icon: GoLocation,
    value: "address",
    name: "address",
    display: { eng: "Address", kh: "អាស័យដ្ឋាន" },
    placeholder: { eng: "please enter your address.", kh: "សូមបំពេញអាស័យដ្ឋានរបស់អ្នក" },
    type: "text",
    required: false,
  },
  {
    icon: FaFacebookF,
    value: "facebook",
    name: "facebook",
    display: { eng: "Facebook", kh: "គណនីហ្វេសបុក" },
    placeholder: { eng: "please enter your facebook.", kh: "សូមបំពេញគណនីហ្វេសបុករបស់អ្នក" },
    type: "text",
    required: false,
  },
  {
    icon: GrLinkedinOption,
    value: "linkedin",
    name: "linkedin",
    display: { eng: "LinkedIn", kh: "គណនីលីងអុីន" },
    placeholder: { eng: "please enter your linkedin.", kh: "សូមបំពេញគណនីលីងអុីនរបស់អ្នក" },
    type: "text",
    required: false,
  },
];

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  useEffect(() => {
    axios.get("/user/profileInfo").then(({ data }) => setUserInfo(data));
  }, []);

  const handleChange = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  return (
    <>
      <Modal show={showModal} close={close}>
        {<ModalContent close={close} userInfo={userInfo} handleChange={handleChange} items={items} />}
      </Modal>
      <Container>
        <div className="box flex flex-col lg:flex-row gap-8 pt-8">
          <DisplayInfo showModal={open} items={items} userInfo={userInfo} />
          <Dashboard />
        </div>
      </Container>
    </>
  );
};

export default Index;
