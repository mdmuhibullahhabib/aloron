const FilterSection = () => {
    const [openFilter, setOpenFilter] = useState(null);

    // Mock data for filters
    const filterData = {
        section: [
            { id: '1', label: 'qb5' },
            { id: '2', label: 'এমসিকিউ প্রশ্নব্যাংক' },
            { id: '3', label: 'লিখিত ও প্রশ্নব্যাংক' },
            { id: '4', label: 'বোর্ড ও টেস্ট প্রশ্নব্যাংক' },
            { id: '5', label: 'স্কুল ভর্তি অনুশীলন প্রশ্নব্যাংক(MCQ)' },
            { id: '6', label: 'মেডিকেল প্রস্তুতি' }
        ],
        exam: [
            { id: '1', label: 'মেডিকেল' },
            { id: '2', label: 'ডেন্টাল' },
            { id: '3', label: 'একত্রিত' },
            { id: '4', label: 'ঢাকা বিশ্ববিদ্যালয়' },
            { id: '5', label: 'চট্টগ্রাম বিশ্ববিদ্যালয়' },
            { id: '6', label: 'রাজশাহী বিশ্ববিদ্যালয়' }
        ],
        subject: [
            { id: '1', label: 'পদার্থবিজ্ঞান প্রথম পত্র' },
            { id: '2', label: 'পদার্থবিজ্ঞান দ্বিতীয় পত্র' },
            { id: '3', label: 'রসায়ন প্রথম পত্র' },
            { id: '4', label: 'রসায়ন দ্বিতীয় পত্র' },
            { id: '5', label: 'উচ্চতর গণিত প্রথম পত্র' },
            { id: '6', label: 'উচ্চতর গণিত দ্বিতীয় পত্র' }
        ],
        topic: [
            { id: '1', label: 'ভৌত জগৎ ও পরিমাপ - সকল টপিক' },
            { id: '2', label: 'ভেক্টর - সকল টপিক' },
            { id: '3', label: 'গতিবিদ্যা ও নিউটনীয় বলবিদ্যা' },
            { id: '4', label: 'কাজ, শক্তি ও ক্ষমতা' }
        ]
    };

    const handleFilterClick = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    const handleClosePopup = () => {
        setOpenFilter(null);
    };

    return (
        <div className="filter-section bg-white p-4 rounded-lg shadow-lg my-4 transition-all duration-300">
            {/* Top row with main filter buttons */}
            <div className="flex justify-start items-center space-x-4 mb-4">
                <div onClick={() => handleFilterClick('section')} className="bg-white text-gray-700 font-medium py-2 px-6 rounded-full border border-gray-300 shadow-sm hover:bg-blue-100 transition duration-300 cursor-pointer flex items-center">
                    <span>সেকশন</span>
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                </div>
                <div onClick={() => handleFilterClick('exam')} className="bg-blue-500 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer flex items-center">
                    <span>ভর্তি পরীক্ষা</span>
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                </div>
                <div className="flex-1"></div>
                <div onClick={() => handleFilterClick('subject')} className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 cursor-pointer flex items-center">
                    <span>বিষয়</span>
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                </div>
                <div onClick={() => handleFilterClick('topic')} className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 cursor-pointer flex items-center">
                    <span>অধ্যায়</span>
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                </div>
                <div onClick={() => handleFilterClick('topic')} className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 cursor-pointer flex items-center">
                    <span>টপিক</span>
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                </div>
            </div>
            
            {/* Render filter popups conditionally */}
            {openFilter === 'section' && (
                <FilterPopup 
                    title="সেকশন" 
                    data={filterData.section} 
                    onClose={handleClosePopup}
                />
            )}
            {openFilter === 'exam' && (
                <FilterPopup 
                    title="পরীক্ষা" 
                    data={filterData.exam} 
                    onClose={handleClosePopup}
                />
            )}
            {openFilter === 'subject' && (
                <FilterPopup 
                    title="বিষয়" 
                    data={filterData.subject} 
                    onClose={handleClosePopup}
                />
            )}
            {openFilter === 'topic' && (
                <FilterPopup 
                    title="অধ্যায়" 
                    data={filterData.topic} 
                    onClose={handleClosePopup}
                />
            )}

            {/* Bottom row with checkboxes and search */}
            <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" className="form-checkbox text-blue-500 rounded-md" />
                        <span>সলিউশন</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" defaultChecked className="form-checkbox text-blue-500 rounded-md" />
                        <span>উত্তর</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input type="checkbox" defaultChecked className="form-checkbox text-blue-500 rounded-md" />
                        <span>ব্যাখ্যা</span>
                    </label>
                </div>
                <div className="flex items-center space-x-2 relative w-full md:w-auto">
                    <input type="text" placeholder="প্রশ্ন খুঁজুন" className="py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full md:w-72" />
                    <i className="fas fa-search absolute right-4 text-gray-400"></i>
                </div>
            </div>
        </div>
    );
};