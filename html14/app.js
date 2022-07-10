// DHL API INTEGRATION

const tracking_numbers = ['5100045086', 'S100425', 'R900895'];

const dhlURL = `https://api-eu.dhl.com/track/shipments?trackingNumber=${tracking_numbers[0]}`;

const fetchData = async (dhlURL) => {
  const response = await fetch(dhlURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'DHL-API-Key': 'GahKUruGH8U3hIohRwsBg1jTlyi9WhK2',
    },
  });

  const data = await response.json();
  console.log('DHL', data);
};
fetchData(dhlURL);
