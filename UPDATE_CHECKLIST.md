# Tristan Boyd Hash · Projects - Website Update Checklist

Added November 4, 2026, from the owner's website-specific working checklist.

## Scope and tracking

This checklist covers the Projects website at https://tboy450.github.io/ and its presentation, navigation, previews, case studies and collaboration information. Keep the wider AI Projects & Computer master list and standalone AI, Ghost, CNC and computer projects separate. Links, galleries or demonstrations of those projects on this website are in scope; developing those separate products is not part of this checklist.

All items begin unchecked. Some features already exist in an earlier form; assess them against the requested update and verify the result before marking complete. This document records planned work, not completed implementation.

## Recommended priority

1. Mobile experience.
2. Solar System access.
3. Homepage redesign.
4. Flagship demonstrations.
5. Individual project pages.
6. Gallery and HASK improvements.

## 1. Homepage and identity

- [ ] Improve homepage layout and visual polish.
- [ ] Strengthen the HASK / Tristan Boyd Hash identity.
- [ ] Add a concise About / Approach section.
- [ ] Explain the concept-to-prototype-to-result development philosophy.
- [ ] Make flagship projects more prominent.

## 2. Mobile experience

- [ ] Complete responsive mobile redesign.
- [ ] Fix clipped, tiny or inaccessible project content.
- [ ] Improve mobile navigation.
- [ ] Optimize interactive visualizations for touchscreens.
- [ ] Ensure large elements scale or scroll properly.

### Solar System (header graphic)

The "Solar System" is the orbit graphic in the homepage header, not a separate project. The owner wants a
graphics and mechanics update: interactive and draggable, and working on phones (clarified Nov 4, 2026).

