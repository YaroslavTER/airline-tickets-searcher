const InstaFlightsSearch = (function() {
  const link = "https://api-crt.cert.havail.sabre.com/v1/";
  const token =
    "T1RLAQJXNgVxY/tjXa0QmkBLGIYaE+liuRC0/RPjJi8dPVRyE3sC5s3MAADArNol6gv8ikilkJIJ85d7hfNt4Gj0swyMBrmT3YNarD9ZRwLzE18Zk3IFiHBiU2nypIq2ICOYk/hWkj+s1hNf1WoOhQ+Zful7KUWN9ix+x1lTpPTnfgkS16iRZiQr2KahNOuNv9Ykk+VyEfkeWZXXbfmtIYgkPFKOgEQWGBaRQMMZHBfkCp3nsbZ/n/UqTP+b1tASW0sAovdTsuXLpC1cXWrqiM3xNmg+HPjhN4fpEXPsK34Juf1cWN6e1VMOJ2fo";

  async function getResponce(url) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }

  async function pullData(options, action) {
    const data = await getResponce(`${link}${options}`);
    const json = await data.json();
    return action(json);
  }

  return {
    pullData: pullData
  };
})();

export default InstaFlightsSearch;
