## 👶 props.children 👶

```jsx
...
const cardCount = React.Children.count(props.children)
...
```

React 컴포넌트 내에서 JSX 태그 사이의 내용을 나타냄

즉, 컴포넌트 태그 사이에 있는 모든 JSX나 텍스트는 해당 컴포넌트의 props.children으로 전달됨

<br />

Ex)
```jsx
function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}
```
- {children}은 컴포넌트 태그 내부의 내용을 포함함
- 즉, Card 컴포넌트 안에 있는 모든 JSX는 Card 컴포넌트의 {children}에 포함됨

<br />

```jsx
<CardList>
    <Card title="클레오의 세계" backgroundColor="#dba2ce">
        <h3>오늘 보고 싶었던 영화</h3>
    </Card>
    <Card title="사랑은 낙엽을 타고" backgroundColor="#ebcfa2">
        <h3>메가박스에 있으면 좋은데</h3>
    </Card>
</CardList>
```

- CardList 컴포넌트의 props.children은 Card 컴포넌트들을 포함함.
- 그리고 각각의 Card 컴포넌트의 내용, 즉 h3태그와 텍스트가 Card 컴포넌트의 props.children으로 전달됨.
- 따라서, React.Children.count(props.children)는 CardList 컴포넌트의 props.children의 개수를 반환하게 됨.

    이 경우, 각각의 Card 컴포넌트 내에 h3태그와 텍스트가 하나씩 있으므로 2를 반환하게 됨.