import { React } from 'react';
import { useForm } from "react-hook-form";
import classes from './SignUpForm.module.scss';

const { generalInfo } = classes;

const SignUpForm = ({ handleClick, setShowModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Submitted!"')
    //     setShowModal(false);
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={generalInfo}>
                {/* register your input into the hook by invoking the "register" function */}
                <label>Name</label>
                <input defaultValue="test" {...register("example")} />
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <label>Gender</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            <input type="submit" />
            <button onClick={handleClick}>Close</button>
        </form>
    );
};

export default SignUpForm;