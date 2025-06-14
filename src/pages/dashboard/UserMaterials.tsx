
const UserMaterials = () => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Course Materials</h2>
    <ul className="space-y-3 max-w-xl text-gray-800">
      <li className="p-3 bg-blue-50 border border-blue-100 rounded">
        ICT201: <span className="font-semibold">Lecture Notes - Arrays & Loops</span>
      </li>
      <li className="p-3 bg-green-50 border border-green-100 rounded">
        MTH301: <span className="font-semibold">Lecture Notes - Integration Techniques</span>
      </li>
      <li className="p-3 bg-yellow-50 border border-yellow-100 rounded">
        PHY151: <span className="font-semibold">Mid-Semester Exam 2023</span>
      </li>
    </ul>
    <p className="mt-6 text-xs text-gray-400">* CRUD not implemented in demo</p>
  </div>
);

export default UserMaterials;
