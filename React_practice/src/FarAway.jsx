import { useState } from "react";
import "./faraway.css";

const FarAway = () => {
  const [Items, setItems] = useState([]);

  function handleDelete(id) {
    setItems(Items.filter((el) => el.id !== id));
  }
  return (
    <div className="app">
      <Header />
      <Form items={Items} setItems={setItems} />
      <Container
        items={Items}
        setItems={setItems}
        handleDelete={handleDelete}
      />
      <Footer items={Items} />
    </div>
  );
};

function Header() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ items, setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  function handleAddItem(e) {
    const trimmedDescription = description.trim();
    e.preventDefault();
    if (!trimmedDescription) {
      alert("Please Enter the item name");
      return;
    }

    const isDuplicate = items.some(
      (item) => item.description.toLowerCase() === trimmedDescription
    );

    if (isDuplicate) {
      alert("Item already Exist");
      return;
    }

    setItems([
      ...items,
      { id: Date.now(), description, quantity, packed: false },
    ]);

    setQuantity(1);
    setDescription("");
  }
  return (
    <div>
      <form className="add-form" onSubmit={handleAddItem}>
        <p>What do you need for your 😍 trip?</p>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

function Container({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  // "input" case me kuch nahi karna, original order rakhenge

  return (
    <div className="list">
      <ul>
        <List
          items={sortedItems}
          setItems={setItems}
          handleDelete={(id) =>
            setItems(items.filter((item) => item.id !== id))
          }
        />
      </ul>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
}

function Filters({ sortBy, setSortBy }) {
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">SORT BY INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION</option>
        <option value="packed">SORT BY PACKED STATUS</option>
      </select>

      <button onClick={() => window.location.reload()}>CLEAR LIST</button>
    </div>
  );
}

function List({ items, handleDelete, setItems }) {
  function handleToggle(id) {
    setItems(
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }
  return (
    <>
      {items.map((el) => (
        <li key={el.id}>
          <input
            type="checkbox"
            value={el.packed}
            onChange={() => handleToggle(el.id)}
          />
          <span style={el.packed ? { textDecoration: "line-through" } : {}}>
            {`${el.quantity} ${el.description}`}
          </span>
          <button onClick={() => handleDelete(el.id)}>❌</button>
        </li>
      ))}
    </>
  );
}

function Footer({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const length = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${length} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default FarAway;
