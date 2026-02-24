import Image from "next/image";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import type { ReactNode } from "react";

function Logo() {
  return (
    <>
      <Image
        className="logo-light"
        src="/logo-on-light.svg"
        alt="Froglet"
        width={120}
        height={44}
        priority
      />
      <Image
        className="logo-dark"
        src="/logo-on-dark.svg"
        alt="Froglet"
        width={120}
        height={44}
        priority
      />
    </>
  );
}

const navbar = (
  <Navbar logo={<Logo />} projectLink="https://github.com/froglet-ui/ui" />
);

const footer = (
  <Footer>© {new Date().getFullYear()} Froglet UI. MIT License.</Footer>
);

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/froglet-ui/ui/tree/main/apps/web"
      footer={footer}
    >
      {children}
    </Layout>
  );
}
