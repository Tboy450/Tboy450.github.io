# Change Log

Newest first. Each entry is signed with who made it, so the next person or assistant
(Claude, ChatGPT, Codex or a human) can see what was done and why.

## 2026-11-14: Clarify the Fabrication and Laser Studio page structure
- **Signed:** ChatGPT (OpenAI)
- **Site audit:** The live `main` branch has an `All projects` homepage and a `Fabrication` category; it does not contain a separate CNC page or CNC route.
- **Existing Laser Photo Studio listing:** The homepage already lists Laser Photo Studio under Fabrication and links to its GitHub application repository and the Red Hill test history.
- **Draft-page distinction:** `/laser-studio/` is a newly added, detailed portfolio overview of the laser workflow. It is not an existing CNC page or a duplicate application. The GitHub repository contains the desktop application and its install/use documentation.
- **Correction:** Keep the existing Fabrication category and Laser Photo Studio project identity. Do not create a second CNC identity or a redundant application listing.
- **Validation:** Read the live repository tree and homepage, the draft homepage and overview page, and the Laser Photo Studio repository root and README.

## 2026-11-13: Add Laser Studio and Woodworking pages; broaden Red Hill project overview
- **Signed:** ChatGPT (OpenAI)
- **New pages:** `/laser-studio/` documents the Laser Photo Studio workflow, material evidence levels, image treatments, placement, offline checks, 1% perimeter check and USB recovery. `/woodworking/` organizes existing wood-burned samples and the grain, surface-preparation and finishing work around them.
- **Homepage:** Laser Photo Studio now links to the Laser Studio overview; Red Hill is presented as one product-development project; From the workshop links to Woodworking & Woodcraft.
- **Red Hill:** Expanded the existing page to describe product/material research, presentation trials and engraving/tooling as parts of one project. “Forest Products” is treated as a wording and packaging test within Red Hill, not a separate HASK project or page. The lid history remains a test record, not a finished production claim.
- **Navigation:** Added both new pages to the sitemap and lowercase route correction.
- **Validation:** Repository writes and follow-up file reads succeeded. Browser rendering, responsive checks and image-loading checks remain pending.


## 2026-11-13: Red Hill tabs and a new contact section
- **Signed:** Claude Code (Claude Opus 5.5)
- **Red Hill page:** the long page is now five tabs: Overview, Lid tests, Business cards, From the field and
  Working with HASK.
  - Every old link still works. A link like `#cards` or `#two-tone` opens the right tab and jumps to the section.
  - Arrow keys move between tabs. Without JavaScript, the page shows every section in one column, as before.
  - The footer now invites engraving, prototype and software enquiries and says the Red Hill brand belongs to
    its founder.
- **Homepage:** "Work with HASK" is reworded for services and custom work, with four offer chips and a link to
  the Red Hill case study. The footer now has a one-line pitch, a "Start a project" link, GitHub and LinkedIn.
- **CSS:** offer chips and footer spacing in `assets/site.css`; stylesheet version bumped.

## 2026-11-13: Red Hill tone combo test
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** Added Stage 8, "How the tones interact", to the Red Hill page: one scrap lid, six passes.
  - Gold burned first survives a later fast pass; soot laid first blocks gold, so it works as a resist.
  - The new burn-in-place mode in Laser Photo Studio left only pinpoints, so small filled shapes are next.
  - A permanent dark is still unproven.
- **Images:** the results diagram (top half only, with the plan and the before and after photos), plus the lid
  before and after wiping, labelled. No location or camera data.
- **Also:** settings table row, timeline (eight stages), checklist (20 done, 4 prepared, 17 planned), next steps.
- **Source:** the jig and lid-test session's results, at the owner's request.

