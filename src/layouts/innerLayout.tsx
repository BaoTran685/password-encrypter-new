import Navbar from "@/components/Nav/Navbar";




export default function InnerLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-[var(--background-white-color)] text-[var(--text-black-color)] container mx-auto px-3">
      <Navbar />
      {children}
    </main>
  )
}