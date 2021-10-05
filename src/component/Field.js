import React, { useContext } from "react";
import lang from "./contexts";
export default function Field() {
  const Context = useContext(lang);
  const text = Context.language === "english" ? "Name" : "ألاسم";

  return (
    <div>
      <div className="ui field">
        <label style={{ color: Context.color }}>{text}</label>
        <input name="name" autoComplete="off" />
      </div>
    </div>
  );
}
