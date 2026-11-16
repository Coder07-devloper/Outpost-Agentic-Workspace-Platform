"use client";

import { useSyncExternalStore } from "react";
import { PricingTable } from "@clerk/nextjs";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const pricingTableAppearance = {
  elements: {
    pricingTable: {
      "--grid-min-size": "14rem",
      "--grid-max-columns": "3",
      "@media (max-width: 767px)": {
        "--grid-min-size": "100%",
        "--grid-max-columns": "1",
      },
    },
  },
};

export function HydratedPricingTable({
  for: subscriberType,
}: {
  for: "user" | "organization";
}) {
  // Clerk mounts its pricing UI into an imperative host element. Wait until React
  // has hydrated so a fast Clerk load cannot add that host during hydration.
  const hasHydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!hasHydrated) return null;

  return <PricingTable for={subscriberType} appearance={pricingTableAppearance} />;
}
