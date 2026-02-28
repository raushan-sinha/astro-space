import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Feedback from "./pages/Feedback";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";

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