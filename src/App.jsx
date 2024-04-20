import {
    Route,
    Routes,
    BrowserRouter as Router,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import Blog from "./pages/Blog.jsx";
import "./style.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/fitness-design/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/fitness-design/features" element={<Features />} />
            <Route path="/fitness-design/pricing" element={<Pricing />} />
            <Route path="/fitness-design/blog" element={<Blog />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
