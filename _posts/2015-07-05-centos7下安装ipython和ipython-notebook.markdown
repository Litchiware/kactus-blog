---
layout: post
title: "centos7下安装ipython和ipython notebook"
description: install ipython and ipython notebook on centos7
categories: centos
published: true
---


## 安装ipython

~~~bash
sudo pip install ipython
~~~

## 安装ipython notebook

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
# Examples

    ipython notebook                       # start the notebook
    ipython notebook --profile=sympy       # use the sympy profile
    ipython notebook --certfile=mycert.pem # use SSL/TLS certificate
~~~

