# 赋值运算符

以下假设变量： a = 10，b = 20

| 运算符 | 描述 | 实例 |
| ---- | ---- | ---- |
| = | 直接赋值 | c = a + b 将 a + b 的运算结果赋值为 c |
| += | 加法赋值 | c += a 等效于 c = c + a |
| -= | 减法赋值 | c -= a 等效于 c = c - a |
| *= | 乘法赋值 | c *= a 等效于 c = c * a |
| /= | 除法赋值 | c /= a 等效于 c = c / a |
| %= | 取模赋值 | c %= a 等效于 c = c % a |

示例：

```ts
a = 10
b = 20

c = a + b
print(c)

c += a
print(c)

c -= a
print(c)

c *= a
print(c)

c /= a
print(c)

c %= a
print(c)
```

输出：

```ts
30
40
30
300
30
0
```