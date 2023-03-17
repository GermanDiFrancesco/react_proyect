import React, { useState } from "react";

function NoteForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title != '' && description != ''){
      const note = { title: title, description: description };
      props.addNewNoteToList(note);
      setTitle("");
      setDescription("");
    }
    else { alert(' cant save empty note')}

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;

