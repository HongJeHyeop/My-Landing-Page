import "../css/introduction.css";
import { forwardRef } from "react";

function Introduction(prop, ref) {
    return (
        <div id="intro" ref={ref}>
            <div id="intro-wrap">
                <h2>ABOUT ME</h2>
                <div id="intro-contents">
                <span>누구보다 꾸준하고 성실한 노력으로 무한한 발전 가능성을 가진 개발자 홍제협 입니다. <br/>
                    길지않은 시간 안에 이룬 이 성장은 저의 발전 욕구와 함께 나아가는 제 가능성의 증명이며,
                    새로운 것에 항상 도전적인 자세로 성실히 노력으로 개발자가 될 것입니다.
                </span>
                </div>
                <div id="info">
                    <div className="info-list">
                        <div>
                            <h3>이름</h3>
                            <hr/>
                            <p>홍제협</p>
                        </div>
                        <div>
                            <h3>생년월일</h3>
                            <hr/>
                            <p>1995.05.18</p>
                        </div>
                        <div>
                            <h3>이메일</h3>
                            <hr/>
                            <p>jhh951217@naver.com</p>
                        </div>
                    </div>
                    <div className="info-list">
                        <div>
                            <h3>주소</h3>
                            <hr/>
                            <p>대구시 남구</p>
                        </div>
                        <div>
                            <h3>자격증</h3>
                            <hr/>
                            <p>· 정보처리기사</p>
                            <p>· 리눅스마스터2급</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Introduction);