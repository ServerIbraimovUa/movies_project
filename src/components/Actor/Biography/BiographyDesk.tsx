import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { BiographyTextDesk, Button,HeadingDesk,HeadingDeskName } from "./Biography.styled";
import { useTranslation } from "react-i18next";


interface BiographyProps{
    actor:  Actor
  }
  

    const BiographyDesk: FC<BiographyProps> = ({actor}) => {
      const { t } = useTranslation();
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
   <HeadingDesk>{t("actor.biografi")}</HeadingDesk>
   
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
