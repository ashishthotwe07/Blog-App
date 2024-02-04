import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const MyRichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
  });

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Replace this with your actual upload logic
        resolve({ data: { link: event.target.result } });
      };
      reader.readAsDataURL(file);
    });
  };

  const renderBlock = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "code-block") {
      const rawData = convertToRaw(contentBlock);
      const code = rawData.blocks.map((block) => block.text).join("\n");
      return (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      );
    }
    return null;
  };

  const handleSubmit = () => {
    const postData = {
      ...formData,
      content: convertToRaw(editorState.getCurrentContent()),
    };
    console.log("Post Data:", postData);
    // Add logic here to send the postData to the server
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Create a New Blog Post</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="mb-2 px-3 py-2 border rounded w-full"
        value={formData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="mb-2 px-3 py-2 border rounded w-full"
        value={formData.category}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="mb-2 px-3 py-2 border rounded w-full"
        value={formData.author}
        onChange={handleInputChange}
      />

      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "image",
            "remove",
            "history",
          ],
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
        }}
        customBlockRenderFunc={renderBlock}
      />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Create Post
      </button>
    </div>
  );
};

export default MyRichTextEditor;
