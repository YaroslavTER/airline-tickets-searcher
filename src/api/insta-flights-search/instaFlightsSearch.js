const instaFlightsSearch = (function() {
  const link = "https://api-crt.cert.havail.sabre.com/v1/shop/flights?";
  const token =
    "T1RLAQI4AM9oVcHHk3UkIWMSsB8pXBJWjhAkeHeJZg7VLmY1/Q3GJ4SwAADAw5KycSO4ULcDUS68oPzWlDpGmJj7yUEkPbneibHR5QQUn8Dje5cXyt/FAnBZzjjWmNWIPVccuQif6YSHkcOSnmAg/NY0PHlaHtCTu2sy+5CIhacyBSsKrZmPqPVt571UO+pDKe/RReipTESmW2nhrxf+nVe371qiAScpbXtm3712r8m5hO8ZWyEWng8cBoVuvHn4YoDP8fJ4uIW6GC2UrNc741d7NFnf3B1YoVK7VL9jdWWE7TjWZqFo7yQd/nKb";

  async function getResponce(url) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }

  async function pullData(options, action) {
    const data = await getResponce(link + options);
    const json = await data.json();
    action(json);
  }

  return {
    pullData: pullData
  };
})();

export default instaFlightsSearch;
