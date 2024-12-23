import React, { useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm =async(e)=>{
        e.preventDefault();
        try {
            const body={description};
            const response= await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            // const data = await response.json();
            //console.log(response);
            window.location="/"
        } catch (err) {
            console.error(err.message);
        };
    }


    return (
        <>
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-2xl font-semibold text-center mb-4">Pern Todo List</h1>
                <form className="flex space-x-2" onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        className="flex-grow p-2 border rounded"
                        placeholder="Enter a todo"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                         required />
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                        Add
                    </button>
                </form>
            </div>


        </>
    );
};

export default InputTodo;