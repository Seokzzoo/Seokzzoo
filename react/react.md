### React의 뜻

- 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리 (SPA 라이브러리)
  - 웹 개발을 쉽게할 수 있도록 도와주는 JavaScript 라이브러리
- 프레임워크 : 개발을 위한 기본 틀
- 라이브러리 : 개발에 필요한 도구 또는 그 집합 전체

### React의 장점

- 트렌디하다. 대중적인 이용, 수요가 많음, 방대한 생태계
- 편리하다. 화면을 여러 단위로 쪼개고 재사용하는 식으로 코드 관리가 용이
- 여러 유용한 라이브러리들

### React의 트렌드화가 가능했던 이유

- 전통적인 웹 서비스의 문제 해결
- SPA 방식 즉 브라우저에서 화면을 그리는 방식을 도입(CSR)

### JSX란?

- JavaScript를 확장한 문법으로 JavaScript XML이라는 의미. 즉 HTML + JavaScript

### JSX의 특징

- JSX에서 사용되는 태그의 속성 이름이 다름 -> class => className
- 태그를 명시적으로 닫아줘야 함
- 하나의 태그로 감싸져 있어야 함

### 컴포넌트

- 스스로 상태를 관리하는 캡슐화된 코드 조각
- 하나의 JSX를 반환하는 함수

### 지금까지 했던 JSX와의 차이가 뭘까?

- 컴포넌트는 기본적으로 함수이기 때문에 자신만의 고유한 로직이 들어갈 수 있다.
- 스스로 상태를 가질 수 있다. (상태가 변하면 알아서 반영됨)

### 컴포넌트 생성 시, 주의사항

- 컴포넌트 이름은 PascalCase로! => MyComponent
- 컴포넌트는 의미단위로 쪼개서 파일을 분리
- 최상위 컴포넌트 이름은 일반적으로 App
  - main.jsx => entry point, 최종 컴포넌트를 DOM에 render(createRoot.render)
  - App.js => 모든 컴포넌트들의 root 컴포넌트트

### Props란

- 부모 컴포넌트에서 자식 컴포넌트로 내려주는 데이터

### Props.children

- 컴포넌트 태그로 감싼 값이 props.children으로 전달됨

### State란

- 컴포넌트 내부에서 사용되는 변수
  - State 값이 변하면 컴포넌트가 리렌더링 됨
  - 렌더링 사이클에서 값이 보존됨

### 클래스형 컴포넌트 vs 함수형 컴포넌트

- 클래스형 컴포넌트 = 클래스 문법으로 구현한 컴포넌트
  - useState와 같은 Hooks는 React 버전 16.8부터 등장
  - 즉, 그 전에는 함수형 컴포넌트에서 state를 사용할 수 없었고, 클래스형 컴포넌트만 state를 가질 수 있었음.
  - 클래스의 멤버 변수로 state 정의
  - render라는 멤버 함수에서 반환한 값(JSX)이 화면에 그려짐
- 함수형 컴포넌트 사용을 권장!

### Hooks는 왜 등장했을까?

- 초기에는 클래스형 컴포넌트가 기본이었음
- 하지만, 클래스형 컴포넌트의 몇 가지 문제로 인해 새로운 방식 고안(이해하기 어려움, 코드 재활용성 떨어짐 등)
- 지금은 Hooks가 완전히 정착하여 기본형으로 사용됨(클래스형은 레거시로 볼 수 있음)

### Hooks
- useState
- useEffect
- useCallback

### Rerendering
- 상태(State, Props)가 변경되면 화면을 다시 그림

### Accordian Component
- 펼쳤다 접었다 할 수 있는 컴포넌트
- 아코디언 콘텐츠가 펼쳐져 있을 때는 상단 오른쪽에 - 문자가, 접혀있을 때는 + 문자가 표시

### JSX에서 함수 연결하기
- JSX에서 camelCase 형태의 속성에 함수를 전달

### Mouse 이벤트
- onClick : 마우스 버튼을 클릭했을 때 발생(Down + Up)
- onMouseDown : 마우스 버튼을 눌렀을 때 발생
- onMouseUp : 마우스 버튼을 떼었을 때 발생
- onMouseEnter : 요소 밖에서 안으로 마우스 커서가 들어갔을 때 발생
- onMouseLeave : 요소 안에서 밖으로 마우스 커서가 나갔을 때 발생
- onMouseMove : 요소 안에서 마우스 커서를 움직였을 때 발생

### Keyboard 이벤트
- onKeyDown : 키를 눌렀을 때 발생(물리적인 키에 반응)
- onKeyUp : 키를 떼었을 때 생성
- onKeyPress : 키를 눌러서 문자가 입력되었을 때 발생(눌린 문자에 반응) -> deprecated

### Focus, Form 이벤트
- onFocus :  요소가 포커스 될 때 발생
- onBlur : 요소의 포커스가 사라졌을 때 발생
- onChange : 요소의 값이 변경되었을 때 발생

### Controlled Componenet(제어 컴포넌트)
- React에 의해 입력 요소의 값이 제어되는 컴포넌트
- 장점
  - 컴포넌트의 state와 input value가 완전히 동일한 값을 가짐(신뢰 가능한 단일 출처)
  - 다른 컴포넌트에 input value를 전달하거나 다른 이벤트 핸들러에서 값을 재설정 할 수 있음
- 단점
  - 값이 변경되는 매 순간 렌더링이 됨(해당 컴포넌트의 영향 범위가 클 수록 성능 저하)
- Uncontrolled Component
  - React에 의해 입력 요소의 값이 제어되는 컴포넌트