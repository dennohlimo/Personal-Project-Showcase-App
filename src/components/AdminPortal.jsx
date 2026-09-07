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

    // editingId being set is what tells this form "you're editing, not
    // creating" The form will either call the updatePastry function or the addPastry function based on whether editingId is set or not.

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
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Admin Portal</h1>
        <button
          onClick={cancelEdit}
          className="rounded bg-amber-600 px-4 py-2 font-semibold text-white hover:bg-amber-700"
        >
          Add Item
        </button>
      </div>

      <div className="mb-6 rounded bg-white p-4 shadow">
        <h3 className="mb-3 text-lg font-bold">
          {editingId ? "Edit Item" : "Add New Item"}
        </h3>
        <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">
          <input
            name="name"
            placeholder="Item Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            name="ingredients"
            placeholder="Ingredients (e.g. Flour, Butter, Sugar)"
            value={form.ingredients}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            name="allergens"
            placeholder="Allergens (e.g. Wheat, Milk, Eggs)"
            value={form.allergens}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <div className="flex gap-2 md:col-span-2">
            <button className="rounded bg-amber-600 px-6 py-2 font-semibold text-white hover:bg-amber-700">
              {editingId ? "Update" : "Submit"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="rounded bg-gray-200 px-6 py-2 font-semibold text-gray-800 hover:bg-gray-300"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Displays the Inventory */}
      <div className="grid gap-3 md:grid-cols-2">
        {pastries.map((pastry) => (
          <div key={pastry.id} className="rounded bg-white p-3 shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold">🥐 {pastry.name}</div>
                <div className="text-sm text-gray-500">{pastry.category}</div>
                <div className="font-bold text-amber-700">
                  ${Number(pastry.price).toFixed(2)}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => editItem(pastry)}
                  className="rounded bg-gray-200 px-3 py-1.5 hover:bg-gray-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(pastry.id)}
                  className="rounded bg-rose-100 px-3 py-1.5 text-rose-600 hover:bg-rose-200"
                >
                  Delete
                </button>
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
  );
}

export default AdminPortal;
