---
title: a very small improvement of the famous comprossor, paq8l
---

Recently, driven by the need of compressing the blueprint files from DysonSphereProject, I opened the source of paq8l and compiled it again.

I remember that, there could be an error which cause paq8l failed to compress with option `-9`, and I remember that this simple issue could be solved by modified 2 lines of the [original code](paq8l)

```
$ diff paq8l.cpp paq
3096c3096
<   const int BLOCK=MEM*64;
---
>   const unsigned int BLOCK=MEM*64;
3098c3098
<     int size=BLOCK;
---
>     unsigned int size=BLOCK;
```
actually, only the latter change is enough, since the root cause is not here.

when compress level is set to 9, `const int BLOCK=MEM*64;` becomes `const int BLOCK=(0x10000<<9)*64;`, the RHS, `(0x10000<<9)*64`, is `int`, thus `-2147483647` is the result, which could not pass the coming check.

for a modern computer, using such modification could be enough for `-9`.

What's more, I modified the original code to add [avx-2](paq8l/paq8l-avx2.cpp) and [avx-512](paq8l/paq8l-avx512.cpp) implementations, to compile that file, use

```
$ # Linux:
$ g++ paq8l-avx*.cpp -O3 -o paq8l-avx512 -s -fomit-frame-pointer -DNOASM -march=native -DUNIX
> # Windows:
> g++ paq8l-avx*.cpp -O3 -o paq8l-avx512 -s -fomit-frame-pointer -DNOASM -march=native -DWINDOWS
```

Have fun:)