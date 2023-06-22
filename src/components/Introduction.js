import "../css/introduction.css";

function Introduction() {
    return (
        <div id="intro">
            <div id="intro-wrap">
                <h2>ABOUT ME</h2>
                <div id="intro-contents">
                <span>우연히 코딩을 시작하게 된 후 코딩에 재미를 느껴 개발자의 길로 서게되었습니다.
                    22년 12월 ~ 현재까지 단기간에 이것저것 배우며 빠르게 성장하였습니다. <br/>
                    빠르게 성장한 만큼 아직 부족함이 있는 개발자 이지만 제가 모르는게 무엇인지 파악하여
                    부족한부분을 채워가며 꾸준히 성장하는 개발자가 되겠습니다!</span>
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
                            <h3>경력</h3>
                            <hr/>
                            <p>신입</p>
                        </div>
                        <div>
                            <h3>자격증</h3>
                            <hr/>
                            <p>정보처리기사</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;