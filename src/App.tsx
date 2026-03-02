import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
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
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;