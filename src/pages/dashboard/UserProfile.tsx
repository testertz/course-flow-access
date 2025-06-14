
const UserProfile = () => (
  <div className="mt-4 max-w-md">
    <h2 className="text-xl font-bold mb-3">Profile</h2>
    <div className="bg-white shadow p-4 rounded-xl space-y-2 border">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          AM
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Amina Mwalimu</h3>
          <div className="text-xs text-gray-500">amina@udsm.ac.tz</div>
          <div className="text-xs text-gray-500">University of Dar es Salaam</div>
        </div>
      </div>
      <div>
        <p className="text-sm mt-2">Welcome to your profile page!</p>
      </div>
    </div>
  </div>
);

export default UserProfile;
