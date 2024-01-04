import React, { FC } from "react";
import { Accordion, Container } from "react-bootstrap";


const FAQ: FC = () => {
  return (
    <>      
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>On what devices can I use the service?</Accordion.Header>
                <Accordion.Body>
                    Filmoteka available on all modern devices via a web-browser.
                 </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>How to change video quality?</Accordion.Header>
                <Accordion.Body>
                    At the moment there is no such possibility.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Problems loading videos?</Accordion.Header>
                <Accordion.Body>
                The recommended speed for comfortable video viewing is 20 Mbit/sec.

                If you experience problems loading videos (constant buffering), make sure that your Internet channel is free and that there are no other programs running on your device that can significantly load the device’s resources:<br/>

                1. Close unnecessary browser tabs - they can overload your device's memory;<br/>
                2. Make sure that when playing a video, you have disabled torrent clients and other programs that may load the Internet channel you are using;<br/>
                3. Try playing the video in another browser;<br/>
                4. Try using the “Incognito” mode in the browser;<br/>
                5. Clear your browser cache and delete cookies;<br/>
                6. Disable the VPN client if it is active.<br/>

                If the above steps do not resolve the problem, please write to support.
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
     
    </>
  );
};

export default FAQ;
