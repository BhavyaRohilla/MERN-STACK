import { useState } from "react";
import "./nestedfaq.css";

const faqs = [
  {
    category: "React Basics",
    questions: [
      {
        id: 1,
        q: "What is JSX?",
        a: "JSX is a syntax extension for JavaScript.",
      },
      {
        id: 2,
        q: "What is a component?",
        a: "Reusable UI building block in React.",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        id: 3,
        q: "What is closure?",
        a: "A closure is a function with preserved scope.",
      },
      {
        id: 4,
        q: "Difference between var, let, const?",
        a: "Scope and mutability rules differ.",
      },
    ],
  },
];

const NestedFaq = () => {
  const [active, setActive] = useState({});

  function handleToggle(id) {
    setActive((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleCollapse() {
    setActive({});
  }

  function handleExpand() {
    const allTrue = {};
    faqs.forEach((el) => {
      el.questions.forEach((q) => {
        allTrue[q.id] = true;
      });
    });
    setActive(allTrue);
  }

  return (
    <div>
      <h1>FAQ</h1>
      <button onClick={handleExpand}>Expand All</button>
      <button onClick={handleCollapse}>Collapse All</button>
      <Section faqs={faqs} handleToggle={handleToggle} active={active} />
    </div>
  );
};

function Section({ faqs, handleToggle, active }) {
  return (
    <div className="main-container">
      {faqs.map((data) => (
        <div key={data.category}>
          <p>{data.category}</p>
          <Question
            ques={data.questions}
            handleToggle={handleToggle}
            active={active}
          />
        </div>
      ))}
    </div>
  );
}

function Question({ ques, handleToggle, active }) {
  return (
    <div>
      {ques.map((q) => (
        <div key={q.id}>
          <p
            className={`question ${active[q.id] ? "active" : ""}`}
            onClick={() => handleToggle(q.id)}
          >
            {q.q}
          </p>
          <div className={`answer ${active[q.id] ? "show" : ""}`}>
            {active[q.id] && <p>{q.a}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NestedFaq;
