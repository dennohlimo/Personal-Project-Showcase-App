import { useState } from "react";

function AdminPortal({ onDelete, pastries, addPastry, updatePastry }) {
  const emptyForm = {
    name: "",
    description: "",
    category: "",
    price: "",
    ingredients: "",
    allergens: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  // handles input changes
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // Add or update item
  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.category.trim() ||
      !form.description.trim() ||
      !form.price ||
      !form.ingredients.trim() ||
      !form.allergens.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    const item = { ...form, price: Number(form.price) };

    if (editingId) {
      updatePastry({ ...item, id: editingId });
    } else {
      addPastry(item);
    }
    setForm(emptyForm);
    setEditingId(null);
  }

  //  Edit an existing item
  function editItem(pastry) {
    setForm({
      name: pastry.name,
      description: pastry.description,
      category: pastry.category,
      price: pastry.price,
      ingredients: pastry.ingredients || "",
      allergens: pastry.allergens || "",
    });
    setEditingId(pastry.id);
  }

  // Cancel
  function cancelEdit() {
    setForm(emptyForm);
    setEditingId(null);
  }

  return (
    <div>
      <div>
        <h1>Admin Portal</h1>
        <button onClick={cancelEdit}>Add Item</button>
        <div>
          <h3>{editingId ? "Edit Item" : "Add New Item"}</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Item Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
            />
            <input
              name="price"
              type="number"
              step="0.01"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
            />
            <input
              name="ingredients"
              placeholder="Ingredients (e.g. Flour, Butter, Sugar)"
              value={form.ingredients}
              onChange={handleChange}
            />
            <input
              name="allergens"
              placeholder="Allergens (e.g. Wheat, Milk, Eggs)"
              value={form.allergens}
              onChange={handleChange}
            />
            <input
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            />
            <button>{editingId ? "Update" : "Submit"}</button>
            {editingId && (
              <button type="button" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </form>
        </div>

        {/* Displays the Inventory */}
        <div>
          {pastries.map((pastry) => (
            <div key={pastry.id}>
              <div>
                <div>
                  <div>🥐 {pastry.name}</div>
                  <div>{pastry.category}</div>
                  <div>${Number(pastry.price).toFixed(2)}</div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => editItem(pastry)}>Edit</button>
                  <button onClick={() => onDelete(pastry.id)}>Delete</button>
                </div>
              </div>

              <div className="mt-3 text-sm">
                <p>
                  <strong>Ingredients:</strong> {pastry.ingredients}
                </p>
                <p>
                  <strong>Allergens:</strong> {pastry.allergens}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPortal;
