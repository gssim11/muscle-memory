근육 성장과 손실의 비밀: 인포그래픽 웹페이지
이 프로젝트는 근육의 해부학적 구조부터 성장, 손실, 회복의 원리까지 상세하게 설명하는 인터랙티브 웹페이지입니다. Gemini API를 활용하여 사용자에게 맞춤형 운동 및 식단 계획을 제공하는 기능을 포함하고 있습니다.

주요 기능
근육 구조에 대한 계층적, 시각적 설명

근비대 및 근위축 메커니즘 인포그래픽

머슬 메모리, 훈련 원리 등 심층 정보 제공

주요 용어에 대한 툴팁 설명

스크롤에 반응하는 인터랙티브 애니메이션

Gemini API를 활용한 AI 기반 운동 및 식단 플랜 생성

배포 안내 (GitHub & Vercel)
이 웹페이지를 Vercel을 통해 안전하게 배포하는 방법은 다음과 같습니다.

1단계: GitHub에 코드 업로드
새로운 GitHub Repository 생성: GitHub에서 새로운 public 또는 private repository를 생성합니다.

파일 업로드: 이 프로젝트에 포함된 모든 파일(index.html, api/gemini.js, package.json, .gitignore, README.md)을 생성한 repository에 업로드(push)합니다. api 폴더 구조를 반드시 유지해야 합니다.

2단계: Vercel에 프로젝트 연동
Vercel 로그인: Vercel 계정에 로그인합니다.

프로젝트 가져오기 (Import Project): Vercel 대시보드에서 'Add New...' > 'Project'를 선택합니다.

Git Repository 연동: 'Import Git Repository' 섹션에서 방금 생성한 GitHub repository를 선택하고 'Import' 버튼을 클릭합니다.

프로젝트 설정: Vercel이 프로젝트를 자동으로 인식합니다. 별도의 설정 없이 'Framework Preset'이 'Other'로 잡혀 있는지 확인하고 다음 단계로 넘어갑니다.

3단계: 환경 변수 설정 (가장 중요!)
API 키를 코드에 직접 노출하지 않기 위한 핵심 단계입니다.

환경 변수 메뉴로 이동: 프로젝트 설정 페이지에서 'Settings' > 'Environment Variables' 메뉴로 이동합니다.

새로운 환경 변수 추가:

NAME: GEMINI_API_KEY (코드에 명시된 이름과 정확히 일치해야 합니다.)

VALUE: 발급받은 본인의 Google Gemini API 키를 복사하여 붙여넣습니다.

저장: 'Add' 버튼을 눌러 환경 변수를 저장합니다.

이렇게 설정하면, GEMINI_API_KEY는 Vercel의 서버 환경에만 안전하게 저장됩니다. 프론트엔드 코드에는 절대 노출되지 않으며, api/gemini.js 서버리스 함수 내에서 process.env.GEMINI_API_KEY 코드를 통해서만 접근할 수 있습니다.

4단계: 배포
환경 변수 설정 후, 'Deploy' 버튼을 클릭합니다.

Vercel이 자동으로 프로젝트를 빌드하고 배포를 시작합니다.

몇 분 후 배포가 완료되면, 고유한 공개 URL이 생성됩니다. 이 URL을 통해 전 세계 어디서든 웹페이지에 접속할 수 있습니다.

이제 안전하고 강력한 기능을 갖춘 나만의 웹페이지 배포가 완료되었습니다!