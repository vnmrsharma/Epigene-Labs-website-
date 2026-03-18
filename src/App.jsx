import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { BlogPostPage, KnowledgeBasePage } from "./KnowledgeBasePage";
import { SITE_CONTENT } from "./siteContent";

const DIVIDER_HTML = '<div class="divider"></div>';

const PAGE_BLOCKS = {
  "/": [
    SITE_CONTENT.sections.hero,
    SITE_CONTENT.trustBarHtml,
    SITE_CONTENT.sections.pillars,
    DIVIDER_HTML,
    SITE_CONTENT.sections.process,
    DIVIDER_HTML,
    SITE_CONTENT.sections.testimonials,
  ],
  "/about": [
    SITE_CONTENT.sections.about,
    DIVIDER_HTML,
    SITE_CONTENT.sections.expertise,
    SITE_CONTENT.sections.b2b,
  ],
  "/services": [SITE_CONTENT.sections.services],
  "/regulatory": [SITE_CONTENT.sections.regulatory],
  "/forum": [SITE_CONTENT.sections.forum],
  "/contact": [SITE_CONTENT.sections.contact],
};

function upsertMeta(name, content) {
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertNamedLink(key, attributes) {
  let tag = document.head.querySelector(`link[data-react-head="${key}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("data-react-head", key);
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([attr, value]) => tag.setAttribute(attr, value));
}

function HeadManager() {
  useEffect(() => {
    document.title =
      "Pandey Epigen Lab | Dr. Pramod Pandey | Nutraceutical Consultant India | FSSAI Regulatory Expert";
    upsertMeta(
      "description",
      "Pandey Epigen Lab — India's premier nutraceutical consulting lab by Dr. Pramod Pandey (Ph.D. Biochemistry). Supplement formulation, FSSAI licensing, GMP compliance, Ayurvedic product development, private label nutraceuticals, and regulatory consulting."
    );
    upsertMeta("theme-color", "#F7F5F0");
    upsertNamedLink("fonts-preconnect-1", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    });
    upsertNamedLink("fonts-preconnect-2", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    });
    upsertNamedLink("fonts-css", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap",
    });
  }, []);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-react-style", "pandey-epigen-lab");
    styleEl.textContent = SITE_CONTENT.styleText;
    document.head.appendChild(styleEl);
    return () => styleEl.remove();
  }, []);

  return null;
}

function HtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function WhatsAppWidget() {
  const whatsappHref = "https://wa.me/919897938747";

  return (
    <div className="whatsapp-widget" aria-label="WhatsApp contact widget">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget-text"
      >
        Connect on WhatsApp now
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget-button"
        aria-label="Open WhatsApp chat"
      >
        💬
      </a>
    </div>
  );
}

function RoutedPage({ path }) {
  const blocks = PAGE_BLOCKS[path] || PAGE_BLOCKS["/"];
  return (
    <>
      {blocks.map((block, index) => (
        <HtmlBlock key={`${path}-${index}`} html={block} />
      ))}
    </>
  );
}

function SiteLayout() {
  const rootRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTopic, setActiveTopic] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (!location.pathname.startsWith("/knowledge-base")) {
      setActiveTopic("all");
    }
  }, [location.pathname]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealEls = root.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const mobileMenu = root.querySelector("#mobile-menu");
    const hamburger = root.querySelector(".hamburger");
    let menuOpen = false;

    const closeMenu = () => {
      if (!mobileMenu || !hamburger) return;
      menuOpen = false;
      mobileMenu.classList.remove("open");
      const spans = hamburger.querySelectorAll("span");
      if (spans[0]) spans[0].style.transform = "";
      if (spans[1]) spans[1].style.opacity = "";
      if (spans[2]) spans[2].style.transform = "";
    };

    const toggleMenu = () => {
      if (!mobileMenu || !hamburger) return;
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle("open", menuOpen);
      const spans = hamburger.querySelectorAll("span");
      if (menuOpen) {
        if (spans[0]) spans[0].style.transform = "rotate(45deg) translate(4px, 4px)";
        if (spans[1]) spans[1].style.opacity = "0";
        if (spans[2]) spans[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
      } else {
        if (spans[0]) spans[0].style.transform = "";
        if (spans[1]) spans[1].style.opacity = "";
        if (spans[2]) spans[2].style.transform = "";
      }
    };

    const toggleFaq = (el) => {
      const item = el?.closest?.(".faq-item");
      if (!item) return;
      const isOpen = item.classList.contains("open");
      root.querySelectorAll(".faq-item").forEach((node) => node.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    };

    const handleFormSubmit = () => {
      const contactForm = root.querySelector(".contact-form");
      if (!contactForm) return;

      const textInputs = contactForm.querySelectorAll("input");
      const fullName = textInputs[0]?.value?.trim() || "";
      const company = textInputs[1]?.value?.trim() || "";
      const email = textInputs[2]?.value?.trim() || "";
      const phone = textInputs[3]?.value?.trim() || "";
      const enquiryType = contactForm.querySelector("select")?.value?.trim() || "";
      const message = contactForm.querySelector("textarea")?.value?.trim() || "";

      if (!fullName || !email || !enquiryType || !message) {
        window.alert("Please fill all required fields: Full Name, Email, Enquiry Type, and Project/Query.");
        return;
      }

      const subject = `New Enquiry: ${fullName}`;
      const body = [
        "New website enquiry details:",
        "",
        `Full Name: ${fullName}`,
        `Company / Brand: ${company || "N/A"}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || "N/A"}`,
        `Enquiry Type: ${enquiryType}`,
        "",
        "Project / Query:",
        message,
      ].join("\n");

      const mailtoUrl = `mailto:drpplabs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    };

    window.toggleMenu = toggleMenu;
    window.toggleFaq = toggleFaq;
    window.handleFormSubmit = handleFormSubmit;

    const onScrollCloseMenu = () => {
      if (menuOpen) closeMenu();
    };
    const onDocClick = (e) => {
      if (!menuOpen || !mobileMenu || !hamburger) return;
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
    };
    window.addEventListener("scroll", onScrollCloseMenu, { passive: true });
    document.addEventListener("click", onDocClick);

    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight, { passive: true });

    const routeAnchors = root.querySelectorAll('a[href^="/"]');
    const routeHandlers = [];
    routeAnchors.forEach((anchor) => {
      const handler = (e) => {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const href = anchor.getAttribute("href");
        if (!href) return;
        e.preventDefault();
        navigate(href);
        closeMenu();
      };
      anchor.addEventListener("click", handler);
      routeHandlers.push([anchor, handler]);
    });

    const hashAnchors = root.querySelectorAll('a[href="#"]');
    const hashHandlers = [];
    hashAnchors.forEach((anchor) => {
      const handler = (e) => e.preventDefault();
      anchor.addEventListener("click", handler);
      hashHandlers.push([anchor, handler]);
    });

    const navLinks = root.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isKnowledgeBase = href === "/knowledge-base" && location.pathname.startsWith("/knowledge-base");
      link.style.color = href === location.pathname || isKnowledgeBase ? "var(--accent)" : "";
    });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScrollCloseMenu);
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("resize", setViewportHeight);
      routeHandlers.forEach(([anchor, handler]) => anchor.removeEventListener("click", handler));
      hashHandlers.forEach(([anchor, handler]) => anchor.removeEventListener("click", handler));
      delete window.toggleMenu;
      delete window.toggleFaq;
      delete window.handleFormSubmit;
    };
  }, [location.pathname, navigate]);

  return (
    <main ref={rootRef} aria-label="Pandey Epigen Lab website">
      <HtmlBlock html={SITE_CONTENT.navHtml} />
      <HtmlBlock html={SITE_CONTENT.mobileMenuHtml} />
      <Routes>
        <Route path="/" element={<RoutedPage path="/" />} />
        <Route path="/about" element={<RoutedPage path="/about" />} />
        <Route path="/services" element={<RoutedPage path="/services" />} />
        <Route path="/regulatory" element={<RoutedPage path="/regulatory" />} />
        <Route
          path="/knowledge-base"
          element={<KnowledgeBasePage activeTopic={activeTopic} onTopicChange={setActiveTopic} />}
        />
        <Route path="/knowledge-base/:slug" element={<BlogPostPage />} />
        <Route path="/forum" element={<RoutedPage path="/forum" />} />
        <Route path="/contact" element={<RoutedPage path="/contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <HtmlBlock html={SITE_CONTENT.footerHtml} />
      <WhatsAppWidget />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HeadManager />
      <SiteLayout />
    </BrowserRouter>
  );
}
