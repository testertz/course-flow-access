
const UserNotifications = () => (
  <div className="mt-4 max-w-lg">
    <h2 className="text-xl font-bold mb-2">Notifications</h2>
    <ul className="divide-y">
      <li className="py-4">
        <p className="font-medium">New assignment uploaded for ICT201.</p>
        <span className="text-xs text-gray-500">2 hours ago</span>
      </li>
      <li className="py-4">
        <p className="font-medium">Grade released for MTH301 assignment 1.</p>
        <span className="text-xs text-gray-500">1 day ago</span>
      </li>
    </ul>
    <p className="mt-6 text-xs text-gray-400">* CRUD not implemented in demo</p>
  </div>
);

export default UserNotifications;
