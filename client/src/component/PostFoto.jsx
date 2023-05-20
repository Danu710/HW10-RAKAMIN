import { useState } from "react";
import axios from "axios";

const PostFoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userId, setUserId] = useState("");
  // const [image, setImage] = useState("https://fakeimg.pl/350x200/");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleUpload = () => {
    if (selectedImage || userId) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      axios
        .post(`http://localhost:8080/${userId}/upload-photo`, formData)
        .then((response) => {
          console.log(response.data);
          // Tindakan yang dilakukan jika permintaan berhasil
        })
        .catch((error) => {
          console.error(error);
          // Tindakan yang dilakukan jika permintaan gagal
        });
    } else {
      alert("Upload gambar dulu");
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex items-center justify-center max-w-screen-xl px-4 py-32 mx-auto lg:h-screen">
        {/* <img src={image} className="img-thumbnail" alt="..." /> */}
        <input type="file" onChange={handleImageChange} />
        <input type="text" value={userId} onChange={handleUserIdChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </section>
  );
};

export default PostFoto;
