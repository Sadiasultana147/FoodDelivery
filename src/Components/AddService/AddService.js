import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fast-sea-86370.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("inserted Succesfully");
                    reset();
                }
                history.push(url)
            })
    };
    return (
        <div className="body ">
            <h1 className="pt-5">ADD NEW SERVICE</h1>
            <div className=" d-flex justify-content-center mt-4 pb-5 pt-5 ">

                <form className="d-flex flex-column  w-50  " onSubmit={handleSubmit(onSubmit)}>
                    <input className="p-2   " {...register("name", { required: true })} placeholder="name" />

                    <textarea {...register("description")} placeholder="description" className="p-2 mt-3" />
                    <input className="p-2 mt-3" type="text" {...register("image", { required: true })} placeholder="image url" />
                    <span>
                        <input style={{ borderRadius: "10px" }} className="p-2 mt-3 w-25  ms-5 add  " type="submit" value="Add Service" />
                    </span>
                </form>
            </div>
        </div >


    );
};

export default AddService;