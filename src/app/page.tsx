"use client";

import HomePage from "@/components/HomePage";
import { NextUIProvider } from "@nextui-org/system";

export default function App() {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
}
