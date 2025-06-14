
const UserDashboardHome = () => (
  <div className="mt-4">
    <h2 className="text-2xl font-bold mb-2">Welcome to your Dashboard</h2>
    <p className="text-gray-600 mb-4">
      Quick view of your activities, statistics and upcoming events.
    </p>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-green-50 border border-green-100">
        <h3 className="text-lg font-semibold mb-1">Total Courses</h3>
        <p className="text-green-700 text-3xl font-bold">4</p>
      </div>
      <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
        <h3 className="text-lg font-semibold mb-1">Due Assignments</h3>
        <p className="text-yellow-700 text-3xl font-bold">2</p>
      </div>
    </div>
  </div>
);

export default UserDashboardHome;