## 2026-11-12: Soot correction on the Red Hill page
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** The owner found that the dark grey or "charcoal" from fast passes on the reflective tin lids is
  soot. It wipes off, leaving a light frosted etch; the gold stays. Stage 7 is now "Two tones, then a wipe", and
  the page no longer says fast passes make a charcoal tone.
  - The notice, ladder text and captions now say the photos were taken before wiping.
  - The settings table, timeline, checklist and next steps now show a permanent dark tone as unproven.
  - New takeaway: "Wipe before you judge."
  - Added an after-wiping photo of the Forest Products lid next to the before photo (a frame from the owner's
    video, used with the owner's OK).
- **Source:** the owner's finding (Nov 12, about 6:48 AM), relayed by the coordinating session.

## 2026-11-12: Red Hill two-tone lids
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** Added Stage 7, "Two tones from the laser", to the Red Hill page, with three photos:
  - the Red Hill Forest Products lid in gold and charcoal (Nov 12), from the owner's full-size phone photo;
  - the same lid on the laser bed, where the colour reads darker;
  - the first two-tone lid, Matthew 6:25 in copper and charcoal (Nov 11), from the media pack, rotated upright.
- **Also:** both runs added to the settings table; the process timeline is now seven stages with "Next" on the
  same row; checklist counts 18 done, 4 prepared, 15 planned.
- **Notes:** all three are labelled test samples. The page says the Forest Products design came from an
  AI-generated mock-up, as the media pack asks. Colour words are by eye. Photos carry no location or camera data.

## 2026-11-12: Red Hill ladder colour corrected
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** The ladder's slow, hot squares are a rosy brass with coppery edges, not gold. The ladder
  never reached a true gold. Fixed the Stage 5 paragraph, the ladder photo's alt text and the close-up caption.
- **Source:** the owner's correction. The records session first relayed it as "light tan"; the owner then said
  rosy brass describes the colour better.

## 2026-11-11: Red Hill field footage from the founder
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** Added "Where the salve starts" to the Red Hill page: three muted clips filmed by the Red Hill
  founder, used with his permission as relayed by the owner.
  - **Tapping pines for resin:** 66 s.
  - **From resin to salve:** 32 s, joined from three clips.
  - **The pines:** 28 s, joined from two clips.
- **Edits:**
  - Audio removed from all clips.
  - Cut: label art with health and "100% natural" claims; a kitchen-scale reading; a laptop screen; a generated
    crate mock-up; a personal wallet; a black case on the ground.
  - Every half second was checked.
  - The letterboxed shots are part of the founder's original edit.
- **Credit:** "the Red Hill founder" (alias). The credits card now includes the field footage.
- **Sizes:** 9.6 MB, 5.5 MB and 4.1 MB. They load only on play.

## 2026-11-11: Red Hill credits, with a founder alias
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:** Added a "Who does what" credits section to the Red Hill page:
  - Red Hill Forest Products: the business, its products and its brand.
  - "The Red Hill founder": founding vision, and the harvesting and processing work behind the products.
  - HASK (Tristan Boyd Hash): business development.
  - A line saying credits describe contributions, not ownership.
  - The HASK section intro now says the business began as its founder's idea.
- **Why:** The owner asked to credit the founder with a professional alias for now. Naming him waits for his OK.

## 2026-11-11: Show both Red Hill business cards, art next to the engraved card
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:**
  - The business card section now shows both designs, Forest Products and Leather Care (White Pine). Each is shown
    as artwork, then as the engraved card on black anodized aluminum.
  - The Leather Care art is the corrected-spelling version, at the owner's request. Its wording is captioned as
    part of the design.
  - The card art was moved out of Stage 1 so it sits with the finished cards. Stage 1 points down to it.
- **Why:** The owner asked for both business card designs and both engraved cards as example work.

## 2026-11-11: Red Hill working checklist; business cards shown as finished
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:**
  - Added "The working checklist" under the Red Hill timeline:
    - 33 items in six groups: design, test engraving, measurement and records, software, production tooling,
      machine and housekeeping
    - the owner's status system: Done (with a record), Prepared (checked offline), Planned
    - a tally: 16 done, 4 prepared, 13 planned
  - The checklist is drawn from the owner's master checklist, public items only.
  - The business cards are finished pieces, not tests. The test-sample tag and "test card" wording are removed,
    and a still of the finished card is added.
  - The Red Hill business card now also appears in From the workshop on the homepage. The case study links back
    to it.
- **Kept private:** prices and quotes, equipment recommendations, partner tasks and messages, business decisions,
  orders and family-history dates.
- **Why:** The owner said the six stages didn't show how extensive the checklist really is, and that the cards are
  finished products that belong with the wider laser and CNC work.

## 2026-11-11: Rebuild the Red Hill case study with the full process and media
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:**
  - Rebuilt `red-hill/` around the process: a six-stage timeline, a table of every run's settings, and one section
    per stage (artwork, first lids, full-verse lid, software check, power and speed ladder, batch jig, test cards).
  - Added November 10 work: the 165-patch ladder, the provisional 42-pocket jig and the anodized test cards.
  - 17 photos in stage galleries (thumbnails that open full size) and three short videos (H.264, about 2.3 MB each,
    muted, `preload="none"`, never autoplay). Media copied from the owner's Red Hill media pack.
  - Every lid and card is labelled a test sample, and a notice says none is the finished product. The ladder is
    still under way.
  - Red Hill touches on this page only: slab-serif headings, a cream process panel and a brushed-metal lid.
  - The three progress-site buttons became one small link to the November 8 log.
  - Homepage Red Hill card and workshop tile reworded as tests in progress.
  - Added "How HASK takes an idea into development": six steps linking to the stages, so the page doubles as a worked
    example of HASK's development process for business ideas, not only laser work.
- **Kept off, per the records brief:** the church name, the 1837/1937 dates, the salve badge photo and its label
  claims, the partner's name and messages. Hands and table are cropped where possible.
- **Checked:** 1440 px and 375 px. Viewer, all three videos and all 17 thumbnails work. No horizontal overflow.
  About 510 KB to scroll the page; full photos and videos load only on click or play.
- **Why:** The owner said the page was missing process information and should look more professional and closer to
  the Red Hill branding.

## 2026-11-10: Publish Red Hill near the top; fix two photos
- **Signed:** Claude Code (Claude Opus 5.5)
- **What changed:**
  - Added a Red Hill Tin Lid Engraving card as the first project card, linking to the case study.
  - Replaced the salve badge photo (page header, share image, workshop tile) with the full-verse chapel lid. The
    badge photo showed the label's product claims, which aren't verified. Removed `red-hill-lid.webp` and its thumbnail.
  - The fresh-lid lettering proof now reads "FIRST BUILT 1837", matching its caption and the corrected artwork.
- **Why:** The owner asked for Red Hill to go up near the top now, with the design polish to follow.

## 2026-11-10: Update Red Hill samples and software findings

- **Signed:** Codex (OpenAI)
- Added the November 8 and 9 full-verse lid photographs with the actual pass order and the limits of comparing differently lit samples.
- Recorded the optional one-way scan setting, saved setup and position recovery, and inspection controls in the local development version. The page identifies the 77-test result as offline verification and the higher-power lid grid as a prepared diagnostic awaiting a physical result.
- Promoted the public original project log as the main report link. Relative asset paths now let the case study load its styling and photographs when opened directly as a local file, with portfolio navigation pointing to the public homepage.
- Verified normal homepage entry links, all five images, report links, and overflow at 1440, 390 and 360 px in headless Edge. Direct local-file loading also passed with the stylesheet and all images available. Desktop and phone previews were visually reviewed.

## 2026-11-09: Document the Red Hill tin lid trials

- **Signed:** Codex (OpenAI)
- Added a Red Hill case study linked from the Laser Photo Studio card and From the workshop. It shows the physical salve badge, chapel test photos, and a lettering comparison that labels the revised artwork as a digital proof.
- Updated the Laser Photo Studio card to describe the burn preview workflow demonstrated by the trials. The case study records the interrupted detail run and the fresh-lid lettering test still to be done.
- Linked the public Red Hill progress summary, project update and technical test history from the case study.
- Verified both entry points, photo loading, return navigation, and responsive layout in headless Edge at 1440, 390, and 360 px.

## 2026-11-06: Add Emberwake, Smoke Cult and more workshop examples
- **Signed:** Codex (OpenAI)
- **What changed:** Added Emberwake and Smoke Cult directly above Tboy450 RPG, with screenshots, Play/Code links and development-status descriptions. Expanded the workshop gallery with a finished anodized card, an engraving-process close-up and the fitted handguard with original-part comparison and printing credit.
- **Supporting updates:** Added game sitemap entries and case-correcting 404 routes; recorded the completed gallery work in the checklist.
- **Validation:** Passed 99 headless Microsoft Edge checks at 1440, 768, 390 and 360 px: project order/counts, category filters, image decoding, gallery links, no horizontal overflow and no page script errors. Both live game pages returned HTTP 200. Desktop and phone-width previews were visually reviewed. No real-device gameplay testing is claimed.

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
