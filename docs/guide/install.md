# 安装

首先确保自己的系统已经安装了 Go 语言。在控制台里执行以下命令可以查看已安装的 Go 版本：

```shell
> go version
```

### Windows 安装

首先需要创建 GOPATH 路径，并将 %GOPATH%\bin 添加到环境变量 PATH 里。

一切准备就绪，接下来安装 Pi：

```shell
> go install github.com/oldjun/pi@latest
```

安装完成后，执行以下命令，查看 Pi 的版本：

```shell
> pi version
```

如果能看到输出的版本号，恭喜你安装成功了。


### Linux 安装

首先需要创建 GOPATH 路径，并将 $GOPATH/bin 保存到环境变量 PATH 里：

```shell
echo 'export PATH=$GOPATH/bin' >> /etc/profile
source /etc/profile
```

一切准备就绪，接下来安装 Pi：

```shell
> go install github.com/oldjun/pi@latest
```

安装完成后，执行以下命令，查看 Pi 的版本：

```shell
> pi version
```

如果能看到输出的版本号，恭喜你安装成功了。