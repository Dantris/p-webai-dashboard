import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div style={{ padding: 24 }}>{children}</div>;
}
