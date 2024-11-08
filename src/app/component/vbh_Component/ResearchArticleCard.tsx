import Link from "next/link";
import React from "react";

interface ResearchArticleCardProps {
  title: string;
  date: string;
  author: string;
  description: string;
}

const ResearchArticleCard: React.FC<ResearchArticleCardProps> = ({
  title,
  date,
  author,
  description,
}) => {
  return (
    <div>
      <Link href={`/issues/`}>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-500">{date}</p>
          <h3 className="text-lg font-semibold">{author}</h3>
          <p className="text-gray-600">{description}</p>
          <a href="#">पूरा लेख पढ़ें</a>
        </div>
      </Link>
    </div>
  );
};

export default ResearchArticleCard;
