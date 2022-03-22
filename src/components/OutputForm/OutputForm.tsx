import React, { FC, useState } from "react";
import { Row, Col, Label } from "reactstrap";

interface OutputFormProps {
  sentence: string;
}

export const OutputForm: FC<OutputFormProps> = ({ sentence }) => {
  return (
    <div style={{ display: sentence ? "block" : "none" }}>
      <div>
        <Row>
          <Col sm='12' md={{ size: 6, offset: 3 }} className='text-center'>
            <h6>Non-English words: </h6> 
            <Label>{sentence}</Label>
          </Col>
        </Row>
      </div>
    </div>

    
  )
};