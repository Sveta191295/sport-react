import HomePage from "../pages/Home";
import MenClothingPage from "../pages/MenClothing";
import MenShoesPage from "../pages/MenShoes";
import WomenClothingPage from "../pages/WomenClothing";
import WomenShoesPage from "../pages/WomenShoes";
import ContactPage from "../pages/Contact";


export const routes = [
    {
        path: "/",
        element: <HomePage/>
    },
    // {
    //     path: "/about",
    //     element: <About/>
    // },
    {
        path: "/men-clothing",
        element: <MenClothingPage />
    },
    {
        path: "/women-clothing",
        element: <WomenClothingPage />
    },
    {
        path: "/men-shoes",
        element: <MenShoesPage/>
    },
    {
        path: "/women-shoes",
        element: <WomenShoesPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    }



]