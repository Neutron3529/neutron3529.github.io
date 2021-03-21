# Unity Game modding tool

As for install a exist mod, [BepInEx](https://github.com/BepInEx/BepInEx/releases "click to find the newest version of BepInEx") is a really good Unity Game modding tool. But AFAIK, there is no tutorial for people who want to write a mod without [Visual Studio](https://visualstudio.microsoft.com/downloads/ "It would waste several GB disk space and about half an hour to install it."). The Visual Studio, IMO, is very heavy and clumsy for modding, and I am willing to provide a beautiful way to solve such problem.

> Found a [library](https://github.com/ghorsington/BepInEx.ScriptLoader) that compile scripts automatically, which could be another choice (may be better since that plugin works without sdk)

## Before the tutorial

You may surprise that I am a Chinese, but this tutorial is writting in English -- Is there a Chinese version? Will a Chinese version be published soon?

The answer is NO for both. The cost of saving several hours is a small overhead of brain consuming -- English here could be a good-enough filter for those who do not familiar with a foreign language. Since most of the modding tool's doc is written in English, using English will not prevent people who really want to write a mod from reading this tutorial.

Anyway, if you have some problem, written issues in either Chinese and English is acceptable.

# Tutorial

## prepare

### install a dotnet sdk

[dotnet sdk](https://dotnet.microsoft.com/download "click to choose the correct version") is needed since we should using either `csc.exe` or `csc.dll` to compile a `.cs` file to a C# `.dll` file.

after a successful install, you should add the dotnet executable in your `PATH`, i.e., type `dotnet` in cmd/powershell/terminal should generate something begin with `Usage:`, rather than something like `command not found`.

It is better create an alias of `dotnet $PATH_TO/csc.dll`, which is easily done by
```sh
alias csc='dotnet /usr/share/dotnet/sdk/5.0.201/Roslyn/bincore/csc.dll'
```
in Linux, similar thing could be done in windows by adding similar things in a csc.bat file and put the csc.bat file in `%PATH%`.

I don't know whether a csc.exe exists, if it exists, using csc.exe may be sufficient.

### install BepInEx

Install *BepInEx* in *Linux* may be a little bit different since *wine/proton* has its own `winhttp.dll` which prevent *BepInEx* from install.

The solution is, edit `/usr/bin/steam` (this is a shell script in *Manjaro Linux*), adding a `export WINEDLLOVERRIDES="winhttp=n,b"` to ensure the *BepInEx* works.

In Windows, no need to do that.

## create a mod and compile it.

```CS
/*this file is located in `steamapps/common/Dyson Sphere Program/Mods`, the path could be change, but the compile code should be change in the same time
for now, using
    dotnet /usr/share/dotnet/sdk/5.0.201/Roslyn/bincore/csc.dll -t:library \
        -r:'../BepInEx/core/BepInEx.dll' \
        -r:'../DSPGAME_Data/Managed/System.dll' \
        -r:'../DSPGAME_Data/Managed/UnityEngine.dll' \
        -r:'../DSPGAME_Data/Managed/UnityEngine.CoreModule.dll' \
        -r:'../DSPGAME_Data/Managed/mscorlib.dll' \
        hello.cs \
        -out:'../BepInEx/plugins/hello.dll' \
        -optimize
could compile this simple file, and output the result directly in the BepInEx/plugin directory.

Here, /usr/share/dotnet/sdk/5.0.201/Roslyn/bincore/csc.dll is my path for `csc.dll`, which may be quite different from yours, you chould find the correct location by either `find / -name csc.dll 2>/dev/null` (Linux) or `EveryThing.exe` (Windows, free to download and use)
    using `-r:` to add a reference of an exist C# dll.
    using `-out:` to choose the correct location of the output dll file. (optional, recommend since you need to move the dll file in BepInEx/plugins.)
    using `-optimize` to enable optimize, (optional, recommend but it may take several seconds for you to type the -optimize code and another several milliseconds for CPU to optimize your code)
    The Most Important: Don't forget to input the path of your `.cs` file.
*/
using System;
using BepInEx;
namespace Hello
{
    [BepInPlugin("Neutron3529.Hello", "Hello", "0.1.0")]
    public class Hello : BaseUnityPlugin
    {
        void Start()
        {
            Logger.LogInfo("HelloWorld!");
        }
    }
}
```

compile it, and execute the game, you'll find:
```rust
[Message:   BepInEx] BepInEx 5.4.8.0 - DSPGAME
[Info   :   BepInEx] Running under Unity v2018.4.12.5889476
[Info   :   BepInEx] CLR runtime version: 2.0.50727.1433
[Info   :   BepInEx] Supports SRE: True
[Info   :   BepInEx] System platform: Bits64, Windows
[Message:   BepInEx] Preloader started
[Info   :   BepInEx] 1 patcher plugin loaded
[Info   :   BepInEx] Patching [UnityEngine.CoreModule] with [BepInEx.Chainloader]
[Message:   BepInEx] Preloader finished
[Message:   BepInEx] Chainloader ready
[Message:   BepInEx] Chainloader started
[Info   :   BepInEx] 1 plugins to load
[Info   :   BepInEx] Loading [Hello 0.1.0]
[Message:   BepInEx] Chainloader startup complete
[Info   :     Hello] HelloWorld!
```
The last line in the log suggests the mod works!

