import React, { useRef } from "react";
import Input from "../../../components/Input/Input";
import styles from "./styles.module.css";

const Post = () => {
  const [image, setImage] = React.useState({raw: null, preview: null});

  function changePreview(e) {
    const file = e.target.files[0];
    setImage({raw: file, preview: URL.createObjectURL(file)});
  }

  console.log(image.preview);

  function handleSubmit(e) { 
    e.preventDefault();
  }

  return (
    <section className={styles.post}>
      <form onSubmit={handleSubmit}>
        <Input label={"Nome"} name={"nome"} type={"text"}/>
        <Input label={"Peso"} name={"peso"} type={"text"}/>
        <Input label={"Idade"} name={"idade"} type={"text"}/>
        <input type="file" name="file" id="file" onChange={changePreview}/>
      </form>
      <div className={styles.imagePreview} style={image.preview? {background: `url(${image.preview})` } : {}}></div>
    </section>
  );
};

export default Post;
