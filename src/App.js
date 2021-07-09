import React, { Component } from "react";
import ContentEditor from "./components/ContentEditor";
import TitleEditor from "./components/TitleEditor";
import CKEDITOR from "ckeditor-blog";
const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwic3ViIjoiMTE2MTY0Mjg3MDY0NjciLCJpc3MiOiJoaWdoYmxvZy5jb20iLCJpYXQiOjE2MTY0Mjg3MDYsInVzZXJfaWQiOjEsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InVzZXIiLCJleHAiOjE2MTY0MzczNDZ9.a9IEY6QRsAFdRhV7lPICEWFH8ukc9N0courNHaCK03ShwMZhbU1rfSRYRwJ2jNiKC5F0mqsGMb91h1Ah_XgbRQ";
CKEDITOR.ContentEditor.defaultConfig.simpleUpload = {
  // uploadUrl: "http://35.240.173.198/api/v1/files/ck/images",
  uploadUrl: "http://localhost:8081/fileUpload",
  withCredentials: false,
  headers: {
    "X-CSRF-TOKEN": "CSRF-Token",
    Authorization: `Bearer ${accessToken}`,
  },
};
console.log("render");
function App() {
  return (
    <div className="App">
      <h2>Your Post</h2>
      <div className="editor">
        <TitleEditor />

        <ContentEditor />
      </div>
    </div>
  );
}

export default App;
