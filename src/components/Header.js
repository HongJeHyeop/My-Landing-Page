import '../css/header.css'

function Header() {
    return (
        <div id="header">
            <div id="header-wrap">
                <div id="header-top">
                    <div id="logo">
                        <h2>DEV_HONG</h2>
                    </div>
                    <div id="header-list">
                        <ul>
                            <li>소개</li>
                            <li>스킬</li>
                            <li>프로젝트</li>
                            <li>컨택</li>
                        </ul>
                    </div>
                </div>
                <div id="header-main">
                    <h1>백엔드 개발자 홍제협입니다.</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Header;