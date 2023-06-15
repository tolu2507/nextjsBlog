import { ButtonImage } from "../../../public/assets/but";
import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen bg-gradient-to-br from-[#9e82f1] to-[#e59176]">
      <nav className="px-4 shadow-lg bg-[#0e0233] text-white py-6 border border-black flex justify-between items-center">
        <ButtonImage width={200} height={50} />
        <div className="w-1/3 flex justify-between item-center space-x-2">
          {["profile", "docs", "about", "out"].map((item) => (
            <div key={item} className="p-3 bg-[#81789c] hover:bg[#9e82f1] h-full w-full item-center flex justify-center rounded-2xl">
              <Link href={`/${item}`}>{item}</Link>
            </div>
          ))}
        </div>
      </nav>
      {children}
    </section>
  );
}
