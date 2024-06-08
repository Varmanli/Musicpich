import { createContext, useState } from "react";
import LandingPage from "./Page/LandingPage";
import Footer from "./Ui/Footer";
import Header from "./Ui/Header";
import MusicPlayer from "./Ui/MusicPlayer";

export const selectedSongContext = createContext();

function App() {
  const [songId, setSongId] = useState();
  function selectedIdHandler(id) {
    setSongId(id);
  }
  const value = {
    songId,
    setSongId: selectedIdHandler,
  };
  console.log(songId);
  return (
    <selectedSongContext.Provider value={value}>
      <Header />
      <LandingPage />
      <MusicPlayer />
      <Footer />
    </selectedSongContext.Provider>
  );
}

export default App;
