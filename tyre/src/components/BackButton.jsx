import { useNavigate } from 'react-router-dom';
import bk from './assets/back.jpg';

const BackButton = () => {
    const navigate = useNavigate();

    const handleButtonNavigatetoHome = () => {
        navigate('/App');
    };

    return (
        <div className="absolute top-12  left-8 z-50">
            <button 
                onClick={handleButtonNavigatetoHome}
                className="focus:outline-none"
            >
                <img 
                    className="h-10 w-10 md:h-12 md:w-12 object-contain"
                    src={bk} 
                    alt="Back" 
                />
            </button>
        </div>
    );
}

export default BackButton;
