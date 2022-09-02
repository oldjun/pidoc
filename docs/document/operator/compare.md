# 比较运算符

以下假设变量： a = 10，b = 20

| 运算符 | 描述 | 实例 |
| ---- | ---- | ---- |
| == | 等于：比较两个对象是否相等 | (a == b) 返回 false |
| != | 不等于：比较两个对象是否不相等 | (a != b) 返回 true |
| > | 大于 | (a > b) 返回 false |
| >= | 大于或等于 | (a >= b) 返回 false |
| < | 小于 | (a < b) 返回 true |
| <= | 小于或等于 | (a <= b) 返回 true |

示例：

```ts
a = 10
b = 20

print(a == b)
print(a != b)
print(a > b)
print(a >= b)
print(a < b)
print(a <= b)
```

输出：

```ts
false
true
false
false
true
true
```