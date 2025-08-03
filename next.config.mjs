/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "upload.wikimedia.org",      // for SVGs from Wikipedia
        "1000logos.net",             // brand logo source
        "seeklogo.com",              // alternative logo source
        "cdn-icons-png.flaticon.com" // common icon/CDN source
      ]
    }
  };
  
  export default nextConfig;
  