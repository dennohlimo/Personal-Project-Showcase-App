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

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPastries(data))
      .catch((err) => console.error("Something went wrong", err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop pastries={pastries} />} />
        <Route path="shop/:id" element={<PastryDetail />} />
        <Route path="admin" element={<AdminPortal />} />
      </Route>
    </Routes>
  );
}

export default App;
