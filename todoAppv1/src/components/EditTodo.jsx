import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description); // Controlled input state
  const [isModalOpen, setIsModalOpen] = useState(false);

  //edit description
  const updateDescription = async()=>{
    
    try {
        const body={description};
        const response= await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })

        window.location="/"
    } catch (err) {
        console.error(err.message);
        
    }
  }

  // Function to handle opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  

  return (
    <>
      {/* Edit Button */}
      <button
        type="button"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={()=>{
            setDescription(todo.description);
            openModal();
        }} // Open modal when clicked
      >
        Edit
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50"
          onClick={closeModal}
          id={`id${todo.todo_id}`}
        >
          <div className="bg-white rounded-lg w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Edit Todo</h3>
              <button
                className="text-gray-500"
                onClick={()=>{
                    setDescription(todo.description);
                    closeModal();
                }} // Close modal when clicked
              >
                &times;
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={description} // Display the current todo description
                onChange={e=>
                    setDescription(e.target.value)
                } // Update description on input change
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={() => {
                    updateDescription();
                  closeModal(); // Close modal on save
                }}
              >
                Save changes
              </button>
              <button
                className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                onClick={()=>{
                    setDescription(todo.description);
                    closeModal();
                }} // Close modal on close
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
