import React from 'react'

const ArchiveCard = ({card}) => {
  return (
                    <div
                  key={card.id}
                  className="relative p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105"
                  style={{ backgroundColor: card.color }}
                >
                  <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                    Live
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {card.title}
                  </h3>
                  <p className="text-white text-sm opacity-90">{card.subtitle}</p>
                </div>
  )
}

export default ArchiveCard;