import '../css/project.css';
import projectImg from '../img/chungwoo1.png';
import portfolioImg from '../img/portfolio.png'
import classicLinkImg from '../img/classicLink.png';
import {forwardRef} from "react";

function Project(prop, ref) {
    return (
        <div id="project" ref={ref}>
            <div id={"project-wrap"}>
                <h2>PROJECT</h2>
                <div className={"project-box"}>
                    <img src={projectImg} alt="이미지"/>
                    <div className={"project-contents"}>
                        <h3>(주)청우국제운송 회사 소개페이지</h3>
                        <ul>
                            <li>· 주소 : <a href="http://chungwoo.shop">http://chungwoo.shop</a></li>
                            <li>· 제작기간 : 23년 4월 ~ </li>
                            <li>· 개발인원 : 1인</li>
                            <li>· 기술 : SpringBoot, HTML/CSS, JavaScript, Mybatis, MySQL, AWS(EC2, RDS), Git/Github</li>
                            <li>· 설명 : (주)청우국제운송 관계자로 부터 회사 소개페이지를 만들어 달라는 요청을 받고
                                프로젝트를 시작하게 되었습니다. 본 프로젝트의 주요 목적은 회사 소개에 대한 정적 페이지
                                였으며 기능적인 부분은 관리자 및 직원 로그인, 공지사항, 온라인 주문으로 이루어진 간단한
                                회사 소개페이지입니다.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"project-box"}>
                    <img src={classicLinkImg} alt="이미지"/>
                    <div className={"project-contents"}>
                        <h3>Classic-Link(제작중)</h3>
                        <ul>
                            <li>· 주소 : <a href="https://github.com/HongJeHyeop/Classic-Link-Project">github.com/HongJeHyeop/Classic-Link-Project(제작중)</a></li>
                            <li>· 제작기간 : 23년 6월 ~ </li>
                            <li>· 개발인원 : 1인</li>
                            <li>· 기술 : React, express, MySQL, Git/Github</li>
                            <li>· 설명 : 클래식연주자들의 다양한 프로필들을 관리하기 위해 제작하게 되었습니다. 본인의
                                프로필사진, 수상경력, 연주경력 등 다양한 이력들을 작성해서 관리하며 필요시 PDF파일로 변환
                                하여 출력하는 기능을 구현하였습니다. 향후 부가적인 기능들을 추가하여 클래식 연주자들의
                                개인적인 공간으로 만들어 여러 연주자들을 연결시켜주는 다리역활을 하는 서비스를 구축할 예정입니다.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"project-box"}>
                    <img src={portfolioImg} alt="이미지"/>
                    <div className={"project-contents"}>
                        <h3>DEV_HONG (포트폴리오 페이지)</h3>
                        <ul>
                            <li>· 주소 : <a href="https://hongjehyeop.github.io/My-Landing-Page/">https://hongjehyeop.github.io/My-Landing-Page/</a></li>
                            <li>· 제작기간 : 23년 6월 ~ </li>
                            <li>· 개발인원 : 1인</li>
                            <li>· 기술 : React, Git/Github, Github Pages</li>
                            <li>· 설명 : 현재 보고 계신 페이지이며 포트폴리오를 위해 제작하였습니다. 리액트를 사용하였으며
                                모바일로도 볼 수 있게 하기위해 반응형 웹으로 제작하였습니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Project);