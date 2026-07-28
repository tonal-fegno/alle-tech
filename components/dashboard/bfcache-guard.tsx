"use client";

import { useEffect } from "react";

// When the browser restores a dashboard page from the back/forward cache
// (e.g. pressing Back after signing out), no request reaches the server, so
// the auth middleware never runs. Force a reload on bfcache restores so the
// middleware can re-check the session and redirect to login if it's gone.
export function BfcacheGuard() {
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
