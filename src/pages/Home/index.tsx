import Scheduler from "../../components/Scheduler";
import Layout from "../../view/layout";

function Home () {
        
    return (
        <Layout 
        mainContent={<Scheduler />} 
        children={undefined} />
     )
}

export default Home