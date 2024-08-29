import React from "react"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { getMetadata } from "@/server/data-access-layer/content"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const logo = (await getMetadata())?.logo1
  return (
    <div className="flex flex-col">
      <Header logo={logo} />
      <main className="mt-[65px] bg-background-primary lg:mt-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
