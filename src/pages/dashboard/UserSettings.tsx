
const UserSettings = () => (
  <div className="mt-4 max-w-lg">
    <h2 className="text-xl font-bold mb-2">Settings</h2>
    <div className="bg-white shadow p-4 rounded-xl border">
      <label className="block font-medium mb-2">Theme:</label>
      <select className="w-full border rounded p-2">
        <option>Light</option>
        <option>Dark</option>
        <option>Auto</option>
      </select>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Save Changes
      </button>
    </div>
    <p className="mt-6 text-xs text-gray-400">* CRUD not implemented in demo</p>
  </div>
);

export default UserSettings;
