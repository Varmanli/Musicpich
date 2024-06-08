import React from "react";

function Artist() {
  return (
    <div id="artists">
      <h3 className="text-[20px] pr-5 mt-10 font-bold ">هنرمندان :</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  m-8 lg:flex lg:justify-between text-center ">
        <div className=" cursor-pointer">
          <img
            src="https://i1.delgarm.com/i/806/021120/65c6001b55034.jpeg"
            alt="علیرضا قربانی"
            className="w-[200px] rounded-xl"
          />
          <p className="py-5">علیرضا قربانی</p>
        </div>
        <div className=" cursor-pointer">
          <img
            src="https://upmusics.com/wp-content/uploads/2024/04/Screenshot-2024-04-16-153722.jpg"
            alt="همایون شجریان"
            className="w-[200px] rounded-xl"
          />
          <p className="py-5">همایون شجریان</p>
        </div>
        <div className=" cursor-pointer">
          <img
            src="https://fa.wikida.ir/w/images/thumb/8/8b/%D8%B9%D9%84%DB%8C_%DB%8C%D8%A7%D8%B3%DB%8C%D9%86%DB%8C.jpg/450px-%D8%B9%D9%84%DB%8C_%DB%8C%D8%A7%D8%B3%DB%8C%D9%86%DB%8C.jpg"
            alt="علی یاسینی"
            className="w-[200px] rounded-xl"
          />
          <p className="py-5">علی یاسینی</p>
        </div>
        <div className=" cursor-pointer">
          <img
            src="https://cdn.arshehonline.com/thumbnail/YpKeXQiErK0x/5G0kw7u7_CwmnyUFSZEaTbtvFKMJC4LWJjj450mZFk7M2T3yxCK_b0p1gpKDJ8EYTPBzJG7qKdU,/%D9%85%D8%AD%D8%B3%D9%86+%DA%86%D8%A7%D9%88%D8%B4%DB%8C.jpg"
            alt="محسن چاوشی"
            className="w-[200px] rounded-xl "
          />
          <p className="py-5">محسن چاوشی</p>
        </div>
        <div className=" cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrGXYAx3NdW1l6Ir8ejfMLua9YG641wOg-A&usqp=CAU"
            alt="عرفان طهماسبی"
            className="w-[200px] rounded-xl"
          />
          <p className="py-5">عرفان طهماسبی</p>
        </div>
      </div>
    </div>
  );
}

export default Artist;
