## Display & Position

### ✅ display 속성 ✅
: element를 어떻게 표시할지 그 방법에 관한 속성

<br />

📌 display: flex;

- element를 블록 레벨의 flex container로 표시
- container이기 때문에 내부에 다른 element들을 포함


    ```javascript
    div {
        display: flex;
        flex-direction: row | column | row-reverse | column-reverse;
        align-items: stretch | flex-start | center | flex-end | baseline;
        justify-content: flex-start | center | flex-end | space-between | space-around;
    }
    ```

- Flexbox -> 기존 css 레이아웃 사용의 불편한 부분을 개선하기 위해 등장함
    - 크게 container와 item으로 구성됨

- display: flex를 사용하면 element가 flex container가 됨
    - flex container는 내부에 여러 개의 element를 포함할 수 있음
    -  이때 container에 포함되는 element들이 바로 flexbox의 flex item!
    -  컨테이너 안에 여러 개의 아이템이 존재할 경우, 컨테이너에 들어있는 flex와 관련된 css 속성은 이 아이템들을 어떤 방향과 순서로 배치할 것인지를 정의하게 됨 



- align-items <- cross axis 기준 
- justify-content <- main axis 기준

<br />

----
<br />

### ✅ position 속성 ✅
: element를 어떻게 위치시킬 것인지, 즉 어떻게 포지셔닝 할 것인지를 정의하기 위해 사용함

<br />

📌 position
- : absolute - element를 절대 위치에 위치시킴 ✨ 
- : fixed - element를 브라우저 window에 상대적으로 위치시킴
- : static - 기본값으로 element를 원래의 순서대로 위치시킴
- : relative - element를 보통의 위치에 상대적으로 위치시킴
