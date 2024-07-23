import './Oferta.css'
import AirJordan from "../../assets/Images/air-jordan.svg"
import Ellipse from "../../assets/Images/Ellipse-11.svg"


function Oferta () {

    return (
        <div className="oferta">
            <div className="imagensOferta1">
                <img id="ellipse" src={Ellipse} alt="Um ellipse na cor linear gradient"/>
                <div className="imagensOferta2">
                <img id="airJordan" src={AirJordan} alt="Um par de tênis preto com branco e alguns detalhes verde limão."/>
                </div>
            </div>
            <div className='text'>
                <p id="ofertaEspecial">Oferta especial</p>
                <h2>Air Jordan edição de <br/> colecionador</h2>
                <p id="descricao-oferta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/> aliquip</p>
                <button>Ver Oferta</button>
            </div>
        </div>
    )
}

export default Oferta;