import { Container } from "@mantine/core";
import Scheduler from "../../components/Scheduler";
import Layout from "../../view/layout";

function Home () {
    return (
        <>
        <Layout/>
        <Container fluid h={50}>
        <Scheduler/>
        </Container>
        </>
    )
}

export default Home;