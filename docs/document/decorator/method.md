# 装饰方法

装饰器可以作用到类的成员方法上。

示例：

```ts
func decor(fn) {
    func wrapper() {
        print("decor before")
        fn()
        print("decor after")
    }
    return wrapper
}

class Foo {
    func __init__(name) {
        this.name = name
    }

    @decor
    func name() {
        print(this.name)
    }
}

f = Foo("foo")
f.name()
```

输出：

```ts
decor before
foo
decor after
```