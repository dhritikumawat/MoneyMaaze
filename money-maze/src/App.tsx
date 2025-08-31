import React from "react";
import ExampleComponent from "./components/ExampleComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold">Welcome to My React App</h1>
      <ExampleComponent
        title="Hello World"
        description="This is an example component using TypeScript and Tailwind CSS."
      />
    </div>
  );
};

export default App;
