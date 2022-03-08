import About from "../../components/About";
import CarouselComponent from "../../components/CarouselComponent";
import ForMen from "../../components/ForMen";
import ForWomen from "../../components/ForWomen";



const HomePage = () => {
    return (
        <div >
            <CarouselComponent/>
            <About />
            <ForMen />
            <ForWomen />
        </div>
    )
}

export default HomePage;