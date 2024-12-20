import { SITE_URL } from "@/helper";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
