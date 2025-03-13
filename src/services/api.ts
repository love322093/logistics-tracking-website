import axios from 'axios';

const API_BASE_URL = 'http://xwtd.rtb56.com/webservice/PublicService.asmx/ServiceInterfaceUTF8'; // 替换为实际的API基础URL

export const trackShipment = async (trackingNumber: string, language: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/track`, {
            trackingNumber,
            language
        });
        return response.data;
    } catch (error) {
        console.error('Error tracking shipment:', error);
        throw error;
    }
};