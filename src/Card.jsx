import react from "react";

function Card(props) {
  return (      

        <div className="card">
          <img src={props.imgscr}  className="card_img" />
          <div className="card_info">
            <span className="card_category"> {props.title}</span>
            <h3 className="card_title"> {props.sname} </h3>
            <a className="button" href={props.links} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>   
    
  );
}

export default Card;
 
