import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";

const Posting = ({ post, apiEndpoint }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: post });

  const router = useRouter();

  const handlePublish = async (data) => {
    try {
      const postForm = new FormData();
      postForm.append("creatorId", data.creatorId);
      postForm.append("caption", data.caption);
      postForm.append("tag", data.tag);
      if (typeof data.postPhoto !== "string") {
        postForm.append("postPhoto", data.postPhoto[0]);
      } else {
        postForm.append("postPhoto", data.postPhoto);
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: postForm,
      });

      if (response.ok) {
        router.push(`/profile/${data.creatorId}/posts`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handlePublish)}
      className="flex flex-col gap-7 pb-24"
      enctype="multipart/form-data"
    >
      <label htmlFor="photo" className="flex gap-4 items-center cursor-pointer">
        {watch("postPhoto") ? (
          typeof watch("postPhoto") === "string" ? (
            <Image
              src={watch("postPhoto")}
              alt="post"
              width={250}
              height={200}
              className="object-cover rounded-lg"
            />
          ) : (
            <Image
              src={URL.createObjectURL(watch("postPhoto")[0])}
              alt="post"
              width={250}
              height={200}
              className="object-cover rounded-lg"
            />
          )
        ) : (
          <p className="text-4xl">
            <BiImageAdd />
          </p>
        )}

        <p>Upload a photo</p>
      </label>
      <input
        {...register("postPhoto", {
          validate: (value) => {
            if (
              value === null ||
              (Array.isArray(value) && value.length === 0) ||
              value === undefined
            ) {
              return "A Photo is required!";
            }
            return true;
          },
        })}
        id="photo"
        type="file"
        style={{ display: "none" }}
      />
      {errors.postPhoto && (
        <span className="text-sm text-rose-600">
          {errors.postPhoto.message}
        </span>
      )}

      <div>
        <label htmlFor="caption" className="">
          Caption
        </label>
        <textarea
          id="caption"
          {...register("caption", {
            required: "Caption is required",
            validate: (value) => {
              if (value.length < 3) {
                return "Caption must be more than 2 characters";
              }
            },
          })}
          type="text"
          rows={3}
          placeholder="What's on your mind?"
          className="w-full input"
        />
        {errors.caption && (
          <span className="text-sm text-rose-600">
            {errors.caption.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="tag" className="">
          Tag
        </label>
        <input
          id="tag"
          {...register("tag", {
            required: "Tag is required",
          })}
          type="text"
          placeholder="#tag"
          className="w-full input"
        />
        {errors.tag && (
          <span className="text-sm text-rose-600">{errors.tag.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="py-2.5 rounded-lg mt-10 bg-blue-500 hover:bg-blue-600 text-white"
      >
        Publish
      </button>
    </form>
  );
};

export default Posting;
