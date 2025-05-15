import React from 'react';

function NoteDisplay({ notes, onDeleteNote }) {
  return (
    <div>
      <h3>Your Notes</h3>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button
              className="delete-btn"
              onClick={() => onDeleteNote(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No notes yet. Start adding some!</p>
      )}
    </div>
  );
}

export default NoteDisplay;
