---
layout: post
title: "centos7下安装numpy+matplotlib+scipy"
description: install numpy, matplotlib, and scipy on centos7
categories: centos
published: true
---


## 安装numpy

###安装numpy的依赖包

~~~bash
sudo yum install gcc-gfortran
sudo yum install blas-devel
sudo yum install lapack-devel
sudo yum install python-devel
~~~

###安装numpy

~~~bash
sudo pip install numpy
~~~

## 安装matplotlib

###安装matplotlib的依赖包

~~~bash 
sudo yum install freetype-devel.x86_64
sudo yum install libpng-devel.x86_64
~~~

###安装g++编译器并确保与gcc编译器版本一致

~~~bash
sudo yum install gcc-c++
gcc --version
g++ --version
~~~

若没有安装g++或者版本不一致时会报如下错误：

~~~bash
gcc: error trying to exec 'cc1plus': execvp: No such file or directory
~~~

###安装matplotlib

~~~bash
sudo pip install matplotlib
~~~

##安装scipy

~~~bash
sudo pip install scipy
~~~

