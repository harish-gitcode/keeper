import React, { useState } from "react";

function CreateArea(prop) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function add(event) {
    prop.add(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function addNote(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={addNote}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={addNote}
          placeholder="Take a note..."
          rows="4"
        />
        <button onClick={add}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
