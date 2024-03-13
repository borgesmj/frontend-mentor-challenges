import React from "react";

const Comment = ({ activeUser }) => {
  return (
    <div className="bg-color-white p-4 rounded-[10px] flex flex-col my-4 relative">
      <div className={`${!activeUser ? 'w-4/5 lg:w-2/5' : 'w-full lg:w-3/5'} flex flex-row justify-between items-center mb-2 lg:ml-[50px]`}>
        <img
          src="./images/avatars/image-juliusomo.webp"
          alt="profile_user_image"
          className="w-10 h-auto"
        />
        <a href="#" className="font-bold">
          juliusomo
        </a>
        <span className={`bg-Moderate-blue py-[2px] px-[6px] text-[14px] font-bold text-white rounded ${!activeUser ? "hidden" : null}`}>
          you
        </span>
        <span className="txt-Grayish-Blue">2 days ago</span>
      </div>
      <p className="my-2 txt-Grayish-Blue lg:ml-[50px]">
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
      <div className="bg-Very-light-gray p-[5px] w-[30%] txt-Moderate-blue font-bold flex flex-row justify-between rounded-[8px] text-[18px] lg:flex-col lg:w-[40px] lg:absolute lg:justify-center">
        <button className="w-1/4 lg:text-center lg:w-full">+</button>
        <input
          type="text"
          name=""
          id=""
          value={12}
          className="w-1/4 bg-transparent lg:text-center lg:w-full"
        />
        <button className="w-1/4 lg:text-center lg:w-full">-</button>
      </div>
      <div className=" absolute bottom-[20px] right-[20px] lg:top-[25px]">
        {!activeUser ? (
          <div className="flex flex-row justify-between items-center w-[70px]">
            <img src="/images/icon-reply.svg" alt="" />
            <span className="txt-Moderate-blue font-bold">Reply</span>
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center w-[140px]">
            <div className="flex flex-row justify-around w-1/2 items-center mx-2">
              <img src="/images/icon-delete.svg" alt="" />
              <span className="font-bold txt-Soft-Red">Delete</span>
            </div>
            <div className="flex flex-row justify-around w-1/2 items-center mx-2">
              <img src="/images/icon-edit.svg" alt="" />
              <span className="font-bold txt-Moderate-blue">Edit</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
