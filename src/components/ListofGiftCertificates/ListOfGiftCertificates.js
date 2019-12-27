import React from "react";
import {Translate, withLocalize} from "react-localize-redux";
import GiftCertificateCard from "../GiftCertificateCard/GiftCertificateCard";
import ScrollBars from "react-custom-scrollbars";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class ListOfGiftCertificates extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            certificate: null
        };
    }

    componentDidMount() {
        this.props.handleGetAllCertificates("ALL");
    }

    render() {

        return (
            <div>
                <ScrollBars style={{width: 1000, height: 1000}}>
                    <div className="container-fluid">
                        <div className="row">
                            {
                                this.props.giftcertificates.map(
                                    (certificate) =>
                                        <a onClick={() => this.setState({
                                            modal: true,
                                            certificate: certificate
                                        })} className="btn col-md col-lg-6 p-2">
                                            <GiftCertificateCard
                                                certificate={certificate}
                                                handleGetCertificatesByTagName={this.props.handleGetCertificatesByTagName}
                                                role={this.props.role}
                                                isModal={false}
                                                setSelectedGiftCertificate={this.props.setSelectedGiftCertificate}
                                                handleDeleteCertificate={this.props.handleDeleteCertificate}
                                                handleBuyCertificate={this.props.handleBuyCertificate}
                                            />
                                        </a>
                                )
                            }
                        </div>
                    </div>
                </ScrollBars>
                <Modal show={this.state.modal} onHide={() => this.setState({modal: false})}>
                    <ModalHeader toggle={() => this.setState({modal: false})}>
                        {/*{this.state.certificate.name}*/}</ModalHeader>
                    <ModalBody>
                        <GiftCertificateCard
                            certificate={this.state.certificate}
                            handleGetCertificatesByTagName={this.props.handleGetCertificatesByTagName}
                            role={this.props.role}
                            isModal={true}
                            setSelectedGiftCertificate={this.props.setSelectedGiftCertificate}
                            handleDeleteCertificate={this.props.handleDeleteCertificate}
                            handleBuyCertificate={this.props.handleBuyCertificate}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.setState({modal: false})}><Translate
                            id="button.cancel"/></Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default withLocalize(ListOfGiftCertificates);
