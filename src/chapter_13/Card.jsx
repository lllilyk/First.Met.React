function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}
// 조건부 렌더링
// {title && <h1>{title}</h1>}
// : title이라는 변수나 property 값이 존재하고, 이 값이 truthy('true'로 평가될 수 있는 값)라면
// <h1>{title}</h1>가 렌더링 됨 / falsy 값이라면 렌더링되지 않음
// 즉, title이 존재하고 값이 truthy일 때만 해당 태그를 렌더링하는 조건!

export default Card;