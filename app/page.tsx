import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";
import RightSidebar from "@/components/right-sidebar";
import { GamingFooter } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Navigation />
      <div className="main-section   ">
        <div className="grid  grid-cols-12 max-w-7xl mx-auto">
          <Sidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </div>
      <GamingFooter />
    </div>
  );
}
