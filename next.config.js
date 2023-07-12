const imageDomains = [
  "http2.mlstatic.com",
  "contents.mediadecathlon.com",
  "www.dhresource.com",
  "www.escalada.cl",
  "ultimatefitness.cl",
  "jumbo.vtexassets.com",
  "cdn.shopify.com",
  "www.chilemontana.cl",
  "img.freepik.com",
  "wallpaperaccess.com",
  "localhost",
  "backend-sportstore-production.up.railway.app",
];

const nextConfig = {
  images: {
    domains: imageDomains,
  },
  env: {
    DOMAIN_API_URL: "https://sportstoreback.onrender.com",
  },
};

module.exports = nextConfig;
