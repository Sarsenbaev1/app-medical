import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="main-container">
                <p>text</p>
            </div>
        </>
    );
}

export default App;
