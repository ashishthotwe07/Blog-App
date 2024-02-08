import React, { useState, useEffect } from "react";
import { Button, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../Redux/Reducers/PostSlice";

export default function CreatePost({ initialData, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      category: "uncategorized",
      content: "",
      author: "Ashish Thotwe",
      image: "",
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      console.log(formData);
      dispatch(updatePost(formData));
    } else {
      dispatch(createPost(formData));
    }
    onClose();
  };

  return (
    <div className="my-3">
      <h2 className="m-0 font-bold">
        {initialData ? "Update" : "Create"} Post
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            name="title"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            value={formData.title}
            onChange={handleInputChange}
          />
          <Select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="uncategorized">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Bioinformatics">Bioinformatics</option>
            <option value="Fitness">Fitness</option>
          </Select>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <TextInput
            type="text"
            name="author"
            placeholder="Author Name"
            required
            className="flex-1"
            value={formData.author}
            onChange={handleInputChange}
          />
          <TextInput
            type="text"
            name="image"
            placeholder="Image URL or File Path"
            className="flex-1"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12 border-2 border-gray-300 rounded-lg p-2"
          required
          value={formData.content}
          onChange={(content) => setFormData({ ...formData, content })}
        />
        <Button type="submit" style={{ backgroundColor: "purple" }}>
          {initialData ? "Update" : "Publish"}
        </Button>
      </form>
    </div>
  );
}
