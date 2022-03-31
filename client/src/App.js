import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from "./components/Header";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />

      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
