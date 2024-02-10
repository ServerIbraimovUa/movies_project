import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Info=styled.div`
 width: 398px;
 margin-bottom: 24px;
 background-color: #F4EBFF;
 border-radius: 24px;
 padding: 20px;
`

export const CardImg = styled.img`
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 113px;
  border-radius : 16px;
  
  @media screen and (min-width: 768px)  {
    width: 222px;
    margin-right: 20px;
    margin-bottom: 40px;
    float: none;
  }
  @media screen and (min-width: 1440px){
    width: 231px;    
    margin-right: 24px;
    margin-bottom: 40px;
    float:none;
  }   
  
`
export const ContentWrapper=styled.div`
  margin-bottom: 16px;
`
export const Title=styled.h2`
  font-size: 24px;
  font-weight:700;
  margin-bottom: 45px;
`
export const SubTitle=styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 15px;
`
export const Content=styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`
export const GenresWrapper=styled.div`
  display: flex;
  gap:5px;
`
export const GenresList=styled.ul`
  padding: 0px;
  margin:0px;
  display: flex;
  flex-wrap: wrap;
`
export const ButtonWrapper=styled.div`
  display: flex;
  gap:16px;
  margin-left: auto;
  margin-right: auto;
`
export const WatchButton=styled(NavLink)`
  display: flex;
  width: 298px;
  justify-content: center;
  border-radius:12px;
  border:1px solid #9040F6;
  font-size: 20px;
  font-weight: 500;
  padding-top: 6.2px;
  padding-bottom: 6.2px;
  color: #9040F6;
  text-decoration: none;
`
export const Button=styled.button`
  border-color:#9040F6;
  width: 44px;
  height: 44px;
  border-radius: 8px;
`
export const IconBorder=styled(MdOutlineFavoriteBorder)`
  color:#9040F6;
  width: 24px;
  height: 24px;
`
export const Icon=styled(MdOutlineFavorite)`
  color:#9040F6;
  width: 24px;
  height: 24px;
`
