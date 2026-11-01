# Change Log

Newest first. Each entry is signed with who made it, so the next person or assistant
(Claude, ChatGPT, Codex or a human) can see what was done and why.

## 2026-11-01: Add the HASK logo
- **Signed:** GitHub Copilot (Claude Opus 5.5 model)
- **What changed:**
  - Cut the HASK emblem out of the owner's artwork with Pillow and NumPy. It now appears in the header beside
    the HASK wordmark and in the "Work with HASK" section.
  - Rebuilt the favicons (32 and 192 px), the Apple touch icon and the share image around the emblem.
  - Fixed "Â·" appearing instead of "·" in the share image's tagline.
- **Why:** The owner asked for the HASK logo on the site.

## 2026-11-01: Redesign the hub
- **Signed:** GitHub Copilot (Claude Opus 5.5 model)
- **What changed:**
  - A new identity header: Tristan Boyd Hash, HASK branding, and live project counts.
  - The HASK cyan, graphite and silver palette replaces the orange.
  - An animated blueprint-grid background and an orbit graphic, both switched off for reduced-motion users.
  - Featured cards for Dragonfly and Swarmfall.
  - Screenshots on every card (captured from the live sites, or taken from each project's own art).
  - Category filters, Live / In development / Prototype badges, and "updated X ago" dates from the GitHub API.
  - New cards for the BMW F800GS handguard and a "From the workshop" laser gallery.
  - A collapsible "Early work & experiments" list and a "Work with HASK" contact section.
  - A share image, favicons, and a matching 404 page.
  - Styles and scripts moved to `assets/`.
  - Removed the YouTube Hidden Video Return listing at the owner's request, because it didn't give good results.
    Its repository stays on GitHub.
- **Why:** The owner asked for a more impressive, branded hub for LinkedIn and the HASK business.

## 2026-11-01: Add the laser engraving apps
- **Signed:** GitHub Copilot (Claude Opus 5.5 model)
- **What changed:** Added Laser Photo Studio (`laser-photo-studio`, which includes the Perimeter Check)
  and Positioning Laser (`positioning-laser`) to Design & fabrication. Both are newly public repositories.
- **Why:** The owner asked for the laser apps to be public and listed.

## 2026-11-01: Add Cornerfield Market
- **Signed:** GitHub Copilot (Claude Opus 5.5 model)
- **What changed:** Added a code card for Cornerfield Market (`cornerfield-market`) after the Roblox
  Retail Game. It's a newly public repository holding the Godot game's own history, split from
  `Roblox-game`'s `game/` folder.
- **Why:** The owner said the game is basically complete and taking its own direction, and asked for it
  to be public.

## 2026-11-01: Add a Design & fabrication section with TINEBOX C-01
- **Signed:** GitHub Copilot (Claude Opus 5.5 model)
- **What changed:** Added a "Design & fabrication" section between Websites and Code on GitHub, starting
  with TINEBOX C-01 (`tinebox`), a newly public repository.
- **Why:** The owner asked for his physical design projects to be public and listed. The laser
  engraving apps and other fabrication work can join this section.

## 2026-11-01: Add Swarmfall, 5 Senses, Assets Lab and Roblox game
- **Signed:** GitHub Copilot (Claude Opus 5.5 model)
- **What changed:** Added website cards for Swarmfall: Drone Invasion (`/dragonfly-titan-gcs-demo/invasion/`),
  5 Senses: Together to the Core (`/five-senses/`) and the Assets & Environments Lab
  (`/assets-and-environments-lab/`), plus a code card for the Roblox Retail Game. Added the three
  addresses to the sitemap, and `five-senses` and `assets-and-environments-lab` to the 404 page's
  address correction list. All new links returned HTTP 200 on November 1.
- **Why:** A reconciliation of GitHub, the live sites and the owner's project notes found these public
  projects missing from the home page. `Rblox-game` was left out because it is an empty duplicate of
  `Roblox-game`.

## 2026-10-04: Use the map's GitHub Pages website
- **Signed:** GitHub Copilot
- **What changed:** Replaced Existential Puzzle Mapper's old ChatGPT-hosted link with
  `https://tboy450.github.io/existential-puzzle-mapper/`. Added the GitHub Pages
  address to the sitemap and the map to the 404 page's address correction list.
- **Why:** Share the current, automatically published map instead of the old hosted copy.

## 2026-10-04: Add game and puzzle websites
- **Signed:** GitHub Copilot
- **What changed:** Added website and code links for White House Game: Rocket Run and
  Existential Puzzle Mapper to the homepage. Moved White House Game out of the
  code-only section to avoid listing it twice.
- **Why:** Make both public websites easier to find from the project list.

## 2026-09-29: Home page for tboy450.github.io
- **Signed:** Claude (Anthropic Claude Opus 5.5, Claude Code desktop app)
- **What changed:** Created this repository so `https://tboy450.github.io/` shows a page instead
  of a 404, listing the owner's 14 public repositories: the four with websites (Dragonfly Titan
  Simulator, Beyond the Screen: Visual Transduction, Ghost A.I. Downloads, Zoom Loop) link to
  their sites and code; the other ten link to their code. Descriptions are the repositories' own,
  or a short neutral line where a repository has none. Private repositories are not listed.
  Added a 404 page that redirects mistyped capitals and shortened project addresses, plus
  `robots.txt` and `sitemap.xml` for search engines.
- **Why:** The owner could not find the Dragonfly site from `tboy450.github.io` or on Google.
