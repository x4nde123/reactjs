
import './index.css';
import { Link} from 'react-router-dom'
export default function App() {
  return (
    <div className="App">
     <h1>
      Curso react aula 7
     <i className='fa fa-heart'></i>
     </h1>

     <ul>
            <li>
        
                <Link to= '/contato'>ir para contato</Link>
            </li>
        </ul>

    </div>
  );
}


