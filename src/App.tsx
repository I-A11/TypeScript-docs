import Button from "./component/Button";
import ChangeValue from "./component/ChangeValue";

function App() {
  return (
    <div className="app">
      <h2>Explore How To Use TypeScript in React </h2>
      <Button disabled={true} title="Disabled btn" />
      <ChangeValue />
    </div>
  );
}

export default App;
