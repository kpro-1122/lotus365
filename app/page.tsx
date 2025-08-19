import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import RightSidebar from "@/components/right-sidebar"
import InPlaySection from "@/components/in-play-section"
import { GamingFooter } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Navigation />
     <div className="main-section">
       <div className="flex max-w-7xl justify-center mx-auto">
        <Sidebar />
        <div className="flex-1 flex">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
      
     </div>
     <GamingFooter/>
    </div>
  )
}
