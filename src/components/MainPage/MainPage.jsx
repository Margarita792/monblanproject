
import { useState } from "react";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import Cards from "../Cards/Cards";
import { posts } from "../../data/posts";
import style from "./MainPage.module.css";
import bgTop from "../../assets/Vector 1.svg"
import bgBm from "../../assets/Vector 2.svg"
function MainPage() {
  const [view, setView] = useState("rows");
  return (
    <>
    
      <div className = {style.wrapper}>
        <img src={bgTop}alt="background" className={style.bgTop}/>
        <Header />
        <Toggle value={view} onChange={setView} />
        <Cards items={posts} view={view} />
        <img src={bgBm}alt="background" className={style.bgBm}/>
        <div className = {style.wrapBtn}>
        <button className = {style.btn}>LOAD MORE</button>
        </div>
     </div>
    </>
  );
}

export default MainPage;
