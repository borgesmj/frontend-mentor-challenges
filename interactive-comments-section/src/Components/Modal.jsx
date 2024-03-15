import React from "react";

const Modal = ({ closeModal, deleteComment, commentId }) => {

    const handleClose = () => {
        closeModal();
    }

    const handleDelete = (id) => {
        // Call the deleteComment function here
        deleteComment(id);
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-modal-transparent flex justify-center items-center p-4 max-h-dvh max-w-dvw">
            <div className="bg-white flex flex-col justify-around h-fit py-4 px-[1.3rem] rounded-[10px] w-1/4">
                <p className="font-bold my-[10px] mx-0">Delete Comment</p>
                <p className="my-[10px] mx-0 txt-Grayish-Blue ">
                    Are you sure you want to delete this comment? This will remove the
                    comment and can't be undone.
                </p>
                <div className="flex flex-row justify-around my-[10px] mx-0">
                    <button className="uppercase text-white p-4 rounded-[10px] text-[16px] font-medium bg-color-Grayish-Blue lg:hover:cursor-pointer" onClick={handleClose}>
                        no, cancel
                    </button>
                    <button className="uppercase text-white p-4 rounded-[10px] text-[16px] font-medium bg-color-soft-red lg:hover:cursor-pointer" onClick={(() => {handleDelete(commentId)})}>
                        yes, delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
