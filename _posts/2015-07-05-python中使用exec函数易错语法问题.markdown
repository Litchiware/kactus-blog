---
layout: post
title: "python中使用exec函数易错语法问题"
description: common syntax errors when using exec
categories: python
published: true
---


## 使用exec函数易错语法问题

Python中，可以用exec()函数执行字符串表示的语句，在某些情况下使用起来非常灵活，可以简化代码；在使用过程中经常会出现类似下面的错误

~~~python
SyntaxError: unqualified exec is not allowed in function 'test' it contains a nested function with free variables
~~~

对于该错误，官方docs中给出的解释如下

> If exec is used in a function and the function contains a nested block with free variables, the compiler will raise a SyntaxError unless the exec explicitly specifies the local namespace for the exec. (In other words, "exec obj" would be illegal, but "exec obj in ns" would be legal.)

也就是说在exec语句处在一个嵌套的结构中就会出现语法错误，比如exec语句出现在嵌套的函数中

~~~python
def test():
    exec("print('Hello World!')")
    def subfunc():
        return 'subfunc'
~~~

### 解决方式

在exec后面加上`in globals(), locals()`，为exec语句指明名字空间，例如，可以将上面的代码修改为如下所示

~~~python
def test():
    exec("print('Hello World!')") in globals(), locals()
    def subfunc():
        return 'subfunc'
~~~

