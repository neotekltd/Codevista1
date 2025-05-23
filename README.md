# CodeVista - Digital Solutions Agency Website

A modern, responsive website for CodeVista, a digital solutions agency. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark mode support
- Modern animations with Framer Motion
- Contact form
- SEO optimized
- Performance optimized
- Accessible

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Heroicons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codevista.git
cd codevista
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
codevista/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
│   └── images/
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The primary and secondary colors can be customized in `src/app/globals.css`:

```css
:root {
  --primary: #2563eb;
  --secondary: #f43f5e;
}
```

### Content

Update the content in the respective component files under `src/components/`.

## License

MIT License 