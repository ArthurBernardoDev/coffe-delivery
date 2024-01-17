import { Button } from "./components/Button";
import { ShoppingCartSimple } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <Button variant="icon">
        <ShoppingCartSimple width={22} height={22} color="white" />
      </Button>
    </>
  );
}

export default App;
