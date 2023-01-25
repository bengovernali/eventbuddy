exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const body = {
    grant_type: "authorization_code",
    code: event.body.code,
    redirect_uri: "http://localhost:3000/callback/",
  };

  const headers = {
    Authorization:
      "Basic " +
      new Buffer(
        process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
      ).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const data = axios
    .post("https://accounts.spotify.com/api/token", body, { headers })
    .then((res) => {
      return res;
    });

    console.log('HI')

  return {
    data,
  };
};
