# Personal Portfolio Website — PRD

## Problem Statement

Justin needs a personal website that showcases his work and projects in a creative, modern way. Existing options (static resumes, generic portfolio templates) don't let him present projects with rich visuals, multiple reference links, and an engaging, animated browsing experience. He also needs the site's core "always accessible" info — his name/title, resume, contact links, and a visitor counter — to be visible no matter where a visitor is on the page, without the site feeling cluttered or old-fashioned.

## Solution

A single-page React application, deployed as a GitHub Pages root/user site, consisting of:

- A fixed top bar and fixed bottom bar (transparent background) that stay visible at all times, anchoring Justin's identity, resume access, contact links, and a visitor counter to the four corners of the viewport (collapsing to two stacked rows on mobile).
- A main scrollable view that opens on a bold landing section (tagline + summary) which fades out on scroll, revealing a projects section beneath it.
- A projects section with a two-panel layout: an upper detail panel (image + title/description/links) driven by a lower drag/swipe, infinitely looping thumbnail carousel with a static center-arrow indicator.
- A cohesive visual theme (white-to-blue gradient background, black primary text, orange accents, Space Grotesk + Inter typography) applied consistently across both sections.
- All project content, resume PDF, and the visitor counter are built with clearly-marked placeholders so Justin can swap in real content later without further design/dev iteration.

## User Stories

1. As a visitor, I want to immediately see a bold tagline and summary when I land on the site, so that I understand who Justin is within seconds.
2. As a visitor, I want the landing content to fade away as I scroll, so that I'm smoothly guided into the projects section without a jarring page break.
3. As a visitor, I want to see Justin's name and job title in the same corner at all times, so that I always know whose site I'm on.
4. As a visitor, I want a resume button always visible, so that I can access his resume from anywhere on the site without scrolling back up.
5. As a visitor, I want the resume to open in a new tab, so that I don't lose my place on the portfolio site.
6. As a visitor, I want to see Justin's LinkedIn and email always accessible, so that I can reach out without hunting for contact info.
7. As a visitor, I want to click the LinkedIn icon and be taken to his LinkedIn profile, so that I can learn more about his professional background.
8. As a visitor, I want to click the email icon and have my email client open with his address pre-filled, so that I can quickly send him a message.
9. As a visitor, I want to see a visitor counter widget, so that I get a sense of how many others have viewed the site (once wired up).
10. As a visitor, I want the top and bottom bars to remain transparent, so that the background gradient and page content feel cohesive rather than boxed in by opaque nav bars.
11. As a visitor, I want the top/bottom bars to stay fixed regardless of scroll position, so that I always have access to identity, resume, and contact info.
12. As a mobile visitor, I want the four corner elements to reorganize into two readable stacked rows, so that nothing overlaps or becomes illegibly small on a narrow screen.
13. As a visitor, I want to browse Justin's projects via a horizontally scrolling thumbnail carousel, so that I can quickly preview all his work.
14. As a visitor, I want to drag or swipe the carousel to move between projects, so that browsing feels tactile and natural.
15. As a visitor, I want a static center arrow that always points to the currently active project, so that I always know which project's details I'm viewing.
16. As a visitor, I want the carousel to loop infinitely, so that I can keep browsing forward or backward without hitting a dead end, even as more projects are added over time.
17. As a visitor, I want the upper detail panel to update automatically as I move the carousel, so that I don't have to click anything extra to see a project's details.
18. As a visitor, I want to see a project's image prominently on the left (60% width) of the detail panel on desktop, so that the visual work is the focal point.
19. As a visitor, I want to see the project's title, description, and links on the right (40% width) of the detail panel on desktop, so that I can quickly read about the project I'm viewing.
20. As a mobile visitor, I want the image and text panel to stack vertically instead of side-by-side, so that both remain fully readable on a narrow screen.
21. As a visitor, I want to see labeled link buttons (Report / Slides / Website / Article) for each project, so that I can jump directly to whichever resource type interests me.
22. As a visitor, I want to only see link buttons for resources that actually exist for a given project, so that I'm not clicking dead/missing links.
23. As a visitor, I want each project link to open in a new tab, so that I don't lose my place browsing the portfolio.
24. As a mobile visitor, I want to see a "peek" of neighboring thumbnails in the carousel, so that it's visually obvious there are more projects to swipe through.
25. As a visitor, I want the background to be a soft white-to-blue gradient, so that the site feels clean, modern, and easy on the eyes.
26. As a visitor, I want the gradient to shift subtly between the landing section and the projects section, so that scrolling through the site feels like a continuous, evolving experience rather than flat and static.
27. As a visitor, I want body text to be black for readability, with orange used only for buttons, links, and active-state indicators, so that important interactive elements stand out clearly without harming readability.
28. As a visitor, I want consistent, modern typography (bold geometric headlines, clean readable body text), so that the site feels like it was designed by someone with a strong sense of craft.
29. As Justin (site owner), I want placeholder projects, tagline/summary, and resume PDF in place from the start, so that I can preview and validate the full site experience before writing/finalizing real content.
30. As Justin (site owner), I want placeholders to be obviously fake (e.g., "Project Title 1", lorem ipsum, gray boxes), so that I never mistake placeholder content for finished content when reviewing the live site.
31. As Justin (site owner), I want to add, remove, or reorder projects later by editing a single data source, so that maintaining the site doesn't require touching carousel or layout logic.
32. As Justin (site owner), I want to replace the placeholder resume PDF by swapping a single file in the repo, so that updating my resume doesn't require any code or layout changes.
33. As Justin (site owner), I want the visitor counter corner reserved but empty for now, so that I can wire up the real mapmyvisitors widget later without needing to redesign the layout.
34. As Justin (site owner), I want the site deployed via a manual `npm run deploy` command, so that I have explicit control over exactly when changes go live.
35. As Justin (site owner), I want the site hosted at my GitHub Pages root/user domain, so that I have the cleanest possible URL and an easy path to a custom domain later.
36. As Justin (site owner), I want the carousel's drag/swipe/loop/peek behavior handled by a proven library, so that the interaction feels polished without me having to hand-roll fragile animation/gesture code.
37. As a developer maintaining this codebase later, I want project data structured in one consistent shape, so that both the carousel and the detail panel can be tested and modified against a single source of truth.

