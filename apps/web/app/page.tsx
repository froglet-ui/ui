"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Alert, Badge, Button, Progress } from "@froglet/ui";

function GitHubIcon() {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--color-text-subtle)",
        display: "flex",
        alignItems: "center",
        padding: "0.25rem",
        borderRadius: "var(--radius-sm)",
        transition: "color 0.15s ease",
        width: 28,
        height: 28,
      }}
    >
      {mounted ? resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon /> : null}
    </button>
  );
}

function Nav() {
  return (
    <nav className="landing-nav">
      <div className="landing-nav__logo">
        <Link href="/" aria-label="Froglet home">
          <Image
            className="logo-light"
            src="/logo-on-light.svg"
            alt="Froglet"
            width={110}
            height={40}
            priority
          />
          <Image
            className="logo-dark"
            src="/logo-on-dark.svg"
            alt="Froglet"
            width={110}
            height={40}
            priority
          />
        </Link>
      </div>
      <div className="landing-nav__actions">
        <Link
          href="/docs"
          style={{
            fontSize: "0.9375rem",
            color: "var(--color-text-subtle)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Docs
        </Link>
        <a
          href="https://github.com/froglet-ui/ui"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-nav__github"
          aria-label="View on GitHub"
        >
          <GitHubIcon />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

const FEATURES = [
  {
    icon: "♿",
    title: "Accessible",
    body: "WCAG 2.1 AA compliant out of the box. Keyboard navigation, focus management, and ARIA semantics built in.",
  },
  {
    icon: "🎨",
    title: "Brandless",
    body: "Zero opinions on color or visual style. Every property is a CSS custom property — theme with a few lines of CSS.",
  },
  {
    icon: "🔷",
    title: "TypeScript-first",
    body: "Full TypeScript types included. Props are exported, refs are forwarded, and autocomplete just works.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="landing-hero">
          <span className="landing-hero__eyebrow">
            Open Source · MIT License
          </span>
          <h1 className="landing-hero__title">
            Build UIs that{" "}
            <span className="landing-hero__title-gradient">feel alive.</span>
          </h1>
          <p className="landing-hero__subtitle">
            Froglet is a brandless, accessible React component library. No
            styles forced on you — just solid foundations you can theme however
            you want.
          </p>
          <div className="landing-hero__actions">
            <Button
              className="button--primary"
              onClick={() => {
                window.location.href = "/docs";
              }}
            >
              Get started
            </Button>
            <a
              href="https://github.com/froglet-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button className="button--secondary">
                <GitHubIcon />
                View on GitHub
              </Button>
            </a>
          </div>
          <div className="landing-hero__install">
            <span className="landing-hero__install-prefix">$</span>
            <span>npm install @froglet/ui</span>
          </div>
        </section>

        {/* Features */}
        <section className="landing-features">
          <div className="landing-features__grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="landing-feature-card">
                <div className="landing-feature-card__icon">{f.icon}</div>
                <h2 className="landing-feature-card__title">{f.title}</h2>
                <p className="landing-feature-card__body">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component Preview */}
        <section className="landing-preview">
          <div className="landing-preview__inner">
            <p className="landing-section-label">Components</p>
            <h2 className="landing-section-title">
              Everything you need to ship.
            </h2>
            <p className="landing-section-subtitle">
              20+ components covering forms, layout, feedback, and navigation.
              All styled with CSS custom properties — make them yours in
              minutes.
            </p>
            <div className="landing-preview__components">
              <Badge className="badge--primary">v1.0.0</Badge>
              <Badge className="badge--accent">New</Badge>
              <Button className="button--primary">Primary</Button>
              <Button className="button--secondary">Secondary</Button>
              <Button className="button--ghost">Ghost</Button>
              <Alert className="alert--info">
                20 components, zero opinions.
              </Alert>
            </div>
            <div style={{ marginTop: "2rem", maxWidth: "24rem" }}>
              <Progress className="progress--primary" value={0.68} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <nav className="landing-footer__links">
          <Link href="/docs" className="landing-footer__link">
            Docs
          </Link>
          <a
            href="https://github.com/froglet-ui/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-footer__link"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@froglet/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-footer__link"
          >
            npm
          </a>
        </nav>
        <p className="landing-footer__copy">
          &copy; {new Date().getFullYear()} Froglet UI. MIT License.
        </p>
      </footer>
    </>
  );
}
