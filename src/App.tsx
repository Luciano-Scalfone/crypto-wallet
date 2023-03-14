import "./App.css";
import ModalsProvider from "./contexts/ModalsContext";
import UserProvider from "./contexts/UserContext";
import Router from "./Router";

function App() {
  return (
    <ModalsProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </ModalsProvider>
  );
}

export default App;
