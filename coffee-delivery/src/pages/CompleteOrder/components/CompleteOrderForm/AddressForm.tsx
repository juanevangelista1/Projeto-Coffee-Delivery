import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        // {...register('cep')}
        // error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        // {...register('street')}
        // error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        // {...register('number')}
        // error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        // {...register('complement')}
        // error={errors.complement?.message}
        // rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        // {...register('district')}
        // error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        // {...register('city')}
        // error={errors.city?.message}
      />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}
