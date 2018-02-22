webpackJsonp([0xfcfa9bd7c553],{458:function(n,t){n.exports={data:{markdownRemark:{html:'<h1>操作系统（一）</h1>\n<ol>\n<li>按下电源之后，如何加载操作系统？</li>\n<li>操作系统如何与外设、应用程序交互？</li>\n</ol>\n<h2>BIOS、BootLoader、OS的关系</h2>\n<p>BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS从硬盘放到内存中去，使cpu可以执行OS相关的代码。</p>\n<ol>\n<li>一开始加电，CPU从一个预先约定的地址处开始执行BIOS程序，进行加电自检（显卡，键鼠，硬盘），检查成功，即外设均可正常工作，接着要将BootLoader程序放到内存中去。</li>\n<li>BootLoader放在硬盘内的某个指定位置，BIOS从这位置开始，连续读取其后的512B的代码和数据，放入内存之中，CPU按照BootLoader的代码开始执行。</li>\n<li>此时CPU的控制权由BootLoader掌控，该程序会找到硬盘中OS程序的起始扇区和长度，将这块区域从硬盘中读到内存中去，CPU调到OS的起始代码处开始。</li>\n</ol>\n<h2>操作系统如何与设备和程序交互</h2>\n<table>\n<thead>\n<tr>\n<th>对象</th>\n<th>交互方式</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>面向外设</td>\n<td>中断、I/O</td>\n</tr>\n<tr>\n<td>面向程序</td>\n<td>系统调用、异常</td>\n</tr>\n</tbody>\n</table>\n<h3>基本概念</h3>\n<ul>\n<li>系统调用：系统的资源由操作系统统一掌控，应用程序需要这些资源时，要向系统主动提出服务请求，之后由操作系统来完成相应的功能。</li>\n<li>异常：同样由应用程序产生的，但是并非主动产生，而是在执行过程中，出现了意想不到的事情，必须由操作系统解救。</li>\n<li>中断：来源于外设，当外设执行完上一轮CPU分配的任务后，请求下一轮的任务，通过中断机制，使操作系统能感知外设发出的请求。</li>\n</ul>\n<h3>为什么应用程序不能直接找外设？</h3>\n<ul>\n<li>安全：操作系统是特殊的软件，是可信程序，而应用程序则不是。</li>\n<li>抽象：操作系统为应用提供简单一致的接口，不需要针对不同的外设开发不同的软件，屏蔽底层设备的差异性，提供统一的接口。</li>\n</ul>\n<h3>区别联系</h3>\n<table>\n<thead>\n<tr>\n<th align="left">源头</th>\n<th></th>\n<th align="left">处理时间</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">中  断</td>\n<td>非CPU执行指令时产生的，由设备产生，例如设备上一轮的I/O处理完成了，希望再为分配下一轮的任务</td>\n<td align="left">异步,即不知道外设什么时候发出中断，什么时候返回给外设下一轮任务也未知</td>\n</tr>\n<tr>\n<td align="left">异  常</td>\n<td>CPU执行应用程序的指令时产生，被动产生的，举例：越界访问，非法操作码等</td>\n<td align="left">同步，即执行到特定的指令一定会发生，且要立即处理</td>\n</tr>\n<tr>\n<td align="left">系统调用</td>\n<td>CPU执行应用程序的指令时产生，主动产生的，举例：对文件的增删改查</td>\n<td align="left">同步和异步，即执行到特定的指令，应用程序发出调用，比如网络请求这是同步的，但之后可以继续执行其余指令，不必一直等待</td>\n</tr>\n</tbody>\n</table>\n<h3>处理过程</h3>\n<h4>中断处理过程</h4>\n<ol>\n<li>外设完成任务，在某个寄存器或者某个特定的位置设置一个中断标记。</li>\n<li>CPU在下一个时间片开始之前会先检测这个位置，CPU发现标记后便可判断为哪种中断，得出中断号，根据中断表查出这类中断对应的处理程序地址。</li>\n<li>带着参数执行这个地址处的程序。</li>\n<li>操作系统在跳转前还需要保存被打断程序的现场状态，以便后续恢复后能继续运行，在执行完后同样要继续恢复。</li>\n</ol>\n<p><strong>特点</strong>：对于正在执行的应用程序来说是透明的，应用程序无感知</p>\n<h4>异常处理过程</h4>\n<ol>\n<li>CPU正在执行应用程序代码时，发现了非法指令，CPU无法继续执行了，产生一个异常ID（硬件实现：改变某个寄存器的值），转而执行操作系统的代码。</li>\n<li>操作系统通过异常ID确定异常号，保存好当前上下文，再确定异常处理程序的地址。</li>\n<li>异常处理判断直接杀死当前程序，还是为其分配必要的资源后重新执行一次（这种情况下对应用程序是透明的，好像不曾产生异常）。</li>\n</ol>\n<h4>系统调用过程</h4>\n<p>应用程序无法直接完成某项任务，需要操作系统作为中介提供服务。</p>\n<blockquote>\n<p>windows系统提供了Win32 API，应用程序可以为这些接口提供参数来申请系统调用。\nPOSIX-based systems系统（Linux，MacOS等系统）提供了POSIX API，可以实现应用程序的系统调用。\n人们都知道JAVA虚拟机会提供JAVA API，通过JAVA API实现的是库函数的调用，再通过JAVA虚拟机来代为实现系统调用，其实是多了一层封装的，但也就是因为多了一层JAVA虚拟机，所以JAVA程序有非常好的跨平台性，JAVA虚拟机实现了对不同操作系统差异的屏蔽。不过这并没有什么了不起的，现在大部分编程语言都是跨平台的，社区或者公司都提供了不同平台的解释或者编译程序，也可以一次编写到处运行。\n应用程序编写时，只要掌握对应OS提供的API与API具有的功能即可。</p>\n</blockquote>\n<p>应用程序直接或者间接（通过库函数）访问OS系统提供的API，会触发了CPU从用户态到内核态的切换。\n用户态就是CPU执行应用程序的状态，仅能执行有限指令，不能直接操纵外设，无法完全控制整个计算机。\n内核态指CPU执行OS程序的状态，可以执行特权和访问I/O的指令，可以完全控制整个计算机。\n完成转换后就将控制权交到了操作系统，操作系统可以对系统调用做标识，识别，完成服务。</p>\n<h4>函数调用与系统调用的区别</h4>\n<p>函数调用其实是在一个栈空间完成了参数的传递和返回。而系统调用时，应用程序和内核程序有各自的堆栈，发出系统调用，要切换执行内核程序，就要先切换堆栈，同时转换特权集（用户态到内核态），切换堆栈和转换是有开销的，还包括系统调用的参数检查，两个堆栈之间的拷贝（堆栈的切换不能仅仅通过修改指针）。总体而言开销大很多，但换来的回报是安全。</p>',frontmatter:{title:"操作系统（一）",date:"2018-01-10",tags:["os","Bootloader"]}}},pathContext:{slug:"/2018-01-10---os-1/"}}}});
//# sourceMappingURL=path---posts-2018-01-10-os-1-29bcc3acf66959510559.js.map