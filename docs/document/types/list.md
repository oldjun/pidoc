# 列表

列表就是一组有序的数据组合，列表中的数据可以被修改。列表由中括号 [] 包裹。

```ts
list = [1, 'a', true, null]
```

::: tip 提示
- 列表里的元素可以是任意类型，甚至可以是一个匿名函数。
- 列表操作：[操作符](#操作符)、[内置方法](#内置方法)
:::

### 操作符

| 符号 | 描述 |
| ---- | ---- |
| [+](#列表连接) | 列表拼接 |
| [*](#列表重复) | 列表重复 |
| [in](#列表包含-in) | 列表包含 |
| [\[\]](#列表索引)  | 列表索引 |
| [\[:\]](#列表切片) | 列表切片 |

#### 列表连接：+

```ts
list = ['a', 'b'] + [1, 2]      // list = ['a', 'b', 1, 2]
```

#### 列表重复：*

```ts
list = ['a', 'b'] * 2           // list = ['a', 'b', 'a', 'b']
```

#### 列表包含：in

```ts
list = ['a', 'b']
b = 'a' in list                 // b = true
```

#### 列表索引：[]

```ts
list = ['a', 'b', 'c']
a = list[0]                     // a = 'a'
b = list[1]                     // b = 'b'
c = list[-1]                    // c = 'c'
list[4] = 100                   // list = ['a', 'b', 'c', null, 100]
list[4]++                       // list = ['a', 'b', 'c', null, 101]
```


#### 列表切片：[:]

```ts
list = ['a', 'b', 'c']
l1 = list[0:1]                  // l1 = ['a']
l2 = list[0:2]                  // l2 = ['a', 'b']
l3 = list[0:]                   // l3 = ['a', 'b', 'c']
```

### 内置方法

|  函数  |  描述  |
| ---- | ---- |
| [len](#列表长度-len) | 列表长度 |
| [append](#列表末尾追加-append) | 列表末尾追加元素 |
| [pop](#列表末尾删除-pop) | 列表删除最后一个元素 |
| [shift](#列表头部删除-shift) | 列表删除第一个元素 |
| [insert](#列表插入-insert) | 列表插入元素 |
| [remove](#列表删除-remove) | 列表删除元素 |
| [index](#列表查找-index) | 列表查找元素 |
| [extend](#列表扩展-extend) | 列表扩展 |
| [join](#列表元素连接-join) | 列表元素连接 |
| [json](#列表转序列化-json) | 列表序列化 |

#### 列表长度：len

```ts
list = ['a', 'b', 'c']
length = list.len()             // length = 3
```

#### 列表末尾追加：append

```ts
list = ['a', 'b', 'c']
list.append('d')                // list = ['a', 'b', 'c', 'd']
```

#### 列表末尾删除：pop

```ts
list = ['a', 'b', 'c']
s = list.pop()                  // list = ['a', 'b'], s = 'c'
```

#### 列表头部删除：shift

```ts
list = ['a', 'b', 'c']
list.shift()                    // list = ['b', 'c']
```

#### 列表插入：insert

```ts
list = ['a', 'b', 'c']
list.insert(1, 'd')             // list = ['a', 'd', 'b', 'c']
```

#### 列表删除：remove

```ts
list = ['a', 'b', 'c']
list.remove(1)                  // list = ['a', 'c']
```

#### 列表查找：index

```ts
list = ['a', 'b', 'c']
b = list.index('b')             // b = 1
d = list.index('d')             // e = -1
```

#### 列表扩展：extend

```ts
list = ['a', 'b', 'c']
list.extend([1, 2])             // list = ['a', 'b', 'c', 1, 2]
```

#### 列表元素连接：join

```ts
list = ['a', 'b', 'c']
text = list.join('-')           // text = 'a-b-c'
```

#### 列表转序列化：json

```ts
list = ['a', 'b', 'c']
json = list.json()              // json = '["a", "b", "c"]'
```