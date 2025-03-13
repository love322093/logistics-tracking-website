// ...existing code...

export const fetchTrackingData = async (trackingNumber: string) => {
    const response = await fetch('http://xwtd.rtb56.com/webservice/PublicService.asmx/ServiceInterfaceUTF8', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            appToken: '665dd4685baea4d6913c224aba5849de',
            appKey: '402f8da5b5587dc9e85275a869b67e10402f8da5b5587dc9e85275a869b67e10',
            serviceMethod: 'gettrack',
            paramsJson: JSON.stringify({ tracking_number: trackingNumber }),
        }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};
