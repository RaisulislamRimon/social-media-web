import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../Shared/Spinner/Spinner";

const WritePost = () => {
  const [spinning, setSpinning] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    setSpinning(true);
    e.preventDefault();
    const form = e.target;
    const post = form.post.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);
    // console.log(formData);

    if (post.length === 0) return toast.error("Please write something");

    console.log(post, image);

    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imgbb_apiKey
    }`;

    // return console.log(imgbbUrl);

    fetch(imgbbUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data?.status_code);
        if (data?.success) {
          console.log(data.data.display_url);
          // return data.data.display_url;
          const image = data.data.display_url;

          // // create user
          // createUser(email, password)
          //   .then((result) => {
          //     // console.log(result);
          //     // update user profile
          //     updateUserProfile(name, image)
          //       .then((result) => {
          //         // console.log(result);
          //         // send verification email
          //         verifyEmail()
          //           .then((result) => {
          //             setSpinning(false);
          //             toast.success("Please verify your email");
          //             // console.log(result);
          //             // redirect to home page
          //             // toast.window.location.pathname = "/";
          //           })
          //           .catch((err) => {
          //             // console.log(err);
          //           });
          //       })
          //       .catch((err) => {
          //         // console.log(err);
          //       });
          //   })
          //   .catch((error) => {
          //     // console.error(error);
          //     console.log(error);
          //     toast.error(error.message);
          //     setSpinning(false);
          //   });
          setSpinning(false);
        } else {
          setSpinning(false);
          // console.log(data);
          // console.log(data.error.message);
          toast.error("Please select a valid image");
        }
      })
      .catch((error) => {
        // console.error(error);
        // console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center underline">Write Post</h1>
      <div className="p-3 md:p-10">
        <form onSubmit={handleSubmit} className="form-control relative">
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="write your post..."
            name="post"
            required
          ></textarea>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs lg:mt-3"
            name="image"
            required
          />
          {spinning && <Spinner />}
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  lg:bg-slate-400 lg:border-none lg:mt-3">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default WritePost;
