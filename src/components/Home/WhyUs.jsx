import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChalkboardTeacher, FaHandsHelping, FaProjectDiagram, FaCertificate } from "react-icons/fa";





export default function WhyUs() {
    const [active, setActive] = useState(1);

    const setShow = (index) => {
        setActive(index)
    }

    const features = [
  {
    id: 1,
    title: "كورسات عملية مجانية",
    description:
      "في عصر تتسارع فيه التكنولوجيا وتتغير احتياجات السوق، أصبح التعلم العملي هو الخيار الأمثل لتطوير المهارات. نحن في فريق NextStep نُقدم كورسات مجانية بالكامل تهدف إلى تمكين الشباب من خلال محتوى تدريبي عملي، يركز على بناء مهارات حقيقية تُطبق في مشاريع فعلية. لا نعتمد على الحفظ أو التلقين، بل نُشجع المتعلم على التفاعل، التطبيق، والتجربة، مما يمنحه ثقة حقيقية في قدراته ويؤهله للفرص المستقبلية.",
    icon: <FaChalkboardTeacher size={30} />
  },
  {
    id: 2,
    title: "دعم مباشر من الفريق",
    description:
      "نحن لا نكتفي بتقديم محتوى فقط، بل نؤمن بأهمية التواصل والدعم المستمر للمتعلم. لذلك نُوفر قناة مباشرة للتفاعل مع أعضاء الفريق من خلال جلسات لايف، مجموعات مخصصة، وإجابات فورية على الأسئلة. هدفنا هو بناء بيئة تعليمية محفزة يشعر فيها المتعلم أنه ليس وحده، بل لديه من يسانده ويُوجهه في كل خطوة من رحلته.",
    icon: <FaHandsHelping size={30} />
  },
  {
    id: 3,
    title: "مشاريع حقيقية",
    description:
      "نحن نؤمن بأن أفضل طريقة للتعلم هي بالممارسة. لذلك نُصمم كورساتنا لتشمل مشاريع حقيقية تحاكي التحديات الواقعية في سوق العمل. من تصميم صفحات ويب إلى تطوير أنظمة متكاملة، نحرص على أن يخرج كل متعلم من الكورس وقد أنجز شيئًا ملموسًا يُضيفه إلى معرض أعماله (Portfolio) ويستخدمه في التقديم للوظائف أو فرص التدريب.",
    icon: <FaProjectDiagram size={30} />
  },
  {
    id: 4,
    title: "شهادات تقدير",
    description:
      "في نهاية كل تجربة تعليمية، نُقدم شهادة تقدير رمزية للمتعلمين المتميزين الذين أتموا الكورس بنجاح. هذه الشهادة لا تمثل فقط إنجازًا، بل تُعد دافعًا للاستمرار في التعلم وتطوير الذات. نؤمن أن التقدير المعنوي يُحدث فرقًا حقيقيًا، ويُشعر المتعلم أن جهده محل احترام واهتمام.",
    icon: <FaCertificate size={30} />
  }
];
    return(
        <section className="pt-24 pb-20" id="whyUs">
            <div className="custom__container">
                 <h1 className="main__titLe"> ليه تتعلم معانا؟ - Why Us <span></span> <span></span>  </h1>
                 <div className="">
                    {features.map((serve) => (
                        <div className={`mb-6 duration-150 rounded-lg bg-white last:mb-0 p-5 ${active === serve.id ? "max-h-[500px]" : "max-h-[90px]"}`}>
                            <div className="flex bg-[#EEE] p-3 text-white justify-between items-center rounded-md">
                              <div className="flex items-center gap-3 flex-row-reverse">
                                <h3 className="text-bg-main font-bold text-lg">{serve.title}</h3>
                                <span className="text-bg-main">{serve.icon}</span>
                              </div>
                              <AiOutlineClose
                              onClick={() => setShow(serve.id)}  
                              className={`text-custom-bg cursor-pointer duration-150 ${active === serve.id ? "rotate-45" : "rotate-0"}`} size={20}/>
                            </div>
                            <p className={`mt-5 leading-7 text-lg ${active === serve.id ? "opacity-100 visible" : "opacity-100 invisible"}`}>{serve.description}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    )
}