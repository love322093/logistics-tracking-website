import { useEffect, useState } from 'react';

const useTranslation = () => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        const lang = userLang.split('-')[0]; // Get the language code (e.g., 'en', 'zh', 'es')
        setLanguage(['en', 'zh', 'es'].includes(lang) ? lang : 'en');

        fetch(`/locales/${language}.json`)
            .then(response => response.json())
            .then(data => setTranslations(data))
            .catch(err => console.error('Error loading translations:', err));
    }, [language]);

    const t = (key) => translations[key] || key;

    return { t, language, setLanguage };
};

export default useTranslation;