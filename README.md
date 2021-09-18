# Who am I

I am Feiyue Xie, a student studying in University of Science and Technology of China, who uses github to practice programming techniques.

# Contributions

Since I found some issues in keras, mxnet, gluon-cv, jittor, and rust, I learned to write PRs and become their contributer. Although most of the PRs are not huge change and most of them are easy-to-fix performance problem, there is something important change which is worth mention.

## Prefetch data.

In old versions of MXNet (<=1.8.0, don't know whether it affects pytorch or tensorflow), execute `data_iter_prefetch=iter(data_iter)` after the `data_iter` is defined and `data_iter_prefetch` is consumed may speed up the calculation. without such execution may slow down the training process especially you're using some heavy image ppre-processing techniques like autoaugment in a small dataset (e.g., CIFAR-100).

Older version of MXNet prefetch data only after the `__iter__()` method is called.

In MXNet 1.x.0 (x>=9) with `auto_reload=True`(not the default setting) or MXNet 2.x with `nopython` mode, the prefetch is done as expected.

# Funny things

## [Add a new Github Page](./test "Actually the name of the new page is the path of the .md file plus the .md'file's primary name")
## [Write a mod for Unity Game WITHOUT Visual Studio](./game/UnityModWithoutVisualStudio "This is the most beautiful solution for Linux AFAIK.")
## [speed up visit github by nginx (written in Chinese)](./nginx/README.md "本地反代，主要用途是绕过SNI攻击，全篇都是中文……因为看不懂中文的大概也不需要这个……")

<div style="display:none">

Hide these content until a really good paper is published.

# What's more

If you think my little contribution helps you, could you help me make the following chart more beautiful?

[![My GitHub Data](https://github-readme-stats.vercel.app/api?username=Neutron3529)]()

</div>
