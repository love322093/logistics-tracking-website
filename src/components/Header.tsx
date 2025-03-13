import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Header: React.FC = () => {
    const { t, changeLanguage } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(event.target.value);
    };

    return (
        <header>
            <h1>{t('appTitle')}</h1>
            <nav>
                <ul>
                    <li><a href="/">{t('home')}</a></li>
                    <li><a href="/tracking">{t('tracking')}</a></li>
                </ul>
            </nav>
            <select onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="es">Español</option>
            </select>
        </header>
    );
};

export default Header;