import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "./contexts";
import LanguageSelector from "./LanguageSelector";

export default function App() {
  return (
    <div className="ui contender">
      <LanguageStore>
        <LanguageSelector />
        <UserCreate />
      </LanguageStore>
    </div>
  );
}
// language === "english" ? "red" : "green"
