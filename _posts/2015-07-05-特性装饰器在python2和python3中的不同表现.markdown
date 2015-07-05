---
layout: post
title: "特性装饰器在python2和python3中的不同表现"
description: different performance of property decorator in python2 and python3
categories: python
published: true
---


定义一个简单的类Person，其中对属性name和age分别使用了特性装饰器，代码如下：

~~~python
class Person:
    """Class to represent a person"""
    @property
    def age(self):
        return self._age
    @age.setter
    def age(self, age):
        if 0 < age <= 150:
            self._age = age
    def __init__(self, name = '', age = 0):
        """Constructor"""
        self._age = age
        self._name = name

    def __str__(self):
        return	 "Person('%s',%s)" % (self._name, self._age)

    def __repr__(self):
        return str(self)
~~~

在python2环境下运行，效果如下

~~~python
>>> from person import Person
>>> p=Person('Bob',10)
>>> p
Person('Bob',10)
>>> p.age=20
>>> p
Person('Bob',10)
~~~

很显然，age=20的赋值操作没有起作用，说明定义的特性装饰器对python2无效。但是在python3下，特性装饰器是可以很好运行的

~~~python
>>> from person import Person
>>> p=Person('Bob',10)
>>> p
Person('Bob',10)
>>> p.age=20
>>> p
Person('Bob',20)
~~~

