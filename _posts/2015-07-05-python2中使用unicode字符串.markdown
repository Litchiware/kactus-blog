---
layout: post
title: "python2中使用unicode字符串"
description: using unicode strings in python2
categories: python
published: true
---


python2中使用unicode编码格式的字符串，需要注意两点

##在文件开头添加编码声明

下面这行代码的作用是告诉python，该源文件是按utf-8编码格式存储的，python2中的默认编码格式是ASCII，python3中是utf-8，这仅仅影响编译器按照怎样的编码格式来读取python文件

~~~python
#-*- coding:utf-8 -*-
~~~

##在字符串前面加上u

比如u'Hello world'表示unicode编码格式的字符串。这种方式可以告诉python编译器该字符串是unicode编码格式的
