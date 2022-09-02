# 类

类是某类事物的统称，对象是实例。

### 面向对象
- 类：定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作。
- 对象：是类的实例。
- 成员变量：定义在类内部的变量。在类被实例化为对象后，该变量即可成为对象的属性。
- 成员函数：定义在类的内部，可用于访问对象的数据。
- 基本思想：封装、继承、多态

### 一个最简单的类

```ts
class Foo {
    func __init__() {
    }
}

f = Foo()
f.name = 'foo'
print(f.name)
```

输出：

```ts
foo
```

::: tip 提示
在 Pi 程序中，若想实例化一个类，该类必须定义构造函数 `__init__`，否则该类无法实例化。
:::

### 封装

```ts
class Person {
    func __init__(name, age) {
        this.name = name
        this.age = age
    }

    func name() {
        return this.name
    }

    func age() {
        return this.age
    }
}

a = Person("jack", 18)
b = Person("lucy", 20)

printf("name=%s, age=%d", a.name(), a.age())
printf("name=%s, age=%d", b.name(), b.age())
```

输出：

```ts
name=jack, age=18
name=lucy, age=20
```

::: tip 提示
`this` 指向当前对象实例的指针。
:::

### 继承

```ts
class Person {
    func __init__(name, age) {
        this.name = name
        this.age = age
    }

    func name() {
        return this.name
    }

    func age() {
        return this.age
    }
}

class Male : Person {
    func __init__(name, age) {
        super.__init__(name, age)
        this.gender = "male"
    }
}

class Female : Person {
    func __init__(name, age) {
        super.__init__(name, age)
        this.gender = "female"
    }
}

a = Male("jack", 18)
b = Female("lucy", 20)

printf("name=%s, age=%d, gender=%s", a.name(), a.age(), a.gender)
printf("name=%s, age=%d, gender=%s", b.name(), b.age(), b.gender)
```

输出：

```ts
name=jack, age=18, gender=male
name=lucy, age=20, gender=female
```

::: tip 提示
`super` 指向父类对象实例的指针。
:::

### 多态

```ts
class Person {
    func __init__(name, age) {
        this.name = name
        this.age = age
    }

    func name() {
        return this.name
    }

    func age() {
        return this.age
    }

    func gender() {
        return this.gender
    }
}

class Male : Person {
    func __init__(name, age) {
        super.__init__(name, age)
        this.gender = "male"
    }
}

class Female : Person {
    func __init__(name, age) {
        super.__init__(name, age)
        this.gender = "female"
    }
}

a = Male("jack", 18)
b = Female("lucy", 20)

printf("name=%s, age=%d, gender=%s", a.name(), a.age(), a.gender())
printf("name=%s, age=%d, gender=%s", b.name(), b.age(), b.gender())
```

输出：

```ts
name=jack, age=18, gender=male
name=lucy, age=20, gender=female
```