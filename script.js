const PROFILE = {
  github: "https://github.com/anshuldeepbajpai-dhoni",
  portfolio: "https://anshul-deep-bajpai-portfolio.vercel.app",
};

const SKILLS = [
  {
    group: "Machine learning and AI",
    tone: "blue",
    items: [
      "Supervised Learning", "Unsupervised Learning", "NLP", "Deep Learning",
      "Generative AI", "LLMs", "RAG", "Prompt Engineering", "Transformer Models",
      "Feature Engineering", "Model Evaluation", "EDA",
    ],
  },
  {
    group: "Programming and tools",
    tone: "mint",
    items: ["Python", "C", "C++", "Java", "Git & GitHub", "Jupyter Notebook"],
  },
  {
    group: "ML and DL libraries",
    tone: "butter",
    items: [
      "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "CatBoost",
      "LightGBM", "SHAP", "Optuna", "OpenCV", "MediaPipe", "ONNX Runtime",
      "Matplotlib", "Seaborn",
    ],
  },
  {
    group: "Web, APIs and backend",
    tone: "coral",
    items: ["Flask", "FastAPI", "Streamlit", "SQLAlchemy", "React", "Docker"],
  },
  {
    group: "Data and BI",
    tone: "blue",
    items: ["SQL", "PostgreSQL", "SQLite", "ChromaDB", "Power BI", "Tableau", "Excel"],
  },
  {
    group: "Generative AI tools",
    tone: "mint",
    items: ["LangChain", "Google Gemini API"],
  },
];

const PROJECTS = [
  {
    name: "NeuroTwin-AI",
    tone: "blue",
    about: "An LLM-powered digital twin with an API backend and a web front end.",
    tags: ["FastAPI", "PostgreSQL", "React", "Docker"],
    github: "https://github.com/anshuldeepbajpai-dhoni/NeuroTwin-AI",
  },
  {
    name: "Type-1 Diabetes Risk Prediction",
    tone: "mint",
    about: "Clustering plus boosted-tree models, tuned and explained, served as a Streamlit app.",
    tags: ["XGBoost", "CatBoost", "LightGBM", "Optuna", "SHAP", "Streamlit"],
    github: "https://github.com/anshuldeepbajpai-dhoni/Diabetes-Risk-Prediction-AI",
  },
  {
    name: "Bluestock Mutual Fund Analytics",
    tone: "butter",
    about: "Analysis of 46K+ NAV records and 32.8K transactions with a Power BI risk dashboard.",
    tags: ["SQL", "Power BI", "Python"],
    github: "https://github.com/anshuldeepbajpai-dhoni/Bluestock-mutual-fund-analytics",
  },
  {
    name: "Deep-packet-inspector",
    tone: "coral",
    about: "A multi-threaded C++17 deep packet inspection engine that parses PCAP files and reads TLS SNI.",
    tags: ["C++17", "PCAP", "TLS SNI", "Multi-threading"],
    github: "https://github.com/anshuldeepbajpai-dhoni/Deep-packet-inspector",
  },
  {
    name: "AI-Face-Analytics",
    tone: "blue",
    about: "Detects age, gender and emotion from faces and recommends music to match.",
    tags: ["OpenCV", "MediaPipe", "ONNX"],
    github: "https://github.com/anshuldeepbajpai-dhoni/AI-Face-Analytics",
  },
  {
    name: "Spam Email/SMS Classifier",
    tone: "mint",
    about: "An NLP classifier that flags spam messages, wrapped in a Flask app.",
    tags: ["Python", "Scikit-learn", "NLP", "Flask"],
    github: "https://github.com/anshuldeepbajpai-dhoni/spam-email-filter",
  },
];

const INTERNSHIPS = [
  {
    company: "Ei Systems",
    role: "Python with ML Intern",
    period: "Jun to Aug 2026",
    tone: "blue",
    file: "certificates/ei-systems.pdf",
  },
  {
    company: "Bluestock Fintech",
    role: "Data Analyst Intern",
    period: "Jun to Aug 2026",
    tone: "mint",
    file: "certificates/bluestock-fintech.pdf",
  },
  {
    company: "Decode Labs",
    role: "AI Intern",
    period: "Jul to Aug 2026",
    tone: "butter",
    file: "certificates/decode-labs.pdf",
  },
];

