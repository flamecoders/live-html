import "./App.css";
import { useState, useCallback, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { html } from '@codemirror/lang-html';

export default function App() {
  const [code, setCode] = useState('');

  const onChange = useCallback((value) => {
    setCode(value);
  }, []);

  useEffect(() => {
    const iframe = document.getElementById("preview");
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(code);
    iframeDocument.close();
  }, [code]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <CodeMirror
          value={code}
          height="100dvh"
          width="50dvw"
          onChange={onChange}
          theme={dracula}
          extensions={[html({ matchClosingTags: true })]}
        />
      </div>
      <iframe
        id="preview"
        title="HTML Preview"
        style={{
          width: "50vw",
          height: "100vh",
          border: "none",
        }}
      ></iframe>
    </>
  );
}
