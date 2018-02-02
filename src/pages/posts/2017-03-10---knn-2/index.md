---
title: "机器学习之k-NN算法实战(二)"
date: "2017-03-10"
tags: ["ML", "KNN"]
---
# 机器学习之k-NN算法实战(二)

回顾上文，我们介绍了k-NN算法的原理，以及实例数据的格式，如何加载。万事俱备，下文我们来介绍k-NN算法的代码实现。

首先从store中取出样本数据，存到局部变量中

```python
data_store = parse_data()
# 测试样本向量
test_vectors = data_store["test_set"]["vectors"]
# 测试样本的标签
test_labels = data_store["test_set"]["labels"]
# 训练样本的标签
train_vectors_labels = data_store["train_set"]["labels"]
# 训练样本向量
train_vectors_mat = data_store["train_set"]["vectors"]
```

之后我们利用这些数据来进行k-NN分类

```python
def classify(test_data_vector, training_data_mat, k):
    # 复制向量成矩阵
    test_data_mat = np.tile(test_data_vector, (training_data_mat.shape[0], 1))
    # 两个矩阵求内部向量的欧氏距离
    diff = test_data_mat - training_data_mat
    euclidean_dis = ((diff**2).sum(axis=1)) ** 0.5
    # 排序
    index_sorted = euclidean_dis.argsort()
    return index_sorted[:k]
```

上面的函数，我们需要的参数为测试向量，训练向量集，以及K值。我们将待测试的向量铺成和训练集相同shape的矩阵，之后直接求欧氏距离，按照预设去k个离被测试向量最近的训练向量，排序。

除了进行排序，我们还需要测试错误数据的占比，得出结论，这样才可以判断算法的优劣。

```python
def cal_vote(nearest_index, label, train_vectors_labels):
    # 统计错误的票数
    error_count = 0.0
    for i in range(len(nearest_index)):
        index = nearest_index[i]
        if train_vectors_labels[index] != label:
            error_count += 1
    # 错误数量过半时
    if error_count >= math.ceil(len(nearest_index)/2):
        return True
    else:
        return False
```

cal_vote函数接受三个参数，nearest_index是距离待测点最近的几个向量的索引，正确label，测试的label。之后计算投票，这里按照少数服从多数，有时候还可以按照距离的权重为各个向量加权。
之后我们调用上文的函数，代码如下

```python
# 分类错误的总数
sum_error_count = 0.0
for i in range(len(test_vectors)):
    nearest_index = classify(test_vectors[i], train_vectors_mat, K)
    result = cal_vote(nearest_index, test_labels[i], train_vectors_labels)
    if not result:
        sum_error_count += 1
# 输出信息
print("\n当前位 k-NN 算法,k值为：{0}".format(K))
print("\n分类结束，分类器分类总错误数为：{0}".format(sum_error_count))
print("\n分类器分类错误率为：{0}%".format((sum_error_count / len(train_vectors_labels))*100))
# 这里的k值设置为20，k值不同经常会影响分类器的效果，k=20时分类器在当前样本上，效果还不错
```

以上是算法部分，代码文件在[GITHUB](https://github.com/getcha22/Machine-Learning/blob/master/k-NN/k-NN.py)仓库中也存有备份,大家可以直接查看。

## 总结

k-NN算法的原理和实战代码部分见上文，接着我们来看看这个算法的优缺点，试用条件。

优点：

- 简单明了，粗暴快速。这个是肯定的，核心原理就是计算两个向量的某种距离。
- 准确率尚可，对于一些基础的分类任务，它非常适合

缺点：
- 性能较弱，k-NN算法是懒惰学习方法，它是根据所给训练样本构造的分类器，是将所有训练样本首先存储起来，当要进行分类时，就直接进行计算处理。时间复杂度和空间复杂度都较高。
- K值难以有一个确值，需要不断试。
- 对于非数值型的样本以及离散型的样本，我们需要对其进行数值化和连续化，比如红黄蓝等等。