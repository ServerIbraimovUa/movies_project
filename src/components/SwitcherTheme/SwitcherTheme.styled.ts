import styled from 'styled-components';

const Container = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 82px;
    height: 30px;
  }
  @media screen and (min-width:1024px){
   .switch{
    width: 92px;
    height: 44px;
   }
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.grayBorder};
    transition: 0.4s;
     border-radius: 10px;


  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 4px;
    bottom: 6px;
    background-color: transparent;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.grayBorder};
  }

  @media screen and (min-width:1024px){
     .slider:before{
      height: 32px;     
      bottom: 5px;
     }
  }
  
  
  .switch.dark .slider:before {
     left: 5px;
    bottom: 5px;
    transform: translateX(150%);
  }

  .switch.light .slider:before {
    transform: translateX(0);
  }
.moon {
  margin-left: 20px;
  fill: #9040F6;
  color: #9040F6;
}
.sun {
  margin-left: 10px;
  fill: #9040F6;
  color: #9040F6;
  
}

@media screen and (min-width:1024px){
  .sun{
    margin-top: 10px;
  }
  .moon{
    margin-left: 30px;
    margin-top: 10px;
    
  }
}
`;

export default Container;
