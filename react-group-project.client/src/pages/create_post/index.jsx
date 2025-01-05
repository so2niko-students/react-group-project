import { useForm } from "react-hook-form";
import { createPost } from "../../services/post";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function CreatePost() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [ isSubmitSuccessful, setIsSubmitSuccessful ] = useState(false);

    const onSubmit = async (newPost) => {
        const result = await createPost(newPost);

        if (result.status == 200) {
            setIsSubmitSuccessful(true);
            toast(`Post with title ${result.data.title} created`)
        }
    }
     
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful])

    return (
        <>
            <form className="container d-flex justify-content-center items-center flex-column"
                onSubmit={handleSubmit(onSubmit)}>

                <input className="border-2 border-slate-300 rounded mt-6"
                    type="text" {...register("title", { required: true, minLength: 2, maxLength: 200 })}></input>
                <input className="border-2 border-slate-300 rounded mt-6"
                    {...register("AuthorName", { pattern: /^[A-Za-z]+$/i })} />
                <input className="border-2 border-slate-300 rounded mt-6"
                    {...register("AuthorLastName", { pattern: /^[A-Za-z]+$/i })} />
                <input className="border-2 border-slate-300 rounded mt-6"
                    type="date"
                    {...register("dateOfCreation", {
                        valueAsDate: true,
                    })}
                />
                <input className="border-2 border-slate-300 rounded mt-6"
                    type="text" {...register("img", { required: true, minLength: 2, maxLength: 200 })}></input>
                <input className="border-2 border-slate-300 rounded mt-6"
                    type="text" {...register("description", { required: true, minLength: 2, maxLength: 2000 })}></input>
                <button className="bg-amber-800 mt-6 py-2 px-4 rounded text-slate-100" type="submit">Create</button>
        </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

