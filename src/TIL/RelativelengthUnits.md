## CSS Relative Length Units

✅ 이러한 단위를 적절히 혼합하여 사용하면 반응형 웹 디자인을 쉽게 구현할 수 있음! ✅


- px(Pixel)

    : 가장 일반적인 단위로, 고정된 크기를 나타냄. 예를 들어, 'width: 100px;'은 너비가 100 픽셀인 요소를 나타냄


- %(Percentage)

    : 부모 요소✨에 대한 상대적인 크기를 나타냄. 예를 들어, 'width: 50%;'는 부모 요소의 너비의 절반 크기로 요소를 표시함


- em(Ems)

    : 요소에 지정된 폰트 크기에 대한 상대적인 크기를 나타냄. 예를 들어, 'font-size: 2em;'은 현재 폰트 크기의 두 배의 크기로 텍스트를 표시함


- rem(Root Ems)

    : 루트 요소✨('html' 요소)에 대한 상대적인 크기를 나타냄. 예를 들어, 'em'과 유사하지만 부모 요소가 아닌 루트 요소에 대한 크기를 기준으로 함


- vw(Viewport Width)💫

    : 뷰포트 너비의 백분율을 나타냄. 예를 들어, 'width: 50vw;'는 뷰포트 너비의 절반 크기로 요소를 표시함


- vh(Viewport Height)💫

    : 뷰포트 높이의 백분율을 나타냄. 예를 들어, 'height: 100vh;'는 뷰포트의 높이와 동일한 높이로 요소를 표시함


- vmin, vmax(Viewport Minimum, Viewport Maximum) 

    : vmin은 뷰포트 너비와 높이 중 작은 값에 대한 백분율을 나타내며, vmax는 큰 값에 대한 백분율을 나타냄. 
      이 두 값은 뷰포트 크기의 상대적인 크기를 조절하는데 사용될 수 있음. 


- svw, svh(Small Viewport Width, Small Viewport Height)💫
    : 작은 뷰포트 너비 및 높이의 1%를 나타냄. 예를 들어, 작은 뷰포트의 너비가 600px, 높이가 800px이라면, 'svw'는 6px을 나타내고, 'svh'는 8px을 나타냄.


- lvw, lvh(Large Viewport Width, Large Viewport Height)
    : 큰 뷰포트 너비 및 높이의 1%를 나타냄. 예를 들어, 큰 뷰포트의 너비가 1200px, 높이가 1600px이라면, 'lvw'는 12px을 나타내고, 'lvh'는 16px을 나타냄. 

- dvw, dvh(Dynamic Viewport Width, Dynamic Viewport Height)
    : 동적 뷰포트 너비 및 높이의 1%를 나타냄. 예를 들어, 동적 뷰포트의 너비가 900px, 높이가 1200px이라면, 'dvw'는 9px을 나타내고, 'dvh'는 12px을 나타냄.

<br />

참고) https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units