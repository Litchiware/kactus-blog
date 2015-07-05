---
title:  "ubuntu下安装和使用git"
description: git commands, workflows and some tricks
date:   2015-06-29
categories: git
---


##安装git

直接使用ubuntu下的apt软件管理工具安装

~~~bash
sudo apt-get install git
~~~

##添加ssh key验证

>可以参考Github Help的这篇文章[Generating SSH keys](https://help.github.com/articles/generating-ssh-keys/)

## 配置git属性

配置git的用户名，以及邮箱

~~~ bash
	git config --global user.name=Litchiware
	git config --global user.email=yyll1689@gmail.com
~~~
	
配置git编辑操作默认使用的编辑器

~~~ bash
	git config --global core.editor=vim
~~~

为commit -a -v添加一个别名

~~~ bash
	git config --global alias.ci="commit -a -v"
~~~

## 建立本地版本库

创建一个项目proj，并且在该项目所在目录下建立版本库

~~~ bash
	mkdir proj
	cd proj
	git init
~~~

在该项目下添加一个文件，跟踪该文件,并且提交所作的修改
	
~~~ bash
	touch README.md
	git add README.md
	git ci
~~~

在调用git ci之后，会打开vim编辑器，在其中写上版本信息，保存退出即可提交

## 同步到github

上面所做的任何备份都保存在本地，为了数据的安全以及方便共享信息，可以将仓库推送到github

~~~ bash
	git remote add origin git@github.com:Litchiware/litchi-note.git
	git push -u origin master
~~~
