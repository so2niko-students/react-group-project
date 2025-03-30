import { useForm } from "react-hook-form";
import { createPost } from "../../services/post";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function CreatePost() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const [img, setImg] = useState();

    const onSubmit = async (newPost) => {
        console.log(newPost);
        const post = {
            ...newPost,
            picture: img
        }

        console.log(post);
        const result = await createPost(post);

        if (result.status == 200) {
            setIsSubmitSuccessful(true);
            const imgPreview = document.querySelector('.file-preview');
            imgPreview.src = "";
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            toast('Post created')
            reset()
            setIsSubmitSuccessful(false);
        }
    }, [isSubmitSuccessful])

    const handlePreview = (file) => {
        if (file) {
            const reader = new FileReader();
            setImg(file);
            reader.onload = (e) => {
                const imgPreview = document.querySelector('.file-preview');
                imgPreview.src = e.target.result;
            }

            reader.readAsDataURL(file);
        }
    }

    const handleChangeFile = (ev) => {
        console.log(ev.target.files[0])
        handlePreview(ev.target.files[0]);
    }

    return (
        <>
            <form className="container d-flex justify-content-center items-center flex-column"
                onSubmit={handleSubmit(onSubmit)}>

                {/*Можно это все как-то циклом передать?*/}
                <input className="border-2 border-slate-300 rounded mt-6 w-1/2 p-1" placeholder="Title"
                    type="text" {...register("title", { required: true, minLength: 2, maxLength: 200 })}></input>

                <input className="border-2 border-slate-300 rounded mt-6 w-1/2 p-1" placeholder="Description"
                    {...register("description", { required: true, minLength: 2, maxLength: 2000 })} />

                <input className="border-2 border-slate-300 rounded mt-6 w-1/2 p-1" placeholder="Author's name"
                    {...register("authorName", { pattern: /^[A-Za-z]+$/i })} />

                <input className="border-2 border-slate-300 rounded mt-6 w-1/2 p-1" placeholder="Author's last name"
                    {...register("authorLastName", { pattern: /^[A-Za-z]+$/i })} />

                <input className="border-2 border-slate-300 rounded mt-6 w-1/6 p-2"
                    type="date"
                    {...register("dateOfCreation", {
                        valueAsDate: true,
                    })}
                />
                <div>
                    <input
                        type="file"
                        {...register("picture")}
                        onChange={handleChangeFile}
                    />
                    <img src="" alt="" className="file-preview" />
                </div>

                <textarea className="border-2 border-slate-300 rounded mt-6 w-1/2 p-1" rows="5" placeholder="Please type here"
                    {...register("text", { required: true, minLength: 2, maxLength: 2000 })}></textarea>

                <button className="bg-amber-800 mt-6 py-2 px-4 rounded text-slate-100" type="submit">Create</button>
            </form>
        </>
    )
}
