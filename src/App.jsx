import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import AdminPortal from "./components/AdminPortal";
import Shop from "./components/Shop";
import PastryDetail from "./components/PastryDetail";

function App() {
  const [pastries, setPastries] = useState([]);
  const url = "http://localhost:3000/pastries";

  //For Get Request to fetch all pastries from the backend
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPastries(data))
      .catch((err) => console.error("Something went wrong", err));
  }, []);

  //For Delete Request to delete a pastry from the backend
  function deletePastry(id) {
    fetch(`${url}/${id}`, { method: "DELETE" })
      .then(() => setPastries(pastries.filter((p) => p.id !== id)))
      .catch((err) => console.error("Something went wrong", err));
  }
  //For Create Request to create a pastry to the backend
  function addPastry(newPastry) {
    fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newPastry),
    })
      .then((res) => res.json())
      .then((data) => setPastries([...pastries, data]))
      .catch((err) => console.error("Error:", err));
  }
  //For Update Request to update a pastry from the backend
  function updatePastry(updatedPastry) {
    fetch(`${url}/${updatedPastry.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedPastry),
    })
      .then((res) => res.json())
      .then((data) =>
        setPastries(pastries.map((p) => (p.id === data.id ? data : p))),
      )
      .catch((err) => console.error("Error:", err));
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop pastries={pastries} />} />
        <Route path="shop/:id" element={<PastryDetail pastries={pastries} />} />
        <Route
          path="admin"
          element={
            <AdminPortal
              onDelete={deletePastry}
              updatePastry={updatePastry}
              addPastry={addPastry}
              pastries={pastries}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
