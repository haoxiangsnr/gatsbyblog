webpackJsonp([0xe8a0daf3965e],{383:function(n,t){n.exports={pathContext:{posts:{animals:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/pandas-and-bananas.md absPath of file >>> MarkdownRemark",excerpt:"Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!",frontmatter:{title:"Pandas and Bananas",date:"2017-08-21",tags:["animals","Chicago","zoos"]},html:'<p>Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!</p>\n<iframe width="560" height="315" src="https://www.youtube.cssom/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>',fields:{slug:"/pandas-and-bananas/"}},{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/sweet-pandas-eating-sweets.md absPath of file >>> MarkdownRemark",excerpt:"Pandas are really weet. Here's a video of a pnd eating sweets.",frontmatter:{title:"Sweet Pandas Eating Sweets",date:"2017-08-10",tags:["animals","Chicago","zoos"]},html:'<p>Pandas are really weet.</p>\n<p>Here\'s a video of a pnd eating sweets.</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>',fields:{slug:"/sweet-pandas-eating-sweets/"}}],Chicago:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/pandas-and-bananas.md absPath of file >>> MarkdownRemark",excerpt:"Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!",frontmatter:{title:"Pandas and Bananas",date:"2017-08-21",tags:["animals","Chicago","zoos"]},html:'<p>Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!</p>\n<iframe width="560" height="315" src="https://www.youtube.cssom/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>',fields:{slug:"/pandas-and-bananas/"}},{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/sweet-pandas-eating-sweets.md absPath of file >>> MarkdownRemark",excerpt:"Pandas are really weet. Here's a video of a pnd eating sweets.",frontmatter:{title:"Sweet Pandas Eating Sweets",date:"2017-08-10",tags:["animals","Chicago","zoos"]},html:'<p>Pandas are really weet.</p>\n<p>Here\'s a video of a pnd eating sweets.</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>',fields:{slug:"/sweet-pandas-eating-sweets/"}}],zoos:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/pandas-and-bananas.md absPath of file >>> MarkdownRemark",excerpt:"Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!",frontmatter:{title:"Pandas and Bananas",date:"2017-08-21",tags:["animals","Chicago","zoos"]},html:'<p>Do Pandas eat bananas? Chssseck out thisss short video that shows that yes! pandas dossss\nseem to really enjoy bananas!</p>\n<iframe width="560" height="315" src="https://www.youtube.cssom/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>',fields:{slug:"/pandas-and-bananas/"}},{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/sweet-pandas-eating-sweets.md absPath of file >>> MarkdownRemark",excerpt:"Pandas are really weet. Here's a video of a pnd eating sweets.",frontmatter:{title:"Sweet Pandas Eating Sweets",date:"2017-08-10",tags:["animals","Chicago","zoos"]},html:'<p>Pandas are really weet.</p>\n<p>Here\'s a video of a pnd eating sweets.</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>',fields:{slug:"/sweet-pandas-eating-sweets/"}}],os:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-2.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（二） 操作系统如何管理物理主存？ 计算机体系结构、主存结构分层 CPU芯片内部有寄存器和Cache…",frontmatter:{title:"操作系统（二）",date:"2018-01-12",tags:["os","memory"]},html:"<h1>操作系统（二）</h1>\n<ol>\n<li>操作系统如何管理物理主存？</li>\n</ol>\n<h2>计算机体系结构、主存结构分层</h2>\n<ol>\n<li>CPU芯片内部有寄存器和Cache，操作系统无法直接访问管理，这一层次的主存容量小但是数据很快。</li>\n<li>在主存结构中有一块很大的区域，即主存或者物理主存。这块区域可以用来放置操作系统本身代码以及其他要运行的程序，主存容量大，速度慢。</li>\n<li>计算机中可以在主存中存放着多个可运行的程序，若CPU的运行速度很快，且这些可运行的程序都需要很大的主存，那么CPU运行完主存中可运行的程序（假想当前主存中的可运行的所有程序都需要接收到网络响应后才能恢复运行），那么CPU就闲置下来了。为了避免CPU浪费，操作系统就需要发挥作用，将临时用不到的程序和数据放到硬盘中。</li>\n<li>主存在计算机掉电之后其内的数据就丢失了，在主存结构的底层，就是硬盘，它用来保存数据。</li>\n</ol>\n<p><strong>特点</strong>：上述主存结构分层，从上到下速度依次降低，存储容量依次增大。数据访问很快，数据的存储空间很大。有了操作系统的帮助，操作系统如何管理物理主存，如何完成这个任务？</p>\n<h2>操作系统为配合应用程序需要完成的任务</h2>\n<p>为了配合程序，操作系统需要完成以下任务：</p>\n<ul>\n<li>抽象：我们希望应用程序在主存中运行时，不需要考虑物理主存和外设在什么地方，只需要访问一个连续的地址空间（逻辑地址空间）即可。</li>\n<li>保护：在主存中可以运行多个不同的应用程序，某个程序可能会访问别的程序的地址空间，这时就需要一种机制来隔离和保护被访问程序的地址空间。</li>\n<li>共享：除了隔离外，程序之间如何交互、共享各自的数据。</li>\n<li>虚拟化：当需要在主存中运行的应用程序很多时，会出现主存不够用的情况。我们将暂时不用的数据临时放入硬盘，用的时候再拿出来，整个过程要对应用程序透明，这也是操作系统的任务。</li>\n</ul>\n<p><strong>注</strong>：上面提到了两个地址空间，主存和硬盘是物理地址空间，而应用程序在操作系统的作用下看到的是逻辑地址空间。</p>\n<h2>地址空间与地址生成</h2>\n<h3>地址空间定义</h3>\n<p>地址空间分为物理地址空间和逻辑地址空间。</p>\n<ul>\n<li>物理地址空间：与硬件直接对应，主存条代表的主存和硬盘代表的另一种存储空间，物理地址空间的管理由硬件来完成。</li>\n<li>逻辑地址空间：是运行程序所见到的一维线性的地址空间，应用程序非常容易控制和访问逻辑地址空间。</li>\n<li>两者对应关系：某条程序指令指向某个一维逻辑地址，这个逻辑地址可能是该程序堆栈的某个位置，但最终这个位置可能是主存中甚至是硬盘中，操作系统完成了两者的映射关系。</li>\n</ul>\n<h3>逻辑地址生成</h3>\n<ol>\n<li>C程序通过编译变为汇编程序，在C程序中，函数的位置和变量的名字就是地址，只不过以一种更容易人理解的方式存在。</li>\n<li>汇编程序更贴近机器语言，但是函数和变量仍然通过符号表示，相比机器语言，汇编语言更易让人阅读。</li>\n<li>将汇编程序汇编成机器语言，即.o程序，.o程序的起始地址从0开始，此时变量和函数已经被转成了特定的地址。</li>\n<li>一个大程序会由多个小程序组成，小程序之间往往具有复杂的依赖关系，通过链接可以将多个.o小程序最终变成一个单一的可执行程序.exe，.exe程序已经可以在主存中执行的，但是目前还放在硬盘中。</li>\n<li>多个点.o程序中地址已经在.exe程序中有了相应的映射，但这个定义并非主存中的位置，再通过载入程序，将.exe程序放入到主存中执行，这一步为.exe程序分配在主存中的逻辑地址，使得应用程序在主存中正常的跑，.exe程序的地址做了相应的偏远，通过这个偏移量，程序就会依照这个偏移量进行执行。</li>\n</ol>\n<p><strong>特点</strong>：从函数和变量到最终可以在主存中执行的逻辑地址，通过了很多步骤，但这些步骤基本都不需要操作系统做任何的帮助，最终放入内存后，应用程序看到的地址仍然不是物理地址。</p>\n<p><strong>题目</strong>\n在内存管理中，地址变换机构将逻辑地址变为物理地址，形成该逻辑地址的阶段是编辑、编译、链接还是装载？\n答：链接。在编译、汇编后，一个程序可能形成了多个.o文件，这是已经具有了逻辑地址，但只是相对于该模块的逻辑地址，并不能直接用于后续的地址变换。多个.h文件再经过链接，组合为.exe文件，便形成了相对于整个程序的逻辑地址。这个地址可用于后续的地址变换。</p>\n<h3><del>逻辑地址如何对应物理地址（需要组成原理的内容做铺垫）</del></h3>\n<p>指令放在物理内存的什么地方，指令的逻辑地址在什么地方，CPU有MMU，它有一块区域存着映射关系，查表可以完成具体的物理地址，硬件就可以从相应的物理地址中取出。</p>\n<p>操作系统先生成一个逻辑地址和物理地址的映射关系，将该映射关系存在内存中，CPU可以在MMU中缓存这个映射关系。（<strong>如何完成预先生成，后续谈</strong>）</p>\n<ol>\n<li>CPU执行某条指令，ALU需要得到该指令逻辑地址上的内容，ALU首先将该逻辑地址作为参数，向存储管理单元MMU发出查物理地址的请求。</li>\n<li>CPU的MMU查找对应的映射表，判断是否有对应的物理地址。</li>\n<li>若没有这个物理地址，就到内存中的映射表上找</li>\n<li>找到后CPU的控制器向主存发出请求，需要某个物理地址的内容，主存将内存的内容通过总线传给CPU，CPU拿到内容就可以进行执行了</li>\n</ol>\n<h2>如何确保内存中的程序不相互干扰</h2>\n<p>操作系统首先确认每个程序可以访问的地址空间，第一部分是起始地址，第二个部分是该程序可访问的区域。这张表由操作系统建立和维护，CPU在执行某条指令时，CPU要查表确定是否合法，合法之后才根据地址取指令。</p>",fields:{slug:"/os-2/"}},{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-1.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（一） 按下电源之后，如何加载操作系统？ 操作系统如何与外设、应用程序交互？ BIOS、BootLoader、OS的关系 BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS…",frontmatter:{title:"操作系统（一）",date:"2018-01-10",tags:["os","Bootloader"]},html:'<h1>操作系统（一）</h1>\n<ol>\n<li>按下电源之后，如何加载操作系统？</li>\n<li>操作系统如何与外设、应用程序交互？</li>\n</ol>\n<h2>BIOS、BootLoader、OS的关系</h2>\n<p>BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS从硬盘放到内存中去，使cpu可以执行OS相关的代码。</p>\n<ol>\n<li>一开始加电，CPU从一个预先约定的地址处开始执行BIOS程序，进行加电自检（显卡，键鼠，硬盘），检查成功，即外设均可正常工作，接着要将BootLoader程序放到内存中去。</li>\n<li>BootLoader放在硬盘内的某个指定位置，BIOS从这位置开始，连续读取其后的512B的代码和数据，放入内存之中，CPU按照BootLoader的代码开始执行。</li>\n<li>此时CPU的控制权由BootLoader掌控，该程序会找到硬盘中OS程序的起始扇区和长度，将这块区域从硬盘中读到内存中去，CPU调到OS的起始代码处开始。</li>\n</ol>\n<h2>操作系统如何与设备和程序交互</h2>\n<table>\n<thead>\n<tr>\n<th>对象</th>\n<th>交互方式</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>面向外设</td>\n<td>中断、I/O</td>\n</tr>\n<tr>\n<td>面向程序</td>\n<td>系统调用、异常</td>\n</tr>\n</tbody>\n</table>\n<h3>基本概念</h3>\n<ul>\n<li>系统调用：系统的资源由操作系统统一掌控，应用程序需要这些资源时，要向系统主动提出服务请求，之后由操作系统来完成相应的功能。</li>\n<li>异常：同样由应用程序产生的，但是并非主动产生，而是在执行过程中，出现了意想不到的事情，必须由操作系统解救。</li>\n<li>中断：来源于外设，当外设执行完上一轮CPU分配的任务后，请求下一轮的任务，通过中断机制，使操作系统能感知外设发出的请求。</li>\n</ul>\n<h3>为什么应用程序不能直接找外设？</h3>\n<ul>\n<li>安全：操作系统是特殊的软件，是可信程序，而应用程序则不是。</li>\n<li>抽象：操作系统为应用提供简单一致的接口，不需要针对不同的外设开发不同的软件，屏蔽底层设备的差异性，提供统一的接口。</li>\n</ul>\n<h3>区别联系</h3>\n<table>\n<thead>\n<tr>\n<th align="left">源头</th>\n<th></th>\n<th align="left">处理时间</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">中  断</td>\n<td>非CPU执行指令时产生的，由设备产生，例如设备上一轮的I/O处理完成了，希望再为分配下一轮的任务</td>\n<td align="left">异步,即不知道外设什么时候发出中断，什么时候返回给外设下一轮任务也未知</td>\n</tr>\n<tr>\n<td align="left">异  常</td>\n<td>CPU执行应用程序的指令时产生，被动产生的，举例：越界访问，非法操作码等</td>\n<td align="left">同步，即执行到特定的指令一定会发生，且要立即处理</td>\n</tr>\n<tr>\n<td align="left">系统调用</td>\n<td>CPU执行应用程序的指令时产生，主动产生的，举例：对文件的增删改查</td>\n<td align="left">同步和异步，即执行到特定的指令，应用程序发出调用，比如网络请求这是同步的，但之后可以继续执行其余指令，不必一直等待</td>\n</tr>\n</tbody>\n</table>\n<h3>处理过程</h3>\n<h4>中断处理过程</h4>\n<ol>\n<li>外设完成任务，在某个寄存器或者某个特定的位置设置一个中断标记。</li>\n<li>CPU在下一个时间片开始之前会先检测这个位置，CPU发现标记后便可判断为哪种中断，得出中断号，根据中断表查出这类中断对应的处理程序地址。</li>\n<li>带着参数执行这个地址处的程序。</li>\n<li>操作系统在跳转前还需要保存被打断程序的现场状态，以便后续恢复后能继续运行，在执行完后同样要继续恢复。</li>\n</ol>\n<p><strong>特点</strong>：对于正在执行的应用程序来说是透明的，应用程序无感知</p>\n<h4>异常处理过程</h4>\n<ol>\n<li>CPU正在执行应用程序代码时，发现了非法指令，CPU无法继续执行了，产生一个异常ID（硬件实现：改变某个寄存器的值），转而执行操作系统的代码。</li>\n<li>操作系统通过异常ID确定异常号，保存好当前上下文，再确定异常处理程序的地址。</li>\n<li>异常处理判断直接杀死当前程序，还是为其分配必要的资源后重新执行一次（这种情况下对应用程序是透明的，好像不曾产生异常）。</li>\n</ol>\n<h4>系统调用过程</h4>\n<p>应用程序无法直接完成某项任务，需要操作系统作为中介提供服务。</p>\n<blockquote>\n<p>windows系统提供了Win32 API，应用程序可以为这些接口提供参数来申请系统调用。\nPOSIX-based systems系统（Linux，MacOS等系统）提供了POSIX API，可以实现应用程序的系统调用。\n人们都知道JAVA虚拟机会提供JAVA API，通过JAVA API实现的是库函数的调用，再通过JAVA虚拟机来代为实现系统调用，其实是多了一层封装的，但也就是因为多了一层JAVA虚拟机，所以JAVA程序有非常好的跨平台性，JAVA虚拟机实现了对不同操作系统差异的屏蔽。不过这并没有什么了不起的，现在大部分编程语言都是跨平台的，社区或者公司都提供了不同平台的解释或者编译程序，也可以一次编写到处运行。\n应用程序编写时，只要掌握对应OS提供的API与API具有的功能即可。</p>\n</blockquote>\n<p>应用程序直接或者间接（通过库函数）访问OS系统提供的API，会触发了CPU从用户态到内核态的切换。\n用户态就是CPU执行应用程序的状态，仅能执行有限指令，不能直接操纵外设，无法完全控制整个计算机。\n内核态指CPU执行OS程序的状态，可以执行特权和访问I/O的指令，可以完全控制整个计算机。\n完成转换后就将控制权交到了操作系统，操作系统可以对系统调用做标识，识别，完成服务。</p>\n<h4>函数调用与系统调用的区别</h4>\n<p>函数调用其实是在一个栈空间完成了参数的传递和返回。而系统调用时，应用程序和内核程序有各自的堆栈，发出系统调用，要切换执行内核程序，就要先切换堆栈，同时转换特权集（用户态到内核态），切换堆栈和转换是有开销的，还包括系统调用的参数检查，两个堆栈之间的拷贝（堆栈的切换不能仅仅通过修改指针）。总体而言开销大很多，但换来的回报是安全。</p>',fields:{slug:"/os-1/"}}],memory:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-2.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（二） 操作系统如何管理物理主存？ 计算机体系结构、主存结构分层 CPU芯片内部有寄存器和Cache…",frontmatter:{title:"操作系统（二）",date:"2018-01-12",tags:["os","memory"]},html:"<h1>操作系统（二）</h1>\n<ol>\n<li>操作系统如何管理物理主存？</li>\n</ol>\n<h2>计算机体系结构、主存结构分层</h2>\n<ol>\n<li>CPU芯片内部有寄存器和Cache，操作系统无法直接访问管理，这一层次的主存容量小但是数据很快。</li>\n<li>在主存结构中有一块很大的区域，即主存或者物理主存。这块区域可以用来放置操作系统本身代码以及其他要运行的程序，主存容量大，速度慢。</li>\n<li>计算机中可以在主存中存放着多个可运行的程序，若CPU的运行速度很快，且这些可运行的程序都需要很大的主存，那么CPU运行完主存中可运行的程序（假想当前主存中的可运行的所有程序都需要接收到网络响应后才能恢复运行），那么CPU就闲置下来了。为了避免CPU浪费，操作系统就需要发挥作用，将临时用不到的程序和数据放到硬盘中。</li>\n<li>主存在计算机掉电之后其内的数据就丢失了，在主存结构的底层，就是硬盘，它用来保存数据。</li>\n</ol>\n<p><strong>特点</strong>：上述主存结构分层，从上到下速度依次降低，存储容量依次增大。数据访问很快，数据的存储空间很大。有了操作系统的帮助，操作系统如何管理物理主存，如何完成这个任务？</p>\n<h2>操作系统为配合应用程序需要完成的任务</h2>\n<p>为了配合程序，操作系统需要完成以下任务：</p>\n<ul>\n<li>抽象：我们希望应用程序在主存中运行时，不需要考虑物理主存和外设在什么地方，只需要访问一个连续的地址空间（逻辑地址空间）即可。</li>\n<li>保护：在主存中可以运行多个不同的应用程序，某个程序可能会访问别的程序的地址空间，这时就需要一种机制来隔离和保护被访问程序的地址空间。</li>\n<li>共享：除了隔离外，程序之间如何交互、共享各自的数据。</li>\n<li>虚拟化：当需要在主存中运行的应用程序很多时，会出现主存不够用的情况。我们将暂时不用的数据临时放入硬盘，用的时候再拿出来，整个过程要对应用程序透明，这也是操作系统的任务。</li>\n</ul>\n<p><strong>注</strong>：上面提到了两个地址空间，主存和硬盘是物理地址空间，而应用程序在操作系统的作用下看到的是逻辑地址空间。</p>\n<h2>地址空间与地址生成</h2>\n<h3>地址空间定义</h3>\n<p>地址空间分为物理地址空间和逻辑地址空间。</p>\n<ul>\n<li>物理地址空间：与硬件直接对应，主存条代表的主存和硬盘代表的另一种存储空间，物理地址空间的管理由硬件来完成。</li>\n<li>逻辑地址空间：是运行程序所见到的一维线性的地址空间，应用程序非常容易控制和访问逻辑地址空间。</li>\n<li>两者对应关系：某条程序指令指向某个一维逻辑地址，这个逻辑地址可能是该程序堆栈的某个位置，但最终这个位置可能是主存中甚至是硬盘中，操作系统完成了两者的映射关系。</li>\n</ul>\n<h3>逻辑地址生成</h3>\n<ol>\n<li>C程序通过编译变为汇编程序，在C程序中，函数的位置和变量的名字就是地址，只不过以一种更容易人理解的方式存在。</li>\n<li>汇编程序更贴近机器语言，但是函数和变量仍然通过符号表示，相比机器语言，汇编语言更易让人阅读。</li>\n<li>将汇编程序汇编成机器语言，即.o程序，.o程序的起始地址从0开始，此时变量和函数已经被转成了特定的地址。</li>\n<li>一个大程序会由多个小程序组成，小程序之间往往具有复杂的依赖关系，通过链接可以将多个.o小程序最终变成一个单一的可执行程序.exe，.exe程序已经可以在主存中执行的，但是目前还放在硬盘中。</li>\n<li>多个点.o程序中地址已经在.exe程序中有了相应的映射，但这个定义并非主存中的位置，再通过载入程序，将.exe程序放入到主存中执行，这一步为.exe程序分配在主存中的逻辑地址，使得应用程序在主存中正常的跑，.exe程序的地址做了相应的偏远，通过这个偏移量，程序就会依照这个偏移量进行执行。</li>\n</ol>\n<p><strong>特点</strong>：从函数和变量到最终可以在主存中执行的逻辑地址，通过了很多步骤，但这些步骤基本都不需要操作系统做任何的帮助，最终放入内存后，应用程序看到的地址仍然不是物理地址。</p>\n<p><strong>题目</strong>\n在内存管理中，地址变换机构将逻辑地址变为物理地址，形成该逻辑地址的阶段是编辑、编译、链接还是装载？\n答：链接。在编译、汇编后，一个程序可能形成了多个.o文件，这是已经具有了逻辑地址，但只是相对于该模块的逻辑地址，并不能直接用于后续的地址变换。多个.h文件再经过链接，组合为.exe文件，便形成了相对于整个程序的逻辑地址。这个地址可用于后续的地址变换。</p>\n<h3><del>逻辑地址如何对应物理地址（需要组成原理的内容做铺垫）</del></h3>\n<p>指令放在物理内存的什么地方，指令的逻辑地址在什么地方，CPU有MMU，它有一块区域存着映射关系，查表可以完成具体的物理地址，硬件就可以从相应的物理地址中取出。</p>\n<p>操作系统先生成一个逻辑地址和物理地址的映射关系，将该映射关系存在内存中，CPU可以在MMU中缓存这个映射关系。（<strong>如何完成预先生成，后续谈</strong>）</p>\n<ol>\n<li>CPU执行某条指令，ALU需要得到该指令逻辑地址上的内容，ALU首先将该逻辑地址作为参数，向存储管理单元MMU发出查物理地址的请求。</li>\n<li>CPU的MMU查找对应的映射表，判断是否有对应的物理地址。</li>\n<li>若没有这个物理地址，就到内存中的映射表上找</li>\n<li>找到后CPU的控制器向主存发出请求，需要某个物理地址的内容，主存将内存的内容通过总线传给CPU，CPU拿到内容就可以进行执行了</li>\n</ol>\n<h2>如何确保内存中的程序不相互干扰</h2>\n<p>操作系统首先确认每个程序可以访问的地址空间，第一部分是起始地址，第二个部分是该程序可访问的区域。这张表由操作系统建立和维护，CPU在执行某条指令时，CPU要查表确定是否合法，合法之后才根据地址取指令。</p>",fields:{slug:"/os-2/"}}],Bootloader:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-1.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（一） 按下电源之后，如何加载操作系统？ 操作系统如何与外设、应用程序交互？ BIOS、BootLoader、OS的关系 BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS…",frontmatter:{title:"操作系统（一）",date:"2018-01-10",tags:["os","Bootloader"]},html:'<h1>操作系统（一）</h1>\n<ol>\n<li>按下电源之后，如何加载操作系统？</li>\n<li>操作系统如何与外设、应用程序交互？</li>\n</ol>\n<h2>BIOS、BootLoader、OS的关系</h2>\n<p>BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS从硬盘放到内存中去，使cpu可以执行OS相关的代码。</p>\n<ol>\n<li>一开始加电，CPU从一个预先约定的地址处开始执行BIOS程序，进行加电自检（显卡，键鼠，硬盘），检查成功，即外设均可正常工作，接着要将BootLoader程序放到内存中去。</li>\n<li>BootLoader放在硬盘内的某个指定位置，BIOS从这位置开始，连续读取其后的512B的代码和数据，放入内存之中，CPU按照BootLoader的代码开始执行。</li>\n<li>此时CPU的控制权由BootLoader掌控，该程序会找到硬盘中OS程序的起始扇区和长度，将这块区域从硬盘中读到内存中去，CPU调到OS的起始代码处开始。</li>\n</ol>\n<h2>操作系统如何与设备和程序交互</h2>\n<table>\n<thead>\n<tr>\n<th>对象</th>\n<th>交互方式</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>面向外设</td>\n<td>中断、I/O</td>\n</tr>\n<tr>\n<td>面向程序</td>\n<td>系统调用、异常</td>\n</tr>\n</tbody>\n</table>\n<h3>基本概念</h3>\n<ul>\n<li>系统调用：系统的资源由操作系统统一掌控，应用程序需要这些资源时，要向系统主动提出服务请求，之后由操作系统来完成相应的功能。</li>\n<li>异常：同样由应用程序产生的，但是并非主动产生，而是在执行过程中，出现了意想不到的事情，必须由操作系统解救。</li>\n<li>中断：来源于外设，当外设执行完上一轮CPU分配的任务后，请求下一轮的任务，通过中断机制，使操作系统能感知外设发出的请求。</li>\n</ul>\n<h3>为什么应用程序不能直接找外设？</h3>\n<ul>\n<li>安全：操作系统是特殊的软件，是可信程序，而应用程序则不是。</li>\n<li>抽象：操作系统为应用提供简单一致的接口，不需要针对不同的外设开发不同的软件，屏蔽底层设备的差异性，提供统一的接口。</li>\n</ul>\n<h3>区别联系</h3>\n<table>\n<thead>\n<tr>\n<th align="left">源头</th>\n<th></th>\n<th align="left">处理时间</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">中  断</td>\n<td>非CPU执行指令时产生的，由设备产生，例如设备上一轮的I/O处理完成了，希望再为分配下一轮的任务</td>\n<td align="left">异步,即不知道外设什么时候发出中断，什么时候返回给外设下一轮任务也未知</td>\n</tr>\n<tr>\n<td align="left">异  常</td>\n<td>CPU执行应用程序的指令时产生，被动产生的，举例：越界访问，非法操作码等</td>\n<td align="left">同步，即执行到特定的指令一定会发生，且要立即处理</td>\n</tr>\n<tr>\n<td align="left">系统调用</td>\n<td>CPU执行应用程序的指令时产生，主动产生的，举例：对文件的增删改查</td>\n<td align="left">同步和异步，即执行到特定的指令，应用程序发出调用，比如网络请求这是同步的，但之后可以继续执行其余指令，不必一直等待</td>\n</tr>\n</tbody>\n</table>\n<h3>处理过程</h3>\n<h4>中断处理过程</h4>\n<ol>\n<li>外设完成任务，在某个寄存器或者某个特定的位置设置一个中断标记。</li>\n<li>CPU在下一个时间片开始之前会先检测这个位置，CPU发现标记后便可判断为哪种中断，得出中断号，根据中断表查出这类中断对应的处理程序地址。</li>\n<li>带着参数执行这个地址处的程序。</li>\n<li>操作系统在跳转前还需要保存被打断程序的现场状态，以便后续恢复后能继续运行，在执行完后同样要继续恢复。</li>\n</ol>\n<p><strong>特点</strong>：对于正在执行的应用程序来说是透明的，应用程序无感知</p>\n<h4>异常处理过程</h4>\n<ol>\n<li>CPU正在执行应用程序代码时，发现了非法指令，CPU无法继续执行了，产生一个异常ID（硬件实现：改变某个寄存器的值），转而执行操作系统的代码。</li>\n<li>操作系统通过异常ID确定异常号，保存好当前上下文，再确定异常处理程序的地址。</li>\n<li>异常处理判断直接杀死当前程序，还是为其分配必要的资源后重新执行一次（这种情况下对应用程序是透明的，好像不曾产生异常）。</li>\n</ol>\n<h4>系统调用过程</h4>\n<p>应用程序无法直接完成某项任务，需要操作系统作为中介提供服务。</p>\n<blockquote>\n<p>windows系统提供了Win32 API，应用程序可以为这些接口提供参数来申请系统调用。\nPOSIX-based systems系统（Linux，MacOS等系统）提供了POSIX API，可以实现应用程序的系统调用。\n人们都知道JAVA虚拟机会提供JAVA API，通过JAVA API实现的是库函数的调用，再通过JAVA虚拟机来代为实现系统调用，其实是多了一层封装的，但也就是因为多了一层JAVA虚拟机，所以JAVA程序有非常好的跨平台性，JAVA虚拟机实现了对不同操作系统差异的屏蔽。不过这并没有什么了不起的，现在大部分编程语言都是跨平台的，社区或者公司都提供了不同平台的解释或者编译程序，也可以一次编写到处运行。\n应用程序编写时，只要掌握对应OS提供的API与API具有的功能即可。</p>\n</blockquote>\n<p>应用程序直接或者间接（通过库函数）访问OS系统提供的API，会触发了CPU从用户态到内核态的切换。\n用户态就是CPU执行应用程序的状态，仅能执行有限指令，不能直接操纵外设，无法完全控制整个计算机。\n内核态指CPU执行OS程序的状态，可以执行特权和访问I/O的指令，可以完全控制整个计算机。\n完成转换后就将控制权交到了操作系统，操作系统可以对系统调用做标识，识别，完成服务。</p>\n<h4>函数调用与系统调用的区别</h4>\n<p>函数调用其实是在一个栈空间完成了参数的传递和返回。而系统调用时，应用程序和内核程序有各自的堆栈，发出系统调用，要切换执行内核程序，就要先切换堆栈，同时转换特权集（用户态到内核态），切换堆栈和转换是有开销的，还包括系统调用的参数检查，两个堆栈之间的拷贝（堆栈的切换不能仅仅通过修改指针）。总体而言开销大很多，但换来的回报是安全。</p>',fields:{slug:"/os-1/"}}]},post:[{id:"C:/Users/hao/center/gatsbyblog/src/pages/posts/os-1.md absPath of file >>> MarkdownRemark",excerpt:"操作系统（一） 按下电源之后，如何加载操作系统？ 操作系统如何与外设、应用程序交互？ BIOS、BootLoader、OS的关系 BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS…",frontmatter:{title:"操作系统（一）",date:"2018-01-10",tags:["os","Bootloader"]},html:'<h1>操作系统（一）</h1>\n<ol>\n<li>按下电源之后，如何加载操作系统？</li>\n<li>操作系统如何与外设、应用程序交互？</li>\n</ol>\n<h2>BIOS、BootLoader、OS的关系</h2>\n<p>BIOS即基本输入输出系统，存在CMOS中，OS即操作系统，操作系统存在硬盘中。硬盘中还存另一个简单的小程序BootLoader，它可以将OS从硬盘放到内存中去，使cpu可以执行OS相关的代码。</p>\n<ol>\n<li>一开始加电，CPU从一个预先约定的地址处开始执行BIOS程序，进行加电自检（显卡，键鼠，硬盘），检查成功，即外设均可正常工作，接着要将BootLoader程序放到内存中去。</li>\n<li>BootLoader放在硬盘内的某个指定位置，BIOS从这位置开始，连续读取其后的512B的代码和数据，放入内存之中，CPU按照BootLoader的代码开始执行。</li>\n<li>此时CPU的控制权由BootLoader掌控，该程序会找到硬盘中OS程序的起始扇区和长度，将这块区域从硬盘中读到内存中去，CPU调到OS的起始代码处开始。</li>\n</ol>\n<h2>操作系统如何与设备和程序交互</h2>\n<table>\n<thead>\n<tr>\n<th>对象</th>\n<th>交互方式</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>面向外设</td>\n<td>中断、I/O</td>\n</tr>\n<tr>\n<td>面向程序</td>\n<td>系统调用、异常</td>\n</tr>\n</tbody>\n</table>\n<h3>基本概念</h3>\n<ul>\n<li>系统调用：系统的资源由操作系统统一掌控，应用程序需要这些资源时，要向系统主动提出服务请求，之后由操作系统来完成相应的功能。</li>\n<li>异常：同样由应用程序产生的，但是并非主动产生，而是在执行过程中，出现了意想不到的事情，必须由操作系统解救。</li>\n<li>中断：来源于外设，当外设执行完上一轮CPU分配的任务后，请求下一轮的任务，通过中断机制，使操作系统能感知外设发出的请求。</li>\n</ul>\n<h3>为什么应用程序不能直接找外设？</h3>\n<ul>\n<li>安全：操作系统是特殊的软件，是可信程序，而应用程序则不是。</li>\n<li>抽象：操作系统为应用提供简单一致的接口，不需要针对不同的外设开发不同的软件，屏蔽底层设备的差异性，提供统一的接口。</li>\n</ul>\n<h3>区别联系</h3>\n<table>\n<thead>\n<tr>\n<th align="left">源头</th>\n<th></th>\n<th align="left">处理时间</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">中  断</td>\n<td>非CPU执行指令时产生的，由设备产生，例如设备上一轮的I/O处理完成了，希望再为分配下一轮的任务</td>\n<td align="left">异步,即不知道外设什么时候发出中断，什么时候返回给外设下一轮任务也未知</td>\n</tr>\n<tr>\n<td align="left">异  常</td>\n<td>CPU执行应用程序的指令时产生，被动产生的，举例：越界访问，非法操作码等</td>\n<td align="left">同步，即执行到特定的指令一定会发生，且要立即处理</td>\n</tr>\n<tr>\n<td align="left">系统调用</td>\n<td>CPU执行应用程序的指令时产生，主动产生的，举例：对文件的增删改查</td>\n<td align="left">同步和异步，即执行到特定的指令，应用程序发出调用，比如网络请求这是同步的，但之后可以继续执行其余指令，不必一直等待</td>\n</tr>\n</tbody>\n</table>\n<h3>处理过程</h3>\n<h4>中断处理过程</h4>\n<ol>\n<li>外设完成任务，在某个寄存器或者某个特定的位置设置一个中断标记。</li>\n<li>CPU在下一个时间片开始之前会先检测这个位置，CPU发现标记后便可判断为哪种中断，得出中断号，根据中断表查出这类中断对应的处理程序地址。</li>\n<li>带着参数执行这个地址处的程序。</li>\n<li>操作系统在跳转前还需要保存被打断程序的现场状态，以便后续恢复后能继续运行，在执行完后同样要继续恢复。</li>\n</ol>\n<p><strong>特点</strong>：对于正在执行的应用程序来说是透明的，应用程序无感知</p>\n<h4>异常处理过程</h4>\n<ol>\n<li>CPU正在执行应用程序代码时，发现了非法指令，CPU无法继续执行了，产生一个异常ID（硬件实现：改变某个寄存器的值），转而执行操作系统的代码。</li>\n<li>操作系统通过异常ID确定异常号，保存好当前上下文，再确定异常处理程序的地址。</li>\n<li>异常处理判断直接杀死当前程序，还是为其分配必要的资源后重新执行一次（这种情况下对应用程序是透明的，好像不曾产生异常）。</li>\n</ol>\n<h4>系统调用过程</h4>\n<p>应用程序无法直接完成某项任务，需要操作系统作为中介提供服务。</p>\n<blockquote>\n<p>windows系统提供了Win32 API，应用程序可以为这些接口提供参数来申请系统调用。\nPOSIX-based systems系统（Linux，MacOS等系统）提供了POSIX API，可以实现应用程序的系统调用。\n人们都知道JAVA虚拟机会提供JAVA API，通过JAVA API实现的是库函数的调用，再通过JAVA虚拟机来代为实现系统调用，其实是多了一层封装的，但也就是因为多了一层JAVA虚拟机，所以JAVA程序有非常好的跨平台性，JAVA虚拟机实现了对不同操作系统差异的屏蔽。不过这并没有什么了不起的，现在大部分编程语言都是跨平台的，社区或者公司都提供了不同平台的解释或者编译程序，也可以一次编写到处运行。\n应用程序编写时，只要掌握对应OS提供的API与API具有的功能即可。</p>\n</blockquote>\n<p>应用程序直接或者间接（通过库函数）访问OS系统提供的API，会触发了CPU从用户态到内核态的切换。\n用户态就是CPU执行应用程序的状态，仅能执行有限指令，不能直接操纵外设，无法完全控制整个计算机。\n内核态指CPU执行OS程序的状态，可以执行特权和访问I/O的指令，可以完全控制整个计算机。\n完成转换后就将控制权交到了操作系统，操作系统可以对系统调用做标识，识别，完成服务。</p>\n<h4>函数调用与系统调用的区别</h4>\n<p>函数调用其实是在一个栈空间完成了参数的传递和返回。而系统调用时，应用程序和内核程序有各自的堆栈，发出系统调用，要切换执行内核程序，就要先切换堆栈，同时转换特权集（用户态到内核态），切换堆栈和转换是有开销的，还包括系统调用的参数检查，两个堆栈之间的拷贝（堆栈的切换不能仅仅通过修改指针）。总体而言开销大很多，但换来的回报是安全。</p>',fields:{slug:"/os-1/"}}],tag:"Bootloader"}}}});
//# sourceMappingURL=path---tags-bootloader-2bfeaad25b6bf7830309.js.map