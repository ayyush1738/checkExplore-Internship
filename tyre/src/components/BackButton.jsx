import { useNavigate } from 'react-router-dom';
import bk from './assets/back.png';

const BackButton = () => {
    const navigate = useNavigate();

    const handleButtonNavigatetoHome = () => {
        navigate('/App');
    };

    return (
        <div className="absolute left-2 top-2 md:top-12  md:left-8 z-50">
            <button 
                onClick={handleButtonNavigatetoHome}
                className="focus:outline-none"
            >
                <img 
                    className="h-10 w-7 md:h-12 md:w-12 object-contain"
                    src={bk} 
                    alt="Back" 
                />
            </button>
        </div>
    );
}

export default BackButton;
