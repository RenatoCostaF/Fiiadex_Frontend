import { Container, Spinner } from "./styles";

interface LoadingProps {
  status?: boolean;
}

const Loading = ({ status }: LoadingProps) => {
  return (
    <Container status={status}>
      <Spinner color="#58c7f3" background="#FFF" />
    </Container>
  );
};

export default Loading;
