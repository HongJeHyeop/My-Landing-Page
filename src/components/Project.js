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
                <div className={"project-container"}>
                    <div className={"project-box"}>
                        <img src={projectImg} alt="이미지"/>
                        <div className={"project-contents"}>
                            <h3>(주)청우국제운송 회사 소개페이지</h3>
                            <ul>
                                <li>· 주소 : <a href="https://chungwoo.shop">https://chungwoo.shop</a></li>
                                <li>· 제작기간 : 23년 4월 ~</li>
                                <li>· 개발인원 : 1인</li>
                                <li>· 사용기술 : SpringBoot, HTML/CSS, JavaScript, Mybatis, MySQL, AWS(EC2, RDS, ROUTE53),
                                    Git/Github
                                </li>
                                <li>· 제작의도 : (주)청우국제운송 관계자로 부터 회사 소개페이지를 만들어 달라는 요청을 받고
                                    프로젝트를 시작하게 되었습니다. 본 프로젝트의 주요 목적은 회사 소개에 대한 정적 페이지
                                    였으며 기능적인 부분은 관리자 및 직원 로그인, 공지사항, 온라인 문의로 이루어진 간단한
                                    회사 소개페이지입니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"project-detail"}>
                        <p>프로젝트 설명</p>
                        <table>
                            <tbody>
                            <tr>
                                <td>공지사항 ｜</td>
                                <td>기본적인 CRUD 구현 및 다중 파일 업로드/다운로드 가능</td>
                            </tr>
                            <tr>
                                <td>공지사항 작성 ｜</td>
                                <td>관리자로그인 후 작성가능하며 quill.js 라이브러리를 이용하여
                                    다양한 에디터 기능을 제공하고있습니다. 본문에 이미지 삽입이 가능하며
                                    이미지 삽입시 파일을 서버에 저장 후 저장된 이미지 경로를 반환하여
                                    본문 내용안에 img 태그로 바로 삽입되는 구조입니다.
                                    작성을 완료하지 않고 돌아갈 경우 서버에 본문이미지가 남기에
                                    이를 완전히 제거하고 페이지가 이동되도록 하여 불필요한 파일이 남지않도록
                                    하였습니다.
                                </td>
                            </tr>
                            <tr>
                                <td>파일업로드 ｜</td>
                                <td>파일 업로드는 dropzone.js 라이브러리를 이용하여 drag and drop기능을
                                    구현하였으며, 최대 5개 까지 업로드 가능하도록 제한하였습니다.
                                    파일별 최대용량은 10MB로 제한하였으며 파일선택시 확장자를 체크하여 지정된
                                    확장자가 아닐경우 선택한 파일을 삭제하도록 하였습니다.
                                </td>
                            </tr>
                            <tr>
                                <td>페이지네이션 ｜</td>
                                <td>
                                    공지사항 목록은 총게시물 수를 구하여 1페이지에 10개씩 10페이지를 기본으로 보여주고 있으며
                                    다음 화살표(10페이지 이동)를 클릭시 (Math.trunc((현재페이지번호 - 1) / 10) + 1) * 10 + 1 하여 다음 10페이지의
                                    첫페이지로 이동하도록 하였습니다.
                                </td>
                            </tr>
                            <tr>
                                <td>자료실 ｜</td>
                                <td>
                                    공지사항과 같은 기능이지만 요청에 따라 로그인한 직원만 이용할 수 있도록하여
                                    직원들만의 공간으로 만들예정입니다. (협의중)
                                </td>
                            </tr>
                            <tr>
                                <td>지도 ｜</td>
                                <td>네이버 지도 API를 사용하여 지점현황에 지도를 삽입하였습니다.</td>
                            </tr>
                            <tr>
                                <td>로그인 ｜</td>
                                <td>
                                    spring security를 이용하여 구현하였으며 bcrypt를통해 비밀번호를 암호화 하였습니다.
                                    또한 정규식을 통해 비밀번호 작성규칙을 강화하였습니다.
                                </td>
                            </tr>
                            <tr>
                                <td>권한검사 ｜</td>
                                <td>
                                    회원가입시 관리자의 승인이 있어야 로그인 할 수 있으며 직원(member)권한으로 로그인됩니다.
                                    최종관리자(admin)는 1계정만 존재하며 이 관리자는 회원현황관리와 신규가입관리를 할 수 있습니다.
                                </td>
                            </tr>
                            <tr>
                                <td>배포 ｜</td>
                                <td>
                                    AWS EC2서버를 통해 배포하였으며 데이터베이스는 RDS로 생성하였습니다.
                                    테스트를 위해 저렴한 도메인을 구매하여 ROUTE53을 통해 연결하였으며
                                    let's encrypt SSL인증서를 통해 HTTPS로 연결하였습니다. 이외 PUTTY, FileZilla를 활용하였습니다.
                                </td>
                            </tr>
                            <tr>
                                <td>느낀점 ｜</td>
                                <td>
                                    본 프로젝트는 저의 첫 프로젝트입니다. 추후 실제 회사에서 사용되어야할 홈페이지이기 때문에
                                    조금의 부담을 가지고 시작하게 되었습니다. 프로젝트를 진행하며 가장 크게 느낀점은
                                    프로젝트의 구조 설계에 대한 중요성이였습니다. 실제 코드를 작성하는것 보다 어떤 동작에 대한
                                    다음 상황과 연관된 기능들의 변화에 대해 예측하는 것이 더 복잡하고 힘들었던것 같습니다.
                                    처음부터 여러가지 상황을 예상할 순 없겠지만 프로젝트의 구조를 좀더 상세하게 설계한 후 제작했다면
                                    조금 더 클린한 코드를 작성하고 효율적으로 접근할 수 있을거라 느꼇습니다.<br/>
                                    가장 어려웠던 점은 aws를 통해 배포하는것이였습니다. 차음 접하다 보니 여러가지 설정들이
                                    어렵게 다가왔습니다. <br/>
                                    본 프로젝트를 통해 혼자 프론트 부터 백엔드, 배포까지 직접해보며 하나의 개발 프로세스가 어떻게
                                    진행되는지 배우게 되었습니다. 처음에는 모르는 문제를 만났을때 두려운 마음이 앞섰지만 이제는
                                    어떤식으로 접근해야할지 먼저 고민하며 해결시간을 단축해 나가고 있습니다.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*<div className={"project-box"}>*/}
                {/*    <img src={classicLinkImg} alt="이미지"/>*/}
                {/*    <div className={"project-contents"}>*/}
                {/*        <h3>Classic-Link(제작중)</h3>*/}
                {/*        <ul>*/}
                {/*            <li>· 주소 : <a href="https://github.com/HongJeHyeop/Classic-Link-Project">github.com/HongJeHyeop/Classic-Link-Project(제작중)</a></li>*/}
                {/*            <li>· 제작기간 : 23년 6월 ~ </li>*/}
                {/*            <li>· 개발인원 : 1인</li>*/}
                {/*            <li>· 기술 : React, express, MySQL, Git/Github</li>*/}
                {/*            <li>· 설명 : 클래식연주자들의 다양한 프로필들을 관리하기 위해 제작하게 되었습니다. 본인의*/}
                {/*                프로필사진, 수상경력, 연주경력 등 다양한 이력들을 작성해서 관리하며 필요시 PDF파일로 변환*/}
                {/*                하여 출력하는 기능을 구현할 예정입니다. 향후 부가적인 기능들을 추가하여 클래식 연주자들의*/}
                {/*                개인적인 공간으로 만들어 여러 연주자들을 연결시켜주는 다리역활을 하는 서비스를 만드는것을 목표로 하고있습니다.*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"project-container"}>
                    <div className={"project-box"}>
                        <img src={portfolioImg} alt="이미지"/>
                        <div className={"project-contents"}>
                            <h3>DEV_HONG (포트폴리오 페이지)</h3>
                            <ul>
                                <li>· 주소 : <a
                                    href="https://hongjehyeop.github.io/My-Landing-Page/">https://hongjehyeop.github.io/My-Landing-Page/</a>
                                </li>
                                <li>· 제작기간 : 23년 6월 ~</li>
                                <li>· 개발인원 : 1인</li>
                                <li>· 사용기술 : React, Git/Github, Github Pages</li>
                                <li>· 제작의도 : 현재 보고 계신 페이지이며 포트폴리오를 위해 제작하였습니다. 리액트를 사용하였으며
                                    모바일로도 볼 수 있게 하기위해 반응형 웹으로 제작하였습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"project-detail"}>
                        <p>프로젝트 설명</p>
                        <table>
                            <tbody>
                            <tr>
                                <td>설명 ｜</td>
                                <td>별도의 기능이 없는 정적 페이지입니다. React를 이용해 제작해보았습니다.</td>
                            </tr>
                            <tr>
                                <td>느낀점 ｜</td>
                                <td>
                                    본 프로젝트는 React 실습을 위해 React를 사용하여 제작하였습니다.
                                    spring boot 프로젝트를 하며 순수 자바스크립트를 사용하다가 React를 처음사용해봤는데
                                    특정 값들을 컨트롤하고 컴포넌트 별로 화면을 만들수 있어 보다 쉽고 편리하게 만들 수 있었습니다.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Project);