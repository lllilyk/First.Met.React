## Truthy and Falsy

### Truthy

자바스크립트에서 true는 아니지만 true로 여겨지는 값

```javascript
// truthy
true
{} (empty object)
[] (empty array)
42 (number, not zero)
"0", "false" (string, not empty)
```

<br />

### Falsy

자바스크립트에서 false는 아니지만 false로 여겨지는 값

```javascript
// falsy
false
0, -0 (zero, minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null
undefined
NaN(not a number)
```

- ✅ 조건문에서 사용할 때 결과가 true가 될지, false가 될지 예상하면서 개발해야 하므로 헷갈리지 않게 잘 기억해두기!
- 두 번째니까 이제 기억해라.. 대충 {}, [], 문자열0이 truthy라는 것만 기억해도 어느정도는 될 듯