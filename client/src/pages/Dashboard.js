import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import { useSelector } from "react-redux";
import { userInfo } from "../store/slices/user";

const Dashboard = () => {
  const user = useSelector(userInfo);

  const html = user ? (
    <Section>
      <Container>
        <h1>Dashboard</h1>
        <p>If you can see this then you are logged in</p>
      </Container>
    </Section>
  ) : (
    (window.location.href = "/")
  );

  return html;
};

export default Dashboard;
