# Tboy450.github.io

## Website update plan

The owner's website-specific working checklist and priority order are in [UPDATE_CHECKLIST.md](UPDATE_CHECKLIST.md). Track mobile and Solar System access first, followed by homepage presentation, demonstrations, project pages, gallery and HASK improvements.

Home page for **https://tboy450.github.io/**: Tristan Boyd Hash's (Tboy450) project hub and the
HASK - Hybridized Business Solutions portfolio. It links each public project's website and code.

- `index.html`: the page.
  - **All projects** is a card per project, in this order: physical-output projects (fabrication),
    then the featured Dragonfly and Swarmfall row, then games, the Assets & Environments Lab and side projects. Each card's `data-cat` sets its filter
    (`simulations`, `games`, `fabrication`, `research` or `tools`), and `data-repo` names its GitHub
    repository for the "updated X ago" date.
  - The status badge is `badge live`, `badge dev` or plain `badge` (prototype).
  - **From the workshop** shows laser-engraved pieces.
  - **Early work & experiments** is the collapsible list of beginner repositories.
  - List only **public** repositories; private ones stay off on purpose.
  - Four public repositories are also left off on purpose: `Rblox-game` (an empty duplicate of
    `Roblox-game`), plus `youtube-hidden-video-return`, `rips-pokemon` and `123` (personal projects, at the
    owner's request).
- `assets/site.css` and `assets/site.js`: styles, the filters, the header counts and the GitHub dates.
  The page works without scripts.
- `assets/shots/`: card images, 800 × 500 WebP, with 1280 × 720 `-wide` versions for featured cards.
  Live sites were captured with headless Edge. When adding a project, add a screenshot in the
  same size.
- `assets/workshop/`: 800 × 600 WebP photos for the workshop row.
- `assets/hask-emblem.webp` and `.png`: the HASK logo emblem, cut out of the supplied HASK artwork. The
  artwork's lettering misspells "Hybridized", so the page puts a text wordmark beside the emblem.
- `assets/og-image.jpg`, `favicon-32.png`, `favicon-192.png` and `apple-touch-icon.png`: the share
  preview for LinkedIn and other sites, plus the browser icons, all carrying the emblem.
- `404.html`: project addresses are case-sensitive, and phones often capitalize the first
  letter. This page sends mistyped or shortened project addresses (for example
  `/Dragonfly-titan-gcs-demo/` or `/dragonfly`) to the right site.
- `robots.txt` and `sitemap.xml`: help search engines find the home page and the project sites.

GitHub Pages publishes this repository automatically from the `main` branch.
Record every change in [CHANGELOG.md](CHANGELOG.md), signed with who made it.
