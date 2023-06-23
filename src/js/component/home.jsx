import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas(tareas.concat(toDo)); // darle valor introducido al array
    console.log(toDo);
    // añadir ese valor a la lista
    setToDo(""); // resetear el valor
  };

  //   const removeItem = () => {
  //     setList((current) => current.filter((tarea) => fruit.index !== index));
  //   };
  console.log(tareas);
  return (
    <div className="container my-5 d-flex justify-content-center">
      <form action="" onSubmit={handleSubmit} id="form">
        <div>
          <input
            type="text"
            onChange={(e) => {
              setToDo(e.target.value);
            }}
          />
          <button type="submit">dale</button>
        </div>
        <div>
          <ul>
            {tareas
              ? tareas.map((tarea, index) => (
                  <li key={index}>
                    {tarea}
                    <button type="button" onClick={() => removeItem(index)}>
                      X
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Home;
