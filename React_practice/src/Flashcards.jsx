import { useState } from "react";
import "./flashcard.css";

const flashcards = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, developed by Facebook.",
  },
  {
    id: 2,
    question: "What are props in React?",
    answer:
      "Props are read-only inputs passed from a parent to a child component.",
  },
  {
    id: 3,
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped, let and const are block-scoped; const cannot be reassigned, let can.",
  },
  {
    id: 4,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers variables from its outer scope even after that scope has finished.",
  },
  {
    id: 5,
    question: "What does useState do in React?",
    answer:
      "useState is a hook that lets you add state to functional components.",
  },
  {
    id: 6,
    question: "Difference between == and === in JS?",
    answer:
      "== compares with type coercion, === compares without type coercion.",
  },
];

const Flashcards = () => {
  const [flipped, setFlipped] = useState({});
  function handleToggle(id) {
    setFlipped((prev) => {
      console.log("Prev state inside setState:", prev);
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  }

  return (
    <div className="container">
      <Cards items={flashcards} handleToggle={handleToggle} flipped={flipped} />
    </div>
  );
};

function Cards({ items, flipped, handleToggle }) {
  return (
    <div className="cardsContainer">
      {items.map((data) => (
        <div className="cards" key={data.id}>
          <div onClick={() => handleToggle(data.id)}>
            {flipped[data.id] ? data.answer : data.question}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flashcards;
