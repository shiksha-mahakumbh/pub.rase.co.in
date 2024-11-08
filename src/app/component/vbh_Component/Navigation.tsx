import React from "react";

interface ImageWithTitleDescriptionProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageWithTitleDescription: React.FC<ImageWithTitleDescriptionProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className=" shadow-md  overflow-hidden flex flex-row mt-10 bg-primary">
      <p className=" rounded-lg w-1/12  object-cover object-center mb-50%" />
      <div className="p-4 w-7/12 items-center">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-white text-sm mb-2"></p>
      </div>
      <div className="p-4 w-5/12  md:w-3/12 center">
        <h5 className="text-white font-semibold mb-2">CiteScore</h5>
        <p className=" text-white font-semibold mb-2">Impact Factor</p>
      </div>
    </div>
  );
};

export default ImageWithTitleDescription;
