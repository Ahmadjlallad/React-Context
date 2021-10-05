import React, { useContext } from "react";
import Context from "./contexts";
export default function LanguageSelector({ setState }) {
  const LanguageContext = useContext(Context);
  console.log(LanguageContext);
  return (
    <div>
      Select a Language
      <i
        style={{ cursor: "pointer" }}
        className="flag us"
        onClick={() =>
          LanguageContext.setState({ language: "english", color: "red" })
        }
      />
      <i
        style={{ cursor: "pointer" }}
        className="flag jo"
        onClick={() =>
          LanguageContext.setState({ language: "arabic", color: "green" })
        }
      />
    </div>
  );
}
