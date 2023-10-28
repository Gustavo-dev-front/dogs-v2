import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Error from "../../../components/Helper/Error/Error";
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import { PHOTO_POST } from "../../../api_endpoints";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [image, setImage] = React.useState({ raw: null, preview: null });
  const { loading, error, request } = useFetch();
  const token = window.localStorage.getItem("token");
  const dog_name = useForm();
  const dog_weight = useForm("number");
  const dog_age = useForm("number");
  const navigate = useNavigate();

  function changePreview(e) {
    const file = e.target.files[0];
    setImage({ raw: file, preview: URL.createObjectURL(file) });
  }

  async function postPhoto() {
    const form_data = new FormData();
    form_data.append("img", image.raw);
    form_data.append("nome", dog_name);
    form_data.append("peso", dog_weight);
    form_data.append("idade", dog_age);
    const {url, options} = PHOTO_POST(form_data, token);
    const {response, json} = await request(url, options);
    if (response.ok) navigate("/conta");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validate_assist = {
      dog_name: dog_name.validate(),
      dog_weight: dog_weight.validate(),
      dog_age: dog_age.validate(),
    };
    const isValid = Object.values(validate_assist).every(item => item === true);
    if (isValid) postPhoto();
  }

  return (
    <section className={styles.post}>
      <form onSubmit={handleSubmit}>
        <Input label={"Nome"} name={"nome"} type={"text"} {...dog_name} />
        <Input label={"Peso"} name={"peso"} type={"text"} {...dog_weight} />
        <Input label={"Idade"} name={"idade"} type={"text"} {...dog_age} />
        <input type="file" name="file" id="file" onChange={changePreview}/>
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        {error && <Error error={error}/>}
      </form>
      <div
        className={styles.imagePreview}
        style={image.preview ? { background: `url(${image.preview})` } : {}}
      ></div>
    </section>
  );
};

export default Post;
