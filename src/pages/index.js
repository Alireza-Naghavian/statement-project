import HomePage from "@/components/pages/home/Home";
import SideBar from "@/components/ui/SideBar";
import Header from "@/components/ui/Header";
import RealTor from "@/components/ui/RealTor";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <div className="container">
      <SideBar />
      <Header />
      <RealTor />
      <HomePage />
      <Footer />
    </div>
  );
}
