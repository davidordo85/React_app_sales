import './App.css';
import { Routes, Route } from 'react-router';
import { IndexPage } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
