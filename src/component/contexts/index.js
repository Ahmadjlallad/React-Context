import { createContext, useState } from "react";
import { Children } from "react";
import PropTypes from "prop-types";
const Context = createContext("english"); // * default value
const LanguageStore = ({ children }) => {
  const [state, setState] = useState({ language: "english", color: "red" });
  console.log(Children.count());
  return (
    <Context.Provider value={{ ...state, setState }}>
      {children}
    </Context.Provider>
  );
};
LanguageStore.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object,
};
export { LanguageStore };
export default Context;
