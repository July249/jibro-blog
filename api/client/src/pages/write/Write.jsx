import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';
import { axiosInstance } from '../../config';
import './write.css';

const Write = ({ category }) => {
  const { user } = useContext(Context);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cats, setCats] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
      catName: category.name,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axiosInstance.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <select className="writeSelectCat">
          {cats.map((c) => (
            <option
              key={c._id}
              value={c.name}
              onClick={(e) => setCats(e.target.value)}
            >
              {c.name}
            </option>
          ))}
        </select>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
