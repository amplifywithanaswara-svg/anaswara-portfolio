# Anaswara KC: Digital Marketing Portfolio

Next.js 14 (App Router), TypeScript and Tailwind CSS 3. No APIs, paid services or environment variables.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production check
```

## Structure
```
app/            pages: / /about /skills /projects /experience /contact, layout.tsx, globals.css
components/     Header, Footer, PageHead, ProjectCard, Badge
lib/data.ts     ALL content (edit here)
public/         Anaswara-KC-Resume.pdf (resume download)
```

## Customise
- Edit `lib/data.ts`. Lines marked `CONFIRM` had conflicting details between resume and LinkedIn: job title, employer name, internship dates and email.
- Add verified results: set `result: "..."` on a project in `lib/data.ts`. Until then a dashed placeholder shows.
- Add screenshots: put images in `public/projects/` and replace the placeholder block in `components/ProjectCard.tsx` with a `next/image`.
- Colours: `tailwind.config.ts`. Fonts: `app/layout.tsx`.
- To replace the resume, overwrite `public/Anaswara-KC-Resume.pdf`.

## Deploy: GitHub + Vercel
Suggested repo name: `anaswara-digital-marketing-portfolio`
1. `git init && git add . && git commit -m "Initial portfolio"`
2. Create an empty repo on github.com, then:
   `git remote add origin https://github.com/<username>/anaswara-digital-marketing-portfolio.git`
   `git branch -M main && git push -u origin main`
3. On vercel.com choose Add New, then Project, import the repo and click Deploy (Next.js is detected automatically).
4. Custom domain: Project, Settings, Domains, add your domain (for example `anaswarakc.com`). At your domain registrar add the DNS records Vercel shows (usually an A record for the root domain and a CNAME for `www`). HTTPS is issued automatically.
5. Update `url` in `lib/data.ts` to your final domain.
