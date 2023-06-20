import { styled } from 'styled-components'
import banner from '../../../assets/images/Banner.png'

export const Container = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 24px;
  padding-bottom: 64px;
`