---
layout: post
title: "gnome-terminal下的常用配置"
description: using terminal efficiently
categories: linux命令行
published: true
---


##采用vim的输入风格

gnome-terminal的默认输入方式为emacs风格，可以通过以下方式将其设置为vim风格
打开~/.inputrc文件，输入以下设置语句

~~~bash
set editing-mode vi
~~~

##如何打开一个全屏终端

在/bin/目录下新建一个文件，名称任意，比如lerminal

~~~ bash
sudo vim /bin/lerminal 
~~~

文件内容如下：

~~~ bash
gnome-terminal --full-screen --hide-menubar
~~~

为该文件添加可执行权限

~~~ bash
sudo chmod +x /bin/lerminal
~~~
	
现在在终端中运行命令lerminal即可打开一个全屏的终端，我们也可以为该命令设置系统快捷键：`System settings-->keyboard-->shortcuts`，为命令`lerminal`添加快捷键`Alt+Shift+T`，现在可以在任何位置按下`Alt+Shift+T`来打开一个全屏的终端了。

##修改终端配色

终端下的配色方案主要包括三部分，背景色、文本色以及特殊文件（如目录、链接、可执行文件等）的高亮色

### 修改终端背景和文本的颜色

在gnome桌面下，可以通过Edit-->Profile Preference-->Colors来修改，取消勾选Use colors from system theme，选择Built-in schemes为Custom，选择Text color为#D3D7CF，背景颜色为#2E3436

### 修改特殊文件的高亮色

运行以下命令

~~~bash
cp /etc/DIR_COLORS ~/.dir_colors
vim ~/.dir_colors
~~~

找到.dir_colors文件中“DIR 01;34”这一行，将34改为37。在该文件中可以找到如下两行注释：

~~~bash
#Text color codes:
#30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white
~~~

注释中说明了各数字表示的颜色类型，注意尽量不要使各种特殊文件的高亮色冲突，修改好之后，重新启动终端就可以了
