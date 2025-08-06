"use client";

import I18Provider from "@/components/I18nProvider";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MouseEffect } from "@/components/MouseEffect";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <I18Provider locale={locale}>
      <div className="lg:ml-150 max-w-[800px]">
        <Header />
        <Sidebar />
        {children}
        <MouseEffect />
      </div>
    </I18Provider>
  );
}
