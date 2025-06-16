import React from 'react';

const FilterTabs = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All Tasks', icon: '📋' },
    { key: 'pending', label: 'Pending', icon: '⏳' },
    { key: 'in-progress', label: 'In Progress', icon: '🔄' },
    { key: 'completed', label: 'Completed', icon: '✅' }
  ];

  return (
    <div className="mb-6">
      <div className="flex flex-wrap justify-center space-x-1 bg-gray-100 p-1 rounded-lg">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition duration-200 ${
              currentFilter === filter.key
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <span>{filter.icon}</span>
            <span>{filter.label}</span>
            <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
              currentFilter === filter.key
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {taskCounts[filter.key]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;