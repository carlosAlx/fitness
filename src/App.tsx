import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "./scenes/navbar/type";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className="App bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
