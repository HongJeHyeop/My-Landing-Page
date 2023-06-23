import '../css/project.css';
import projectImg from '../img/chungwoo1.png';
import portfolioImg from '../img/portfolio.png'

function Project() {
    return (
        <div id="project">
            <div id={"project-wrap"}>
                <h2>PROJECT</h2>
                <div className={"project-box"}>
                    <img src={projectImg} alt="이미지"/>
                    <div className={"project-contents"}>
                        <h3>(주)청우국제운송 회사 소개페이지</h3>
                        <ul>
                            <li>· 제작기간 : 23년 4월 ~ </li>
                            <li>· 개발인원 : 1인</li>
                            <li>· 기술 : SpringBoot, HTML/CSS, JavaScript Mybatis, MySQL, Maven, AWS(EC2, RDS), Git/Github</li>
                            <li>· 설명 : </li>
                        </ul>
                    </div>
                </div>
                <div className={"project-box"}>
                    <img src={portfolioImg} alt="이미지"/>
                    <div className={"project-contents"}>
                        <h3>DEV_HONG (포트폴리오 페이지)</h3>
                        <ul>
                            <li>· 제작기간 : 23년 6월 ~ </li>
                            <li>· 개발인원 : 1인</li>
                            <li>· 기술 : React, Git/Github, Github Pages</li>
                            <li>· 설명 : 현재 보고 계신 페이지이며 포트폴리오를 위해 제작하였으며, 리액트를 사용하여 개발하였습니다.
                                모바일로도 볼 수 있게 하기위해 반응형 웹으로 제작하였습니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;