import { useState } from "react";
import "./challenge.css";

const questions = [
  {
    id: 1,
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language. It is used to structure content on the web.",
  },
  {
    id: 2,
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets. It is used to style and layout web pages.",
  },
  {
    id: 3,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language that allows you to create dynamic and interactive web content.",
  },
  {
    id: 4,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, especially single-page applications.",
  },
  {
    id: 5,
    question: "What is a function in JavaScript?",
    answer:
      "A function is a block of code designed to perform a particular task. It is executed when 'called'.",
  },
  {
    id: 6,
    question: "What is the DOM?",
    answer:
      "DOM stands for Document Object Model. It represents the page structure and allows JavaScript to manipulate HTML and CSS.",
  },
];

function FlashCards() {
  const [flippedIds, setFlippedIds] = useState([]);

  function handleClick(id) {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
    <div className="main">
      {questions.map((data) => {
        const isFlipped = flippedIds.includes(data.id);
        return (
          <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            key={data.id}
            onClick={() => handleClick(data.id)}
          >
            <div className="card-inner">
              <div className="card-front">{data.question}</div>
              <div className="card-back">{data.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Challenge() {
  return (
    <div className="container">
      <FlashCards />
    </div>
  );
}

export default Challenge;
