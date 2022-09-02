# 字符串

由零个或多个字符组成的序列。字符串由单引号 ' 或双引号 " 包裹。

```ts
text = 'hello world'
```

::: tip 提示
- 建议优先使用单引号包裹字符串
- 当字符串包含转义字符时必须使用双引号包裹
- 转义字符：
<table style="display: inline-table; width: 100%; text-align: center">
<tr>
<td>\n</td><td>\r</td><td>\t</td><td>\\"</td><td>\\\\</td>
</tr>
</table>
- 字符串操作：[操作符](#操作符)、[内置函数](#内置方法)
:::


### 操作符

| 符号 | 描述 |
| ---- | ---- |
| [+](#字符串连接)   | 字符串连接 |
| [in](#字符串包含-in)  | 字符串包含 |
| [*](#字符串重复)   | 字符串重复 |
| [\[\]](#字符串索引)  | 字符串索引 |
| [\[:\]](#字符串切片) | 字符串切片 |
| [%](#字符串格式化)   | 字符串格式化 |


#### 字符串连接：+

```ts
text = 'hello' + ' ' + 'world'        // text = 'hello world'
```

#### 字符串包含：in

```ts
text = 'hello world'
b = 'wo' in text    // b = true
```

#### 字符串重复：*

```ts
text = 'abc' * 2    // text = 'abcabc'
```

#### 字符串索引：[]

```ts
text = 'abc'
a = text[0]    // 'a'
b = text[1]    // 'b'
c = text[-1]   // 'c'
```

#### 字符串切片：[:]

```ts
text = 'abc'
s1 = text[0:1]    // s1 = 'a'
s2 = text[0:2]    // s2 = 'ab'
s3 = text[0:-1]   // s3 = 'ab'
s4 = text[0:]     // s4 = 'abc'
```

#### 字符串格式化：%

```ts
text = 'name=%s, age=%d' % ['jack', 18]
print(text)       // 'name = jack, age = 18'
```

::: tip 提示
格式化符号
| 符号 | 描述 |
| ---- | ----    |
| %t   | 布尔     |
| %d   | 整数     |
| %f   | 浮点数   |
| %s   | 字符串   |
| %v   | 通用类型 |

:::

### 内置方法

| 函数 | 描述 |
| ---- | ---- |
| [len](#字符串长度-len) | 字符串长度 |
| [upper](#字符串大写-upper) | 字符串大写 |
| [lower](#字符串小写-lower) | 字符串小写 |
| [title](#字符串标题-title) | 字符串标题 |
| [split](#字符串切割-split) | 字符串切割 |
| [replace](#字符串替换-replace) | 字符串替换 |
| [contain](#字符串包含-contain) | 字符串包含 |
| [prefix](#字符串前缀-prefix) | 字符串前缀 |
| [suffix](#字符串后缀-suffix) | 字符串后缀 |
| [repeat](#字符串重复-repeat) | 字符串重复 |
| [trim](#字符串裁减-trim) | 字符串剪裁 |
| [index](#字符串查找-index) | 字符串查找 |
| [format](#字符串格式化-format) | 字符串格式化 |

#### 字符串长度：len

```ts
text = 'hello'
length = text.len()     // length = 5
```

#### 字符串大写：upper

```ts
text = 'hello'
s = text.upper()        // s = 'HELLO'
```

#### 字符串小写：lower

```ts
text = 'HELLO'
s = text.lower()        // s = 'hello'
```

#### 字符串标题：title

```ts
text = 'hello world'
s = text.title()        // s = 'Hello World'
```

#### 字符串切割：split

```ts
text = 'hello world'
list = text.split()        // list = ['hello', 'world']

text = 'a-b-c'
list = text.split('-')     // list = ['a', 'b', 'c']
```

#### 字符串替换：replace

```ts
text = 'hello'
s = text.replace('l', 't')    // s = 'hetto'
```

#### 字符串包含：contain

```ts
text = 'hello'
b = text.contain('e')        // b = true
```

#### 字符串前缀：prefix

```ts
text = 'hello'
b = text.prefix('he')        // b = true
```

#### 字符串后缀：suffix

```ts
text = 'hello'
b = text.suffix("lo")        // b = true
```

#### 字符串重复：repeat

```ts
text = 'hello'
s = text.repeat(2)           // s = 'hellohello'
```

#### 字符串裁减：trim

```ts
text = ' hello '
s = text.trim()              // s = 'hello'

text = 'hello'
s = text.trim('ho')          // s = 'ell'
```

#### 字符串查找：index

```ts
text = 'hello world'
i = text.index('hello')      // i = 0
i = text.index('world')      // i = 6
i = text.index('kitty')      // i = -1
```

#### 字符串格式化：format

```ts
text = 'name=%s, age=%d'
s = text.format('jack', 18)     // s = 'name=jack, age=18'
```

::: tip 提示
字符串通过操作符或者调用内置方法的操作均不会修改原来的字符串，而是生成一个新的字符串。
:::