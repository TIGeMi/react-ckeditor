import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CKEDITOR from "ckeditor-blog";
import PropTypes from "prop-types";

ContentEditor.propTypes = {};

function ContentEditor(props) {
  return (
    <div className="editor-container editor-content">
      <label htmlFor="">Content</label>
      <CKEditor
        editor={CKEDITOR.ContentEditor}
        // data="<p>Type your post's content</p>"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
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

export default ContentEditor;
