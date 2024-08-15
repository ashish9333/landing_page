import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Import App.css here

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
