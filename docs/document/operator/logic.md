# 逻辑运算符

以下假设变量： a = true，b = false

| 运算符 | 描述 | 实例 |
| ---- | ---- | ---- |
| && | 逻辑与 | (a && b) 返回 false |
| \|\| | 逻辑或 | (a \|\| b) 返回 true |
| ! | 逻辑非 | !b 返回 true |

示例：

```ts
a = true
b = false

print(a && b)
print(a || b)
print(!b)
```

输出：

```ts
false
true
true
```