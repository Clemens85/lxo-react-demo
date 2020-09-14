import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useAsync} from "react-async-hook";

const fetchGetStartedAsync = async() => (await fetch('/GET_STARTED.md')).text();


export default function GetStarted() {

  const asyncResult = useAsync(fetchGetStartedAsync, []);
  const { result } = asyncResult;

  return <ReactMarkdown source={result} />;
}
