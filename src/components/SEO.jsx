import { useEffect } from "react";

const SITE_URL = "https://www.rebornhomecare.in";

function SEO({
  title,
  description,
  path = "/",
  image = "/images/about.jpg",
}) {
  useEffect(() => {
    // Set page title
    const fullTitle = title.includes("Reborn Home Care")
      ? title
      : `${title} | Reborn Home Care`;

    document.title = fullTitle;

    // Canonical URL
    const canonicalUrl = `${SITE_URL}${path}`;

    // Meta tag helper
    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Open Graph helper
    const setProperty = (property, content) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic SEO
    setMeta("description", description);

    // Open Graph
    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:type", "website");
    setProperty("og:site_name", "Reborn Home Care");
    setProperty("og:image", `${SITE_URL}${image}`);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}${image}`);

    // Canonical
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    // Cleanup
    return () => {
      // No cleanup required.
    };
  }, [title, description, path, image]);

  return null;
}

export default SEO;