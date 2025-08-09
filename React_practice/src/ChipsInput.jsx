import React, { useState } from "react";

const ChipsInput = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  function handleKeyDown(e) {
    const trimmedValue = value.trim();
    if (e.code === "Enter" && trimmedValue !== "") {
      if (!items.includes(trimmedValue)) setItems([...items, trimmedValue]);
      setValue("");
    }

    // Delete last chip on Backspace
    else if (e.code === "Backspace" && value === "" && items.length > 0) {
      setItems(items.slice(0, -1));
    }
  }

  function handleDeleteItem(indexToRemove) {
    setItems(items.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="chip-input-container">
      <p>Chips Input</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Please type a value"
        onKeyDown={handleKeyDown}
        className="chip-input"
      />
      <div className="chip-list">
        {items.map((item, index) => (
          <Item
            key={item}
            label={item}
            onDeleteItem={() => handleDeleteItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

function Item({ label, onDeleteItem }) {
  return (
    <div className="chip">
      {label}
      <button
        onClick={onDeleteItem}
        className="chip-delete"
        aria-label={`Remove ${label}`}
      >
        X
      </button>
    </div>
  );
}

export default ChipsInput;
