import { createRoot } from 'react-dom/client';
import Application from './components/application/application';

const root = createRoot(document.getElementById('app'));

root.render(<Application />);