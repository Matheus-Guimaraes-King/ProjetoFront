import Carrossel from "../Components/Carrossel1/Carrossel";
import Header from "../Components/Header/Header";
import Oferta from "../Components/Oferta/Oferta";
import Footer from "../Components/Footer/Footer";
import Produtos from "../Components/Produtos/Produtos"
import Destaque from "../Components/Destaque1/Destaque"
import './Produtoss.css'



function HomePage() {
    return (
        <>
            <div>
                <Header/>
                <Carrossel />
                <Destaque/>
                <div>
                <div className="produtos">
                    <Produtos />
                    <Produtos />
                    <Produtos />
                    <Produtos />
                </div>
                <div className="produtos2">
                    <Produtos />
                    <Produtos />
                    <Produtos />
                    <Produtos />
                </div>
                </div>
                <Oferta/>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;