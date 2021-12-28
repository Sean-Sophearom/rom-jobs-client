import React from "react";
import { useState } from "react";
import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const RichEditor = ({ onChange, value }) => {
  const blocksFromHTML = convertFromHTML(value);
  const initialState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);

  const [state, setState] = useState(EditorState.createWithContent(initialState));

  const onEditorStateChange = (newState) => {
    setState(newState);
    onChange(draftToHtml(convertToRaw(newState.getCurrentContent())));
  };

  return (
    <Editor
      onEditorStateChange={onEditorStateChange}
      editorState={state}
      toolbar={{
        options: ["inline", "blockType", "colorPicker", "list", "link", "emoji", "textAlign", "history"],
        inline: {
          options: ["bold", "italic", "underline", "strikethrough", "monospace"],
        },
      }}
      wrapperClassName="border rounded-sm border-gray-300"
      editorClassName="px-2 min-h-[100px]"
    />
  );
};

export default RichEditor;
