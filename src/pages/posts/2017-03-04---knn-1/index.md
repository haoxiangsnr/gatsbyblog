---
title: "机器学习之k-NN算法实战(一)"
date: "2017-03-04"
tags: ["ML", "KNN"]
---
# 机器学习之k-NN算法实战(一)

下文会介绍机器学习的k-NN算法，首先大致介绍k-NN算法的原理，之后我们会通过识别手写体数字这个小项目，来讲解k-NN分类算法的代码实现。

## k-NN算法原理

所谓k-NN算法，全名为是一种分类算法，它属于监督式算法，也就是说对于这个算法，必须提前对数据打标签，否则无法完成分类。其次，k-NN又被人们称为是“懒汉”算法，或者说“惰性学习”，这是因为k-NN并不会像神经网络，线性回归那样直接训练出一个模型来，下文会逐步介绍。

使用k-NN算法进行分类，输入一个未知分类的测试数据，通过计算其与已知分类数据之间的某种距离，之后从训练数据中抽离出距离测试数据较近的样本，一一查看其分类，再进行多数表决，即可估算出测试数据的分类。
下面举个例子：

![k-NN图例]()

绿圆是我们需要进行分类的测试数据，为了确定它的分类，我们可以通过欧式距离公式计算它和整个空间上所有样本的距离。按照我们预先设置的K值，找到离它最近的K个样本，上图我们假设了K值为3，我们发现实线圆中有三个训练样本与测试样本最接近，分别为两个红三角，一个蓝方块。于是我们推算出这个绿圆的分类与红三角相同。

## 获取数据

下面我们通过识别手写体数据这个实例来进行说明。手写体数字，就是下面图片展示的数据，他们没有完全统一的规则，我们需要让计算机在数据中发现规律，帮助我们识别新的手写体数字是几。

![手写体数字]()

首先我们获取训练数据，还有测试数据。我们可以google MNIST这个关键字，之后从上面下载已经打好标签的数据，也可以直接从我的[GITHUB仓库](https://github.com/getcha22/Machine-Learning/tree/master/k-NN)里面直接复制粘贴，毕竟我们学习的目标是算法。

下面我们看看这些数据：

![手写体数字1]()
![手写体数字2]()

每行数据会构成一个样本，训练集共有100个这样的样本，每个样本第一列是该样本的标签(见图一)。通过0-255表达某个像素的灰度值，0表示纯黑色，而255表示白色，其他值介于两者之间。
好，解释清楚样本的格式，我们现在需要加这些数据引入代码中，这样才可以对他们操作：

```py
	
def parse_data():
    file_names = [
        'MNIST_data/mnist_train_100.csv',
        'MNIST_data/mnist_test_10.csv'
    ]
    # 整个存入dict，方便传递
    store = {}
    for file_name in range(2):
        # 拼接 dict 的 key 值
        type = file_names[file_name].split('_')[2] + '_set'
        labels = []
        vectors = []
        file = open(file_names[file_name])
        content = file.readlines()
        # 截取 str 中的 label， 将剩余部分转换成 ndarray，后续求距离会更高效
        for line in content:
            label = line[0]
            vector = line[2:-3].split(',')
            if (label and vector):
                labels.append(label)
                vectors.append(vector)
        vectors = np.array(vectors,dtype=float)
        store[type] = {
            "labels": labels,
            "vectors": vectors
        }
    return store
```

parse_data这个函数用来从存放数据的目录中加载数据，训练集中有100个样本，测试集中有10个测试样本，读取成功之后，将样本分类整理好，存放成dict格式，方便之后使用。
加载数据这个步骤完成了，接着我们就要进行分类代码的编写，请见下篇。
