import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import imgDelivery from '../../assets/Illustration-delivery.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Clock, CurrencyDollar, MapPin, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
export function OrderConfirmedPage() {
  const { colors } = useTheme()
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhul! Seu pedido foi confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Aguarde, logo logo o seu pedido chegará até você!
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={<RegularText>Entrega em Salvador-BA</RegularText>}
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong></strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={imgDelivery} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
