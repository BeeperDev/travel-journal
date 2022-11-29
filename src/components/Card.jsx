import React from "react";
import { MdLocationPin } from "react-icons/md";

const Card = (props) => {
  return (
    <div className="flex mx-6 my-8">
      <div
        className="w-1/4 bg-center bg-cover rounded-xl shadow-xl"
        style={{ backgroundImage: `url(../images/${props.imageUrl})` }}
      ></div>

      <div className="w-3/4 m-6 flex flex-col justify-center font-lexend-deca">
        <div>
          <MdLocationPin
            size={20}
            className="inline text-[#ff8fa2] mb-1 mr-1"
          />
          <span className="tracking-widest font-light mr-3">
            {props.location}
          </span>
          <a
            className="text-[#838383] font-light underline text-sm"
            href={props.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>

        <h1 className="text-3xl font-semibold mb-4 mt-1">{props.title}</h1>

        <span className="font-semibold mb-2">
          {props.startDate} - {props.endDate}
        </span>

        <p className="leading-5 font-extralight text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