- [x] Make planets draggable, with spring-back, flick-to-spin and a clickable sun. (Nov 4, PR #8; tested in the browser.)
- [x] Show it on phones with finger-sized touch targets. (Nov 4; checked at 375 px wide. Not yet tried on a real phone.)
- [ ] Further graphics polish as the owner directs.
- [ ] Verify the desktop solar-system experience, preserving interactions and the original right-hand position (owner correction, Nov 5).

## 3. Project presentation

- [ ] Introduce consistent project cards.
- [ ] Add consistent status labels: Live, In Development, Prototype and Archive.
- [ ] Add technology-stack information.
- [ ] Add development year.
- [ ] Add project categories.
- [ ] Add one-line explanations of why each project was created.
- [ ] Standardize thumbnails, backgrounds and aspect ratios.
- [ ] Add or refine project filters: Fabrication, Simulation, Games, Tools and Research.

## 4. Flagship projects and demonstrations

- [ ] Dragonfly Titan Simulator: add a playable inline preview.
- [ ] Swarmfall: add a playable preview or demonstration.
- [ ] 5 Senses: add an interactive preview.
- [ ] Zoom Loop: add a demonstration.
- [ ] White House Rocket Run: add a playable preview.
- [ ] Solar System: improve its presentation and accessibility.
- [ ] Laser Photo Studio: showcase functionality.
- [ ] Positioning Laser: showcase functionality.
- [ ] TINEBOX C-01: document mechanical design and prototyping.
- [ ] BMW F800GS fabrication: showcase design and physical development.
- [ ] Beyond the Screen: improve research presentation.

## 5. Individual project pages

### Consistent project breakdowns

- [ ] Original concept.
- [ ] Objectives.
- [ ] Design process.
- [ ] Technologies and materials.
- [ ] Development history.
- [ ] Testing and results.
- [ ] Future improvements.

### Supporting evidence

- [ ] Add development timelines.
- [ ] Include prototype photographs and screenshots.
- [ ] Document failures, revisions and lessons learned.
- [ ] Clearly distinguish completed work from proposed concepts.

## 6. Workshop and fabrication gallery

- [x] Expand the laser engraving gallery. Added the finished anodized card and a laser-process close-up (November 6, 2026).
- [ ] Add before-and-after comparisons.
- [ ] Show CAD designs alongside finished physical objects.
- [x] Include 3D printing projects. Added the fitted F800GS handguard to the workshop gallery with original-part comparison and printing credit (November 6, 2026).
- [ ] Include CNC and laser experiments.
- [ ] Add material and testing documentation.

## 7. RPG Lab

- [ ] Create a consolidated RPG Lab page.
- [ ] Show the evolution of Dragon's Lair.
- [ ] Connect the scattered RPG development projects.
- [ ] Include playable versions where possible.
- [ ] Document development milestones.

## 8. HASK collaboration

- [ ] Improve the Work With HASK section.
- [ ] Add examples of possible project scopes.
- [ ] Show examples of personal-project deliverables.
- [ ] Explain the collaboration and development process.
- [ ] Make contact and collaboration opportunities clear.

## 9. Final quality checks

- [ ] Test desktop browsers.
- [ ] Test Android and iPhone layouts.
- [ ] Check all project links.
- [ ] Check embedded demonstrations.
- [ ] Check loading performance.
- [ ] Check accessibility and readability.
- [ ] Remove broken links and outdated project information.

## 10. Laser Studio, Red Hill and Woodworking

This website now presents three connected but distinct areas of the workshop. Keep each area's evidence and progress in its own page; do not turn one Red Hill test label into a separate project.

- [x] Add a Laser Studio page describing the Laser Photo Studio application, material-status system, image styles, placement, offline checks, positioning and recovery.
- [x] Keep Red Hill as one project page. Present “Forest Products” as a wording and packaging test within Red Hill, not a standalone HASK project.
- [x] Add a Woodworking & Woodcraft page using the existing pine engraving examples and describing grain-aware design and surface/finish testing.
- [x] Link the new pages from the homepage, add them to the sitemap and include case-correcting 404 routes.
- [ ] Browser-check all new pages at desktop and phone widths; verify image loading, internal links and no horizontal overflow.
- [ ] Add further woodworking and hand-finished examples only when their photographs and process details are available.
- [ ] Keep Laser Studio material records split between physically tested settings, outside starting points, experiments and untested ideas.

## Completion record

For completed items, record the date, changed files or commit, verification performed and remaining limitations. Sign substantive changes in CHANGELOG.md under the project's existing convention.

### November 13, 2026 · Laser Studio, Red Hill and Woodworking

- Added dedicated Laser Studio and Woodworking & Woodcraft pages.
- Updated the homepage so Laser Photo Studio links to its own overview and Red Hill remains one project page. “Forest Products” is documented as a test label/presentation treatment inside Red Hill, not as a standalone HASK project.
- Expanded the Red Hill page with an overview of its product/material research, presentation tests and engraving/tooling work. Formulation and material selections remain described as in development, not finalized.
- Added the new pages to the sitemap and lowercase route correction.
- Validation so far: GitHub writes succeeded and each created/updated file was read back for structural review. Browser rendering, image loading and responsive layout checks are still pending.
- Signed: ChatGPT (OpenAI).

### November 10, 2026 · Red Hill samples and investigation status

- Added the two latest completed full-verse samples and summarized the offline software investigation. Recorded the prepared higher-power diagnostic and continuing need for physical lettering validation.
- Made the original public project log the primary report link and repaired direct local-file loading for the case study's stylesheet and photographs.
- Verified homepage entry links, all five images, report links, and layout at 1440, 390 and 360 px in headless Edge. Direct local-file loading also passed. The new physical diagnostic remains pending.
- Signed by Codex (OpenAI).

### November 9, 2026 · Red Hill tin lid case study

- Added a workshop example and a case study link from the Laser Photo Studio card. The page documents engraving on reflective tin, the progression across chapel trials, and a comparison of the burn preview, lid photo and revised lettering proof.
- Verified entry links, return navigation, photos and layout at 1440, 390 and 360 px in headless Edge. The revised lettering still needs a fresh-lid test.
- Signed by Codex (OpenAI).

### November 6, 2026 — game links and workshop examples

- Added Emberwake and Smoke Cult directly above the existing RPG listing, with real screenshots, Play/Code links and prototype/early-build descriptions.
- Expanded From the workshop from four examples to seven: anodized card, laser-process close-up and the fitted handguard with a comparison link.
- Added both game URLs to the sitemap and case-correcting 404 routes.
- Validation: Passed 99 headless Microsoft Edge checks at 1440, 768, 390 and 360 px: project order/counts, category filters, image decoding, gallery links, no horizontal overflow and no page script errors. Both live game pages returned HTTP 200. Desktop and phone-width previews were visually reviewed. No real-device gameplay testing is claimed.
- Signed: Codex (OpenAI).
