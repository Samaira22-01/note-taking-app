import React, { useState } from 'react';

function AudioInput({ onTranscribe }) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState("");

  const startRecording = () => {
    setIsRecording(true);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscribedText(transcript);
      onTranscribe(transcript);
    };

    recognition.onend = () => setIsRecording(false);
    recognition.start();
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return (
    <div>
      <div className="recording-btns">
        <button
          className="recording-btn"
          onClick={startRecording}
          disabled={isRecording}
        >
          Start Recording
        </button>
        <button
          className="stop-btn"
          onClick={stopRecording}
          disabled={!isRecording}
        >
          Stop Recording
        </button>
      </div>
      <div>
        <strong>Transcribed Text:</strong>
        <p>{transcribedText}</p>
      </div>
    </div>
  );
}

export default AudioInput;
