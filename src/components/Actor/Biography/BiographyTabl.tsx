import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { BiographyTextTabl, Button,HeadingTabl, HeadingTablName } from "./Biography.styled";



interface BiographyProps{
    actor:  Actor
  }
  

    const BiographyTabl: FC<BiographyProps> = ({actor}) => {
    const { name, biography }=actor;
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : any => {
     if(!s) return ;
     
     return s.length> w ? s.slice(0, w) + "..." : s; 
    }

    const text= truncateString(biography, 1000);

    
  return (
   <>
   <HeadingTablName>{name}</HeadingTablName>
   <HeadingTabl>Biography</HeadingTabl>
   
   {biography &&   
   <>
   <p>{showMore ? biography : text} </p>
   <BiographyTextTabl>
    {biography.length > 1000 &&
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </Button>  
     }
  </BiographyTextTabl>
    </>    
   }
   </>
  );
};

export default BiographyTabl;
