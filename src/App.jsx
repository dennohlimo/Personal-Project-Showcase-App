import { useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import AdminPortal from "./components/AdminPortal";
import Shop from "./components/Shop";
import PastryDetail from "./pages/PastryDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<PastryDetail />} />
        <Route path="admin" element={<AdminPortal />} />
      </Route>
    </Routes>
  );
}

export default App;
