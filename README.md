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
  - **Slate Coasters** is a Fabrication work category at `/laser-studio/#slate-coasters`. The finished portrait is featured first and the original photo sequence can be expanded. Material presets and test notes are grouped under Laser Photo Studio.
  - **Fabrication is a homepage category.** Laser Photo Studio has a card linking to its GitHub application repository and its detailed workflow overview at `laser-studio/index.html`. Red Hill documents the related physical tests.
  - The status badge is `badge live`, `badge dev` or plain `badge` (prototype).
  - Emberwake and Smoke Cult appear immediately above Tboy450 RPG, with playable-site and public-code links.
  - **From the workshop** shows laser-engraved wood, metal and a completed Artemis’s Place slate portrait, an engraving-process photo and the fitted handguard prototype. It links to the dedicated [Woodworking & Woodcraft](woodworking/index.html) and [Laser Studio](laser-studio/index.html) pages. The handguard comparison credits 3D Print Studio VA for printing.
  - `laser-studio/index.html`: why Laser Photo Studio was created (clearer controls and useful adjustment), implemented workshop-build progress, image preparation, placement, job checks and recovery. Includes six actual Artemis’s Place slate-coaster photographs, a separately labelled digital dot map and an accessible photo viewer. The completed physical sample is documented; exact job-to-photo settings, actual run time and repeatability remain open. Links to physical pine/card/tin samples and unfinished app work remain explicit.
  - `woodworking/index.html`: woodcraft overview using the existing pine engraving samples; grain, preparation and finish topics are identified as active development rather than completed claims.
  - `red-hill/index.html`: one Red Hill project page covering product/material development plus packaging and laser-marking tests. Includes the matched94mm finished slate sample/run, proposed product tiers and a cited Local roots chapter distinguishing family recollection from documentary regional history. “Forest Products” is treated as a test label within Red Hill, not a separate project page.
  - **Early work & experiments** is the collapsible list of beginner repositories.
  - List only **public** repositories; private ones stay off on purpose.
  - Four public repositories are also left off on purpose: `Rblox-game` (an empty duplicate of
    `Roblox-game`), plus `youtube-hidden-video-return`, `rips-pokemon` and `123` (personal projects, at the
    owner's request).
- `assets/site.css` and `assets/site.js`: styles, the filters, the header counts and the GitHub dates.
  The page works without scripts.
- `assets/red-hill-player.js` and `assets/red-hill-player.css`: compact music controls reused by Red Hill and the main portfolio. The homepage supplies its own Explorations track metadata and uses `assets/hub-player.css` for cyan styling. Both start at75%; the homepage repeats its single selected track. Credits/provenance: [portfolio music](assets/audio/portfolio/README.md).
- `assets/shots/`: card images, 800 × 500 WebP, with 1280 × 720 `-wide` versions for featured cards.
  Live sites were captured with headless Edge. When adding a project, add a screenshot in the
  same size.
- `assets/workshop/`: optimized WebP photos for the workshop row and case studies. The Artemis slate photographs retain their original composition and aspect ratios; [their provenance](assets/workshop/ARTEMIS-SLATE-SOURCES.md) distinguishes them from digital preparation.
- `assets/studio-gallery.js`: keyboard/touch photo viewer on the Laser Studio page, with direct-image links when JavaScript is unavailable.
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
