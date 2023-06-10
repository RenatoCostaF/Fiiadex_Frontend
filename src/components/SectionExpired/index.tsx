import * as S from "./styles";

import { FcExpired } from "react-icons/fc";

function SessaoExpirada() {
  return (
    <S.Container>
      <S.Title>Sessão expirada!</S.Title>

      <FcExpired size={64} />
    </S.Container>
  );
}

export default SessaoExpirada;
