# Tboy450.github.io

Home page for **https://tboy450.github.io/**: Tristan Boyd Hash's (Tboy450) project hub and the
HASK - Hybridized Business Solutions portfolio. It links each public project's website and code.

- `index.html`: the page.
  - **Featured** holds Dragonfly and Swarmfall.
  - **All projects** is a card per project. Each card's `data-cat` sets its filter
    (`simulations`, `games`, `fabrication`, `research` or `tools`), and `data-repo` names its GitHub
    repository for the "updated X ago" date.
  - The status badge is `badge live`, `badge dev` or plain `badge` (prototype).
  - **From the workshop** shows laser-engraved pieces.
  - **Early work & experiments** is the collapsible list of beginner repositories.
  - List only **public** repositories; private ones stay off on purpose.
- `assets/site.css` and `assets/site.js`: styles, the filters, the header counts and the GitHub dates.
  The page works without scripts.
- `assets/shots/`: card images, 800 × 500 WebP, with 1280 × 720 `-wide` versions for featured cards.
  Live sites were captured with headless Edge. When adding a project, add a screenshot in the
  same size.
- `assets/workshop/`: 800 × 600 WebP photos for the workshop row.
- `assets/og-image.jpg`, `favicon.svg`, `favicon-32.png` and `apple-touch-icon.png`: the share
  preview for LinkedIn and other sites, plus the browser icons.
- `404.html`: project addresses are case-sensitive, and phones often capitalize the first
  letter. This page sends mistyped or shortened project addresses (for example
  `/Dragonfly-titan-gcs-demo/` or `/dragonfly`) to the right site.
- `robots.txt` and `sitemap.xml`: help search engines find the home page and the project sites.

GitHub Pages publishes this repository automatically from the `main` branch.
Record every change in [CHANGELOG.md](CHANGELOG.md), signed with who made it.
