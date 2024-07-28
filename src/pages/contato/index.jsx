import './index.css'
 
import { Link } from 'react-router-dom'
export default function Contato(){

    return (
        <div className='pagina-contato'>
            <h1>Contato</h1>
            <Link to= '/'>
                 <i className ='fa fa-arrow-left voltar'></i>
            </Link >
        <img className='img' src='/assets/images/conceito-de-icone-de-agenda-e-gerente_313674-479.avif'></img>
        
       
        </div>
    )
}