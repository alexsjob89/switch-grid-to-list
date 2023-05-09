import React from 'react';
import './App.css';
import Data from "./Data";
import Image1 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (88).jpg";
import Image2 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (89).jpg";
import Image3 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (90).jpg";
import Image4 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (91).jpg";
import Image5 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (92).jpg";
import Image6 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (93).jpg";
import Image7 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (94).jpg";
import Image8 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (95).jpg";
import Image9 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (96).jpg";

const App = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  return (
    <div className="App">
      <Data images={images} />
    </div>
  );
};


export default App;
