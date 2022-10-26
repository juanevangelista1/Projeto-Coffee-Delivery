import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { size } from 'polished'
import { Form } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber esse pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega, escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
