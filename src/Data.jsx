import React,{useState} from 'react';
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import {FiList} from "react-icons/fi";
import './App.css';


const Data = ({ images }) => {
 const [activeImageIndex, setActiveImageIndex] = useState(0);
 const [view, setView] = useState('grid');
 const [hideThumbnails, setHideThumbnails] = useState(false);

 const changeImage = (index) => {
   setActiveImageIndex(index);
 };

 const toggleView = () => {
  setHideThumbnails(true);
  setTimeout(() => {
    setView(view === 'grid' ? 'list' : 'grid');
    setHideThumbnails(false);
  }, 400);
 };

 return (
   <div className="image-grid">
     <button onClick={toggleView}>
       {view === 'grid' ? <FiList size={30}/> : <BsFillGrid3X3GapFill size={30} />}
     </button>

     <div className={`thumbnail-container ${view} ${hideThumbnails ? 'hide' : ''}`}>
       {images.map((image, index) => (
         <div
           key={index}
           className={`thumbnail ${activeImageIndex === index ? 'active' : ''}`}
           onClick={() => changeImage(index)}
         >
           <img src={image} alt={`Thumbnail ${index}`} width={400}/>
         </div>
       ))}
     </div>
   </div>
 );
};

export default Data