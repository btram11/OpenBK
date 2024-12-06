
const InfoBar = () => {
  return(
    <div className="dashboard-top w-[80vw] bg-pink-300 h-[15vw] rounded-2xl flex flex-col-reverse px-10 pb-8">
      <div className="flex flex-row gap-5">
        <img
          className="rounded-full bg-black w-28 aspect-square"
          src="./favicon.ico"
        />
        <div className="flex flex-col gap-1 self-center">
          <span className="font-semibold text-xl">Name & Lastname</span>
          <span> n Courses Enrolled</span>
        </div>
      </div>
    </div>
  );
}

export default InfoBar