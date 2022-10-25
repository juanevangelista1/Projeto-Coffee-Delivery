import { RegularText, TitleText } from '../../../../components/Typography'
import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1667779200&Signature=HeDE89LwcvcS9ppgX1jzq3qyENb-L7t2-BR0dUgU0r9jKHYW0Y9iQepVsTWWGAzEHE1F0oLXkDkAVbd~sxK8E0cuuFGyX4kl68UZZ4E~CXT8eFmKmkPyu5b-J5q4mjbemSCl91ZW3u4tMmBTUaXWlkO86m6pVN4EJYMHa4~AQ7uYEgF2ivVRxaFVjL-kVggwfoD6uQmHJ6tpgX6k9ckplWKGUAoZfqnNojiDuEhF9PDOEGi6oFiNvBSVY7sQcNw6RfCZSUAKlTk8j~3u6Y97b3EDrvBLmEmqSeU-CC65MXkGLpFattUYuRNS2KyIhdOflnY~-Z7S1qGaS76KhGXWvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <Tags>
        <span>Tradicional</span>
        <span>com leite</span>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
