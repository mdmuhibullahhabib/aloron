import React from 'react'

const FilterPopup = ({ title, data, onClose }) => {
    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4 w-full max-w-sm mx-auto">
            <h4 className="font-semibold text-lg mb-4">{title}</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                {data.map((item, index) => (
                    <div key={item.id} className="flex items-center space-x-2 py-1">
                        <input type="checkbox" id={`filter-${title}-${index}`} className="form-checkbox text-blue-500 rounded-md" />
                        <label htmlFor={`filter-${title}-${index}`} className="text-gray-700">{item.label}</label>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-4 border-t pt-4">
                <button 
                    onClick={onClose} 
                    className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                >
                    Ok
                </button>
            </div>
        </div>
    );
};

export default FilterPopup