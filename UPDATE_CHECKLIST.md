# Tristan Boyd Hash · Projects - Website Update Checklist

Added November 4, 2026, from the owner's website-specific working checklist.

## Scope and tracking

This checklist covers the Projects website at https://tboy450.github.io/ and its presentation, navigation, previews, case studies and collaboration information. Keep the wider AI Projects & Computer master list and standalone AI, Ghost, CNC and computer projects separate. Links, galleries or demonstrations of those projects on this website are in scope; developing those separate products is not part of this checklist.

Checked means implemented for the scope stated beside the item. **Live** means merged into published main; **draft PR #22** and **local review** are not live. Broad unfinished items remain unchecked with their completed subset noted. Historical completion records below describe their date, not necessarily current release status.

## Current release and review status — November 16, 2026

| Work | Status |
| --- | --- |
| Homepage, workshop, Red Hill stages/tabs and PR23 illustration | Live on main `143ca11` |
| Laser Studio/Woodworking pages, expanded Red Hill inventory and changed finish direction | Draft PR #22, mobile head `87debf7`; not live |
| Prior PR22 review corrections | Local commit `78f4ad1`; still needs reconciliation with the newer mobile changes |
| November 16 software-completion progress summary | Local commit `c957e8f`; not published |
| Red Hill Sites v5 | Saved, not deployed; fresh privacy review required |

This review retains the mobile changes, incorporates published PR23, and reconciles checklist statuses. No new physical test or media review is implied by a checked website task.

## Recommended priority

1. Mobile experience.
2. Solar System access.
3. Homepage redesign.
4. Flagship demonstrations.
5. Individual project pages.
6. Gallery and HASK improvements.

## 1. Homepage and identity

- [ ] Improve homepage layout and visual polish. **Live:** branded hero, project cards and workshop gallery; further polish remains open.
- [x] Strengthen the HASK / Tristan Boyd Hash identity. **Live:** emblem, name, branding and contact section.
- [ ] Add a concise About / Approach section.
- [x] Explain the concept-to-prototype-to-result development philosophy. **Live:** Red Hill “How HASK takes an idea into development” section.
- [ ] Make flagship projects more prominent.

## 2. Mobile experience

- [ ] Complete responsive mobile redesign.
- [ ] Fix clipped, tiny or inaccessible project content. Current reviewed pages fit 360–1440 px; real-device/accessibility follow-up remains open.
- [x] Improve mobile navigation. **Live:** project links and Red Hill tabs/deep links; new page navigation is in draft PR #22.
- [ ] Optimize interactive visualizations for touchscreens.
- [x] Ensure large elements scale or scroll properly. Reviewed page cards/galleries fit; Red Hill tables/tabs adapt or scroll.

### Solar System (header graphic)

The "Solar System" is the orbit graphic in the homepage header, not a separate project. The owner wants a
graphics and mechanics update: interactive and draggable, and working on phones (clarified Nov 4, 2026).

