import './colaborador.css'
import { IoCloseCircle, IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <IoCloseCircle size={25} className='deletar'
            onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                {colaborador.favorito 
                ? <IoHeartSharp {...propsFavorito} color='red' /> 
                : <IoHeartOutline {...propsFavorito}  />}
            </div>
        </div>
    </div>)
}

export default Colaborador