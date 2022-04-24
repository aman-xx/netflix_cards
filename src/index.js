import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";



ReactDom.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series</h1>
    <div className="cards">
    {Sdata.map((val)=>{
     return (
      <Card
      imgscr={val.imgscr}
      title={val.title}
      sname={val.sname}
      links={val.links}
    />
      );
    })}</div>
    </>,
  

  document.getElementById("root")
);
