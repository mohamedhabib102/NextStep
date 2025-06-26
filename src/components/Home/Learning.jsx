import { FaCode, FaServer, FaPaintBrush, FaKeyboard, FaBullhorn, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Leading() {

const tracks = [
  {
    id: 1,
    title: "تطوير الواجهات الأمامية (Frontend)",
    description: "تعلم كيفية بناء واجهات تفاعلية باستخدام HTML، CSS، وJavaScript، مع التركيز على تجربة المستخدم والتصميم العصري.",
    button: "عرض التفاصيل",
    icon: <FaCode size={50}/>
  },
  {
    id: 2,
    title: "تطوير الخوادم (Backend)",
    description: "فهم كيفية إنشاء أنظمة خلفية قوية وآمنة باستخدام قواعد البيانات وAPIs مع لغات مثل Node.js أو PHP.",
    button: "عرض التفاصيل",
    icon: <FaServer size={50}/>
  },
  {
    id: 3,
    title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
    description: "اكتسب مهارات تصميم واجهات أنيقة وتجارب مستخدم فعالة باستخدام أدوات مثل Figma وAdobe XD.",
    button: "عرض التفاصيل",
    icon: <FaPaintBrush size={50}/>
  },
  {
    id: 4,
    title: "أساسيات البرمجة",
    description: "ابدأ رحلتك من الصفر بتعلم المفاهيم الأساسية في البرمجة، مثل المتغيرات، الشروط، التكرار، والدوال.",
    button: "عرض التفاصيل",
    icon: <FaKeyboard size={50}/>
  },
  {
    id: 5,
    title: "التسويق الرقمي (Digital Marketing)",
    description: "استكشف عالم التسويق عبر الإنترنت، من استراتيجيات المحتوى إلى إعلانات السوشيال ميديا والتحليل.",
    button: "عرض التفاصيل",
    icon: <FaBullhorn size={50}/>
  },
  {
    id: 6,
    title: "تحسين محركات البحث (SEO)",
    description: "تعلم كيف تجعل موقعك يظهر في نتائج البحث الأولى من خلال تحسين المحتوى والكود والبنية الداخلية.",
    button: "عرض التفاصيل",
    icon: <FaSearch size={50}/>
  }
];

  return (
    <section className="pt-24 pb-20 bg-[#eee]" id="leading">
        <h1 className="main__titLe"> مسارات التعليم - Learning Tracks  <span></span> <span></span>  </h1>
        <div className="custom__container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {tracks.map((track) => (
            <div className="bg-white duration-150 hover:-translate-y-3 shadow-md box_serve " key={track.id}>
              <span className="block m-auto w-fit mt-6 mb-4 text-bg-main">{track.icon}</span>
              <h3 className="text-center text-xl font-bold text-custom-bg mb-7">{track.title}</h3>
              <div dir="ltr" className="p-4 bg-[#f6f6f6] info_learning">
                <Link className="text-custom-bg font-semibold" to={"/"}>{track.button}</Link>
              </div>
            </div>
          ))}
          </div>
        </div>
    </section>
  );
}   