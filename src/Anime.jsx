import React from 'react'
import img_1 from './Assets1/naruto-img.jpg';
import img_2 from './Assets1/boruto-img.jpg';
import img_3 from './Assets1/bleach-img.jpg';

const animeList = {
    manik:
    {
      objectId: 1,
      fname: 'manikanta',
      lname: 'sripathi',
    },
    shiv:{
      objectId: 2,
      fname: 'Shivani',
      lname: 'Sripathi',
    },
    sudha:{
      objectId: 3,
      fname: 'Sudhakar',
      lname: 'sripathi',
    }
  }
  
  const animeLists = [
    {
      imgSrc: img_1,
      sName: "Naruto",
      links: "https://animesuge.to/anime/naruto-xx8z/ep-1",
      prodCom: "Studio Pierrot"
    },
    {imgSrc: img_2,
      sName: "Boruto",
      links: "https://animesuge.to/anime/boruto-naruto-next-generations-97vm/ep-1",
      prodCom: "Studio Pierrot"
    },
    {imgSrc: img_3,
      sName: "Bleach",
      links: "https://animesuge.to/anime/bleach-6j9/ep-1",
      prodCom: "Studio Pierrot"
    },
  
  ]
  
  const date = new Date();
  
  function Card(props){
    return(
      <div className="cards">
          <div className="card">
            <img style={{width: '100vw'}} src={props.imgsrc} alt="" className="hero-img" />
            <div className="production-house-name">{props.prodcom}</div>
            <div className="name-of-series">{props.sname}</div>
            <a href={props.links} className="link" target="_manik">
              <button>Watch me</button>
            </a>  
          </div>
        </div>
    );
  }

export default function Anime() {
  return (
    <>
    {animeLists.map( (elements)=>{
        return(
        <Card 
        imgsrc={elements.imgSrc}
      sname={elements.sName}
      links={elements.links}
      prodcom={elements.prodCom}/>
        )
      })}
      </>
  )
}
