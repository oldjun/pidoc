# net

---

net 包提供了可移植的网络 I/O 接口，包括 [TCP/IP](#tcp-ip-网络)、[Unix域socket](#unix-域-socket-网络)。

::: tip 提示
由于时间关系，UDP的接口暂未实现。
:::

### 内置方法

| 名称 | 描述 |
| ---- | ---- |
| listen | 返回一个本地网络地址监听的对象。网络类型参数必须是面向流的网络："tcp"、"unix"。|
| connect | 返回一个连接远程网络地址的对象。网络类型参数必须是面向流的网络："tcp"、"unix"。|

创建一个服务端的 Listener

```ts
import net

server = net.listen('tcp', '127.0.0.1:8000')    // 服务端创建 tcp 监听
server = net.listen('unix', '/tmp/echo.sock')   // 服务端创建 unix socket 的监听
```

创建一个客户端的 Connection

```ts
import net

client = net.connect('tcp', '127.0.0.1:8000')   // 客户端创建 tcp 连接
client = net.connect('unix', '/tmp/echo.sock')  // 客户端创建 unix socket 连接
```

### TCP/IP 网络

#### TCP Listener 内置方法

| 名称 | 描述 |
| ---- | ---- |
| accept | 接收一个客户端的连接 |
| close | 关闭连接 |


#### TCP Connection 内置方法

| 名称 | 描述 |
| ---- | ---- |
| read | 接收数据 |
| send | 发送数据 |
| close | 关闭连接 |
| set_read_buffer | 设置接收缓冲区 |
| set_send_buffer | 设置发送缓冲区 |
| set_keep_alive | 设置是否应该在连接中发送`keepalive`信息 |
| set_keep_alive_time | 设置`keepalive`的周期，超出会断开 |
| set_linger | 设置当连接中仍有数据等待发送或接受时的`close`的行为 |
| set_no_delay | 设置是否应该延迟数据包传递，以便发送更少的数据包（Nagle's算法） |

server 示例：

```ts
import net

server = net.listen('tcp', '127.0.0.1:8000')

while true {
	conn = server.accept()
	async func(conn) {
		while true {
			data = conn.read(1024)
			if len(data) == 0 {
				print("client closed")
				break
			}
			printf("data:%s len:%d", str(data), len(data))
			conn.send(data)
		}
	}(conn)
}

server.close()
```

client 示例：

```ts
import net

client = net.connect('tcp', '127.0.0.1:8000')

client.send('hello world')
data = client.read(1024)
print(str(data))

client.close()
```

### Unix 域 socket 网络

#### Unix Listener 内置方法

| 名称 | 描述 |
| ---- | ---- |
| accept | 接收一个客户端的连接 |
| close | 关闭连接 |


#### Unix Connection 内置方法

| 名称 | 描述 |
| ---- | ---- |
| read | 接收数据 |
| send | 发送数据 |
| close | 关闭连接 |
| set_read_buffer | 设置接收缓冲区 |
| set_send_buffer | 设置发送缓冲区 |
