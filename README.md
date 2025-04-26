# ESLint GitHub Actions 연습 프로젝트

이 프로젝트는 GitHub Actions를 사용하여 ESLint CI를 연습하기 위한 테스트 저장소입니다.

## 기능

- ESLint를 사용한 코드 린팅
- GitHub Actions를 통한 자동 린팅
- Pull Request 시 자동 린팅 검사

## 시작하기

1. 저장소를 클론합니다:
```bash
git clone [your-repository-url]
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. 린팅을 실행합니다:
```bash
npm run lint
```

## GitHub Actions

이 프로젝트는 다음 이벤트에서 자동으로 ESLint 검사를 실행합니다:
- main 브랜치에 push할 때
- main 브랜치로 Pull Request를 생성할 때 