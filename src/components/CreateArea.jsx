import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(prop) {
  const [isExpanded, setExpanded] = useState(false);
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
  function expand() {
    setExpanded(true);
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
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={addNote}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          value={note.content}
          onChange={addNote}
          placeholder="Take a note..."
          rows={isExpanded ? 4 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={add}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
