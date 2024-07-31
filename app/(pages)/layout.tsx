import Navigation from "@/components/navigation"

export default function subPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation/>
      {children}
    </>
  )
}
