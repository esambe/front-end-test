import React, {useState} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AppModal = (props, children) => {

    const { className, modalOpen, toggle, title } = props;

    return (
        <>
            <Modal isOpen={modalOpen} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </Modal>
        </>
    );
}

export default AppModal;
