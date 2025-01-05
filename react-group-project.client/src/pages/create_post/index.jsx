import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreatePost() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (newPost) => {
        const postItems = "postItems";
        const url_postItems = `${postItems}`;

        return axios({
            method: 'post',
            url: url_postItems,
            data: newPost
        });
    }
    return (
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
    )
}