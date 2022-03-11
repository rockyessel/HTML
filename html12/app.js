const ip = async () => {
  const response = await fetch("https://geolocation-db.com/json/");
  const myIP = await response.json();
  console.log(myIP);
  //   const ipAd = myIP.map((ip)=>ip.IPv4);
  //   console.log(ipAd)

  const ipAddress = document.getElementById("ipAddress");
  const country = document.getElementById("country");
  ipAddress.textContent = myIP.IPv4
  country.textContent= myIP.country_name
};
ip();


