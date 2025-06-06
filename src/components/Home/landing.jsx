export default function Landing() {
    return(
        <section className="relative landing">
            <div className="custom__container flex justify-between items-center h-[calc(80vh_-_85px)] relative">
                <div className="flex justify-between items-center gap-6 max-[992px]:flex-col max-[992px]:justify-center pb-20">
                    <div className="max-[992px]:text-center">
                        <h1 className="font-bold text-3xl mb-5 text-color-main"> تعلم وطور مهاراتك مع فريق <span className="text-custom-bg">NextStep</span>  </h1>
                        <p className="text-black text-xl leading-8">
                             اكتشف عالم البرمجة والتقنية من خلال كورسات مجانية وعملية مقدمة من فريقنا المتخصص
                            نوفر محتوى سهل واضح ومناسب لكل المستويات، علشان تبدأ رحلتك بثقة واحترافية.
                        </p>
                        <a href="#services" className="absolute left-1/2 -translate-x-1/2 bottom-8 text-custom-bg button__started"><i className="fas fa-angle-double-down fa-2x"></i></a>
                    </div>
                    <img src="./images/landing.png" alt="landing" className="max-w-[400px] max-[992px]:hidden relative image__landing"/>
                </div>
            </div>
        </section>
    )
}