import React, { FC } from "react";
import { Container } from "react-bootstrap";


const Copyright: FC = () => {
  return (
    <>      
        <Container>
          <h1>Copyright holders</h1>
          <p>
            Video materials are posted according to the law, and in the absence of a prohibition from the copyright holder. 
            If copyright holders decide to withdraw their materials, they send an application.
          </p>
          <p>
            A complaint about copyright infringement can be submitted by email to support.
          </p>
        </Container>
     
    </>
  );
};

export default Copyright;
