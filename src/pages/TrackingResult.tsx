import React, { useEffect, useState } from 'react';
import { fetchTrackingData } from '../services/api';

const TrackingResult = ({ trackingNumber }) => {
    const [trackingData, setTrackingData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTrackingData = async () => {
            try {
                const data = await fetchTrackingData(trackingNumber);
                setTrackingData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        getTrackingData();
    }, [trackingNumber]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!trackingData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Tracking Result</h1>
            <pre>{JSON.stringify(trackingData, null, 2)}</pre>
        </div>
    );
};

export default TrackingResult;
