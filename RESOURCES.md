# CSR-x Resource Hubs

The three resource hubs use shared passwords rather than individual accounts:

- [Admin Hub](/resources/admin/)
- [Mentor Hub](/resources/mentors/)
- [Mentee Hub](/resources/mentees/)

Each hub renders its contents only after the matching password is accepted. Set the three
passwords in the deployment environment (see `.env.example`); do not commit real passwords or
files from `conf-assets/`. If a hub's password variable is unset, that hub stays locked for
everyone — it does not fall open.

Local preview links use `http://localhost:4173/resources/admin/`,
`http://localhost:4173/resources/mentors/`, and `http://localhost:4173/resources/mentees/`.

## Editing hub contents

All three hubs are generated from one file: `app/resources/resourceData.ts`. Each hub has an
`intro` blurb and a list of `sections`; each section has a `title`, a `blurb`, and its `links`.

```ts
{
  id: "writing",                       // anchor used by the "Jump to" nav
  title: "Writing your paper",
  blurb: "One or two sentences of context for the links below.",
  links: [
    { label: "Paper template", description: "The CSR-x paper structure.", href: "https://…" },
    { label: "Revision checklist", description: "Read before every submission." },
  ],
}
```

A link with no `href` renders as a greyed-out "Link pending" card, so a section can ship before
every destination exists. Add the `href` and it becomes a live card automatically. Absolute
`https://` links are labelled "External site" and open in a new tab; site-relative links such as
`/program-format/` are labelled "On this site".

Nothing else needs editing to add a section — the `/resources/[hub]` pages, the "Jump to" nav, and
the section numbering all read from this file.

The static `resources/*/index.html` files are content-free fallbacks. Leave them that way: plain
static HTML cannot enforce a password, so no hub material belongs in them.

Program reference drafts:

- [Program Format](/program-format/)
- [Program Policy](/program-policy/)
- [Statement on AI Usage](/ai-usage/)
