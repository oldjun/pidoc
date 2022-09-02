# 文件操作

### 内置方法

| 函数 | 描述 |
| ---- | ---- |
| [open](#open) | 打开文件 |
| [read](#read) | 从文件读取指定的字节数，如果未给定参数则读取全部内容。|
| [readline](#readline) | 读取整行，包括 "\n" 字符。|
| [lines](#lines) | 读取所有行并返回列表。|
| [write](#write) | 将字符串写入文件，返回的是写入的字符长度。|
| [seek](#seek) | 设置文件当前位置 |
| [close](#close) | 关闭文件。关闭后文件不能再进行读写操作。|

### open

打开文件

```ts
file = open(filename, mode)
```

mode 参数：

| 模式 | 描述 |
| ---- | ---- |
| r |以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。|
| w | 打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。|
| a | 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。|


### read

从文件读取指定的字节数，如果未给定则读取所有。

```ts
file = open("123.txt")
data = file.read(10)                    // 读取10个字节

data = file.read()                      // 读取全部内容
```

### readline

读取整行，包括 "\n" 字符。

```ts
file = open("123.txt")
while true {
    line = file.readline()
    if line == "" {
        break
    }
    print(line)
}
file.close()
```

::: tip 提示
如果读取的内容为空，则表示读取完毕。
:::

### lines

读取所有行，并返回列表。

```ts
file = open("123.txt")
lines = file.lines()
for line in lines {
    print(line)
}
```

### write

将字符串写入文件，返回的是写入的字符长度。

```ts
file = open("123.txt", "w")
file.write("大家好吗？")
```

### seek

设置文件当前位置。

```ts
file = open("123.txt")
text = file.read()

file.seek(0, 0)

lines = file.lines()
for line in lines {
    print(line)
}
file.close()
```

### close

关闭文件。关闭后文件不能再进行读写操作。

```ts
file = open("123.txt")
text = file.read()
file.close()
```