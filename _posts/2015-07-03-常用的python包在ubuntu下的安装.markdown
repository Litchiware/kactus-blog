---
layout: post
title: "ipython环境下import matplotlib报错：ImportError: No module named six"
description: restore the matplotlib import error in ipython
categories: centos
published: true
---


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
