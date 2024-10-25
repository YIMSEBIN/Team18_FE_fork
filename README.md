# 🍪 내가 먹은 쿠키 - 18조 FE

## 🙋‍♂️ 7, 8주차 코드리뷰 질문
- MyRecruitList에서 ‘내가 지원한 공고’ 목록의 버튼 디자인은 API로 전달받는 값에 따라 달라집니다. 이를 반영하기 위해 getStateStyle 함수를 만들었고, 함수의 파라미터로는 API로 전달받는 값인 변수 state를 사용하고, 함수의 반환값은 버튼의 design과 버튼 내부 text로 설정하였습니다.
```tsx
  type MyRecruitListProps = {
  title: string;
  address: string;
  salary: string;
  image: string;
  state: string;
};
  
  type designProps = {
    design: 'default' | 'outlined' | 'textbutton' | 'deactivate';
    text: string;
  };

  function getStateStyle(state: MyRecruitListProps['state']): designProps {
    switch (state) {
      case '근로계약서 서명하기':
        return { design: 'default', text: '근로계약서 서명하기' };
      case '채용 마감':
        return { design: 'deactivate', text: '채용 마감' };
      case '지원서 검토중':
        return { design: 'outlined', text: '지원서 검토중' };
      case '채용 완료':
        return { design: 'deactivate', text: '채용 완료' };
      default:
        return { design: 'deactivate', text: '알 수 없음' }; // 상태가 정의되지 않은 경우
    }
  }
```

그런데 desginProps의 design은 공통컴포넌트로 만들었던 button의 design 프롭스로 전달되는 값으로, 이미 button 컴포넌트 내부에서 design 도메인을 정의한 바가 있습니다. 만약 위 코드처럼 제가 작성한대로 한다면, button 컴포넌트에서 design부분을 수정한다면 위 코드도 직접 수정해야하는 불편함이 있을것 같다고 생각합니다. 혹시 공통컴포넌트에서 정의한 프롭스 도메인을 다른 부분에서 재사용할 수 있는 좋은 방법이 있을까요?
getStateStyle의 인자로 받는 state는 MyRecruitListProps의 state와 같은 값을 공유하므로 위와 같이 작성했는데, 혹시 미리 정의한 프롭스 타입의 일부분을 사용하는 더 좋은 방법이 있을까요?
아래와 같이 props 타입을 지정하고, 아래 타입을 가진 데이터를 mock데이터로 받아오는 코드를 작성했습니다.

```tsx
export type StateProps = '근로계약서 서명하기' | '채용 마감' | '지원서 검토중' | '채용 완료';
<MyRecruitList myRecruitList={myRecruitList} />
```
위 코드에서 {myRecruitList}가 mock데이터인데, 이때 이 데이터가 타입에 맞지 않는다고, 특히 state 부분이 StateProps 값을 기대하는 반면 string 값이 들어온다고 타입오류가 발생합니다. 그래서 mock데이터 자체에 아래와 같이 타입을 지정하니 오류는 사라졌는데, 이부분에 진짜 API 데이터를 연결하게 되어도 안전할지 모르겠습니다.
```tsx
export const myRecruitList: MyRecruitListProps[] = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
    title: '제목',
    area: '대전광역시 유성구',
    state: '근로계약서 서명하기',
  },
  ...
```

이처럼, 여러 값만 도메인으로 설정한 타입들에 한해 자주 에러가 발생하는데 이런 부분을 어떻게 해결하면 좋을까요?

- 고용주 마이페이지, 내 회사 페이지, 지원자 목록 페이지에 공통으로 사용되는 테이블 컴포넌트를 구현했습니다. 세 페이지 모두 같은 스타일의 테이블을 사용하여 구현 시 스타일을 컴포넌트 자체에 내장하여 일괄적으로 적용되도록 했는데, 이런 방식으로 사용해도 될지 궁금합니다. 스타일을 고정하여 일관성을 유지하는 것과 사용 시점에 스타일을 적용해서 유연성을 제공하는 방법 중에 어느 것을 선택하는 것이 좋을까요?

