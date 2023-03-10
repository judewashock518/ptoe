import React, { useState } from "react";
import './Note.css';

const Note = (props) => {

  return (
        <div className="note_border_box">
            <h2>
            <p className="name_space"><strong>{props.entry.heading}</strong></p>
            </h2>
            <p className="note_space">{props.entry.content}</p>
            <p className="date_space">{props.entry.date}</p>
            <p className="element_csv">{props.entry.element_csv}</p>
            <p className="elements_studied">{props.entry.total_elements_studied}</p>
        </div>

  );
};

export default Note;