import React, { useContext, useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import "./write.scss";
import axios from "axios";
import { Context } from "../../context/Context";
const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (e) {}
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };
  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="write_Image" />
      )}

      <form className="write_Form" onSubmit={handleSubmit}>
        <div className="write_Form_Group">
          <label htmlFor="fileInput">
            <GrFormAdd className="write_Icon" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            className="write_Input"
            autoFocus={true}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write_Form_Group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write_Input write_Text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="write_Submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
