import { Link, useParams } from "react-router-dom";
import { BLOGS, BLOG_TOPICS } from "./knowledgeBaseData";

function BlogCard({ blog }) {
  return (
    <Link to={`/knowledge-base/${blog.slug}`} className="blog-card">
      <div className="blog-thumb" style={{ background: blog.gradient }}>
        <span className="blog-thumb-icon">{blog.icon}</span>
      </div>
      <div className="blog-card-body">
        <span className="blog-cat">{blog.categoryLabel}</span>
        <div className="blog-card-title">{blog.title}</div>
        <div className="blog-excerpt">{blog.excerpt}</div>
        <div className="blog-meta">
          <span>Dr. Pramod Pandey</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export function KnowledgeBasePage({ activeTopic = "all", onTopicChange }) {
  const filteredBlogs =
    activeTopic === "all"
      ? BLOGS
      : BLOGS.filter((blog) => blog.categoryId === activeTopic);

  return (
    <section id="insights" className="section">
      <div className="container">
        <div className="reveal">
          <span className="label">Knowledge Base</span>
          <div className="kus-header-bar">
            <div className="kus-brand">
              <div className="kus-logo">KB</div>
              <div>
                <div className="kus-name">
                  Knowledge <span>Base</span>
                </div>
                <div className="kus-tagline">
                  India&apos;s most honest supplement knowledge base
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "10px",
              }}
            >
              <span className="kus-domain">Independent Editorial</span>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  textAlign: "right",
                  maxWidth: "280px",
                }}
              >
                No sponsored content. No brand money. Only science, only honesty.
              </p>
            </div>
          </div>
        </div>

        <div className="blog-topics reveal">
          {BLOG_TOPICS.map((topic) => (
            <button
              key={topic.id}
              type="button"
              className={`topic-pill ${activeTopic === topic.id ? "active" : ""}`}
              onClick={() => onTopicChange(topic.id)}
            >
              {topic.label}
            </button>
          ))}
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="topics-table">
            <div className="topic-row no-border-right last">
              No posts in this topic yet. Please pick another topic.
            </div>
          </div>
        )}

        <div className="topics-table reveal">
          <span className="label">Full Blog Topic Library</span>
          <h3 className="subhead" style={{ marginBottom: "28px" }}>
            50 Topics Every Nutraceutical Founder & Consumer Must Read
          </h3>
          <div className="topics-cols">
            <div className="topics-col-head">Formulation & Science</div>
            <div className="topics-col-head reg">Regulation & Compliance</div>
            <div className="topics-col-head biz">Business, Market & Consumer</div>

            <div className="topic-row">1. Bioavailability 101: Why Most Supplements Do Nothing</div>
            <div className="topic-row">18. FSSAI vs FDA: What Exporters Must Know in 2025</div>
            <div className="topic-row no-border-right">35. How to Launch a Supplement Brand Under ₹25 Lakhs</div>

            <div className="topic-row">2. Protein Powder: Whey vs Plant vs Casein — The Real Science</div>
            <div className="topic-row">19. GMP Certification Step by Step for Indian Manufacturers</div>
            <div className="topic-row no-border-right">36. Private Label Supplements: Complete Business Model Guide</div>

            <div className="topic-row">3. The Truth About Proprietary Blends on Supplement Labels</div>
            <div className="topic-row">20. HACCP Implementation for Nutraceutical Plants</div>
            <div className="topic-row no-border-right">37. Nutraceutical Export from India: Opportunities & Pitfalls</div>

            <div className="topic-row">4. Collagen: Type I vs II vs III vs Marine — What You Actually Need</div>
            <div className="topic-row">21. Label Claims That Will Get Your Product Rejected by FSSAI</div>
            <div className="topic-row no-border-right">38. Competitive Analysis in the Indian Supplement Market 2025</div>

            <div className="topic-row">5. BCAA Ratios — 2:1:1 vs 4:1:1: The Science Explained</div>
            <div className="topic-row">22. How to Prepare a FSSAI Product Approval Dossier</div>
            <div className="topic-row no-border-right">39. D2C vs B2B Supplement Business: Honest Comparison</div>

            <div className="topic-row">6. Nitrogen Flushing: The Under-Used Tool for Supplement Shelf Life</div>
            <div className="topic-row">23. Adulterants in Indian Supplement Raw Materials — Red Flags</div>
            <div className="topic-row no-border-right">40. Ingredient Sourcing Networks in India: What to Know</div>

            <div className="topic-row">7. KSM-66 vs Sensoril vs Raw Ashwagandha: Epigenetic Evidence</div>
            <div className="topic-row">24. Stability Testing Protocol for Nutraceuticals India</div>
            <div className="topic-row no-border-right">41. How Supplement Startups Should Find a Manufacturer</div>

            <div className="topic-row">8. Liposomal vs Standard Vitamin C: Is the Price Worth It?</div>
            <div className="topic-row">25. Clinical Trials for Supplement Claims: The Real Process</div>
            <div className="topic-row no-border-right">42. Functional Foods — The Fastest Growing Nutraceutical Segment</div>

            <div className="topic-row">9. Gut Health Supplements: Probiotics, Prebiotics, Postbiotics Explained</div>
            <div className="topic-row">26. Understanding Schedule H vs OTC Supplement Classification</div>
            <div className="topic-row no-border-right">43. How to Price Your Supplement Product Correctly</div>

            <div className="topic-row">10. Mushroom Extracts: Reishi, Lion's Mane, Cordyceps — Real Evidence</div>
            <div className="topic-row">27. Ayurvedic Drug vs Nutraceutical: Which License Do You Need?</div>
            <div className="topic-row no-border-right">44. Global Nutraceutical Market Trends 2025-2030</div>

            <div className="topic-row">11. Omega-3 Quality: EPA vs DHA, Oxidation, Bioavailability</div>
            <div className="topic-row">28. FSSAI Health Claims: What You Can and Cannot Say</div>
            <div className="topic-row no-border-right">45. Why India Will Lead the Global Nutraceutical Market by 2030</div>

            <div className="topic-row">12. Curcumin: BCM-95 vs Meriva vs Piperine — Which Absorbs Best?</div>
            <div className="topic-row">29. QA vs QC in Supplement Manufacturing — What's the Difference?</div>
            <div className="topic-row no-border-right">46. Supplement Brand Differentiation: Beyond the Label</div>

            <div className="topic-row">13. Magnesium: Glycinate vs Oxide vs Citrate — Real Talk</div>
            <div className="topic-row">30. HPLC Testing for Supplement Manufacturers: Basics Explained</div>
            <div className="topic-row no-border-right">47. Hospital & Clinical Nutraceutical Procurement: B2B Guide</div>

            <div className="topic-row">14. Epigenetics & Nutrition: How Food Switches Your Genes On and Off</div>
            <div className="topic-row">31. Certificate of Analysis (COA) Reading Guide for Brands</div>
            <div className="topic-row no-border-right">48. Supplement Business Financial Modelling for Startups</div>

            <div className="topic-row">15. Pre-Workout Science: What Works, What Is Hype, What Is Dangerous</div>
            <div className="topic-row">32. Banned Substances in Sports Nutrition — India Compliance</div>
            <div className="topic-row no-border-right">49. Digital Marketing for Nutraceutical Brands in India</div>

            <div className="topic-row">16. Liver Health Supplements: NAFLD, Silymarin, TUDCA Explained</div>
            <div className="topic-row">33. GMP Audit Preparation: A Practical Checklist</div>
            <div className="topic-row no-border-right">50. Investor Pitch Deck for a Supplement Brand — What Matters</div>

            <div className="topic-row last">17. Sleep Supplements: Melatonin, Ashwagandha, L-Theanine Evidence Review</div>
            <div className="topic-row last">34. Third-Party Testing: Why It Matters and How to Choose a Lab</div>
            <div className="topic-row no-border-right last">+ New topics added weekly</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link to="/contact" className="btn btn-primary">
              Request Full Articles List →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="section">
        <div className="container blog-post-wrap">
          <h1 className="headline" style={{ marginBottom: "18px" }}>
            Post not found
          </h1>
          <p className="body-text" style={{ marginBottom: "24px" }}>
            The blog you are trying to open does not exist.
          </p>
          <Link to="/knowledge-base" className="btn btn-primary">
            Back to Knowledge Base
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container blog-post-wrap">
        <span className="label">{blog.categoryLabel}</span>
        <h1 className="headline blog-post-title">{blog.title}</h1>
        <div className="blog-post-meta">
          <span>Dr. Pramod Pandey</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        <div className="blog-post-body">
          {blog.content.map((paragraph, index) => (
            <p key={`${blog.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
        <Link to="/knowledge-base" className="btn btn-outline">
          ← Back to Knowledge Base
        </Link>
      </div>
    </section>
  );
}
