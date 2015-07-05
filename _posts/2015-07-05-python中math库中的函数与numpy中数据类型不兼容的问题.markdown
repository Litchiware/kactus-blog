---
layout: post
title: "python中math库中的函数与numpy中数据类型不兼容的问题"
description: the compatibility issues of the functions in math package and the data types in numpy
categories: python
published: true
---


在使用numpy中的array、matrix等数据类型的时，出现了下面的错误

~~~python
TypeError: only length-1 arrays can be converted to Python scalars
~~~

##错误原因

在python文件中同时导入了math库和numpy库中的数学函数，而math库中的函数不兼容numpy中的数据类型，因此报错，如下所示：

~~~python
from math import *
from numpy import *
~~~

##解决方法

删除`from math import *`即可

