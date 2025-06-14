
const UserAssignments = () => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Assignments</h2>
    <div className="space-y-4 max-w-xl">
      <div className="border-l-4 border-yellow-600 bg-yellow-50 rounded-md p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <span>
          <span className="font-semibold">Programming Assignment 2</span> - Java Basics
        </span>
        <span className="text-xs text-gray-500">Due: 25 Oct 2024</span>
      </div>
      <div className="border-l-4 border-green-600 bg-green-50 rounded-md p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <span>
          <span className="font-semibold">Academic Essay Draft</span>
        </span>
        <span className="text-xs text-gray-500">Due: 28 Oct 2024</span>
      </div>
    </div>
    <p className="mt-6 text-xs text-gray-400">* CRUD not implemented in demo</p>
  </div>
);

export default UserAssignments;
