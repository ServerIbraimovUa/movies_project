import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { Button } from "./Biography.styled";


const BASE_IMG = "https://image.tmdb.org/t/p/w300";
interface BiographyProps{
    actor:  Actor
  }
  

const Biography: FC<BiographyProps> = ({actor}) => {
    const { name, biography }=actor;
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : string => s.length> w ? s.slice(0, w) + "..." : s; 
    const text= truncateString(biography, 1000);

    
  return (
   <>
   <h1>{name}</h1>
   <p>{showMore ? biography : text} </p>

<div>
  <Button onClick={()=>setShowMore(!showMore)}>
    {showMore? "Read less" : "Read more"}
   </Button>    
</div>
   
   </>
  );
};

export default Biography;
