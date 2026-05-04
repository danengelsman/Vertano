# Project Name

**Current name: Vertano**

A coined word with Italianate phonetics, chosen for its trust connotation (root: *vero* / *verità* — Italian for "true / truth"). Replaces the earlier working names "CreatorOS" and "Earnest."

## Use Vertano in:
- App Store listing name
- In-app brand mark (replaces "Earnest" in `OnboardingModal.tsx` `<EarnestMark />`)
- Marketing site, social handles, domain
- All future copy, press, decks

## Legacy names still present in the codebase (rename progressively):
- `metadata.json` → `"name": "CreatorOS"` — update to `"Vertano"` when ready
- `src/components/contentos/EarnestMark.tsx` and any `<EarnestMark />` usage
- Folder name `src/components/contentos/` (cosmetic — leaving it avoids a giant import diff; rename later as a single PR)
- Firestore admin email gate in `firestore.rules` (`danengelsman@gmail.com`) is unchanged — name change does not affect rules

## Pronunciation
**ver-TAH-no** (Italian stress on the penultimate syllable).

## Decided
2026-04-27
