## 컴포넌트 추출하기

### Comment 컴포넌트

```javascript
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>
            
            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>    
    );
}
```

이 컴포넌트의 props 형태는 아래와 같음!

```javascript
props = {
    author: {
        name: "윰니",
        avatarUrl: "https://...",
    },
    text: "왜 나는 코드를 꼭 쳐봐야 알까",
    date: Date.now(),
}
```
<br />

### 👾 Avatar 추출하기 👾
- Comment 컴포넌트에서는 img 태그를 사용하여 사용자의 프로필 이미지를 표시하고 있음
- 이 부분을 추출해서 Avatar라는 별도의 컴포넌트로 만들어보자!

    ```javascript
    function Avatar(props) {
        return (
            <img className="avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        );
    }
    ```
- ✅ 재사용성 측면을 고려하여 props에서 기존에 사용하던 author 대신 좀 더 보편적인 의미를 가지고 있는 user✅를 사용함
    - 다른 곳에서 이 컴포넌트를 사용할 때도 props에 들어갈 속성들이 의미상 큰 차이 없이 사용할 수 있도록 하기 위함

<br />

### 👾 추출된 Avatar 컴포넌트를 Comment 컴포넌트에 반영하기 👾

```javascript
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <Avatar user={props.author}>
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>
            
            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```

<br />

### 🙋‍♀️ UserInfo 추출하기 🙋‍♀️

- 사용자 정보를 담고 있는 부분을 UserInfo라는 컴포넌트로 추출한 것
- Avatar 컴포넌트도 함께 추출되어 있음!
- Avatar 컴포넌트 추출할 때와 마찬가지로, author 대신 좀 더 보편적인 의미를 가지고 있는 user를 사용

    ```javascript
    function UserInfo(props) {
        return (
            <div className="user-info">
                <Avatar user={props.user} />
                <div className="user-info-name">
                    {props.user.name}
                </div>
            </div>    
        );
    }
    ```

<br />

### 🙋‍♀️ 추출된 UserInfo 컴포넌트를 Comment 컴포넌트에 반영하기 🙋‍♀️

```javascript
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```

<br />

✅ 컴포넌트 추출 : 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음! 
✅ 재사용 가능한 Component를 많이 가지고 있을수록 개발 속도가 빨라진다!