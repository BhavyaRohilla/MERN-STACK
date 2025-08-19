import React, { useState } from "react";
import "./Accordion.css";

const faqs = [
  {
    id: 123,
    title: "Where are these chairs assembled",
    text: "They are assembled in India with premium quality control.",
  },
  {
    id: 345,
    title: "What material is used?",
    text: "We use sustainable wood and ergonomic design principles.",
  },
  {
    id: 698,
    title: "Do you offer warranty?",
    text: "Yes, we offer a 2-year replacement warranty.",
  },
];

export default function Accordion() {
  return (
    <div>
      <Acc data={faqs} />
    </div>
  );
}

function Acc({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.id}
        />
      ))}
      ;
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  const isOpen = num === curOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    ></div>
  );
}
