import { useState } from "react";

import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <LoginPage />
    </main>
  );
}

export default App;
