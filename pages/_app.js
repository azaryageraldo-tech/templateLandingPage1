import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Mode Gelap' : 'Mode Terang'}
            </button>
            <p>Ini adalah halaman utama</p>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp; 