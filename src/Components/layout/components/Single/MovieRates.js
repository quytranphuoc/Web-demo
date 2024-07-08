import React, { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "../UsedInput";
import Rating from "../Stars";
import { UsersData } from "../../../../Data/MovieData";

function MovieRates({ movie }) {
  const Ratings = [
    {
      title: "Null",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - Very Good",
      value: 3,
    },
    {
      title: "4 - Excellent",
      value: 4,
    },
    {
      title: "5 - Masterpiece",
      value: 5,
    },
  ];

  const [rating, setRating] = useState();

  return (
    <div className="my-12 text-white">
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        {/* write review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-text font-semibold">
            Review "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border line-clamp-2">
            // {movie?.desc}
            //{" "}
          </p>
          <div className="text-sm w-full">
            <Select
              label="Select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              <Rating value={rating} />
            </div>
          </div>
          {/* message */}
          <Message
            label="Message"
            placeholder="Make it short and sweet...."
            className="text-text"
          />
          {/* submit */}
          <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
            Submit
          </button>
        </div>
        {/* REVIWERS */}
        <div className="col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-text font-semibold">Reviews (56)</h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 grid-cols-1 gap-6 bg-dry p-4 border border-gray-800 rounded-lg"
              >
                <div className="md:col-span-2 col-span-12 md:flex md:flex-col md:items-center bg-main hidden">
                  <img
                    src={`/images/${user ? user.image : "user.jpg"}`}
                    alt={user.fullName}
                    className="w-full h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="md:col-span-7 col-span-12 flex flex-col gap-2 text-white">
                  <h2>{user?.fullName}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    {user?.message}
                  </p>
                </div>
                {/* rates */}
                <div className="md:col-span-3 col-span-12 md:flex-row flex flex-col border-t border-l border-border md:border-t-0 text-xs gap-1 text-star">
                  <Rating value={user?.rate} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieRates;
