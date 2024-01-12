import React from "react";

const ThemeContext = React.createContext();
// 개발자 도구를 통해 Context의 이름을 확인하기 위해서 displayName 값을 설정해 줌
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;