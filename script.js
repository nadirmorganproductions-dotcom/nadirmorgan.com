const WORK = [
  // --- EXISTING VIDEOS ---
  {
    title: "BBG Steppaa / EBK Jaaybo / Li Rye / EBK Leebo — Gimme That (Vlog Challenge)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=KjBhkKwT44o"
  },
  {
    title: "BBG Steppaa — (Video)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=Sb4wmWPVnKI"
  },
  {
    title: "BBG Steppaa — (Video)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=4IbJb_cV3hM"
  },
  {
    title: "PAYPIG2125 x EBK Jaaybo — Get Stupid! (Auto-generated)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=8jQGtTwzCiw"
  },
  {
    title: "OGM Freestyle — VonOff1700 (Mix by nadir.mp3)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=yu_bao_j1ns"
  },
  {
    title: "OGM Freestyle — Bak Jay (Mix by nadir.mp3)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=bjGPGvSIYH4"
  },
  {
    title: "Big Sad 1900 — (Video)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=9VjqmqpQNZo"
  },
  {
    title: "Big Sad 1900 x Teeezy — Nothing like your love (Auto-generated)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=dkTyPPlQIv0"
  },
  {
    title: "YouTube Video",
    role: "Recording/Mix/Master",
    url: "https://youtu.be/GfPjlGsx8yA"
  },
  {
    title: "YouTube Video",
    role: "Recording/Mix/Master",
    url: "https://youtu.be/Qv9qTWE5jtg"
  },
  {
    title: "Well Well Well — Episode (OGM)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=rW2aldEUw64"
  },
  {
    title: "OGM SoundCheck — Hurricane Wisdom",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=yo0TfmfiHiE"
  },

  // --- NEW ADDITIONS ---
  {
    title: "OGM Live - Lazer Dim 700 - FOREIGN (928)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=nVtwipoRHP0"
  },
  {
    title: "OGM Live - Younginsosleaze",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=Tjg6EGSWYgs"
  },
  {
    title: "OGM Live - Karrahbooo",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=N6PDM7rCjEk"
  },
  {
    title: "OGM Live - Anycia",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=GgqMhuLWn3E"
  },
  {
    title: "OGM Live - Glokk40Spaz",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=1FloAcq90Mo"
  },
  {
    title: "Well Well Well - BabyChiefDoit",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=uQPV2ZIS2MM"
  },
  {
    title: "EBK Jaaybo - Pixelated",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=tW2nr6ZhYjw"
  },
  {
    title: "Yn Jay - Aww Yeah",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=NE7NPg9FM7A"
  },
  {
    title: "YSR Gramz - Beecher Baby",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=E_PJbtcFTB8"
  },
  {
    title: "YSR Gramz - Cash Out",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=uHrqt1qpa-I"
  },
  {
    title: "YSR Gramz - Yung Sak Runner (Live)",
    role: "Recording/Mix/Master",
    url: "https://www.youtube.com/watch?v=40qEHH6bRv0"
  }
];

// Helpers
function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.replace("/", "");
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch (e) {}
  return null;
}

function ytEmbedUrl(url) {
  const id = getYouTubeId(url);
  if (!id) return null;
  // privacy-enhanced mode:
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
}

function iconExternal() {
  return `
    <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M10 14L19 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M19 14v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `;
}

function render(items) {
  const grid = document.getElementById("workGrid");
  const empty = document.getElementById("emptyState");
  grid.innerHTML = "";

  if (!items.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  for (const item of items) {
    const embed = ytEmbedUrl(item.url);
    const card = document.createElement("article");
    card.className = "work-card";

    card.innerHTML = `
      <div class="work-top">
        <div>
          <p class="work-title">${escapeHtml(item.title)}</p>
          <div class="work-meta">
            <span class="chip">${escapeHtml(item.role)}</span>
            <span class="chip">YouTube</span>
          </div>
        </div>
        <div class="work-actions">
          <a class="icon-btn" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Open on YouTube">
            ${iconExternal()}
          </a>
        </div>
      </div>
      ${embed ? `<iframe class="embed" src="${embed}" title="${escapeHtml(item.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
              : `<div class="card-body muted">Embed unavailable. <a href="${item.url}" target="_blank" rel="noreferrer">Open link</a></div>`}
    `;

    grid.appendChild(card);
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyFilters() {
  const q = (document.getElementById("search").value || "").trim().toLowerCase();
  const role = document.getElementById("roleFilter").value;

  const filtered = WORK.filter((w) => {
    const matchesRole = role === "all" ? true : w.role === role;
    const hay = `${w.title} ${w.role}`.toLowerCase();
    const matchesQuery = q ? hay.includes(q) : true;
    return matchesRole && matchesQuery;
  });

  render(filtered);
}

// init
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("roleFilter").addEventListener("change", applyFilters);

render(WORK);
