import React from "react";
import { BaseModal, ButtonStyled, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalTitle } from "../style/style";
import { Link } from 'react-router-dom';

const Modal = props => {
    if (!props.show){
        return null
    }

    return (
        <BaseModal>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>Tem certeza que deseja Sair?</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Ao clicar em sair você será redirecionado para a pagina inicial!</p>
                </ModalBody>
                <ModalFooter>
                    <Link to="/">
                        <ButtonStyled onClick={props.onClose}>
                            Sair
                        </ButtonStyled>
                    </Link>
                </ModalFooter>
            </ModalContent>
        </BaseModal>
    )
}

export default Modal;