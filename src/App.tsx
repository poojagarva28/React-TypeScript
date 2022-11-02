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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <DestructuringProps name="DestructuringProps" />
      <ExportingTypes name="Export types" />
    </div>
  );
}

export default App;
