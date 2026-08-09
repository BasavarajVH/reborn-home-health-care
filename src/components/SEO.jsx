import { useEffect } from "react";

const SITE_URL = "https://www.rebornhomecare.in";

function SEO({
  title,
  description,
  path = "/",
  image = "/images/about.jpg",
}) {
  useEffect(() => {
    const fullTitle = title.includes("Reborn Home Care")
      ? title
      : `${title} | Reborn Home Care`;

    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

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

    setMeta("description", description);

    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:type", "website");
    setProperty("og:site_name", "Reborn Home Care");
    setProperty("og:image", `${SITE_URL}${image}`);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}${image}`);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, path, image]);

  return null;
}

export default SEO;