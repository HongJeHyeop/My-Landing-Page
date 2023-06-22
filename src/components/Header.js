import '../css/header.css'

function Header() {
    return (
        <div id="header">
            <div id="">
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
                        <h1>BackEnd Developer Hong Je Hyeop</h1>
                        <div>
                            <span>아무말 하나 멘트 정하기입니다</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;