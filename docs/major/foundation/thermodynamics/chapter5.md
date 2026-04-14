---
comments: true
---

# 第五章 · 气体的热力性质

!!! info "章节概览"
    本章将第四章的普遍关系应用于**理想气体**，推导其状态方程和各热力学量的计算公式。理想气体是工程热力学计算的最重要模型。

## 理想气体模型

**理想气体**是气体在低压高温极限下的简化模型：分子体积可忽略不计，分子间无相互作用力（无势能）。

理想气体的状态方程（**克拉贝龙方程**）：

$$pV = nRT = mR_g T$$

或用比参数写成：

$$pv = R_g T$$

!!! definition "符号说明"
    | 符号 | 含义 | 单位 |
    |------|------|------|
    | $p$ | 绝对压力 | Pa |
    | $V$ | 体积 / $v$ 为比体积 | m³ / m³/kg |
    | $n$ | 物质的量 | mol |
    | $m$ | 质量 | kg |
    | $R = 8.314$ | 通用气体常数 | J/(mol·K) |
    | $R_g = R/M$ | 气体常数（特定气体） | J/(kg·K) |
    | $T$ | 热力学温度 | K |
    | $M$ | 摩尔质量 | kg/mol |

## 理想气体的热系数

将状态方程 $pv = R_g T$ 代入第四章的热系数定义，可得理想气体的热系数取特殊值：

$$\alpha_v = \frac{1}{v}\left(\frac{\partial v}{\partial T}\right)_p = \frac{1}{T}$$

$$\kappa_T = -\frac{1}{v}\left(\frac{\partial v}{\partial p}\right)_T = \frac{1}{p}$$

$$\mu_J = \left(\frac{\partial T}{\partial p}\right)_h = 0$$

!!! key-point "焦汤系数为零的含义"
    $\mu_J = 0$ 意味着理想气体节流后温度不变——这是理想气体"分子间无相互作用"假设的直接推论。实际气体节流时温度会变化（正或负）。

## 比热容关系

### 摩尔热容与质量热容

| 量 | 关系 |
|----|------|
| 摩尔热容 $C_{p,m}$ | $C_{p,m} = Mc_p$ |
| 摩尔热容 $C_{v,m}$ | $C_{v,m} = Mc_v$ |
| 摩尔热容差 | $C_{p,m} - C_{v,m} = R$ |
| 质量热容差 | $c_p - c_v = R_g$ |

第四章比热差公式 $c_p - c_v = Tv\alpha_v^2/\kappa_T$ 代入理想气体热系数即可验证上式：

$$c_p - c_v = T \cdot v \cdot \frac{(1/T)^2}{1/p} = \frac{pv}{T} = R_g \checkmark$$

**热容比**（绝热指数）：

$$\gamma = \frac{c_p}{c_v} = \frac{C_{p,m}}{C_{v,m}}$$

对单原子气体 $\gamma = 5/3$，双原子气体 $\gamma \approx 7/5$，多原子气体 $\gamma$ 更小。

## 热力学函数微分式

由于理想气体 $u$ 和 $h$ 只是温度的函数（$\mu_J = 0 \Rightarrow u = u(T)$，$h = u + pv = u(T) + R_g T = h(T)$）：

$$\mathrm{d}u = c_v \, \mathrm{d}T$$

$$\mathrm{d}h = c_p \, \mathrm{d}T$$

熵微分（代入 $(\partial p/\partial T)_v = R_g/v$ 和 $(\partial v/\partial T)_p = R_g/p$）：

$$\mathrm{d}s = \frac{c_v}{T}\mathrm{d}T + \frac{R_g}{v}\mathrm{d}v = \frac{c_p}{T}\mathrm{d}T - \frac{R_g}{p}\mathrm{d}p$$

## 状态变化量的计算

对于从状态 1 到状态 2 的过程，设比热容为**常数**（定值比热容假设）：

$$\Delta u = c_v (T_2 - T_1)$$

$$\Delta h = c_p (T_2 - T_1)$$

$$\Delta s = c_v \ln\frac{T_2}{T_1} + R_g \ln\frac{v_2}{v_1} = c_p \ln\frac{T_2}{T_1} - R_g \ln\frac{p_2}{p_1}$$

!!! note "也可利用状态方程变换"
    利用 $pv = R_g T$ 可在三个熵差表达式之间相互转换，选择已知量最方便的形式计算即可。

## 平均比热容

实际气体比热容随温度变化，工程中常采用**平均比热容**处理变温区间：

$$\overline{c}_v \big|_{t_1}^{t_2} = \frac{\overline{c}_v \big|_0^{t_2} \cdot t_2 \;-\; \overline{c}_v \big|_0^{t_1} \cdot t_1}{t_2 - t_1}$$

其中 $\overline{c}_v \big|_0^{t}$ 为从 0°C 到 $t$°C 的平均比热容，可查热力学数据表。

!!! tip "查表方法"
    1. 分别查出以 0°C 为参考态的 $\overline{c}\big|_0^{t_1}$ 和 $\overline{c}\big|_0^{t_2}$
    2. 用上式合成区间 $[t_1, t_2]$ 的平均比热容
    3. 代入 $\Delta h = \overline{c}_p \cdot (t_2 - t_1)$ 等计算

## 理想气体过程汇总

对理想气体（定值比热），不同典型过程的计算规律：

| 过程 | 约束 | $w$ | $q$ | $\Delta s$ |
|------|------|-----|-----|------------|
| 等温 | $T=\text{const}$ | $R_g T\ln(v_2/v_1)$ | $=w$ | $R_g\ln(v_2/v_1)$ |
| 等容 | $v=\text{const}$ | $0$ | $c_v\Delta T$ | $c_v\ln(T_2/T_1)$ |
| 等压 | $p=\text{const}$ | $p\Delta v=R_g\Delta T$ | $c_p\Delta T$ | $c_p\ln(T_2/T_1)$ |
| 绝热可逆 | $s=\text{const}$ | $-\Delta u$ | $0$ | $0$ |

绝热可逆过程满足 $pv^\gamma = \text{const}$（详见第八章）。
