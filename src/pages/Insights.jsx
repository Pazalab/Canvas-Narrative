import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import InsightsBody from "../components/insights/InsightsBody"
import "../css/insights.css"

const Insights = () => {
  return (
    <>
            <Navbar />
            <InsightsBody />
            <CallToAction />
            <Footer />
    </>
  )
}

export default Insights