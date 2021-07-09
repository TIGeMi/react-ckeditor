import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CKEDITOR from "ckeditor-blog";
import PropTypes from "prop-types";

TitleEditor.propTypes = {};

function TitleEditor(props) {
  return (
    <div className="editor-container editor-title">
      <label htmlFor="">Title</label>
      <CKEditor
        editor={CKEDITOR.TitleEditor}
        // data="<h2>Write title for your post</h2>"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}

export default TitleEditor;
