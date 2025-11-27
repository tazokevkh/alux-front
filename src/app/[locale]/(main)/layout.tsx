import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HeroBottom from "@/components/hero-bottom/HeroBottom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: MainLayoutProps) {
  return (
    <div className="relative container min-h-screen mb-10">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        {children}
      </main>
      <HeroBottom />
      <Footer />
    </div>
  );
}
