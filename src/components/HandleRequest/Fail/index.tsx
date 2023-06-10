import * as S from "./styles";

import { RiCloseCircleFill } from "react-icons/ri";

interface Props {
  message: string;
}

function FailRequest({ message }: Props) {
  return (
    <S.Container>
      <S.Title>{message}</S.Title>

      <RiCloseCircleFill color="#FF0000" size={64} />
    </S.Container>
  );
}

export default FailRequest;
