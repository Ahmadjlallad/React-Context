# Create context object

```js
import { createContext } from "react";

export default createContext("english"); // * default value and its fixed
```

## the idea is the pass props down to any child component not to the direct child.

![react-context](prop-drilling-v-context.png)

### source of data

- Default value or we can provide object

- context in class declares as a static property

### change the value of context

- we have to create a new provider component in the parent component
- and pass the value to the child component

```js
<contexts.Provider value={language}>
  <UserCreate />
</contexts.Provider>
```

### get data from context

- we can use `useContext hook || this.context` or `Consumer component`

```js
class ClassName extends React.Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <h1>{this.context}</h1>
      </div>
    );
  }
}
```

other method to use context

```js
<LanguageContext.Consumer>
  {(value) => (value === "english" ? "submits" : "ارسال")}
</LanguageContext.Consumer>
```

- Consumer to access multiple deferent context values but this is true when we use `class component`
- in functional component we can use `useContext` hook to access multiple context value
