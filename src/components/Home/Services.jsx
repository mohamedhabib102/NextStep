import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6"; 
import { FaPalette, FaServer, FaSearch } from "react-icons/fa"; 
import { Link  } from "react-router-dom";

// تعريف المصفوفة الثابتة للخدمات
const SERVICES = [
  {
    id: 1,
    title: "تطوير الواجهات الأمامية (Frontend)",
    description: "نصمّم ونطوّر واجهات مستخدم تفاعلية وعصرية، تضمن تجربة سلسة وجذابة وتدعم أهداف مشروعك.",
    icon: <MdOutlineDesignServices size={50} />
  },
  {
    id: 2,
    title: "أساسيات البرمجة",
    description: "نوفر دورات تأسيسية شاملة لتعلّم البرمجة، لبناء قاعدة قوية تُسهّل دخولك عالم التطوير.",
    icon: <FaCode size={50} />
  },
  {
    id: 3,
    title: "تصميم UI/UX",
    description: "نبتكر واجهات وتجارب مستخدم بصرية فعالة وسهلة الاستخدام، تركز على راحة المستخدم ووضوح التصميم.",
    icon: <FaPalette size={50} />
  },
  {
    id: 4,
    title: "تطوير الخوادم (Backend)",
    description: "نطوّر أنظمة خلفية قوية وآمنة، تضمن أداءً عاليًا وتكاملًا مرنًا مع الواجهات والتطبيقات المختلفة.",
    icon: <FaServer size={50} />
  },
  {
    id: 5,
    title: "تحسين محركات البحث (SEO)",
    description: "نحسّن ترتيب موقعك في نتائج البحث لزيادة الظهور، جذب الزوار، وتعزيز فرصك التسويقية.",
    icon: <FaSearch size={50} />
  }
];


export default function Services() {
    return(
        
        <section className="pt-24 pb-20" id="services">
            <div className="custom__container">
                <h1 className="main__titLe"> خدماتنا  <span></span> <span></span>  </h1>
                <div className="grid grid-cols-3 gap-7  max-[992px]:grid-cols-2  max-[767px]:grid-cols-1">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="overflow-hidden select-none bg-[#EEE] shadow-sm transition-transform duration-200 animation__service">
                            <span className="block text-color-main my-4 mb-2 m-auto w-fit">{service.icon}</span>
                            <div className="p-5">
                                <h4 className="text-custom-bg font-bold text-xl mb-1">{service.title}</h4>
                                <p className="leading-6 text-lg mt-2">{service.description}</p>
                                <Link to="/course" className="block mt-3 text-color-main font-semibold hover:underline rounded-md cursor-pointer w-fit transition duration-200 hover:rounded-sm"> عن الدورة </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}