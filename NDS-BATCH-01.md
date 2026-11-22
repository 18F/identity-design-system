# NDS component handoff: batch 01

Scope: the first 20 entries in the local QA index, sorted by display title,
from Accordions through Consent. Base: `5c930f5` (local `origin/main`).
Review the staged `nds-batch-01` worktree, not the entire `design-tweaks` diff.
The QA workbench is workstation-only; the component docs and demos referenced
below are included in the MR.

## What is still off

- **Animated media:** the docs toggle an empty aspect-ratio frame. The button
  and its accessible name change, but this cannot demonstrate that a real
  animation starts and stops. Supply approved media before signing off playback.
- **Authentication methods / Consent:** editing, removing, adding and submitting
  are illustrative actions, not implemented account changes. Consent now
  documents that boundary. A clickable product demo would need local state and
  a cancellation destination, not a real grant or account mutation.
- **Preview boundary:** host-only actions are buttons rather than placeholder
  links. In live examples, activating a link stays on the page. Connected
  services enables Disconnect without changing an account.

No other blocking issue surfaced in the checks below. That is not a claim of
pixel parity with every Figma variant, a screen-reader certification, or a live
IdP integration test.

## Compatibility map

“Keep” means a consumer can keep the named markup or hook when switching to
the NDS bundle. “Composition” means there is no equivalent USWDS control:
retain the existing layout contract, or explicitly opt in to the new markup.
A theme switch cannot synthesize missing semantics, agency data or event handlers.

| # | Component | Existing contract -> NDS | Disposition |
|---|---|---|---|
| 1 | Accordions | Keep `.usa-accordion`, heading/button/content, IDs and USWDS expansion behavior; bordered stays a modifier. | No issue found in scan. |
| 2 | Account | Keep `.account__*` panel and row layout; prefer shared Badge and Button for new actions. | Fixed warning badge contrast; Edit is a preview button. |
| 3 | Account navigation | Keep `.account-header`, `.account-nav__link` and `aria-current`; filled artwork is an enhancement, not the current-state signal. | Header demo stays on the page. |
| 4 | Agency seal | Keep `.agency-seal` on an image or wrapper with `.agency-seal__image`; 48px remains the default. | No issue found in scan. |
| 5 | Alerts | Keep `.usa-alert` variants; the existing `.usa-alert__action` still receives the small button size. | No issue found in scan. |
| 6 | Animated media | Keep `.animated-media`, paired icon classes and `data-playing`; shared Button styling is additive. | Real playback not demonstrated. |
| 7 | Auth entry | Keep `.auth-entry__card` and the old whole-callout anchor; new markup places a button inside a non-link callout. Never nest anchors. | Restored the older callout link cue; auth actions are preview buttons. |
| 8 | Authentication app setup | Keep `.nds-totp-setup` and native form fields; setup uses shared Card, flat Checkbox and opt-in clipboard behavior. | Sample QR and submission are intentionally inert; verify with host app separately. |
| 9 | Authentication methods | Keep the existing method list/row layout; apply shared actions rather than a separate button style. | Manage/Delete are host responsibilities. |
| 10 | Badges | `.badge--primary/secondary/tertiary` for emphasis; semantic modifiers for status; `.usa-tag` remains distinct. | Fixed light warning text at the shared token use, including in Account. |
| 11 | Banner | Legacy government pages keep `.usa-banner`; NDS composes `.official-banner` and a named native dialog. | Both paths retained. |
| 12 | Button Groups | Keep `.usa-button-group[--segmented]`, list items and actual `.usa-button` children. | Same markup; 8px default gap, no segmented dividers. |
| 13 | Buttons | Keep `.usa-button`; `--big` shares `--lg`, `--ghost` shares `--quaternary`. `--wide` is not `--full-width`. | Do not mass-rename consumer classes. |
| 14 | Cards | Keep `.lg-card` and stock USWDS cards; `.card` is a single-surface composition, not a rename of `.usa-card__container`. | Keep old card badge selectors for consumers; new markup uses Badge. |
| 15 | Checkbox | Keep the native input, adjacent `.usa-checkbox__label`, and `--tile` / `--bordered` / `--switch` modifiers. | Native checked/mixed state remains authoritative. |
| 16 | Checkbox (flat) | Keep compact `.checkbox__input` + `.checkbox__label`; do not rename to USWDS classes or change acknowledgment layout. | Removed overridden high-contrast paint; kept public modifiers. |
| 17 | Clipboard button | Keep `lg-clipboard-button` and the Primary button. `data-nds-copy` is an opt-in fallback, not a replacement for the app's custom element. | Fixed both labels showing at once in legacy; copy and reset verified. |
| 18 | Code formatting | Keep Rouge/Pygments `pre.highlight > code` and token classes; inline code is separate. | Includes CommitMono and its license. |
| 19 | Connected services | Keep `.connected-services__list`, `.connected-service__row`, and native disclosures; new panels compose Card, Agency Seal, and Secondary Button. | Fixed 320px legacy overflow; Disconnect is demo-only. |
| 20 | Consent | Keep native `details` / `summary`, `.consent-service__*` and shared actions; no remember-selection control in the new examples. | Fixed 320px legacy overflow; selection management is demo-only. |

## What to review in this MR

- The branch includes the shared tokens, icon catalog/generator, font, form
  primitives, modal and toast dependencies used by these pages. The catalog is
  a shared build input; its many SVGs are not additional component redesigns.
- Only the pages in `docs/_data/nds_components.json` default to NDS in this
  batch. An explicit `?ui_test_bucket=legacy` or `?ui_test_bucket=nds` still
  works. Other component pages keep their base-branch default. Package entry
  points and the legacy Sass load path remain available.
- Single and multi-service Consent examples each share a template between
  starting states. Card and auth surfaces share the same zero-spread edge token.
  Ten unpublished, unreferenced copies of catalog icons are excluded; published
  selectors and asset paths were not removed merely because the docs omit them.

## Evidence and next batch

- Chrome: current markup on all 20 routes under both bundles, desktop WCAG A/AA
  scan and 320px horizontal overflow check. Also smoke-tested `origin/main`
  markup against the new NDS bundle. Older-page contrast flags during CSS
  swapping were rechecked after network idle; they did not reproduce.
- `npm test` builds the docs, both CSS bundles and JS package formats. Its
  accessibility tests now check both buckets, the actual loaded sheet and
  mobile overflow for every migrated page. GitLab's separate screenshot-diff
  job is still required for visual review.
- Desktop and mobile review captures for Buttons, authentication setup,
  Connected services and Consent are in the local worktree's
  `tmp/batch-01-evidence/` (not packaged or committed).
- Before publication: compare against the authoritative GitLab `main`, attach
  the ticket and screenshots, then review the CI visual-regression artifact.
  For batch 02, start from merged `main` (or stack explicitly on batch 01),
  add the next reviewed slugs to the manifest, and repeat the dual-bucket tests.
  Do not merge the whole `design-tweaks` branch to carry over the remaining work.
