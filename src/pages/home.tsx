import CreateUser from "./User/CreateUser";
import Header from "../components/Header";
import { useAuth } from "context/AuthContext";

function Home() {
  const { handleLogout } = useAuth();
  return (
    <>
      <Header />
      <CreateUser />
    </>
  );
}

export default Home;
