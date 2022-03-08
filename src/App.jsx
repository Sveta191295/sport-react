
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarouselComponent from "./components/CarouselComponent";
import Footer from "./components/Footer";
import About from "./components/About";
import ForMen from "./components/ForMen";
import ForWomen from "./components/ForWomen";
import MenClothing from "./components/MenClothing";

import { routes } from "./routes";



function App() {
  return (<Router>
  <div className="App">

<Header />
{/* <CarouselComponent />
<About />
<ForMen />
<ForWomen /> */}


<Routes >
  {routes.map((route, index) => {
    return <Route
      element={route.element}
      path={route.path}
      key={index}
    />
  })}
</Routes>  


<Footer />



</div>
  </Router>
  
  );
}

export default App;

