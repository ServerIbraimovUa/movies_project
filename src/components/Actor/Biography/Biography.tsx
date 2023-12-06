import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { Button } from "./Biography.styled";



interface BiographyProps{
    actor:  Actor
  }
  

    const Biography: FC<BiographyProps> = ({actor}) => {
    const { name, biography }=actor;
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : any => {
     if(!s) return ;
     
     return s.length> w ? s.slice(0, w) + "..." : s; 
    }

    const text= truncateString(biography, 1000);

    
  return (
   <>
   <h1>{name}</h1>
   {biography &&   
   <>
   <p>{showMore ? biography : text} </p>
   <div>
    {biography.length > 1000 &&
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </Button>  
     }
  </div>
    </>    
   }
   </>
  );
};

export default Biography;
