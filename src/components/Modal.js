import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Modal({ className, onClose, visible, children }) {
    const handleClose = () => {
        onClose?.();
    };
    return (
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper className={className} tapIndex="-1" visible={visible}>
                <ModalInner tapIndex="0" className="modal-inner">
                    <ContentTitle>Terms Of Use</ContentTitle>
                    <CloseButton onClick={handleClose}>
                        Close
                    </CloseButton>
                    <Content>
            <ContentContext>
                제1조 (목적)
                <br/>
                본 이용약관은 Violet 서비스(이하 "서비스") 이용과 관련하여 회원과 회사 간의 권리, 의무, 책임사항 및 회원의 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 그 목적으로 합니다.
                <br/><br/>
                제2조 (약관의 효력 및 변경)
                <br/>
                1. 본 약관은 서비스를 이용하고자 하는 모든 회원에게 그 효력이 발생합니다.
                <br/>
                2. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 화면에 게시하거나 회원이 요구할 경우 약관의 사본을 회원에게 제공할 수 있으며, 기타의 방법으로 회사가 회원에게 공지합니다.
                <br/>
                3. 회사는 필요하다고 인정되는 경우 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 때에는 적용일자와 변경사유를 밝혀 본 조 제2항과 같은 방법으로 그 적용일자 10일 전부터 공지합니다.
                단, 회원에게 불리하게 약관을 변경할 때에는 그 적용일자 30일 전부터 공지하며, 제8조의 통지수단으로 회원에게 개별 통지합니다.
                <br/>
                4. 회사가 본 조 제3항에 따라 변경 약관을 공지 또는 통지하면서, 회원에게 약관 변경 적용일까지 거부의사를 표시하지 아니하는 경우 약관의 변경에 동의한 것으로 간주한다는 내용을 명확하게 공지 또는 통지하였음에도 회원이 변경된 약관의 효력 발생일까지 약관 변경에 대한 명시적인 거부의 의사를 표시하지 아니하면 회원이 변경 약관에 동의한 것으로 간주합니다.
                <br/>
                5. 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고, 회원 해지 신청을 통해 회사와의 이용계약을 해지할 수 있습니다.
                <br/>
                6. 본 약관에 동의하는 것은 회사가 운영하는 서비스의 홈페이지를 정기적으로 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원의 피해에 대하여는 회사는 책임 지지 않습니다.
                <br/><br/>
                제3조 (회원정보의 변경)
                <br/>
                회원은 서비스를 이용하면서 이용 신청 시 기재한 정보가 변경되었을 경우, 지체 없이 해당 정보를 수정해야 합니다. 
                해당 정보를 수정하지 않음으로 인하여 발생하는 모든 책임은 회원에게 있습니다.
                <br/><br/>
                제4조 (회원에 대한 통지)
                <br/>
                회사가 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 E-mail(이하 "통지수단")으로 할 수 있습니다.
                <br/><br/>
                제5조 (회사의 의무)
                <br/>
                1. 회사는 관련법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
                <br/>
                2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위해 보안 시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.
                <br/>
                3. 회사는 서비스 제공과 관련하여 수집한 회원의 개인정보를 사전 동의 없이 제3자에게 제공, 누설, 전송, 배포하지 않습니다. 단, 관계법령에 의하여 권한 있는 자가 적법한 절차에 따라 그 제공을 요청한 경우에는 그러하지 않습니다.
                <br/>
                4. 회사는 서비스 이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는 통지수단을 통하여 회원에게 처리과정 및 결과를 전달합니다.
                <br/><br/>


                제6조 (회원의 의무)
                <br/>
                1. 회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.
                <br/>
                 1) 타인의 정보 도용 또는 타인으로 가장
                <br/>
                 2) 회사가 게시한 각종 정보의 무단 변경
                <br/>
                 3) 회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해하는 행위
                <br/>
                 4) 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
                <br/>
                 5) 회사의 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위
                <br/>
                 6) 회사가 정한 정보 이외의 정보 (컴퓨터 프로그래밍 등) 등의 송신 또는 게시하는 행위
                <br/>
                 7) 회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로 서비스를 이용하거나 시스템에 접근하는 행위
                <br/>
                 8) 회사의 직원이나 운영자를 가장하거나 사칭하는 행위
                <br/>
                 9) 서비스의 운영을 고의로 방해하거나 서비스의 안정적 운영을 방해할 수 있는 행위 및 수신자의 명시적 의사에 반하여 광고성 정보를 전송하는 행위
                <br/>
                 10) 서비스를 부정한 용도 또는 영리를 추구할 목적으로 이용하거나 제공받은 음원을 영리를 목적으로 하는 영업장과 매장 등에서 제3자에게 송출 또는 이용하게 하는 행위
                <br/>
                 11) 기타 불법적이거나 부당한 행위
                <br/>
                2. 회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안됩니다.
                <br/><br/>
                제7조 (아이디(EMAIL)와 비밀번호(PASSWORD)관리에 대한 의무와 책임)
                <br/>
                회원은 본인 아이디(EMAIL) 및 비밀번호(PASSWORD)를 제3자에게 이용하게 해서는 안되며, 회원 본인의 아이디(ID) 및 비밀번호(PASSWORD)를 도난 당하거나 제3자가 사용하고 있음을 인지하는 경우에는 즉시 회사에 통보하고 회사의 안내가 있는 경우 그에 따라야 합니다.
                <br/><br/>
                제8조 (개인정보의 보호 및 이용)
                <br/>
                1. 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하고, 회원의 개인정보를 보호하기 위하여 노력합니다.
                <br/>
                2. 회원의 귀책사유로 인해 노출된 정보에 대해서 회사는 일체의 책임을 지지 않습니다.
                <br/><br/><br/>
                부칙
                <br/>
                (시행일) 본 약관은 2023년 5월 29일부터 적용됩니다.
            </ContentContext>
                        {children}
                    </Content>
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto:
    outline: 0;
`

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #252D36;
    border-radius: 5px;
    width: 519px;
    max-width: 519px;
    height: 350px;
    max-height: 701px; 
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
`

const CloseButton = styled.div`
    position: absolute;
    top: 2%;
    right: 0%;
    
    width: 40px;
    height: 40px;
    margin: 16px;

    text-align: left;
    font-family: "SC Dream 4";
    font-size: 15px;
    color: #ececec;

    cursor: pointer;
`;

const ContentTitle = styled.div`
    padding-left: 30px;
    text-align: left;
    font-family: "SC Dream 6";
    font-size: 30px;
    color: #ececec;
`

const Content = styled.div`
    overflow-y: auto;
    margin-top: 20px;
    height: 80%;
`

const ContentSubTitle = styled.div`
    margin-left: 6%;
    margin-bottom: 5px;
    text-align: left;
    font-family: "SC Dream 6";
    font-size: 20px;
    color: #cecece;
`

const ContentContext = styled.div`
    display: block;
    margin-left: 6%;
    width: 88%;
    text-align: left;
    font-family: "SC Dream 4";
    font-size: 12px;
    color: #cecece;
`

export default Modal