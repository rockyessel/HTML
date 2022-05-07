const cors = require('cors');
// DHL API INTEGRATION
const dhlURL =
  'https://api-eu.dhl.com/track/shipments?trackingNumber=7777777770';

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
