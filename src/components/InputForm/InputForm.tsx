import React, { FC, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { LoadingButton } from "../LoadingButton/LoadingButton";

interface InputFormProps {
  setSentence: (sentence: string) => void;
  loading: boolean;
}

export const InputForm: FC<InputFormProps> = ({ setSentence, loading }) => {
  const [eachEntry, setEachEntry] = useState<string>("");

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEachEntry(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSentence(eachEntry);
  };

  return (
    <div>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }} className='text-center'>
          <h2>English Words Checker</h2>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='player'>Type or paste here</Label>
              <Input
                name='player'
                value={eachEntry || ""}
                onChange={handleChange}
                placeholder='Ex. The quick brown fox jumps over the lazy dog'
              ></Input>
            </FormGroup>
            <LoadingButton loading={loading}>Check</LoadingButton>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
