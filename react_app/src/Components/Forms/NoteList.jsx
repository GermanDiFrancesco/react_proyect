import React from "react";

function NoteList(props) {
  return (
    <ul>
      {props.notes.map((note, index) => (
        <li key={index}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
