---
layout: post
title: "常用的Python包在ubuntu下的安装"
description: common python packages installation on ubuntu
categories: 软件安装
published: true
---

##安装scipy

###安装依赖包

~~~ bash
	sudo apt-get install python-dev libblas-dev liblapack-dev gfortran g++
~~~

###安装scipy

~~~ bash
	sudo pip install scipy
~~~

##安装hovercraft

### 安装依赖包

~~~ bash
sudo yum install libxml2-devel
sudo yum install libxslt-devel
sudo yum install libyaml-devel
~~~

###安装hovercraft

~~~ bash
sudo pip-python3 install hovercraft
~~~

##Centos7下安装numpy、scipy、matplotlib包

### 安装numpy

####安装numpy的依赖包

~~~bash
sudo yum install gcc-gfortran
sudo yum install blas-devel
sudo yum install lapack-devel
sudo yum install python-devel
~~~

####安装numpy

~~~bash
sudo pip install numpy
~~~

### 安装matplotlib

####安装matplotlib的依赖包

~~~bash 
sudo yum install freetype-devel.x86_64
sudo yum install libpng-devel.x86_64
~~~

####安装g++编译器并确保与gcc编译器版本一致

~~~bash
sudo yum install gcc-c++
gcc --version
g++ --version
~~~

若没有安装g++或者版本不一致时会报如下错误：

~~~bash
gcc: error trying to exec 'cc1plus': execvp: No such file or directory
~~~

####安装matplotlib

~~~bash
sudo pip install matplotlib
~~~

###安装scipy

~~~bash
sudo pip install scipy
~~~

##python3下安装numpy

### 安装numpy

使用pip-python3进行安装

~~~bash
sudo pip-python3 install numpy
~~~

提示缺少python-devel包，运行以下命令安装python3-devel

~~~bash
sudo yum install python3-devel
~~~

再次运行前面的命令，成功安装

##python3下安装matplotlib包

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

###补充

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

### Python3中matplotlib安装过程遇到的问题总结

#### 问题描述

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

#### 解决方法

在stackoverflow上看到一个回答，说需要先安装tk-devel和python3-tk，然后rebuild并reinstall matplotlib，就会在backend目录下生成_tkagg.py文件

安装python-matplotlib-tk.x86_64包和tk-devel包

~~~bash
sudo yum install python-matplotlib-tk.x86_64
sudo yum install tk-devel
~~~

下载matplotlib-1.4.3.tar.gz，解压，进入matplotlib-1.4.3目录，运行命令

~~~bash
/usr/bin/python3 setup.py rebuild
~~~

提示错误`error: invalid command rebuild`，那么仍旧使用build，即调用以下命令

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

安装好之后就可以正常显示图像了，并且显示后端（backend）也变成TkAgg了，效果如下

~~~bash
[llm@gst175234 ~]$ /usr/bin/python3
Python 3.3.2 (default, May 10 2014, 10:24:41) 
[GCC 4.8.2 20140120 (Red Hat 4.8.2-16)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import matplotlib
>>> matplotlib.get_backend()
'TkAgg'
>>> import matplotlib.pyplot as plt
>>> plt.plot([1,2,3,4])
[<matplotlib.lines.Line2D object at 0x7f63b6de18d0>]
>>> plt.show()
~~~

##Centos7下ipython和ipython notebook安装


### 安装ipython

~~~bash
sudo pip install ipython
~~~

### 安装ipython notebook

安装好ipython之后可以调用以下命令来测试ipython notebook是否能够正常运行

~~~bash
ipython notebook --help
~~~

提示缺少pyzmq包，运行以下命令进行安装

~~~bash
sudo pip install pyzmq
~~~

如果在安装过程中出现`Python.h: No such file or directory` 的错误，说明是系统缺少python-devel包，运行以下命令安装

~~~bash
sudo yum install python-devel
~~~

安装好pyzmq包之后继续调用前面的命令来测试notebook能否正常运行，发现会提示缺少jinjia2包，运行以下命令安装

~~~bash
sudo pip install jinjia2
~~~

继续运行测试命令，提示缺少tornado包，运行以下命令安装

~~~bash
sudo pip install tornado
~~~

继续运行测试命令，体时缺少jsonschema包，运行以下命令安装

~~~bash
sudo pip install jsonschema
~~~

再次运行测试命令，可以看到ipython notebook的用法说明了，安装成功，下面是命令`ipython notebook --help` 输出的部分信息

~~~bash
Examples
--------

    ipython notebook                       # start the notebook
    ipython notebook --profile=sympy       # use the sympy profile
    ipython notebook --certfile=mycert.pem # use SSL/TLS certificate
~~~

##ipython环境下import matplotlib报错：ImportError: No module named six

运行下面命令安装six

~~~bash
sudo pip install six
~~~

提示six包已经安装

~~~bash
Requirement already satisfied (use --upgrade to upgrade): six in /usr/lib/python2.7/site-packages
~~~

按照提示更新six包

~~~bash
sudo pip install --upgrade six
~~~

提示six包已经是最新

~~~bash
Requirement already up-to-date: six in /usr/lib/python2.7/site-packages
~~~

最后只好尝试将six包卸载了重新安转

~~~bash
sudo pip uninstall six
sudo pip install six
~~~

重新安装后，在ipython中运行import matplotlib，发现已经可以正常执行了
