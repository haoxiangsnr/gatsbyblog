---
title: "C语言习题（三）"
date: "2018-02-28"
tags: ["C"]
---
# C语言习题（三）

以下谭版C语言（第四版）第三章的习题

## 3计算多少月可以还清

C语言中没有关于对数的过多函数，只定义的两个函数即`y=log(double x)`和`y=log10(double x)`，`log`代表以`e`为底数，`log10`则是以10为底数，需要引入math库。

`log2(3)`可用换底公式表示为`log(3)/log(2)`。

一般来说，如果需要使用小数则使用`double`类型，如果永远不会使用小数则使用`int`类型。除非对内存有限制或者对精度要求不高，否则一般不使用`float`。

```c
#include <stdio.h>
#include <process.h>
#include <math.h>
int main() {
    double calM(double d, double p, double r);
    // 默认情况下，整数部分全部输出，小数部分输出6位，现在只想输出小数部分一位，而正数部分不变
    // %m.nf，表示最少输出m位，其中小数位n位，如果只要求小数部分输出一位呢，空着m可以那？
    printf("%.1f个月可以还清\n",calM(300000, 6000, 0.01));
    system("pause");
    return 0;
}

double calM(double d,double p,double r) {
    double m = log10(p / (p - d * r)) / log10(1 + r);
    return m;
}
```

运行结果如下：

```bash
69.7个月可以还清
请按任意键继续. . .
```

## 4int和char的关系

运行结果如下

```bash
c1=a, c2=b
c1=97, c2=98
请按任意键继续. . .
```

因为字符类型属于整型，只不过它仅仅为一个字节。如果用整型显示时，那么就显示字符对应的整型，如果要用字符类型显示，就显示变量中存储整型值对应的ASCII字符。

修改代码后，运行结果如下:

```bash
c1=? c2=?
c1=-59, c2=-58
请按任意键继续. . .
```

按照`char`类型输出，VS默认为`signed char`类型，C在存储整型时，用整数的补码形式进行存放，正数的补码形式就是二进制形式，那么存储到`c1`中的值为`11000101`。

`11000101`是被存入到计算机中的，它是补码，现在想要将它按照字符类型输出，先看其对应的原码，使用取反加一的方法（见文末参考），原码为`10111011`，代表了`-59`，`-59`对应的ASCII码是`?`，我想负数对应的ASCII码在每个编译器中都是不同的吧，我在VS中试验了几个负数，均为`?`。

继续按照第三问修改代码，运行结果如下：

```bash
c1=a, c2=b
c1=97, c2=98
请按任意键继续. . .
```

可以预想到的，`char`只是一个字节大的`signed int`，`int`也同样可以按照字符显示，只是不要超过`char`的取值范围即可。

## 5在键盘上如何输入

在`printf`时，`%f,%e,%E,%g,%G`都是不同的，分别为

- 使用小数形式输出，默认情况下保留整数部分，小数部分为6位
- 按照标准化指数形式输出（区分于规范化），即小数点前必须有，且只有一位非零数字，小数部分显示6位，指数有效部分一共3位。
- 同上，但输出结果中的e改为E
- `%f,%e`哪个更宽，就选哪个。`%f,%e`在不同的编译器中都会有默认的位数规定，为了凑够位数经常会多添0，而`%g`则会去掉这些位数
- 同上，只是在`%e`更宽时，其中的e用大写E。

```c
#include <stdio.h>
#include <process.h>
#include <math.h>
int main() {
    int a, b;
    float x, y;
    char c1, c2;
    scanf_s("a=%db=%d", &a, &b);
    scanf_s("%f%e", &x, &y);
    scanf_s("%c%c", &c1, &c2);
    printf("%d\t%d\t%f\t%e\t%c\t%c", a, b, x, y, c1, c2);
    system("pause");
    return 0;
}
```

按照上面的代码，我输入最后一个字符`a`，按回车后，就提示程序发出错误，自动关闭了，暂时没有找到原因。

## 6密码

`putchar(char)`中，参数只能是单个字符，而且给多个字符也是没有用的，最终只会输出第一个字符，比如：

```c
putchar('dd'); // d
```

只有单个字符能用单引号，多个字符必要要用双引号。

代码如下：

```c
#include <stdio.h>
#include <process.h>
#include <math.h>
int main() {
    char c1 = 'C', c2 = 'h', c3 = 'i', c4 = 'n', c5 = 'a';
    putchar(c1 + 4);
    putchar(c2 + 4);
    putchar(c3 + 4);
    putchar(c4 + 4);
    putchar(c5 + 4);
    printf("\n%c%c%c%c%c\n", c1+4, c2+4, c3+4, c4+4, c5+4);
    system("pause");
    return 0;
}
```

运行结果：

```bash
Glmre
Glmre
请按任意键继续. . .
```

## 8int和char的关系

`getchar()`得到的值需要赋给某个变量，输入内容会被视为字符，例如：

```c
a = getchar(); // 输入118
printf("%c", a); // 输出1
// 118被看成了三个字符，最终输出了首个字符，scanf()也是一样，不要妄想将118整体当成一个字符，比如
scanf_s("%c",&a); // 输入118
printf("%c", a); // 输出1
scanf_s("%c",&a); // 输入119
printf("%c", a); // 输出1
scanf_s("%c",&a); // 输入118
printf("%d", a); // 输出49，即1的ASCII码
scanf_s("%c",&a); // 输入119
printf("%d", a); // 输出49，即1的ASCII码
```

代码如下：

```c
#include <stdio.h>
#include <process.h>
#include <math.h>
int main() {
    char c1, c2;
    c1 = getchar();
    c2 = getchar();
    putchar(c1);
    putchar(c2);
    putchar('\n');
    printf("c1=%c\tc2=%c\n", c1, c2);
    system("pause");
    return 0;
}
```

运行结果如下：

```bash
ab
ab
c1=a    c2=b
请按任意键继续. . .
```

原理上`int`和`char`都可以的，因为输入的字符经过转换后一定在`char`的范围内，更是在`int`的范围内，但既然是字符，用`char`更符合语义。

要输出字符的ASCII码值，只能用`printf()`，因为`putchar`函数是针对单个字符的，比如`printf("%d",varchar)`;

`int`和`char`只有在ASCII码的取值范围内时可以互换，否则不行，超过范围就没有对应的ASCII码值进行映射了。如果取值再大，超过了一个字节的范围，生效的也只是整型变量的最后一个字节。

## 参考

- [原码补码转换](https://zhidao.baidu.com/question/181720031.html)
