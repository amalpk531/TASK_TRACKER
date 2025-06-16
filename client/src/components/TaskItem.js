import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onStatusChange }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return '⏳';
      case 'in-progress':
        return '🔄';
      case 'completed':
        return '✅';
      default:
        return '📝';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusChange = (newStatus) => {
    if (newStatus !== task.status) {
      onStatusChange(task._id, { ...task, status: newStatus });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {/* Task Header */}
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">{getStatusIcon(task.status)}</span>
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {task.title}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(task.status)}`}>
              {task.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          {/* Task Description */}
          {task.description && (
            <p className="text-gray-600 mb-3 leading-relaxed">
              {task.description}
            </p>
          )}

          {/* Task Metadata */}
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Created: {formatDate(task.createdAt)}</span>
            {task.updatedAt !== task.createdAt && (
              <span>Updated: {formatDate(task.updatedAt)}</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-200"
            title="Edit task"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
            title="Delete task"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Quick Status Change */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Quick status change:</span>
          <div className="flex space-x-1">
            {['pending', 'in-progress', 'completed'].map(status => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-2 py-1 text-xs rounded-md transition duration-200 ${
                  task.status === status
                    ? `${getStatusColor(status)} cursor-default`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                disabled={task.status === status}
              >
                {status.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;