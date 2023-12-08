// Component : 붕어빵 틀
// element : 붕어빵
// 붕어빵을 틀에서 다 찍어내고 난 후에는 속을 팥에서 크림으로 바꿀 수 없듯!
// Elements 생성 후에는 children이나 attributes를 바꿀 수 없음

// 그럼 화면에 변경된 element들을 보여주고 싶은 경우에는 어떻게 해야할까?
// 기존 element 변경 X! 새로운 element를 생성해서 기존 element와 교체!!!

// 리액트의 장점 중 하나 : 빠른 렌더링 속도 <- 이를 위해 Virtual DOM 사용
// Virtual DOM은 화면에 새로운 내용을 보여주기 위해서 변경된 부분을 계산(Compute Diff)하고, 해당 부분만을 다시 렌더링 함.
// element를 생성한 이후에 실제로 화면에 보여주기 위해서는 렌더링이라는 과정을 거쳐야 한다는 점!
