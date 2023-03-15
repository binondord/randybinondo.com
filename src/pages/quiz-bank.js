import IndexNavbar from "@/components/Navbars/IndexNavbar.js";
import MyInterests from "@/components/IndexSections/MyInterests";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/IndexSections/Hero";
import Footer from "@/components/Footers/Footer.js";
export default function QuizBank() {
    return (
        <>
            <IndexNavbar fixed />
            <Hero/>
            <Wrapper>
                TEst
                </Wrapper>
            <MyInterests showSvgPolygon={false}/>
            <Footer/>
        </>
    );
}