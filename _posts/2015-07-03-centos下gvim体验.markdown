---
layout: post
title: "Centos下gvim体验"
description: gvim using experience on Centos
categories: 工具
published: true
---

## 安装vim-X11

Centos 7中默认安装的vim不支持X11剪切版，可以通过以下命令验证

~~~ bash
	vim --version
~~~

输出信息中可以看到有一项为-xterm_clipboard，减号说明不支持剪切版功能，因此需要安装支持此功能的vim-X11，运行以下命令安装vim-X11

~~~ bash
	sudo yum install vim-X11
~~~

然后运行`gvim --version`可以看到对应的xterm_clipboard关键字前面的减号变成了加号，此后可以通过`gvim -v`来打开文件，因此可以在家目录下的.bashrc文件中添加一条alias别名设置

~~~ bash
	alias vim='gvim -v'
~~~

## 卸载vim-X11

在使用gvim的过程中，发现在按下< C-x>< C-o>之后，并没有开始omni-completion的自动补全，而是出现奇怪的错误

~~~ bash
	Vim: Caught deadly signal TRAP
	Vim: preserving files...
	Vim: Finished.
	Trace/breakpoint trap (core dumped)
~~~

因此，直接卸载了vim-X11

~~~ bash
	sudo yum remove vim-X11
~~~

删除~/.bashrc中的alias语句，然后重起shell即可
