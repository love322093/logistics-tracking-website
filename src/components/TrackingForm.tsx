import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { fetchTrackingData } from '../services/api';

const TrackingForm: React.FC = () => {
    const { t } = useTranslation();
    const [trackingNumber, setTrackingNumber] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setResult(null);

        try {
            const data = await fetchTrackingData(trackingNumber);
            setResult(data);
        } catch (err) {
            setError(t('tracking.error'));
        }
    };

    return (
        <div className="tracking-form">
            <h2>{t('tracking.title')}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder={t('tracking.placeholder')}
                    required
                />
                <button type="submit">{t('tracking.submit')}</button>
            </form>
            {error && <p className="error">{error}</p>}
            {result && (
                <div className="result">
                    <h3>{t('tracking.result')}</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TrackingForm;