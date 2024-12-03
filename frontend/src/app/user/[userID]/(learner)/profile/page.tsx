const ProfilePage: React.FC = () => {
  const Profile = {
    "Registration Date": "February 28, 2026 8:01",
    "First Name": "",
    "Last Name": "",
    Username: "",
    Email: "",
    "Phone Number": "",
    "Skill/Occupation": "",
    Biography: "",
  };
  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <h3 className="font-semibold text-lg">My Profile</h3>
      <ul className="flex flex-col gap-4">
        {Object.entries(Profile).map(([key, value]) => (
          <li
            key={key}
            className="flex flex-row gap-8 text-base font-medium text-[#5D5E62]"
          >
            <span className="w-2/5">{key}</span>
            {value || "-"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
