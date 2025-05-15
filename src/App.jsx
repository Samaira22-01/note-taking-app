import React, { useState } from 'react';
import NoteInput from './Components/NoteInput';
import AudioInput from './Components/AudioInput';
import NoteDisplay from './Components/NoteDisplay';
import './App.css';


function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleTranscribe = (transcribedText) => {
    setNotes((prevNotes) => [...prevNotes, transcribedText]);
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Smart Note-Taking</h1>
      <NoteInput onAddNote={handleAddNote} />
      <AudioInput onTranscribe={handleTranscribe} />
      <NoteDisplay notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;