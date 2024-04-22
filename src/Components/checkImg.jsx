import * as React from "react";
import supabase from "./lib/supabase";

export const CheckImg = () => {
  const [image, setImage] = React.useState(null);
  const [previewSrc, setPreviewSrc] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    setImage(file);

    reader.onloadend = () => {
      console.log({ imagUrl: reader.result });
      setPreviewSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.storage
      .from("productImg")
      .upload("gadget/avatar1.png", image, {
        upsert: true,
      });

    const { data: imageUrlData } = supabase.storage
      .from("productImg")
      .getPublicUrl("gadget/avatar1.png");

    const imgSrcToBeUploadedToBakend = imageUrlData.publicUrl;

    console.log({ imgSrcToBeUploadedToBakend });

    if (data?.id) {
      //continue to insert data into the database
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">Upload image</label>
      <input
        type="file"
        id="image"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <img src={previewSrc} alt="" height={100} width={100} />

      <button
        type="submit"
        style={{
          paddingInline: "10px",
          paddingBlock: "8px",
          backgroundColor: "red",
        }}
      >
        Submit
      </button>
    </form>
  );
};
```