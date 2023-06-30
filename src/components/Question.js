import React from "react";
import Options from "./Options";

export default function Question({ dispatch, question, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options dispatch={dispatch} answer={answer} question={question} />
    </div>
  );
}
