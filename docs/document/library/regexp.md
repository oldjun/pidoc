# regexp

regexp 包实现了正则表达式搜索。

::: tip 提示
正则表达式采用RE2语法（除了\c、\C），和Perl、Python等语言的正则基本一致。
:::

### 内置方法

| 名称 | 描述 |
| ---- | ---- |
| [match](#match) | 检查字符串中是否存在匹配正则表达式的子串 |
| [find](#find) | 返回正则表达式在字符串中的最左侧的一个匹配子串。如果没有匹配到，会返回`""` |
| [index](#index) | 返回正则表达式在字符串中的最左侧的一个匹配子串的起止位置。如果没有匹配到，会返回`null` |
| [compile](#compile) | 解析并返回一个正则表达式 |

### match

示例：

```ts
import regexp

pattern = "w([a-z]+)d"
target = "hello world"
matched = regexp.match(pattern, target)
print(matched)
```

输出：

```ts
true
```

### find

返回正则表达式在字符串中的最左侧的一个匹配子串。如果没有匹配到，会返回`""`

示例：

```ts
import regexp

pattern = "w([a-z]+)d"
target = "hello world"
substr = regexp.find(pattern, target)
print(substr)
```

输出：

```ts
world
```

### index

返回正则表达式在字符串中的最左侧的一个匹配子串的起止位置。如果没有匹配到，会返回`null`

示例：

```ts
import regexp

pattern = "w([a-z]+)d"
target = "hello world"
pos = regexp.index(pattern, target)
print(pos)
```

输出：

```ts
[6, 11]
```

### compile

解析并返回一个正则表达式

示例：

```ts
import regexp

pattern = "w([a-z]+)d"
target = "hello world"
re = regexp.compile(pattern)

matched = re.match(target)
print(matched)

substr = re.find(target)
print(substr)

pos = re.index(target)
print(pos)
```

输出：

```ts
true
world
[6, 11]
```