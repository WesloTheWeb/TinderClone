import { React, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import Navbar from '../components/Navbar/Navbar';


const defaultValues = {
    Native: "",
    TextField: "",
    Select: "",
    ReactSelect: { value: "vanilla", label: "Vanilla" },
    Checkbox: false,
    switch: false,
    RadioGroup: "",
    numberFormat: 123456789,
    downShift: "apple"
};

const Onboarding = (props) => {

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm(defaultValues);
    // const { handleSubmit, register, reset, control } = useForm({ defaultValues });

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
                        <input placeholder="first name" {...register("firstName", { required: true })} />
                        <label>Last Name</label>
                        <input placeholder="last Name" {...register("lastName", { required: true })} />
                        <label>Birthday</label>
                        <div className='field-container'>
                        <Controller
                            control={control}
                            name="ReactDatepicker"
                            render={({ field }) => (
                                <ReactDatePicker
                                  placeholderText='Select date'
                                  onChange={(date) => field.onChange(date)}
                                  selected={field.value}
                                />
                             )}
                        />
                        </div>
                 
                        <label>Gender</label>
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                        <label>Show Gender on my profile</label>
                        {/* <input placeholder="uwu```" {...register("showGender", { required: true })} /> */}
                        <label>Yes</label>
                        <input type="radio" {...register('showGender', { required: true })} value="yes" />
                        <label>No</label>
                        <input type="radio" {...register('showGender', { required: true })} value="no" />
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