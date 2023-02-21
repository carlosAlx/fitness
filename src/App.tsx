import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/type";
import { Home } from "@/scenes/home";
import { Benefits } from "@/scenes/Benefits";
import { OurClasses } from "@/scenes/ourClass";
import { ContactUs } from "@/scenes/contac";
import { Footer } from "@/scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [topOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-gray-20">
      <Navbar
        topOfPage={topOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses  setSelectedPage={setSelectedPage}/>
      <ContactUs  setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  );
}

export default App;
