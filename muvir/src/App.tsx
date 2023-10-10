import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            МУВЫР
            
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="light" />
        </div>
    );
}

export default App;