## Implementation Decisions

**Stack**
- React + Vite (no SSR, fully static client-rendered SPA).
- Swiper.js for the lower thumbnail carousel (drag/swipe, infinite loop, "peek" partial-visible neighbors on mobile — all via Swiper's built-in config options).
- Plain CSS (no animation library) for the landing-section fade-on-scroll, implemented via scroll-position-driven opacity/scale (e.g. a scroll listener or `IntersectionObserver` updating a CSS custom property or inline style — no scroll-jacking).
- No routing library — this is a single-page/single-route app.

**Primary seam: Project Data Module**
- A single, centrally defined project data source (array of project objects) is the one seam both the lower carousel and the upper detail panel read from.
- Shape (illustrative, not final code):
  ```
  Project {
    id: string
    title: string
    description: string
    image: string (path/URL)
    links: {
      report?: string
      slides?: string
      website?: string
      article?: string
    }
  }
  ```
- Only link keys present with a truthy value render a corresponding pill button; absent/undefined keys render nothing (no disabled/greyed-out buttons).
- The "active project index" is derived from Swiper's active slide state and used to look up the corresponding project object for the detail panel — this keeps the detail panel a pure function of `(projects, activeIndex)`, decoupled from Swiper's internals beyond reading the current index.
- Starting dataset: 6 placeholder projects, but all carousel/data logic must work correctly for any array length ≥ 1 (no hardcoded assumptions about count).

**Layout structure**
- Three structural regions: fixed top bar, fixed bottom bar, scrollable main view — all three always mounted; only main view content scrolls underneath the fixed bars.
- Top bar: left-aligned (name "Justin Tse" + job title, stacked), right-aligned (Resume link/button).
- Bottom bar: left-aligned (LinkedIn icon + email icon), right-aligned (reserved empty container for future visitor counter widget — rendered but visually empty/placeholder-free, i.e., not even a placeholder graphic, per Q14 decision).
- Both bars: transparent background at all breakpoints, fixed position (not sticky-with-style-change), no visual change on scroll.
- Mobile breakpoint: top bar's two corner groups stack into one centered row; bottom bar's two corner groups stack into a second centered row. Exact breakpoint value to be determined during build (standard mobile breakpoint, e.g. ~768px, as a starting point).

**Landing section**
- Renders tagline + short summary as large, bold text (Space Grotesk).
- Fade behavior: opacity (and optionally slight scale) interpolated against scroll position within the landing section's scroll range; fully transparent (and non-interactive, e.g. `pointer-events: none`) once scrolled past.
- Content is placeholder text (e.g. "Your Name Here — Job Title", lorem-ipsum-style summary) to be manually replaced later.

**Projects section**
- Upper detail panel: CSS grid/flex, 60%/40% (image/text) split on desktop; switches to a single column (image full-width on top, text full-width below) below the mobile breakpoint.
- Text panel contents, top to bottom: project title, link-pill row, description.
- Link pills: plain text-labeled buttons/pills ("Report", "Slides", "Website", "Article"), styled with orange accent, `target="_blank"` + `rel="noopener noreferrer"` for all outbound links.
- Lower carousel: Swiper instance configured for infinite loop mode, drag/swipe only (no arrow-button nav, no click-to-jump on individual thumbnails, no keyboard nav), with a static (non-moving, purely visual) center arrow graphic overlaid on the carousel to indicate the active-slide position.
- Mobile carousel: Swiper's slide-width/`slidesPerView` configured to show partial neighboring thumbnails ("peek") on either side of the active one.
- Each thumbnail: placeholder image (solid gray/colored box) + project name label beneath it.

**Theme**
- Fonts: Space Grotesk (headlines/tagline/project titles), Inter (body text, UI labels, buttons) — both loaded via Google Fonts.
- Colors:
  | Role | Hex |
  |---|---|
  | Background gradient start | `#FAFAFA` |
  | Background gradient end | `#DCEAF7` |
  | Primary text | `#1A1A1A` |
  | Accent (buttons/active states/links) | `#FF6B35` |
  | Accent hover/darker | `#E85A2A` |
- Background gradient: applied per-section (landing vs. projects) with a subtly different blend/balance between the two, rather than one uniform gradient for the whole page.
- These are explicitly a starting point — subject to visual refinement once the site is live and reviewed.

**Resume**
- Static PDF file committed to the repo's public assets, linked directly from the top-bar Resume button, opened via `target="_blank"`.
- A placeholder PDF ships initially; replacing it later is a single-file swap requiring no code changes.

**Visitor counter**
- Explicitly out of scope for this build pass (see below) — bottom-right corner container exists in the layout but renders nothing until Justin signs up with mapmyvisitors.com and provides an embed snippet in a follow-up task.

**Deployment**
- `gh-pages` npm package for manual deploys (`npm run deploy` builds and pushes `dist/` to the `gh-pages` branch).
- Repo is a GitHub Pages root/user site, currently targeting `justintse-cal.github.io` (Vite `base` config and repo name will need to be updated together if the GitHub username changes in the future).

## Testing Decisions

- Good tests here verify **observable behavior** at the Project Data Module seam and its consumers — e.g., "given N projects, does the carousel render N thumbnails and loop correctly," "given a project with only 2 of 4 possible link types, does the detail panel render exactly those 2 pills and no others" — rather than asserting on Swiper's internal DOM structure or implementation details of third-party libraries.
- **Modules to test:**
  - Project Data Module: shape/validation of project objects (e.g. handling of missing/optional link fields).
  - Detail panel rendering: given a project object, correct title/description/link-pill rendering, including the zero-links and all-links edge cases.
  - Active-index derivation: given a Swiper active-slide change event/index, the correct project object is selected and passed to the detail panel.
  - Landing fade behavior: scroll-position-to-opacity mapping produces expected values at start/end/midpoint of the fade range (can be tested as a pure function independent of actual scroll events).
- **Not directly tested** (treated as trusted third-party/presentational): Swiper's internal drag/momentum/loop mechanics, exact CSS/visual styling, font rendering.
- **Prior art:** none — this is a greenfield project with no existing test suite or established testing patterns to follow; testing conventions (framework choice, e.g. Vitest + React Testing Library, being the natural fit for a Vite + React app) will be established fresh as part of this build.

## Out of Scope

- Actual mapmyvisitors.com account creation, embed code generation, and integration (reserved layout space only; wiring up the live widget is an explicit follow-up task).
- Final real content: landing tagline/summary, real project titles/descriptions/images/links, and final resume PDF — all placeholders for now, to be manually swapped in later by Justin.
- Custom domain setup (e.g. pointing a purchased domain like `justintse.com` at the GitHub Pages site) — not requested for this build.
- Click-to-select and keyboard-arrow navigation for the carousel (explicitly decided against in favor of drag/swipe-only).
- Animated/self-moving background gradient (explicitly decided against in favor of static-per-section gradients).
- Analytics beyond the visitor counter (no additional tracking/analytics tooling discussed or planned).
- Automated CI/CD (GitHub Actions) deployment — manual `gh-pages` deploy was explicitly chosen instead.
- Any backend, database, or server-side logic — the entire site is static/client-only, consistent with GitHub Pages hosting.
- Accessibility audit/compliance work beyond what naturally falls out of using semantic HTML and standard libraries (not explicitly discussed in scoping).

## Further Notes

- The GitHub username/repo name (`justintse-cal.github.io`) is expected to possibly change in the future; when it does, both the repo name and the Vite `base`/deployment config will need to be updated together as a single, well-understood follow-up task — not a design change.
- The project data shape defined in this spec is intended to remain stable even as the placeholder content is replaced with real content and as more than 6 projects are added over time — no schema migration is anticipated for that transition.
- Mobile breakpoint value and exact "peek" sizing/spacing for the carousel are left as implementation-time judgment calls within the general responsive patterns agreed upon here, rather than being pinned to exact pixel values in this spec.
