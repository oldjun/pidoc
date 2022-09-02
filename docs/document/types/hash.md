# 字典

字典是一个无序、可变和有索引的集合。在 Pi 中，字典由大括号 {} 包裹，拥有键和值。

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
```

::: tip 提示
- 字典里的键支持：字符串、整数、浮点数、布尔值、空值。
- 字典里的值可以是任意类型，甚至可以是一个匿名函数。
- 字典操作：[操作符](#操作符)、[内置方法](#内置方法)
:::

### 操作符

| 符号 | 描述 |
| ---- | ---- |
| [in](#字典包含-in) | 字典包含 |
| [\[\]](#字典索引) | 字典索引 |

#### 字典包含：in

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
a = 'a' in hash                     // a = true
d = 'd' in hash                     // d = false
```

#### 字典索引：[]

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
a = hash['a']                       // a = 1
d = hash['d']                       // d = null
hash.d = 4                          // hash = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
hash.d++                            // hash = {'a': 1, 'b': 2, 'c': 3, 'd': 5}
```

### 内置方法

| 函数 | 描述 |
| ---- | ---- |
| [len](#字典长度-len) | 字典长度 |
| [keys](#字典全部键-keys) | 字典全部键 |
| [values](#字典全部值-values) | 字典全部值 |
| [has](#字典包含-has) | 字典包含 |
| [get](#字典获取元素-get) | 字典获取元素 |
| [set](#字典设置元素-set) | 字典设置元素 |
| [copy](#字典浅拷贝-copy) | 字典浅拷贝 |
| [update](#字典更新-update) | 字典更新 |
| [delete](#字典删除-delete) | 字典删除某个键 |
| [clear](#字典清空-clear) | 字典清空 |
| [json](#字典序列化-json) | 字典序列化 |

#### 字典长度：len

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
length = hash.len()                     // length = 3
```

#### 字典全部键：keys

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
keys = hash.keys()                      // keys = ['a', 'b', 'c']
```

#### 字典全部值：values

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
values = hash.values()                  // values = [1, 2, 3]
```

#### 字典包含：has

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
a = hash.has('a')                       // a = true
d = hash.has('d')                       // d = false
```

#### 字典获取元素：get

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
a = hash.get('a')                       // a = 1
d = hash.get('d', 0)                    // d = 0
```

#### 字典设置元素：set

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
hash.set('d', 4)                        // hash = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

#### 字典浅拷贝：copy

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
dict = hash.copy()
dict['a'] = 6
print(hash)
print(dict)
```

输出：

```ts
{'a': 1, 'b': 2, 'c': 3}
{'a': 6, 'b': 2, 'c': 3}
```

#### 字典更新：update

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
h = {'a': 10, 'd': 4}
hash.update(h)                          // hash = {'a': 10, 'b': 2, 'c': 3, 'd': 4}
```

#### 字典删除：delete

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
hash.delete('a')                        // hash = {'b': 2, 'c': 3}
```

#### 字典清空：clear

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
hash.clear()                            // hash = {}
```

#### 字典序列化：json

```ts
hash = {'a': 1, 'b': 2, 'c': 3}
json = hash.json()                      // json = '{"a": 1, "b": 2, "c": 3}'
```