import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import TrackingForm from '../components/TrackingForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <header>
                <h1>{t('welcomeMessage')}</h1>
                <p>{t('description')}</p>
            </header>
            <TrackingForm />
            <Footer />
        </div>
    );
};

export default Home;