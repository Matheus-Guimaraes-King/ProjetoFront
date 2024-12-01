import './Produtos.css'
import cardTenis from "../../assets/Produtos/tenis-produtos.png"

export default function Produtos () {
    return (
                    <section className='destaque'>
                        <div className='caixa-de-produtoss'>
                            <div className='caixa-de-produtos'>
                                <button>
                                    <img src={cardTenis} alt="Tenis" />
                                </button>
                                <p className='tenis'>Tênis</p>
                                    <h3>K-Swiss V8 - Masculino</h3>
                                    <p className='preco'><del>$200</del> $100</p>
                            </div>
                        </div>
                    </section>
    )
}