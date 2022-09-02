# 成员运算符

以下假设变量： a = 'a'，list = ['a', 'b', 'c']

| 运算符 | 描述 | 实例 |
| ---- | ---- | ---- |
| in | 如果在指定的序列中找到值返回 true，否则返回 false | a in list 返回 true |

示例：

```ts
b = 'a' in ['a', 'b', 'c']
print(b)

b = 'a' in {'a': 1, 'b': 2, 'c': 3}
print(b)

b = 'wo' in 'hello world'
print(b)
```

输出：

```ts
true
true
true
```