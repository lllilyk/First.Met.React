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


