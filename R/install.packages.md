---
title: 并行化install.packages
---

服务器64核128线程
但装R包只能用单线程

能忍吗？
忍不了的话，解法如下：
```r
options(Ncpus=64) # Ncpus 会给make附加一个类似-c -j ${Ncpus}的参数，于是这里可以写成服务器的物理核，或者逻辑核数
```

如果害怕设置`Ncpus`有副作用，也可以在`~/.Rprofile`里面使用如下命令进行修改

```r
.install.packages=install.packages
install.packages=function(...,Ncpus=64).install.packages(...,Ncpus=Ncpus)
```

再也不用承受装包一小时程序五分钟的折磨了：）