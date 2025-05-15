import React, { useState } from 'react';

function NoteInput({ onAddNote }) {
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim()) {
      onAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Type your note here..."
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default NoteInput;
