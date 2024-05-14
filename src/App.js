
import './App.css';
import {ModalProvider} from "./context/ModalProvider";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";


function App() {
  return (
    <div className="App">
        <ModalProvider>
            <MainPage/>
            <AboutPage/>
        </ModalProvider>
    </div>
  );
}

export default App;
