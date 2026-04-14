---
comments: true
---

# 第四章 · 热力学一般关系

!!! info "章节概览"
    本章从热力学基本微分方程出发，推导各状态参数之间的普遍关系。这些关系适用于任何纯物质，是建立具体物质热力学性质模型的理论基础。

## 比热容

比热容描述物质升温所需热量的能力，但因过程不同而有不同定义。

### 定容比热容 $c_v$

在**体积不变**（$\mathrm{d}v = 0$）的条件下加热，所有热量全部用于升高内能：

$$c_v = \left(\frac{\partial u}{\partial T}\right)_v$$

### 定压比热容 $c_p$

在**压力不变**（$\mathrm{d}p = 0$）的条件下加热，热量用于升高内能并对外做膨胀功：

$$c_p = \left(\frac{\partial h}{\partial T}\right)_p$$

由于定压过程额外包含了膨胀功，因此对同一物质 $c_p > c_v$（后续推导将给出精确关系）。

## 热力学基本微分关系

联合热力学第一定律和第二定律（可逆过程 $\delta q = T \, \mathrm{d}s$, $\delta w = p \, \mathrm{d}v$），得到：

$$\mathrm{d}u = T \, \mathrm{d}s - p \, \mathrm{d}v \tag{1}$$

对焓 $h = u + pv$ 取全微分：

$$\mathrm{d}h = T \, \mathrm{d}s + v \, \mathrm{d}p \tag{2}$$

引入**亥姆霍兹函数** $f = u - Ts$：

$$\mathrm{d}f = -s \, \mathrm{d}T - p \, \mathrm{d}v \tag{3}$$

引入**吉布斯函数** $g = h - Ts$：

$$\mathrm{d}g = -s \, \mathrm{d}T + v \, \mathrm{d}p \tag{4}$$

!!! definition "四个基本热力学函数"
    | 函数 | 定义 | 基本微分式 | 自然变量 |
    |------|------|-----------|---------|
    | 内能 $u$ | — | $\mathrm{d}u = T\mathrm{d}s - p\mathrm{d}v$ | $s, v$ |
    | 焓 $h$ | $u+pv$ | $\mathrm{d}h = T\mathrm{d}s + v\mathrm{d}p$ | $s, p$ |
    | 亥姆霍兹函数 $f$ | $u-Ts$ | $\mathrm{d}f = -s\mathrm{d}T - p\mathrm{d}v$ | $T, v$ |
    | 吉布斯函数 $g$ | $h-Ts$ | $\mathrm{d}g = -s\mathrm{d}T + v\mathrm{d}p$ | $T, p$ |

## Maxwell 关系

由于 $u, h, f, g$ 均为状态参数（全微分），利用混合偏导数相等（$\partial^2/\partial x\partial y = \partial^2/\partial y\partial x$），可从四个基本关系式各导出一个 **Maxwell 关系**：

$$\left(\frac{\partial T}{\partial v}\right)_s = -\left(\frac{\partial p}{\partial s}\right)_v \quad \text{（由 } \mathrm{d}u\text{）}$$

$$\left(\frac{\partial T}{\partial p}\right)_s = \left(\frac{\partial v}{\partial s}\right)_p \quad \text{（由 } \mathrm{d}h\text{）}$$

$$\left(\frac{\partial s}{\partial v}\right)_T = \left(\frac{\partial p}{\partial T}\right)_v \quad \text{（由 } \mathrm{d}f\text{）}$$

$$\left(\frac{\partial s}{\partial p}\right)_T = -\left(\frac{\partial v}{\partial T}\right)_p \quad \text{（由 } \mathrm{d}g\text{）}$$

!!! key-point "Maxwell 关系的用途"
    熵 $s$ 不能直接测量，Maxwell 关系将含 $s$ 的偏导数转换为可测的 $p, v, T$ 偏导数，是推导热力学性质关系式的核心工具。

## 热系数

以下三个热系数可由 $p, v, T$ 实验直接测定，是描述物质宏观热力学行为的重要参数。

### 体膨胀系数 $\alpha_v$

恒压下，温度升高 1 K 时比体积的相对变化量：

$$\alpha_v = \frac{1}{v}\left(\frac{\partial v}{\partial T}\right)_p$$

### 等温压缩率 $\kappa_T$

恒温下，压力增加时比体积的相对缩小量（加负号使其为正值）：

$$\kappa_T = -\frac{1}{v}\left(\frac{\partial v}{\partial p}\right)_T$$

### 焦汤系数 $\mu_J$

节流过程（$h = \text{const}$）中，压降引起的温度变化：

$$\mu_J = \left(\frac{\partial T}{\partial p}\right)_h$$

$\mu_J > 0$：节流后温度降低（大多数气体在常温下）；$\mu_J < 0$：节流后温度升高。

三个热系数之间满足循环关系：

$$\left(\frac{\partial p}{\partial T}\right)_v = \frac{\alpha_v}{\kappa_T}$$

## 比热差关系

利用 Maxwell 关系和热系数，可以推导出 $c_p$ 与 $c_v$ 的普遍差值：

$$c_p - c_v = Tv\frac{\alpha_v^2}{\kappa_T}$$

!!! key-point "比热差的重要推论"
    1. 由于 $T > 0$，$v > 0$，$\kappa_T > 0$，故 $c_p - c_v \geq 0$，即 **$c_p$ 恒大于等于 $c_v$**
    2. 等号成立当且仅当 $\alpha_v = 0$（如 4°C 的水，密度最大处）
    3. 对理想气体，$c_p - c_v = R_g$（第五章导出）

## 熵的一般微分表达式

将熵 $s$ 视为 $(T, v)$ 或 $(T, p)$ 的函数，利用 Maxwell 关系代入，得到熵的可计算微分形式：

以 $(T, v)$ 为独立变量：

$$\mathrm{d}s = \frac{c_v}{T}\,\mathrm{d}T + \left(\frac{\partial p}{\partial T}\right)_v \mathrm{d}v$$

以 $(T, p)$ 为独立变量：

$$\mathrm{d}s = \frac{c_p}{T}\,\mathrm{d}T - \left(\frac{\partial v}{\partial T}\right)_p \mathrm{d}p$$

这两个式子将熵变转化为可测量的 $c_v$、$c_p$ 和 $p$-$v$-$T$ 关系，是实际计算熵变的基础。
