import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { getPhraseDetails } from '../redux/actionCreators/Auth.action';

const MarkDownOutput = styled.div`
  border: 2px solid #000000;
  border-radius: 4px;
  height: 300px;
  padding: 4px 11px;
`;

export default function MarkDownResult({ markdownText }:any) {
  const dispatch = useDispatch();
  
  function getSelectedText() {
    let selection = window.getSelection();
    let text = selection?.toString();
    if (text)
    {
      dispatch(getPhraseDetails({ phrase: text }));
    }
  }

  return (
    <MarkDownOutput onMouseUp={getSelectedText}>
      <ReactMarkdown className="markdown" children={markdownText}  />
    </MarkDownOutput>
  )
}
