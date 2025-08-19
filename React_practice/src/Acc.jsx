import { useState } from "react";
import "./acc.css";

const faq = [
  {
    title: "Welcome",
    text: "This is your first account note.",
  },
  {
    title: "Profile Setup",
    text: "Add your personal details to complete your profile.",
  },
  {
    title: "Security Tips",
    text: "Use a strong password and enable two-factor authentication.",
  },
  {
    title: "Getting Started",
    text: "Explore features and customize your account settings.",
  },
];

const Acc = () => {
  return (
    <div className="container">
      <Accordion faq={faq} />
    </div>
  );
};

function Accordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);
  function handleToggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
  return (
    <div className="accordion">
      {faq.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          onToggle={() => handleToggle(i)}
          isOpen={openIndex === i}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, num, isOpen, onToggle }) {
  return (
    <div className="acc" onClick={onToggle}>
      <p>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p>{title}</p>
      <span>{isOpen ? "-" : "+"}</span>
      {isOpen && <div>{text}</div>}
    </div>
  );
}

export default Acc;
