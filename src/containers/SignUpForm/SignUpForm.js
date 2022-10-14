import { React } from 'react';
import { useForm } from "react-hook-form";
import classes from './SignUpForm.module.scss';

const { generalInfo, generalInfoField } = classes;

const SignUpForm = ({ setShowModal, isSignUp }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // const closeBox = (evnt) => {
    //     evnt.preventDefault();
    //     setShowModal(false);
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={generalInfo}>
                <section className={generalInfoField}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <label>Email</label>
                        <input placeholder="Email" {...register("email", { required: true })} />

                    </div>
                    <div>
                        <label>Password</label>
                        <input placeholder="Password" {...register("Password", { required: true })} />
                    </div>
                    {isSignUp ? <div>
                        <label>Confirm Password</label>
                        <input placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />
                    </div> : null}
                </section>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit">{isSignUp ? 'Submit' : 'Log in'}</button>
            </div>
        </form>
    );
};

export default SignUpForm;