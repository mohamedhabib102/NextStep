

const topThree = [
  {
    id: 1,
    name: "أحمد سعيد",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rank: "🥈",
    position: "2nd",
    num: 2
  },
  {
    id: 2,
    name: "مريم خالد",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rank: "🥇",
    position: "1st",
    num: 1
  },
  {
    id: 3,
    name: "يوسف عبد الله",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rank: "🥉",
    position: "3rd",
    num: 3
  }
];


function TopStudents() {
  return (
    <section className="pt-24 pb-20 bg-gray-100" id="topStudents">
        <div className="custom__container">
                <h1 className="main__titLe">
      أبطال الشهر - Champions of the Month
      <span></span>
      <span></span>
    </h1>

<div className="flex justify-center items-end gap-6 flex-row-reverse flex-wrap md:flex-nowrap mt-24">
  {topThree.map((student) => {
    const height =
      student.position === "1st"
        ? "h-72"
        : student.position === "2nd"
        ? "h-56"
        : "h-44";

    return (
      <div
        key={student.id}
        className={`relative h- bg-bg-main w-36 lg:w-56 ${height} rounded-xl shadow p-5 flex flex-col items-center text-center hover:shadow-lg transition`}
      >
        <div className="absolute -top-14 w-20 h-20">
          <img
            src={student.image}
            alt={student.name}
            className="rounded-full border-4 border-yellow-400 object-cover w-full h-full"
          />
          <h4 className="text-white text-md mt-1 font-semibold">{student.name}</h4>
        </div>
        <span className="block mt-auto text-custom-bg text-6xl font-bold">{student.num}</span>
      </div>
    );
  })}
</div>

        </div>
    </section>
  );
}

export default TopStudents;
