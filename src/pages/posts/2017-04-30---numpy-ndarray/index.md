---
title: "numpy入门——ndarray介绍"
date: "2017-04-30"
tags: ["Numpy", "ML", "Python"]
---
# numpy入门——ndarray介绍

下文主要围绕ndarray类型，介绍相关运算。

ndarray是numpy支持的数据类型，numpy相关运算的对象都是它。我们知道python已经自带了很多基础类型，比如列表，元组等等，numpy的ndarray可以理解为自由受限，但功能加强版的list类型。之所以抛弃更开放的list类型，首先是因我们在进行数值计算时，一种数据的类型往往是相同的，不需要在一个对象中储存不同类型的数据，而统一的数据类型可以进行针对性的优化，提高计算性能。其次使用相同的类型，往往可以优化存储。

## 创建ndarray

大致介绍了ndarray类型，那么创建ndarray有什么样的方法呢？

### 从列表或者元组创建

创建ndarray最常用的方法就是直接从列表或者元组创建，如下：

```python
arr = np.ndarray(list/tuple)
arr = np.ndarray(list/tuple, dtype=np.float32)
```

我们可以为ndarray方法指定了一个dtype参数，它的值可以是numpy支持的dtype类型，注意是numpy支持的dtype，dtype属性的值有很多，比如int类的int8，int16，int32，int64等等。这与python支持的整型或者浮点型是两个概念。自然，我们若不显式的指定dtype参数，默认numpy会结合具体的数据自行选择一个。比如说我们读入的数据中均为整数，那么默认numpy会将dtype赋值为整型，如果有数据为浮点数，那么numpy会创建为浮点类型。

### 使用创建方法创建

我们可以使用numpy中预装的方法来创建ndarray，这些方法创建的ndarray数据都有明显的特征。

```python
np.arange(n)
# 元素值为0~n-1
np.ones((shape))
# 接受元组类型的参数，比如(2,3)，最终会生成一个2行3列的全1数组
np.zeros((shape))
# 同上，生成一个指定形状的全0数组
np.full((shape), val)
# 依然同上，只是生成的数组中的值通过val参数来指定
np.eye(n)
# 生成一个n阶单位矩阵
```

其中ones，zeros，full，eye方法生成数组中的元素均为浮点类型，如果需要整型数据，请通过dtype参数来制定。这个很容易理解，因为numpy的设计主要为了进行数值计算，而数值计算中一般很少会针对整型数据。

我们还可以直接已有的某个形状的数组创建对应的全1或者全0的数组。

```python
# a为我们已有的ndarray类型的数组
np.ones_like(a)
# 创建一个与a的形状相同的数组，只不过新数组的值全为1
np.zeros_like(a)
np.full(a, val)
# 这两个方法类似ones_like()
```

除此之外，我们还可以类似MATLAB中一样，指定要生成数组的起止元素和元素总数，之后numpy会等间距的自动填充数据，形成最终的数组。

```python
np.linspace(start, end, num) # 三个参数分别为起始值，终点值，以及最终数组中希望包含的元素个数。
```

对于linspace方法，我们可以指定一个参数endpoint，通过它来告知numpy最终生成的n长度的数组中是否包含最末的元素。看个例子：

```python
np.linspace(1,2,2)
Out: array([ 1.,  2.])
np.linspace(1,2,2,endpoint=False)
Out: array([ 1. ,  1.5])
# 在1~2的范围中会多包含一个元素，最终的数组中丢掉末尾元素2
```

当我们已经有两个ndarray数组时，可以直接使用concatenate((arr,arr,…))方法拼接多个数组,这里自然需要数组的维度相同。

## ndarray的变换修改

创建ndarray类型的数组后，我们时常需要对其的形状进行变换。

### 变换形状

我们可以使用resize，reshape方法

```python
a.resize((shape))
a.reshape((shape))
```

他们均可以对数组的形状进行变换，注意是变换，我们需要改变后的元素总数与之前的总数相同。比如说原先的数据形状为(3,3)，元素总数为9，自然不能变为(2,4)。这里的resize和reshape主要的区别为resize会直接在原数组上面进行改变，reshape则会拷贝之前的数组，进行变换，最终返回一个新的数组。

如果需要直接变换成一个一维的数组，可以使用flatten()这个用来降维的方法

```python
a = np.eye(5)
Out:
array([[ 1.,  0.,  0.,  0.,  0.],
       [ 0.,  1.,  0.,  0.,  0.],
       [ 0.,  0.,  1.,  0.,  0.],
       [ 0.,  0.,  0.,  1.,  0.],
       [ 0.,  0.,  0.,  0.,  1.]])
a.flatten()
Out:
array([ 1.,  0.,  0.,  0.,  0.,  0.,  1.,  0.,  0.,  0.,  0.,  0.,  1.,
        0.,  0.,  0.,  0.,  0.,  1.,  0.,  0.,  0.,  0.,  0.,  1.])
# 注意flatten类似reshape方法，不会改变原数组，而是返回一个新数组。
```

## 修改属性

除了支持数组形状的变换外，我们有时需要改变数组中元素的类型，可以使用astype()方法，注意它返回的是一个新数组。

```python
a = np.eye(1)
Out: array([[ 1.]])
# 默认为浮点类型
a.astype(np.int)
Out: array([[1]])
# 修改为int类型，类似，直接返回新数组
```

注意在这里我们并不需要细化到int8，int16，int32或者int64，仅告知numpy为int类就可以了，numpy会帮我们进行合适的细化。

### 变为list

我们一个项目中往往会用到很多第三方包或者库，我们不能指望其他库也支持numpy的ndarray类型数据，为此我们需要将其转换为list类型，再传给其他包或者库做运算，我们可以使用tolist方法还原。

```python
a = np.eye(1)
Out: array([[ 1.]])
a.tolist()
Out: [[1.0]]
```

以上，我大致介绍了numpy支持的数据类型ndarray，以及它常用的创建和修改方法，后续我会介绍它的增删改查。