import React from 'react'
import "antd/dist/antd.css";
import { Col, Row, Button, Input } from 'antd'
import styled from 'styled-components'

import History from './components/History'
import PhraseDetails from './components/PhraseDetails'
import MarkDownResult from './components/MarkDownResult'

const { TextArea } = Input;

const CustomTextArea = styled(TextArea)`
  &.ant-input {
    width: 100%;
    height: 300px;
    resize: none;
    border: 2px solid #000000;
    border-right: 1px;
    border-radius: 4px;
  }
`;

const Container = styled(Row)`
  margin: 30px;
`;

const ButtonsRow = styled.div`
  width: 100%;
  text-align: center;
  
  .reset {
    margin-right: 10px;
  }
`;

function App() {
  const [markdownText, setMarkdownText] = React.useState<string>('');
  const [resetData, setResetData] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (resetData) {
      setMarkdownText('');
      setResetData(false);
    }
  }, [resetData]);

  return (
    <Container>
      <Col span={12}>
        <CustomTextArea value={markdownText} onChange={(e) => setMarkdownText(e.target.value)} />
      </Col>
      <Col span={12}>
        <MarkDownResult markdownText={markdownText} />
      </Col>
      <Col span={24}>
        <PhraseDetails />
      </Col>
      <Col span={24}>
        <ButtonsRow>
          <Button className="reset" onClick={() => setResetData(true)}>Reset</Button>
          <Button type="primary">Show history</Button>
        </ButtonsRow>
      </Col>
    </Container>
  );
}

export default App;