const CERTIFICATIONS = [
  { name: "Google AI Essentials Specialization", issuer: "Google", tone: "blue", file: "certificates/google-ai-essentials.pdf" },
  { name: "Oracle Certified: Agentic AI", issuer: "Oracle", tone: "coral", file: "certificates/oracle-agentic-ai.pdf" },
  { name: "Getting Started with Generative AI", issuer: "IBM", tone: "butter", file: "certificates/ibm-generative-ai.pdf" },
  { name: "Data Science Job Simulation", issuer: "BCG X (Forage)", tone: "mint", file: "certificates/bcg-x.pdf" },
  { name: "Software Engineering Job Simulation", issuer: "JPMorgan (Forage)", tone: "blue", file: "certificates/jpmorgan.pdf" },
  { name: "Analytics Job Simulation", issuer: "Deloitte (Forage)", tone: "mint", file: "certificates/deloitte.pdf" },
  { name: "Data Visualisation Job Simulation", issuer: "Tata (Forage)", tone: "butter", file: "certificates/tata.pdf" },
  { name: "Machine Learning with Python", issuer: "freeCodeCamp, about 300 hrs", tone: "coral", file: "certificates/fcc-machine-learning.pdf" },
  { name: "Data Analysis with Python", issuer: "freeCodeCamp, about 300 hrs", tone: "blue", file: "certificates/fcc-data-analysis.pdf" },
  { name: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", tone: "mint", file: "certificates/nvidia-jetson-nano.pdf" },
];

/* ==========================================================
   Code below: you should not need to touch it
   ========================================================== */

const TONES = {
  blue:   { solid: "var(--blue)",   soft: "var(--blue-soft)" },
  mint:   { solid: "var(--mint)",   soft: "var(--mint-soft)" },
  butter: { solid: "var(--butter)", soft: "var(--butter-soft)" },
  coral:  { solid: "var(--coral)",  soft: "var(--coral-soft)" },
};

const $ = (selector) => document.querySelector(selector);

const escapeHtml = (text) =>
  String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const initial = (text) => escapeHtml(text.trim().charAt(0).toUpperCase());

/* ---------- profile links and photo ---------- */
$("#linkGithub").href = PROFILE.github;
$("#linkPortfolio").href = PROFILE.portfolio;

const photo = $("#photo");
photo.addEventListener("error", () => {
  const fallback = document.createElement("div");
  fallback.className = "initials";
  fallback.textContent = "AB";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", "Anshul Deep Bajpai");
  photo.replaceWith(fallback);
});

/* ---------- skills: tabs and chips ---------- */
const tabsEl = $("#skillTabs");
const chipsEl = $("#skillChips");

function showGroup(index) {
  const group = SKILLS[index];
  const tone = TONES[group.tone];

  tabsEl.querySelectorAll(".tab").forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });

  chipsEl.innerHTML = group.items
    .map(
      (item, i) =>
        `<span class="chip is-new" style="--tone:${tone.soft}; animation-delay:${i * 25}ms">${escapeHtml(item)}</span>`
    )
    .join("");
}

SKILLS.forEach((group, index) => {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "tab";
  tab.setAttribute("role", "tab");
  tab.style.setProperty("--tone", TONES[group.tone].solid);
  tab.textContent = group.group;
  tab.addEventListener("click", () => showGroup(index));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + step + SKILLS.length) % SKILLS.length;
    showGroup(next);
    tabsEl.children[next].focus();
  });
  tabsEl.appendChild(tab);
});
showGroup(0);

/* ---------- projects ---------- */
$("#projectGrid").innerHTML = PROJECTS.map((p) => {
  const tone = TONES[p.tone];
  return `
    <article class="card clay" style="--tone:${tone.solid}">
      <div class="card__dot" aria-hidden="true">${initial(p.name)}</div>
      <h3>${escapeHtml(p.name)}</h3>
      <p class="card__meta">${escapeHtml(p.about)}</p>
      <div class="card__tags">${p.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
      <div class="card__actions">
        <a class="btn btn--small btn--blue" href="${escapeHtml(p.github)}" target="_blank" rel="noopener">View on GitHub</a>
      </div>
    </article>`;
}).join("");

/* ---------- certificate button builder ---------- */
function certButton(title, file) {
  if (!file) {
    return `<a class="btn btn--small" aria-disabled="true" role="link">Coming soon</a>`;
  }
  return `<button class="btn btn--small btn--butter cert-btn" type="button"
            data-title="${escapeHtml(title)}" data-file="${escapeHtml(file)}">View certificate</button>`;
}

/* ---------- internships ---------- */
$("#internGrid").innerHTML = INTERNSHIPS.map((item) => {
  const tone = TONES[item.tone];
  return `
    <article class="card clay" style="--tone:${tone.solid}">
      <div class="card__dot" aria-hidden="true">${initial(item.company)}</div>
      <h3>${escapeHtml(item.company)}</h3>
      <p class="card__meta">${escapeHtml(item.role)}<br />${escapeHtml(item.period)}</p>
      <div class="card__actions">${certButton(item.company + " internship certificate", item.file)}</div>
    </article>`;
}).join("");

/* ---------- certifications ---------- */
$("#certGrid").innerHTML = CERTIFICATIONS.map((item) => {
  const tone = TONES[item.tone];
  return `
    <article class="card cert clay" style="--tone:${tone.solid}">
      <div class="cert__info">
        <div class="card__dot" aria-hidden="true">${initial(item.issuer)}</div>
        <div>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.issuer)}</p>
        </div>
      </div>
      ${certButton(item.name, item.file)}
    </article>`;
}).join("");

/* ---------- certificate viewer ---------- */
const viewer = $("#viewer");
const viewerBody = $("#viewerBody");
const viewerTitle = $("#viewerTitle");
const viewerOpen = $("#viewerOpen");
let lastTrigger = null;

function openViewer(title, file, trigger) {
  lastTrigger = trigger;
  viewerTitle.textContent = title;
  viewerOpen.href = file;
  viewerBody.innerHTML = "";

  const isImage = /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(file);
  const node = document.createElement(isImage ? "img" : "iframe");
  node.src = file;
  if (isImage) {
    node.alt = title;
  } else {
    node.title = title;
    node.loading = "lazy";
  }
  viewerBody.appendChild(node);

  if (typeof viewer.showModal === "function") viewer.showModal();
  else window.open(file, "_blank", "noopener");
}

function closeViewer() {
  viewer.close();
  viewerBody.innerHTML = "";
  if (lastTrigger) lastTrigger.focus();
}

document.addEventListener("click", (event) => {
  const btn = event.target.closest(".cert-btn");
  if (btn) openViewer(btn.dataset.title, btn.dataset.file, btn);
});

$("#viewerClose").addEventListener("click", closeViewer);
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) closeViewer(); // click on the dark backdrop
});
viewer.addEventListener("cancel", () => { viewerBody.innerHTML = ""; }); // Esc key

/* ---------- count-up stats (runs once) ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-count]").forEach((el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";

  if (reduceMotion) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 900;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + (progress === 1 ? suffix : "");
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});
