import { useEffect, useState } from "react";

function App() {
  const [prodotti, setProdotti] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3333/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => setProdotti(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSelect = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h1>I miei prodotti</h1>
      <input
        type="text"
        placeholder="Cerca..."
        value={search}
        onChange={handleSelect}
      />
      <ul>
        {prodotti.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
