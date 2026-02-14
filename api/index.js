export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing URL");
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://www.jiotv.com/"
      }
    });

    /* const buffer = await response.arrayBuffer();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", response.headers.get("content-type")); */
    res.status(200).send(response);

  } catch (err) {
    res.status(500).send("Proxy failed");
  }
}
