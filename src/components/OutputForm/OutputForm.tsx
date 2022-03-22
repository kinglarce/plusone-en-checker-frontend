import React, { FC, useEffect, useState } from "react";
import { Row, Col, Label } from "reactstrap";
import { checkSentence } from "../../api/index";

interface OutputFormProps {
  sentence: string;
  setLoading: (loading: boolean) => void;
}

export const OutputForm: FC<OutputFormProps> = ({ sentence, setLoading }) => {
  const [invalidWords, setIinvalidWords] = useState<string[]>([]);

  useEffect(() => {
    if (sentence) {
      setLoading(true);
      checkSentence(sentence).then((response: string[] | undefined) => {
        setIinvalidWords(response!);
        setLoading(false);
      });
    }
  }, [sentence, setLoading]);

  const hasInvalidWords = sentence && invalidWords.length > 0;

  return (
    <Row>
      <Col sm='12' md={{ size: 6, offset: 3 }} className='text-center'>
        <div style={{ display: hasInvalidWords ? "block" : "none" }}>
          <h6>Non-English words: </h6>
          <Label>{invalidWords.join(', ')}</Label>
        </div>
        <div style={{ display: (!hasInvalidWords && sentence) ? "block" : "none" }}>
          <h6>Everything looks good!</h6>
        </div>
      </Col>
    </Row>
  );
};
