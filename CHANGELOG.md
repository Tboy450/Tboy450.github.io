# Change Log

Newest first. Each entry is signed with who made it, so the next person or assistant
(Claude, ChatGPT, Codex or a human) can see what was done and why.

## 2026-11-05: Solar system behind the header text on phones
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** On phones the solar system now sits behind the name and header text, running off the right edge,
  and takes no page space. The text stays on top but lets touches through, so planets can still be grabbed.
- **Why:** The owner wants it up beside or behind the name, as decoration, not in its own spot lower down.

## 2026-11-05: Release the mobile Solar System update
- **Signed:** Codex (OpenAI)
- **What changed:** Added versioned CSS/JavaScript URLs so returning visitors request the mobile-visible Solar System styles and existing controls. Includes Claude's mobile support, right alignment on phones and the warm SVG sun; desktop remains in its original right-hand position.
- **Why:** The owner confirmed publication after a phone screenshot showed the older deployed stylesheet, which still hid the graphic below 760 px.
- **Validation:** Final local mobile/desktop browser checks and GitHub Pages deployment verification are recorded with this release.

## 2026-11-05: Correct Solar System placement to the right
- **Signed:** Codex (OpenAI)
- **What changed:** Restored the original absolute desktop placement (`top: 120px; right: 40px`, original size). On phones the graphic stays visible below the buttons and aligns right with an automatic left margin.
- **Preserved:** The glowing SVG sun and all planet-control JavaScript; neither HTML nor JavaScript changed in this correction.
- **Why:** The owner clarified that earlier references to left meant right. This supersedes the previous left-alignment update.
- **Validation:** Source checks and local preview CSS verification; real-device and browser interaction testing remain outstanding. Not published.

## 2026-11-04: Restore left solar-system alignment on desktop and mobile
- **Signed:** Codex (OpenAI)
- **What changed:** Kept the header solar system in normal page flow below the contact buttons and aligned it to their left edge at desktop and phone sizes. Added a warm radial-gradient sun and a subtle corona using native SVG.
- **Preserved:** Claude's four planets, dragging, spring-back, flick-to-spin, sun pulse and reduced-motion logic. Planet-control JavaScript was not changed.
- **Why:** The owner's latest instruction requested left placement on both computer and mobile. This supersedes the earlier desktop-right position.
- **Validation:** See `SOLAR_LAYOUT_VERIFICATION.md` for observed browser checks. Changes remain local until separately published.

## 2026-11-04: Solar system on phones
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** The header solar system now shows on phones, left-aligned under the buttons, instead of being hidden below
  760 px. Grab areas stay about 44 px across at any size. `UPDATE_CHECKLIST.md` now describes the Solar System as the
  header graphic, as the owner clarified, rather than a separate project.
- **Why:** The owner wants it interactive and working on mobile.

## 2026-11-04: Interactive header solar system
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:**
  - Planets in the header graphic can be dragged off their orbits. A dashed tether shows the pull, and they spring
    back on release. A quick flick along the orbit spins a planet faster for a few seconds.
  - Clicking the sun sends out a pulse ring that nudges every planet outward.
  - Two more planets: a small fast inner one and a slow ringed outer one. A "Drag a planet" hint fades after first use.
  - Works with mouse and touch. Without scripts the planets keep their CSS spin. With reduced motion they stay put
    and still snap back after a drag. The graphic stays hidden below 760 px wide, as before.
- **Why:** The owner asked for the solar system visual to be slightly interactive.

## 2026-11-04: Add the website-specific update checklist
- **Signed:** Codex (OpenAI)
- **What changed:** Added `UPDATE_CHECKLIST.md` with the owner's nine website work areas, Solar System and mobile requirements, recommended priority order and completion tracking. Linked it from the README.
- **Scope:** Projects website only; the wider AI Projects & Computer master list and standalone product development stay separate. Checklist items remain unverified until implemented and checked.
- **Why:** The owner requested that the supplied website to-do list be added to this project's update checklist.

## 2026-11-03: Physical work first; hide two personal repositories
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:**
  - New order under All projects: projects with a physical output first (the handguard, TINEBOX C-01,
    Laser Photo Studio, Positioning Laser), then the Dragonfly and Swarmfall feature row, then the games, then the
    Assets & Environments Lab, then side projects, with the Existential Puzzle Mapper last.
  - The Fabrication filter button moved next to All.
  - Removed Rips Pokemon (`rips-pokemon`) and `123` from Early work. Both repositories stay on GitHub.
- **Why:** The owner wants physical work to lead, and those two read as personal projects.

## 2026-11-03: Handguard reprint photo
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** The handguard card now shows the owner's photo of the reprinted guard fitted on the F800GS,
  with a full-size "View photo" link. The STL render stays available as "View model" (`handguard-model.webp`).
- **Also:** The card says the guard was designed, modeled, mesh-checked and fitted by the owner, with a separate
  "Printing service: 3D Print Studio VA" credit line.
- **Why:** The owner supplied photos of the reprint and asked for the studio to be credited.

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
