import Landing from "./landing";
import Learning from "./Learning";
import Services from "./Services";
import TopStudents from "./TopStudents";
import WhyUs from "./WhyUs";


export default function Home() {
    return(
       <main dir="rtl">
       <Landing/>
       <Services />
       <Learning />
       <WhyUs/>
       <TopStudents />
       </main>
    )
}