import * as S from "./styles";

import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  message: string;
}

function SucessRequest({ message }: Props) {
  return (
    <S.Container>
      <S.Title>{message}</S.Title>

      <BsFillCheckCircleFill color="#5ce552" size={64} />
    </S.Container>
  );
}

export default SucessRequest;
