import React from 'react';
import './Signup.css';
import { RxCross1 } from 'react-icons/rx';
import { useForm } from "react-hook-form";

const Signup = ({ setShowSignup }) => {
    const { register, handleSubmit, formState: { errors,isSubmitting }, watch } = useForm();

    const onSubmit =data =>{ 
        console.log(data)
    }

    const password = watch("Password"); //here it is used to keep watching password for checking it with conifirm password

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <span onClick={() => setShowSignup(false)} className='cross'><RxCross1 /></span>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label htmlFor="name">Username:</label>
                    <input
                        type="text"
                        id="name"
                        className="input-field"
                        {...register("Username", {
                            required: "Username is required",
                            minLength: { value: 5, message: "Username must be at least 5 characters" }
                        })}
                    />
                    {errors.Username && <p className="error-message">{errors.Username.message}</p>}
                </div>

                <div className="input-group">
                    <label htmlFor="eml">Email:</label>
                    <input
                        type="email"
                        id="eml"
                        className="input-field"
                        {...register("Email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                            }
                        })}
                    />
                    {errors.Email && <p className="error-message">{errors.Email.message}</p>}
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        {...register("Password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters." },
                            maxLength: { value: 16, message: "Password must not exceed 16 characters." },
                            validate: value => {
                                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
                                if (!regex.test(value)) {
                                    return "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
                                }
                                return true;
                            }
                        })}
                    />
                    {errors.Password && <p className="error-message">{errors.Password.message}</p>}
                </div>

                <div className="input-group">
                    <label htmlFor="cpassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="cpassword"
                        className="input-field"
                        {...register("Cpassword", {
                            required: "Confirm Password is required",
                            validate: value =>
                                value === password || "Passwords do not match",
                        })}
                    />
                    {errors.Cpassword && <p className="error-message">{errors.Cpassword.message}</p>}
                </div>

                <div className="role">
                    <p className='role-p'>What is your role?</p>
                    <div className="radio-group">
                        <label className="role-label" htmlFor="seller">
                            <p className='role-p'>Product Seller: </p>
                            <span>
                                <input
                                    value="seller"
                                    type="radio"
                                    id="seller"
                                    {...register("Role", { required: "Please select your role" })}
                                    className="radio-input"
                                />
                            </span>
                        </label>

                        <label className="role-label" htmlFor="buyer">
                            <p className='role-p'>Product Buyer: </p>
                            <span>
                                <input
                                    value="buyer"
                                    type="radio"
                                    id="buyer"
                                    {...register("Role", { required: "Please select your role" })}
                                    className="radio-input"
                                />
                            </span>
                        </label>
                    </div>
                    {errors.Role && <p className="error-message">{errors.Role.message}</p>}
                </div>

                <input style={{opacity:`${isSubmitting? 0.5:1}`}} type="submit" className="signup-button" disabled={isSubmitting} value={isSubmitting?"Signing In":"Sign Up"}/>
            </form>
        </div>
    );
};

export default Signup;
