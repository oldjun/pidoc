# json

json 包实现了 json 字符串的解码。


### 内置方法

| 名称 | 描述 |
| ---- | ---- |
| [parse](#parse) | 将 json 字符串转列表或字典 |


### parse

将json字符串转列表或字典

```ts
import json

text = '{"name": "jack", "age": 18, "height": 1.7}'
hash = json.parse(text)
print(hash)

text = '["a", "b", "c", 1, 2, 3]'
list = json.parse(text)
print(list)
```

输出：

```ts
{"name": "jack", "age": 18, "height": 1.7}
["a", "b", "c", 1, 2, 3]
```

::: tip 提示
由于列表和字典都有内置的 `json()`方法，所以 json 包只提供解码函数，不需要额外提供编码函数。
:::