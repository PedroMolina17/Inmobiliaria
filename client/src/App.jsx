import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageCover from './components/ImageCover';
import ImageDescription from './components/ImageDescription';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageCover />}></Route>;
        <Route path="/:id" element={<ImageDescription />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
