import React from "react";
import { MdLocationPin } from "react-icons/md";

const Card = (props) => {
  return (
    <div className="flex border m-6">
      <div
        className="w-1/4 bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(../images/${props.imageUrl})` }}
      ></div>

      <div className="w-3/4 m-6">
        <div className="flex flex-col justify-center">
          <div>
            <MdLocationPin size={20} className="inline" />
            <span>{props.location}</span>
            <a className="text-gray" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
        </div>
        <h1>{props.title}</h1>
        <span className="font-bold">
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
