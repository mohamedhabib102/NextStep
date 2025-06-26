

const topStudents = [
  {
    id: 1,
    name: "أحمد سعيد",
    description: "اجتاز كورس تطوير الواجهات بنسبة إنجاز 100% وقدم مشروع مميز بواجهة احترافية.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "مريم خالد",
    description: "أنجزت تحدي التصميم الأسبوعي في وقت قياسي، واهتمت بأدق تفاصيل تجربة المستخدم.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "يوسف عبد الله",
    description: "برمج نظام تسجيل حضور ذكي باستخدام JavaScript وطبّق عليه الـ localStorage.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 4,
    name: "سارة عادل",
    description: "شاركت في 3 مهام جماعية ونسّقت بين الفريق، ورفعت جودة المشروع النهائي.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];


function TopStudents() {
  return (
    <section className="pt-24 pb-20 bg-gray-100" id="topStudents">
        <div className="custom__container">
                <h1 className="main__titLe">
      أبطال الشهر - Top Students
      <span></span>
      <span></span>
    </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {topStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-lg">{student.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{student.description}</p>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
}

export default TopStudents;
