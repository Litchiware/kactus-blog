---
layout: post
title: "python中调用plotly库画图"
description: plotting with plotly in python
categories: python
published: true
---


举例如下：

~~~python
import plotly.plotly as py
from plotly.graph_objs import *
import numpy as np
tr = []
tr.append(Scatter(
    x = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000],
    y = time_train, 
    name = u'训练时间'
))
tr.append(Scatter(
    x = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000],
    y = time_test, 
    name = u'测试时间'
))
data = Data(tr)
plot_url = py.plot(data, filename='chart2')
~~~

