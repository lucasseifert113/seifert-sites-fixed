# Seifert Sites

Premium web design site for Seifert Sites, built with Next.js App Router.

## What was cleaned up

- Removed obvious placeholder copy across the site
- Fixed the broken Calendly CTA
- Centralized editable contact and pricing details in `app/lib/site.ts`
- Reworked the home, services, work, process, pricing, and contact pages
- Added a stronger case-study angle around Andy LeBrun Lacrosse
- Improved metadata and general site structure

## Main file to edit later

If you need to change contact info, pricing ranges, or the featured project, start here:

```ts
app/lib/site.ts
```

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Notes

- The contact email is currently set to `hello@seifertsites.com`.
- If that inbox is not real yet, change it in `app/lib/site.ts` before deploying.
