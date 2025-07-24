import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";
const App = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
