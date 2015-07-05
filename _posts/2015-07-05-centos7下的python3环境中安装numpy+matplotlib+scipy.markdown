---
layout: post
title: "centos7下的python3环境中安装numpy+matplotlib+scipy"
description: install python3 and corresponding numpy and matplotlib on centos7
categories: centos
published: true
---


## 安装numpy

使用pip-python3进行安装

~~~bash
sudo pip-python3 install numpy
~~~

提示缺少python-devel包，运行以下命令安装python3-devel

~~~bash
sudo yum install python3-devel
~~~

再次运行前面的命令，成功安装

##安装matplotlib

###安装依赖包

~~~bash
sudo yum install tk-devel
sudo yum install python-matplotlib-tk.x86_64
sudo yum install python3-tkinter.x86_64
~~~

###安装matplotlib

下载并解压matplotlib源码包，运行下面的命令安装

~~~bash
/usr/bin/python3 setup.py build
sudo /usr/bin/python3 setup.py install
~~~


##补充说明

在python3下用源码build和install之后，在python3下可以正常显示图像，但是在python2下，运行代码`import matplotlib.pyplot as plt`会出如下错误

~~~python
from matplotlib.cbook import _string_to_bool, mplDeprecation
ImportError: cannot import name _string_to_bool
~~~

进入matplotlib的安装文件目录，运行下列命令重新安装python2下的matplotlib

~~~bash
/usr/bin/python2 setup.py build
sudo /usr/bin/python2 setup.py install
~~~

## 详细安装过程记录

### 遇到的问题

系统中安装了python2和python3两个版本，并且分别用pip和pip-python3安装了对应的matplotlib包，并且分别运行下面的测试代码

~~~python
import matplotlib.pyplot as plt
plt.plot([1,2,3,4])
plt.show()
~~~

在python2下可以显示图像，但是在python3下无法显示，好像plt.show()语句没有执行一样。但是如果将plt.show()语句替换为plt.savefig('foo.png')，即执行以下代码

~~~python
import matplotlib.pyplot as plt
plt.plot([1,2,3,4])
plt.savefig('foo.png')
~~~

那么在python2和python3中都能正常保存图像，得到文件'foo.png'。另外，我们通过以下语句测试python2和python3中matplotlib的显示后端（backend）

~~~python
import matplotlib
matplotlib.get_backend()
~~~

在python2中输出结果如下

~~~python
u'GTK3Agg'
~~~

在python3下输出结果为

~~~python
'agg'
~~~

### 解决方法

在stackoverflow上看到一个回答，说需要先安装tk-devel和python3-tk，然后重新build并reinstall matplotlib，就会在backend目录下生成_tkagg.py文件

安装python-matplotlib-tk.x86_64包和tk-devel包

~~~bash
sudo yum install python-matplotlib-tk.x86_64
sudo yum install tk-devel
~~~

下载matplotlib-1.4.3.tar.gz，解压，进入matplotlib-1.4.3目录，重新build

~~~bash
/usr/bin/python3 setup.py build
~~~

在输出信息的OPTIONAL BACKEND EXTENSIONS 清单中可以看到如下信息

~~~bash
tkagg:no[requires Tkinter]
~~~

运行命令

~~~bash
yum search tkinter
~~~

可以找到python3-tkinter.x86_64包，运行下面的命令进行安装

~~~bash
sudo yum install python3-tkinter.x86_64
~~~

安装成功后，重新build

~~~bash
/usr/bin/python3 setup.py build
~~~

可以看到输出信息的OPTIONAL BACKEND EXTENSIONS 清单中的tkagg已经从no变成yes了

~~~bash
tkagg: yes [installing, version version not identified]
~~~

说明可以使用tkagg了，运行下面的命令安装matplotlib

~~~bash
sudo /usr/bin/python3 setup.py install
~~~

安装好之后就可以正常显示图像了，并且显示后端（backend）也变成TkAgg了
