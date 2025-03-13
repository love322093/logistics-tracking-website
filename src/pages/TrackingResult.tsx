import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { fetchTrackingData } from '../services/api';

const TrackingResult = () => {
    const { t } = useTranslation();
    const [trackingData, setTrackingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const trackingNumber = new URLSearchParams(window.location.search).get('trackingNumber');
        if (trackingNumber) {
            fetchTrackingData(trackingNumber)
                .then(data => {
                    setTrackingData(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setLoading(false);
                });
        } else {
            setError(t('trackingResult.noTrackingNumber'));
            setLoading(false);
        }
    }, [t]);

    if (loading) {
        return <div>{t('trackingResult.loading')}</div>;
    }

    if (error) {
        return <div>{t('trackingResult.error')}: {error.message}</div>;
    }

    return (
        <div>
            <h1>{t('trackingResult.title')}</h1>
            {trackingData ? (
                <div>
                    <h2>{t('trackingResult.details')}</h2>
                    <p>{t('trackingResult.status')}: {trackingData.status}</p>
                    <p>{t('trackingResult.location')}: {trackingData.location}</p>
                    <p>{t('trackingResult.expectedDelivery')}: {trackingData.expectedDelivery}</p>
                </div>
            ) : (
                <div>{t('trackingResult.noData')}</div>
            )}
        </div>
    );
};

export default TrackingResult;