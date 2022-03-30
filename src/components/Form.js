import { userSchema } from "../Validations/UserValidation.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from "react";

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    });

    const Name=watch("Name");
    const [data, setData] = useState("");
    
    const submitForm = (data) => {
        console.log(data)
        setData(JSON.stringify(data , null, '\t'))
    };

    const deleteform =() =>
    {
        document.getElementById("forms").reset();
    };

    return (
        <div className='Form'>
            <div className="inputs">
                <form onSubmit={handleSubmit(submitForm)} id="forms">
                    <input type="text" name="Name" placeholder="Name" {...register('Name')} />
                    <p>{errors.Name?.message}</p>
                    <p>{Name}</p>
                    <input type="email" name="Email" placeholder='Email' {...register('Email')} />
                    <p>{errors.Email?.message}</p>
                    <input type="text" name="password" placeholder='password' {...register('password')} />
                    <p>{errors.password?.message}</p>
                    <input type="text" name="confirmPassword" placeholder="Confirm Password" {...register('confirmPassword')} />
                    <p>{errors.confirmPassword && " Password doesn't match!"}</p>
                    <input type="text" name="Age" placeholder="Age" {...register('Age', { min: 18, max: 99 })} />
                    <p>{errors.Age?.message}</p>
                    <p>Are you a developer?</p>
                    <input type="radio" name="ans" value='Yes' {...register('ans', { required: "It is required" })} /> <p>Yes</p>
                    <input type="radio" name="ans" value="No" {...register('ans', { required: "It is required" })} /> <p>No</p>
                    <p>{errors.ans?.message}</p>
                    <label htmlFor="gender">Gender : </label>
                    <select {...register("gender")} >
                        <option selected>Choose...</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <p>{errors.gender?.message}</p>
                    <button type="button" onClick={()=>{deleteform()}}>Clear</button>
                    <input type="submit" id="submit" />
                    <p>{data}</p>
                </form>

            </div>
        </div>
    );
}
export default Form;
