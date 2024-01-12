import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { BiographyTextMob, Button, HeadingMob } from "./Biography.styled";
import { useTranslation } from "react-i18next";


interface BiographyProps{
    actor:  Actor
  }
  

    const BiographyMob: FC<BiographyProps> = ({actor}) => {
      const { t } = useTranslation();
    const { biography }=actor;
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : any => {
     if(!s) return ;
     
     return s.length> w ? s.slice(0, w) + "..." : s; 
    }

    const text= truncateString(biography, 1000);

    
  return (
   <>
   <HeadingMob>{t("actor.biografi")}</HeadingMob>
   
   {biography &&   
   <>
   <p>{showMore ? biography : text} </p>
   <BiographyTextMob>
    {biography.length > 1000 &&
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </Button>  
     }
  </BiographyTextMob>
    </>    
   }
   </>
  );
};

export default BiographyMob;
