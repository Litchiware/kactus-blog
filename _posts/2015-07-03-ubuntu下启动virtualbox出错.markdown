---
layout: post
title: "ubuntu下启动virtualbox出错"
description: solve the problem "kernel drive not installed" when starting virtualbox on ubuntu
published: true
---

##问题描述

在某一次打开virtualbox之后出现了下面图片显示的错误

![Alt text](/resources/images/kernel_drive_not_installed.png)

##错误的做法

按照对话框中的提示，先执行`sudo /etc/init.d/vboxdrv.setup`，倒是没出错，然后在安装`virtualbox-dkms`的过程中，出现了一堆问题

##解决方法

参考以下链接：
>*ubuntu virtualbox package*: [virutalbox doesnt run VMs since the vboxdrv module is not loaded automatically](https://bugs.launchpad.net/ubuntu/+source/virtualbox/+bug/1452827)

按照20楼的做法，我先执行了下面的命令

~~~ bash
	sudo rm /etc/init.d/vbox*

然后卸载virtualbox（可以放心，卸载过程不会删除~/VirtualBox VMs的）

~~~ bash
	sudo apt-get purge virtualbox
~~~

最后在重新安装

~~~ bash
	sudo apt-get install virtualbox
~~~

安装成功后就可以正常打开虚拟机了。

##补充

在上面的链接中，21楼给出了更好的解决方式，具体过程可以参考下面的链接：
>*ubuntu virtualbox package*: [virutalbox doesnt run VMs since the vboxdrv module is not loaded automatically](https://bugs.launchpad.net/ubuntu/+source/virtualbox/+bug/1466046)
