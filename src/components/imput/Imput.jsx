import React from "react";
import "./form.css";

export function Imput(props) {
  return (
    <div className="divImput">

      <label htmlFor="">{props.textLabel}</label>
      <input
        type={props.type}
        placeholder={props.digite}
        value={props.value}
        onChange={props.onChange}
      />

    </div>
  );
}

