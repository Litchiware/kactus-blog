---
layout: post
title: "matplotlib中设置图像的x轴范围"
description: setting the range of x-axis in matplotlib
categories: python
published: true
---


有时候为了显示效果好看，需要设置图像的x轴范围，需要注意的是在pyplot和axessubplot下设置x、y轴范围的函数是不一样的。pyplot下设置xlim、ylim的函数分别为xlim()、ylim()，在axessubplot下对应为set_xlim()、set_ylim()，举例如下

~~~python
import matplotlib.pyplot as plt
ax=plt.subplot(2,1,1)
ax.set_xlim((1,2))
ax.plot([1,2],[3,4])
ax=plt.subplot(2,1,2)
ax.plot([1,2],[3,4])
plt.show()
~~~

![Alt text](/resources/images/matplotlib_set_xlim.png)

