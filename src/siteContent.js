import sourceHtml from "../pandey_epigen_lab_FINAL-3.html?raw";

const INTERNAL_ROUTE_MAP = {
  "#hero": "/",
  "#pillars": "/",
  "#process": "/",
  "#testimonials": "/",
  "#about": "/about",
  "#expertise": "/about",
  "#b2b": "/about",
  "#services": "/services",
  "#regulatory": "/regulatory",
  "#forum": "/forum",
  "#insights": "/knowledge-base",
  "#contact": "/contact",
};

function transformHtml(fragment) {
  if (!fragment || typeof document === "undefined") return fragment || "";

  const template = document.createElement("template");
  template.innerHTML = fragment;

  template.content.querySelectorAll("a").forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    if (href.startsWith("#")) {
      const mappedRoute = INTERNAL_ROUTE_MAP[href];
      if (mappedRoute) anchor.setAttribute("href", mappedRoute);
    }

    if (anchor.getAttribute("target") === "_blank" && !anchor.getAttribute("rel")) {
      anchor.setAttribute("rel", "noopener noreferrer");
    }
  });

  return template.innerHTML;
}

function parseSiteContent() {
  if (typeof DOMParser === "undefined") {
    return {
      styleText: "",
      navHtml: "",
      mobileMenuHtml: "",
      footerHtml: "",
      trustBarHtml: "",
      sections: {},
    };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(sourceHtml, "text/html");
  const styleText = doc.querySelector("style")?.textContent || "";

  const getHtml = (selector) => doc.querySelector(selector)?.outerHTML || "";
  const section = (id) => getHtml(`section#${id}`);

  return {
    styleText,
    navHtml: transformHtml(getHtml("nav")),
    mobileMenuHtml: transformHtml(getHtml("#mobile-menu")),
    footerHtml: transformHtml(getHtml("footer")),
    trustBarHtml: transformHtml(getHtml(".trust-bar")),
    sections: {
      hero: transformHtml(section("hero")),
      pillars: transformHtml(section("pillars")),
      about: transformHtml(section("about")),
      services: transformHtml(section("services")),
      regulatory: transformHtml(section("regulatory")),
      expertise: transformHtml(section("expertise")),
      b2b: transformHtml(section("b2b")),
      insights: transformHtml(section("insights")),
      forum: transformHtml(section("forum")),
      process: transformHtml(section("process")),
      testimonials: transformHtml(section("testimonials")),
      contact: transformHtml(section("contact")),
    },
  };
}

export const SITE_CONTENT = parseSiteContent();
