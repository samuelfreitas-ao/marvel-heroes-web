import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`
export const InputContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.8);
`
export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  font-size: 24px;
  color: #999999;
  outline: none;
  border: 0;
  &::placeholder {
    color: #999999;
    font-weight: normal;
  }
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 4px;
  color: #999999;
  font-size: 24px;
  display: flex;
  padding: 4px;
  cursor: pointer;
`
