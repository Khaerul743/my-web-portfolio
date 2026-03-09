import Navbar from "../../components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}
