import React from 'react';

const ArticleCard = ({ title, summary, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2">{summary}</p>
    </div>
  );
};

export default ArticleCard;
