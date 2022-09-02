# defer

defer 是延迟的意思，在 Pi 里可以放在某个函数或者方法调用的前面，让该函数或方法延迟执行。

::: tip 提示
通过关键字 `defer` 将函数或者方法延迟执行，后面跟着可调用的函数或者方法。
:::

示例：

```ts
func foo(name) {
	defer print('hello')
	defer func(name) {
		print(name)
	}(name)
	print('12345')
}

foo('world')
```

输出：

```ts
12345
hello
world
```

::: tip 提示
一个代码块里可以有多个 `defer`, 延迟的语句会按照先后顺序最后执行。
:::