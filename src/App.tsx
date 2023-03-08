import './App.css';
import CoinProvider from './contexts/CoinContext';
import Router from './Router';

function App() {
  return (
    <CoinProvider>
      <Router />
    </CoinProvider>
  );
}

export default App;
