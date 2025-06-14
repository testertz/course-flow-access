
const UserCourses = () => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Your Courses</h2>
    <ul className="divide-y max-w-xl">
      <li className="py-3 flex flex-col sm:flex-row sm:items-center justify-between">
        <span>
          <span className="font-semibold text-green-700">ICT201</span>: Computer Programming Fundamentals
        </span>
        <span className="text-xs text-gray-500">Dr. Amina Mwalimu</span>
      </li>
      <li className="py-3 flex flex-col sm:flex-row sm:items-center justify-between">
        <span>
          <span className="font-semibold text-blue-700">MTH301</span>: Calculus and Mathematical Analysis
        </span>
        <span className="text-xs text-gray-500">Prof. John Mbwana</span>
      </li>
      <li className="py-3 flex flex-col sm:flex-row sm:items-center justify-between">
        <span>
          <span className="font-semibold text-yellow-700">ENG102</span>: English for Academic Purposes
        </span>
        <span className="text-xs text-gray-500">Dr. Grace Shayo</span>
      </li>
    </ul>
  </div>
);

export default UserCourses;
