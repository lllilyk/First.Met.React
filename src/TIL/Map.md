src/practice_05/CommentList.jsx에서 이어짐

### 🖍️ map 함수 🖍️

React 함수 컴포넌트인 CommentList를 정의하고 있는 코드로, 주어진 comments 배열을 기반으로 각각의 댓글을 표시함

```javascript
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}
```


<br />
<br />

중요한 부분은 map 함수! ✨ 

✅ map 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성함. 

여기서 comments.map((comment) => {...})은 comments 배열의 각 요소에 대해 주어진 함수를 실행!

```javascript
{comments.map((comment) => {
    return (
        <Comment name={comment.name} comment={comment.comment} />
    )
})}
```

위 코드는 comments 배열의 각 요소에 대해 Comment 컴포넌트를 생성하는 부분으로,

각 댓글이 name과 comment 속성을 가지고 있을 것으로 가정하고 이 속성들을 사용하여 Comment 컴포넌트를 생성하고 있음. 

<br />

📌 이 모든 Comment 컴포넌트들은 div 요소 안에 렌더링되어 화면에 표시됨!