- [x] Make planets draggable, with spring-back, flick-to-spin and a clickable sun. (Nov 4, PR #8; tested in the browser.)
- [x] Show it on phones with finger-sized touch targets. (Nov 4; checked at 375 px wide. Not yet tried on a real phone.)
- [ ] Further graphics polish as the owner directs. Glowing sun is live; additional changes remain optional.
- [ ] Verify the desktop solar-system experience, preserving interactions and the original right-hand position (owner correction, Nov 5).

## 3. Project presentation

- [x] Introduce consistent project cards. **Live:** shared card structure and thumbnail treatment.
- [ ] Add consistent status labels: Live, In Development, Prototype and Archive. Live/dev/prototype badges exist; archive consistency remains open.
- [x] Add technology-stack information. **Live:** project technology tags.
- [ ] Add development year.
- [x] Add project categories. **Live:** Fabrication, Simulations, Games, Research and Tools.
- [ ] Add one-line explanations of why each project was created.
- [x] Standardize thumbnails, backgrounds and aspect ratios. **Live:** shared thumbnail/card styling; revisit individual crops as needed.
- [x] Add or refine project filters: Fabrication, Simulation, Games, Tools and Research. **Live:** category buttons; status filtering remains separate backlog.

## 4. Flagship projects and demonstrations

- [ ] Dragonfly Titan Simulator: add a playable inline preview.
- [ ] Swarmfall: add a playable preview or demonstration.
- [ ] 5 Senses: add an interactive preview.
- [ ] Zoom Loop: add a demonstration.
- [ ] White House Rocket Run: add a playable preview.
- [ ] Solar System: improve its presentation and accessibility.
- [x] Laser Photo Studio: showcase functionality. Live card/code link; detailed workflow page in **draft PR #22**, not published.
- [ ] Positioning Laser: showcase functionality.
- [ ] TINEBOX C-01: document mechanical design and prototyping.
- [x] BMW F800GS fabrication: showcase design and physical development. **Live:** fitted prototype and original-part comparison with printing credit.
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

- [x] Add development timelines. **Live:** Red Hill timeline; extend to other projects as records become available.
- [x] Include prototype photographs and screenshots. **Live:** project thumbnails, workshop and Red Hill galleries.
- [x] Document failures, revisions and lessons learned. **Live:** Red Hill blank-lid uncertainty, fine text, soot/wipe and test history.
- [x] Clearly distinguish completed work from proposed concepts. **Live:** Red Hill test/planning labels and PR23 illustration; maintain this on future changes.

## 6. Workshop and fabrication gallery

- [x] Expand the laser engraving gallery. Added the finished anodized card and a laser-process close-up (November 6, 2026).
- [x] Add before-and-after comparisons. **Live:** Red Hill before/after-wipe and artwork/result pairs.
- [ ] Show CAD designs alongside finished physical objects.
- [x] Include 3D printing projects. Added the fitted F800GS handguard to the workshop gallery with original-part comparison and printing credit (November 6, 2026).
- [ ] Include CNC and laser experiments. Laser experiments are live; dedicated CNC evidence still needed.
- [x] Add material and testing documentation. **Live:** Red Hill settings/results and evidence limits; wider material records remain ongoing.

## 7. RPG Lab

- [ ] Create a consolidated RPG Lab page.
- [ ] Show the evolution of Dragon's Lair.
- [ ] Connect the scattered RPG development projects.
- [ ] Include playable versions where possible.
- [ ] Document development milestones.

## 8. HASK collaboration

- [x] Improve the Work With HASK section. **Live:** revised contact section (PR21).
- [x] Add examples of possible project scopes. **Live:** coding, research, prototypes/custom parts and engraved pieces.
- [x] Show examples of personal-project deliverables. **Live:** workshop examples, handguard and Red Hill case study.
- [x] Explain the collaboration and development process. **Live:** Red Hill process and contact scope/deliverables wording.
- [x] Make contact and collaboration opportunities clear. **Live:** contact links and work-with-HASK calls to action.

## 9. Final quality checks

- [ ] Test desktop browsers. Headless Edge checked; Chrome/Firefox/Safari coverage remains open.
- [ ] Test Android and iPhone layouts. Phone-width Edge checks are complete; real Android/iPhone browser checks remain open.
- [ ] Check all project links.
- [ ] Check embedded demonstrations.
- [ ] Check loading performance.
- [ ] Check accessibility and readability.
- [ ] Remove broken links and outdated project information.

## 10. Laser Studio, Red Hill and Woodworking

This website presents three connected but distinct areas of the workshop. Keep each area's evidence and progress in its own page; do not turn one Red Hill test label into a separate project.

**Structure note:** The live `main` branch has a homepage **Fabrication** category, not a separate CNC page. Laser Photo Studio already has a card in that category, linking to its GitHub application repository and the Red Hill test history. The new `/laser-studio/` page in this draft is a more detailed overview of the laser workflow; it is not an existing CNC page or a second copy of the application.

- [x] Add a Laser Studio page describing the Laser Photo Studio application, material-status system, image styles, placement, offline checks, positioning and recovery.
- [x] Keep Red Hill as one project page. Present “Forest Products” as a wording and packaging test within Red Hill, not a standalone HASK project.
- [x] Add a Woodworking & Woodcraft page using the existing pine engraving examples and describing grain-aware design and surface/finish testing.
- [x] Link the new pages from the homepage, add them to the sitemap and include case-correcting 404 routes.
- [x] Browser-check the current draft pages at desktop and phone widths. Headless Edge 1440/768/390/360 px, image decoding, fragment links, tabs and overflow checks; real-device and full external-link audit remain open.
- [ ] Add further woodworking and hand-finished examples only when their photographs and process details are available.
- [ ] Keep Laser Studio material records split between physically tested settings, outside starting points, experiments and untested ideas. The draft has evidence categories; prior local wording corrections remain to be integrated.

### November 16, 2026 · Red Hill and Laser Studio record reconciliation

- [x] Reconcile the known lid-run inventory across the Red Hill page table and working checklist: first and second chapel lids; masked detail/title runs; dense badge; nearly blank lid (unresolved); full-verse passes 1 and 2; 165-patch ladder; Matthew two-tone; Forest Products wording test; six-pass tone-combination test; and the newly reported darker-copper result.
- [ ] Identify the nearly blank lid's source job, actual date, settings and cause; it is retained as an unresolved physical test, not omitted.
- [ ] Add the latest darker-copper lid photograph to the Red Hill page when the actual source image is available; include an accurate caption and before/after-wipe status.
- [ ] Record the new lid's full job settings, pass count, interval, focus, run time and wipe result; use 24 mm/min as the stated comparison reference for the speed-up trial.
- [ ] Add every physical lid run to both the Red Hill page table and working checklist, with completed, reported, prepared, planned or parked status kept distinct.
- [x] Prepare the three-strip sanded-lid comparison. **Prepared, not run:** separate saved passes and offline checks exist; substrate identity and physical result remain unverified.
- [ ] Compare paint and supplier-made/pre-finished black tins as alternative packaging finishes. Do not present these as proven until evaluated.
- [x] Remove the three-tone finish from the active direction; retain older tone/soot work as test history. Implemented in draft PR #22.
- [ ] Keep tin-specific testing in Red Hill and broad material-response ladder research (including possible identified steel/titanium candidates) in Laser Studio.
- [ ] Reconcile the Red Hill session in session management; synchronize the Red Hill product/packaging log, Laser Studio material/research log, HASK master checklist and website checklists from the same dated source evidence.
- [ ] Cross-link job files, source artwork, G-code, settings, sample IDs, photographs, wipe results and current status rather than relying on a checklist tally alone.

### Additional evidence and remaining work — November 16

- [x] Review the mobile PR's eight new commits through `87debf7` and retain PR23's published illustration.
- [x] Reconcile the Red Hill working checklist with prepared strip/DPI packages and the installed sample/test-record features.
- [ ] Assess physical quality of the separate 24 mm/min full-lid trial; saved software state records completion after interruptions, not verified coverage or finish quality.
- [ ] Apply the requested small-lettering size/gap revision, preserving wording; inspect actual-resolution cells and later physical output.
- [ ] Review coating/touch-up photos and video for public use. Appearance reports are not adhesion, cure, durability or laser-result validation.
- [ ] Design/test any painting holder separately from the engraving jig; the holder/weighted-base idea remains proposed.
- [ ] Reconcile prior local PR22 code/copy corrections before release; rerun affected checks after integration.
- [ ] Review and release draft PR22 separately from the local progress summary and Sites v5.

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
