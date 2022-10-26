import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1667779200&Signature=HeDE89LwcvcS9ppgX1jzq3qyENb-L7t2-BR0dUgU0r9jKHYW0Y9iQepVsTWWGAzEHE1F0oLXkDkAVbd~sxK8E0cuuFGyX4kl68UZZ4E~CXT8eFmKmkPyu5b-J5q4mjbemSCl91ZW3u4tMmBTUaXWlkO86m6pVN4EJYMHa4~AQ7uYEgF2ivVRxaFVjL-kVggwfoD6uQmHJ6tpgX6k9ckplWKGUAoZfqnNojiDuEhF9PDOEGi6oFiNvBSVY7sQcNw6RfCZSUAKlTk8j~3u6Y97b3EDrvBLmEmqSeU-CC65MXkGLpFattUYuRNS2KyIhdOflnY~-Z7S1qGaS76KhGXWvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={22} weight="fill" />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
