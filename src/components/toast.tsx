import { Toast as ToastContainer, ToastHeader, ToastBody } from 'reactstrap'
import styled from 'styled-components'

export type statusProps = 'error' | 'warning' | 'success'

export type toastHandler = {
  isOpen: boolean
  status: statusProps
  message: string
}

interface IProps {
  handleToogle: () => void
  toastHandler: toastHandler
}

const ToastDiv = styled.div`
  position: sticky;
  top: 1rem;
  left: 100rem;

  .success {
    background: #56ae57;
    border: 0;
    color: white;
  }

  .error {
    background: #f16451;
    border: 0;
    color: white;
  }
`

export function Toast({ handleToogle, toastHandler }: IProps) {
  const { isOpen, status, message } = toastHandler
  return (
    <ToastDiv>
      <ToastContainer fade isOpen={isOpen}>
        <ToastHeader
          className={status}
          toggle={() => handleToogle()}
        ></ToastHeader>
        <ToastBody className={status}>{message}</ToastBody>
      </ToastContainer>
    </ToastDiv>
  )
}
