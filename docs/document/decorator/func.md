# 饰器函数

函数可以作为别的函数的参数、返回值，赋值给变量或存储在数据结构中。

### 一阶装饰器

示例：

```ts
func decor(fn) {
    func wrapper(*args, **kwargs) {
        print("decor before")
        fn(*args, **kwargs)
        print("decor after")
    }
    return wrapper
}

@decor
func hello(name) {
    print("hello, " + name)
}

hello("pi")
```

输出：

```ts
decor before
hello, pi
decor after
```

### 多阶装饰器

示例：

```ts
func decor1(fn) {
    return func(*args, **kwargs) {
        print("decor1 before")
        fn(*args, **kwargs)
        print("decor1 after")
    }
}

func decor2(fn) {
    return func(*args, **kwargs) {
        print("decor2 before")
        fn(*args, **kwargs)
        print("decor2 after")
    }
}

@decor1
@decor2
func hello(name) {
    print("hello, ", name)
}

hello("pi")
```

输出：

```ts
decor1 before
decor2 before
hello,  pi
decor2 after
decor1 after
```

### 带参数装饰器

示例：

```ts
func repeat(num) {
	return func(fn) {
		return func(*args, **kwargs) {
			for i = 0; i < num; i++ {
				fn(*args, **kwargs)
			}
		}
	}
}

func decor(fn) {
	return func(*args, **kwargs) {
		print('decor before')
		fn(*args, **kwargs)
		print('decor after')
	}
}

@repeat(num=2)
@decor
func hello(name) {
	print("hello, " + name)
}

hello("pi")
```

输出：

```ts
decor before
hello, pi
decor after
decor before
hello, pi
decor after
```