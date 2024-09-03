import { useNavigate } from 'react-router-dom';
import bk from './assets/back.jpg';


const BackButton = () => {

    const navigate = useNavigate();

    const handleButtonNavigatetoHome = () => {
      navigate('/');
    };

    return(
        <div>
            <button onClick={handleButtonNavigatetoHome}>
              <img className='h-8 absolute top-10 left-10' src={bk} alt="Back" />
            </button>
        </div>
    )
}

export default BackButton;
