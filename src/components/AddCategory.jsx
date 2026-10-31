import { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const envioDatos = (event) => {
    // Evita que recargue la pagina
    event.preventDefault();

    if (newCategory.length <= 1) return;

    setNewCategory("");

    onAddCategory(newCategory);
  };

  return (
    <form
      onSubmit={(e) => {
        envioDatos(e);
      }}
    >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={newCategory}
        onChange={(evento) => {
          setNewCategory(evento.target.value);
        }}
      />
    </form>
  );
};

export default AddCategory;
