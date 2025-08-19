import { useState } from "react";
import "./emp.css";

const data = [
  { id: 1, name: "Amit", dept: "IT", salary: 50000, joining: "2022-01-10" },
  { id: 2, name: "Priya", dept: "HR", salary: 40000, joining: "2021-05-20" },
  { id: 3, name: "Raj", dept: "Finance", salary: 60000, joining: "2020-11-15" },
];

const EmployeeManagement = () => {
  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState({
    search: "",
    dept: "all",
    sort: "none",
  });

  function onUpdateSalary(id, newSalary) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, salary: Number(newSalary) } : item
      )
    );
  }

  const filteredItems = items
    .filter((emp) =>
      emp.name.toLowerCase().includes(filter.search.toLowerCase())
    )
    .filter((emp) =>
      filter.dept === "all" ? true : emp.dept.toLowerCase() === filter.dept
    )
    .sort((a, b) => {
      switch (filter.sort) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "salary-asc":
          return a.salary - b.salary;
        case "salary-desc":
          return b.salary - a.salary;
        case "date-asc":
          return new Date(a.joining) - new Date(b.joining);
        case "date-desc":
          return new Date(b.joining) - new Date(a.joining);
        default:
          return 0;
      }
    });

  function onDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Header />
      <Details setItems={setItems} />
      <Filters filter={filter} setFilter={setFilter} />
      <Main
        data={filteredItems}
        onDelete={onDelete}
        onUpdateSalary={onUpdateSalary}
      />
    </div>
  );
};

function Header() {
  return <h1>Employee Management Dashboard</h1>;
}

function Details({ setItems }) {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("it");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !salary || !date) {
      alert("Please fill Name Salary Date ");
      return;
    }
    setItems((items) => [
      ...items,
      { id: Date.now(), name, dept, salary: Number(salary), joining: date },
    ]);

    setName("");
    setDept("it");
    setSalary("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={dept} onChange={(e) => setDept(e.target.value)}>
        <option value="it">IT</option>
        <option value="hr">HR</option>
        <option value="finance">Finance</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
      </select>
      <input
        type="number"
        placeholder="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Filters({ filter, setFilter }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search name..."
        value={filter.search}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, search: e.target.value }))
        }
      />
      <select
        value={filter.dept}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, dept: e.target.value }))
        }
      >
        <option value="all">All</option>
        <option value="it">IT</option>
        <option value="hr">HR</option>
        <option value="finance">Finance</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
      </select>
      <select
        value={filter.sort}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, sort: e.target.value }))
        }
      >
        <option value="none">No Sort</option>
        <option value="name-asc">Name ↑</option>
        <option value="name-desc">Name ↓</option>
        <option value="salary-asc">Salary ↑</option>
        <option value="salary-desc">Salary ↓</option>
        <option value="date-asc">Joining ↑</option>
        <option value="date-desc">Joining ↓</option>
      </select>
      <button
        onClick={() => setFilter({ search: "", dept: "all", sort: "none" })}
      >
        Reset
      </button>
    </form>
  );
}

function Main({ data, onDelete, onUpdateSalary }) {
  const [changeSalary, setChangeSalary] = useState(false);
  const [editId, setEditId] = useState("");

  function handleCancel() {
    setEditId(null);
  }

  function handleSave(id) {
    onUpdateSalary(id, changeSalary);
    setEditId(null);
  }

  function handleEdit(id, currentSalary) {
    setEditId(id);
    setChangeSalary(currentSalary);
  }
  return (
    <>
      <div className="stats">
        <p>Total Employee: {data.length}</p>
        <p>Showing: {data.length}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>Salary</th>
            <th>Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.dept}</td>
              <td>
                {editId === data.id ? (
                  <input
                    type="number"
                    value={changeSalary}
                    onChange={(e) => setChangeSalary(e.target.value)}
                  />
                ) : (
                  data.salary
                )}
              </td>
              <td>{data.joining}</td>
              <td>
                {editId === data.id ? (
                  <>
                    <button onClick={() => handleSave(data.id)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                      className="action-btn edit-btn"
                      onClick={() => handleEdit(data.id, data.salary)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(data.id)}
                      className="action-btn delete-btn"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeManagement;
