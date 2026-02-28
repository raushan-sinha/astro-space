import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Feedback from "./pages/Feedback";
import Navbar from "./components/layout/Navbar";

const App: React.FC = () => {
    return (
        <main>
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;