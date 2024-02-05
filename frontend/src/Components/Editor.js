import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { createPost } from "../Redux/Reducers/PostSlice";

const MyPlainTextEditor = () => {
  const dispatch = useDispatch();
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

  const handleSubmit = () => {
    const content = editorState.getCurrentContent().getPlainText();

    // Including title, category, author, and content (plain text) in postData
    const postData = {
      title: formData.title,
      category: formData.category,
      author: formData.author,
      content: content,
    };

    dispatch(createPost(postData));
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
        }}
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

export default MyPlainTextEditor;
