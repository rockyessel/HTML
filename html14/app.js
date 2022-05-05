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
//

// FedEx API INTEGRATION

// 'input' refers to JSON Payload
var data = JSON.stringify({
  name: 'ewerwdwsdwed',
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open('POST', 'https://apis-sandbox.fedex.com/track/v1/associatedshipments');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-locale', 'en_US');
xhr.setRequestHeader('Authorization', 'Bearer ');

xhr.send(data);
//
