"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const isEs = pathname.startsWith("/es");

  const toggle = () => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (isEs) {
      const newPath = pathname.replace(/^\/es/, "") || "/";
      router.push(newPath + hash);
    } else {
      router.push("/es" + pathname + hash);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={isEs ? "Switch to English" : "Cambiar a Español"}
      className="px-2 py-1 rounded-lg text-sm font-mono font-medium text-muted hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
    >
      {isEs ? "ES" : "EN"}
    </button>
  );
}
