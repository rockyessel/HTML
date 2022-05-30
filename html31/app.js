const input = document.querySelector('.input');

const api = () => {
  const getAPIData = async () => {
    const response = await fetch(
      'http://api.mediastack.com/v1/news?access_key=5d4484f4f15d75c102c2be8b44b82b77&languages=en'
    );
    const data = await response.json();
    console.log(data);

    data.map((desc) => desc.description);
  };
  getAPIData();
};
api();
