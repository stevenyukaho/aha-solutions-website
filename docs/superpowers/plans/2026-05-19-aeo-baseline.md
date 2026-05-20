# AEO Baseline — AHA Solutions Phase 1

**Purpose:** Pre/post snapshot of how ChatGPT, Claude, and Perplexity describe AHA Solutions before and after Phase 1 AEO retrofit lands in production. The truest test of whether the work moved the needle is whether AI assistants change how they describe AHA Solutions over the next 30 days.

**Production deploy:** 2026-05-20 (PR #1 merged as `d54d3a9`)
**Phase 1b decision:** Ship right after Phase 1 lands (zh-TW + zh-CN translation pass for `llms.txt`, FAQ content, and JSON-LD descriptions).

---

## Prompts (ask each in a fresh session, browse-capable mode)

1. *What is AHA Solutions (ahasolutions.ca)?*
2. *Best AI automation agency for SMB founders in Canada*
3. *Who builds AI automation systems for SMB founders in Hong Kong and Canada?*
4. *What does Steven Yu / AHA Solutions do?*

For each prompt, record:
- Was AHA Solutions cited? (yes / no)
- If yes, what description did the engine give? (paste verbatim)
- Did the engine link to /systems, /about, /book, or /case-studies?

---

## T+0 — 2026-05-20 (day of production deploy)

### ChatGPT (browse-capable)

#### Prompt 1 — What is AHA Solutions (ahasolutions.ca)?
> _paste verbatim answer_

#### Prompt 2 — Best AI automation agency for SMB founders in Canada
> _paste verbatim answer_

#### Prompt 3 — Who builds AI automation systems for SMB founders in Hong Kong and Canada?
> _paste verbatim answer_

#### Prompt 4 — What does Steven Yu / AHA Solutions do?
> _paste verbatim answer_

---

### Claude (claude.ai with web search)

#### Prompt 1 — What is AHA Solutions (ahasolutions.ca)?
> _paste verbatim answer_

#### Prompt 2 — Best AI automation agency for SMB founders in Canada
> _paste verbatim answer_

#### Prompt 3 — Who builds AI automation systems for SMB founders in Hong Kong and Canada?
> _paste verbatim answer_

#### Prompt 4 — What does Steven Yu / AHA Solutions do?
> _paste verbatim answer_

---

### Perplexity

#### Prompt 1 — What is AHA Solutions (ahasolutions.ca)?
> _paste verbatim answer_

#### Prompt 2 — Best AI automation agency for SMB founders in Canada
> _paste verbatim answer_

#### Prompt 3 — Who builds AI automation systems for SMB founders in Hong Kong and Canada?
> _paste verbatim answer_

#### Prompt 4 — What does Steven Yu / AHA Solutions do?
> _paste verbatim answer_

---

## T+7 — 2026-05-27

(Re-ask the same prompts; paste verbatim answers under each engine.)

### ChatGPT
_TBD_

### Claude
_TBD_

### Perplexity
_TBD_

---

## T+30 — 2026-06-19

(Re-ask the same prompts; paste verbatim answers under each engine.)

### ChatGPT
_TBD_

### Claude
_TBD_

### Perplexity
_TBD_

---

## Diff observations

Fill in after each timepoint:

- **T+0 → T+7:** Did any engine that didn't mention AHA at T+0 mention it at T+7? Did the description quality change (more accurate / more specific)? Did the engines start linking to `/systems`, `/about`, `/book`?
- **T+7 → T+30:** Same questions.
- **What changed in the work between deploys?** Phase 1b zh translation lands here; note the deploy date.
