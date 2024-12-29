import { useForm } from "react-hook-form";
export default function CreatePost() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
            <form className="container d-flex justify-content-center items-center flex-column"
                onSubmit={handleSubmit(onSubmit)}>

                <input className="border-2 border-slate-300 rounded mt-6"
                    type="text" {...register("header", { required: true, minLength: 2, maxLength: 200 })}></input>
                <input className="border-2 border-slate-300 rounded mt-6"
                    {...register("firstName", { pattern: /^[A-Za-z]+$/i })} />
                <input className="border-2 border-slate-300 rounded mt-6"
                    {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input className="border-2 border-slate-300 rounded mt-6"
                    type="date"
                    {...register("dateOfCreation", {
                        valueAsDate: true,
                    })}
                />
                <input className="border-2 border-slate-300 rounded mt-6"
                    type="text" {...register("fullText", { required: true, minLength: 2, maxLength: 2000 })}></input>
                <button className="bg-amber-800 mt-6 py-2 px-4 rounded text-slate-100" type="submit">Create</button>
            </form>
    )
}