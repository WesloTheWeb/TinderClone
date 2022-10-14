import { React, useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar/Navbar';

const Onboarding = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    return (
        <>
            <Navbar
                minimal={true}
                setShowModal={() => { }}
                showModal={false}
            />
            <div className='onboarding'>
                <h2>Create Account</h2>
                <form >
                    <section>
                        <label>First Name</label>
                        <input placeholder="firstName" {...register("firstName", { required: true })} />
                        <label>Birthday</label>
                        <input placeholder="MMDDYYYY" {...register("Birthday", { required: true })} />
                        <label>Gender</label>
                        <input placeholder="MMDDYYYY" {...register("Gender", { required: true })} />
                        <label>Show Gender on my profile</label>
                        <input placeholder="uwu```" {...register("showGender", { required: true })} />
                    </section>
             
                </form>

            </div>
        </>
    );
};

export default Onboarding;

// TODO: Radio buttons for gender
// TODO: Video onboarding UI @ 1:27:15 min on video
// TODO: I am deviating from how shes doing forms and I'm using react hook forms. Review react hook forms for diff types.