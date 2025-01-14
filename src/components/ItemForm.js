import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")


  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category
  })
  setName("")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
