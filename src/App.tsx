import './App.css';
import ModalsProvider from './contexts/ModalsContext';
import Router from './Router';

function App() {
  return (
    <ModalsProvider>
      <Router />
    </ModalsProvider>
  );
}

export default App;
