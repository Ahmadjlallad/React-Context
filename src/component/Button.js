import React from "react";
import Context from "./contexts";
class Button extends React.Component {
  // static contextType = LanguageContext;

  render = () => {
    // const text = this.context === "english" ? "submits" : "ارسال";
    return (
      <Context.Consumer>
        {({ color }) => {
          return (
            <button className={`ui button ${color}`}>
              <Context.Consumer>
                {({ language }) =>
                  language === "english" ? "submits" : "ارسال"
                }
              </Context.Consumer>
            </button>
          );
        }}
      </Context.Consumer>
    );
  };
}
export default Button;
