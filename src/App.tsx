import "./App.css";
import SimpleProps from "./components/SimpleProps";
import { MoreProps } from "./components/MoreProps";
import { ArrayProp } from "./components/ArrayProp";
import Status from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import DestructuringProps from "./components/DestructuringProps";
import ExportingTypes from "./components/ExportingTypes";
import Counter from "./components/state/Counter";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import MutableRef from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

function App() {
  const personName = {
    first: "Pooja",
    last: "Garva",
  };

  const nameList = [
    {
      first: "Person",
      last: "One",
    },
    {
      first: "Person",
      last: "Two",
    },
    {
      first: "Person",
      last: "Three",
    },
  ];

  return (
    <div className="App">
      <SimpleProps name="Pooja" messageCount={20} isLoggedIn={true} />
      <MoreProps name={personName} />
      <ArrayProp names={nameList} />
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar text</Heading>
      </Oscar>
      <SimpleProps name="Pooja2" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => console.log("Button Clicked!", event, id)}
      />
      <Input
        value=""
        handleChange={(e) => {
          console.log(e);
        }}
      />
      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      <DestructuringProps name="DestructuringProps" />
      <ExportingTypes name="Export types" />
      {/* <User name="pooja" email="pooja@gmail.com" /> */}
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
