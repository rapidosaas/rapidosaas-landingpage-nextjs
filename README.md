<div align="center">
<img src="public/instant-store-logo.svg" width="72" alt="Instant Store logo" />

# Instant Store Landing Page

Instant Store is a free, self-hosted Next.js e-commerce solution. Clone it, customize it, and deploy anywhere. This landing page showcases the solution and optional deployment/development services.

**Example store built with Instant Store:** https://artisanat-dz.com  
**Platform demo (this landing page):** https://demo.instant-store.com
</div>

## ✨ What Makes Instant Store Different

- **100% Free:** Full source code, no licensing fees, no subscriptions.
- **Self-Hosted:** Deploy anywhere—Vercel, Netlify, AWS, your own VPS.
- **Production-Ready:** Built with Next.js 16, Tailwind CSS, optimized for performance.
- **Customizable:** Adapt branding, features, and integrations to your needs.
- **Optional Services:** Need help? We offer deployment setup and custom development.
- **Real Example:** See it in action at artisanat-dz.com.

## 🧱 Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 inline `@theme`
- Geist fonts via `next/font`

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 📂 Project Structure

```
app/
	layout.tsx      # Root layout + metadata
	page.tsx        # Composed landing sections
	globals.css     # Design tokens & custom utilities
	components/     # Hero, Features, Steps, Pricing, Testimonials, FAQ, CTA, Footer
public/           # Logos & decorative SVGs
```

## 🛠 Customization

- Colors & Radii: Adjust CSS vars in `globals.css`.
- Sections: Modify or extend components in `app/components`.
- Animations: Reuse `.fade-up`, `.slide-in`, `.glow-pulse` or add new keyframes.
- Metadata: Update `metadata` object in `layout.tsx`.

## ♿ Accessibility Notes

- FAQ uses proper `aria-expanded`, `aria-controls`, and `aria-labelledby`.
- Placeholder links replaced with buttons in `Footer` to avoid invalid hrefs.

## 🧪 Lint & Type Check

```bash
npm run lint
```

## 📦 Deployment

Platform demo domain (landing page canonical): `demo.instant-store.com`.

Example store (real-world implementation): `artisanat-dz.com` – showcases a storefront powered by the platform, not the platform marketing site itself.

To deploy a new landing instance on Vercel:

```bash
npm run build
npm start
```

Connect repository in Vercel dashboard and use default build settings (`NEXT_TELEMETRY_DISABLED=1` optional). Set `NODE_VERSION` if your environment differs.

## 🔒 Production Considerations (Future)

- Add analytics (e.g., PostHog or Vercel Web Analytics).
- Implement auth & signup flow.
- Expand FAQ with search.

## ✅ Roadmap

- Add store creation form CTA.
- Theme preview carousel.
- Light/dark toggle switch UI.

---
Made with Next.js & Tailwind. Instant Store © {new Date().getFullYear()}.
