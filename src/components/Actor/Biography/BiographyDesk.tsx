import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { BiographyTextDesk, Button,HeadingDesk,HeadingDeskName } from "./Biography.styled";



interface BiographyProps{
    actor:  Actor
  }
  

    const BiographyDesk: FC<BiographyProps> = ({actor}) => {
    const { name, biography }=actor;
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : any => {
     if(!s) return ;
     
     return s.length> w ? s.slice(0, w) + "..." : s; 
    }

    const text= truncateString(biography, 1000);

    
  return (
   <>
   <HeadingDeskName>{name}</HeadingDeskName>
   <HeadingDesk>Biography</HeadingDesk>
   
   {biography &&   
   <>
   <p>{showMore ? biography : text} </p>
   <BiographyTextDesk>
    {biography.length > 1000 &&
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </Button>  
     }
  </BiographyTextDesk>
    </>    
   }
   </>
  );
};

export default BiographyDesk;
