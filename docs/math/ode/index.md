---
comments: true
---

# 常微分方程

!!! note "讲义说明"
    - **内容范围**：一阶微分方程、可降阶的二阶微分方程、高阶线性微分方程、线性微分方程组
    - **适用范围**：微积分甲（II）中常微分方程专题、期末复习
    - **参考来源**：Savia 四讲讲义 + Duo Xu《常微分方程计算题类型整理》（2012）

常微分方程（ODE）研究未知函数及其导数之间的关系式。本讲义按题型组织，每一类给出**形式、解法、例题**三段，便于按类查阅。

---

## 一、一阶微分方程

### 1.1 变量可分离方程

**形式**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = f(x)\,g(y)$$

**解法**

分离变量后两端积分。

- 通解：

$$\int \frac{\mathrm{d}y}{g(y)} = \int f(x)\,\mathrm{d}x + C$$

- 初值 $y(x_0)=y_0$ 下的特解：

$$\int_{y_0}^{y} \frac{\mathrm{d}y}{g(y)} = \int_{x_0}^{x} f(x)\,\mathrm{d}x$$

!!! warning "易丢失的解"
    若存在 $y^{*}$ 使 $g(y^{*})=0$，则 $y \equiv y^{*}$ 也是解。分离变量时要回头检查。

**例题** (20-21) $\dfrac{\mathrm{d}y}{\mathrm{d}x} = (1-y^2)\,x$

分离变量：$\dfrac{\mathrm{d}y}{1-y^2} = x\,\mathrm{d}x$，两端积分：

$$\frac{1}{2}\ln\left|\frac{1+y}{1-y}\right| = \frac{x^2}{2} + C \;\Rightarrow\; \frac{1+y}{1-y} = C\,e^{x^2}$$

### 1.2 齐次方程

**形式**（右端只依赖 $y/x$）

$$\frac{\mathrm{d}y}{\mathrm{d}x} = f\!\left(\frac{y}{x}\right)$$

**解法**

令 $u = y/x$，则 $y = ux$，$\dfrac{\mathrm{d}y}{\mathrm{d}x} = u + x\dfrac{\mathrm{d}u}{\mathrm{d}x}$，化为关于 $u$ 的可分离方程：

$$x\frac{\mathrm{d}u}{\mathrm{d}x} = f(u) - u$$

**例题** (23-24) $2xy\,y' = 4x^2 + 3y^2,\; y(1)=1$

化标准形 $y' = \dfrac{4x^2 + 3y^2}{2xy}$，令 $y = ux$：

$$u + xu' = \frac{2}{u} + \frac{3u}{2} \;\Rightarrow\; xu' = \frac{4 + u^2}{2u}$$

分离积分、回代 $u = y/x$ 得 $y^2 = Cx^3 - 4x^2$，代 $y(1)=1$ 解得 $C=5$，故 $y^2 = 5x^3 - 4x^2$。

### 1.3 一阶线性方程

**形式**

$$\frac{\mathrm{d}y}{\mathrm{d}x} + p(x)\,y = f(x)$$

**通解公式**（积分因子法）

$$y = e^{-\int p(x)\,\mathrm{d}x}\!\left[\int f(x)\,e^{\int p(x)\,\mathrm{d}x}\,\mathrm{d}x + C\right]$$

初值 $y(x_0)=y_0$：

$$y = e^{-\int_{x_0}^{x} p(\xi)\,\mathrm{d}\xi}\!\left[\int_{x_0}^{x} f(\xi)\,e^{\int_{x_0}^{\xi} p(\eta)\,\mathrm{d}\eta}\,\mathrm{d}\xi + y_0\right]$$

!!! tip "记忆口诀"
    "外负内正"：外层系数 $e^{-\int p\,\mathrm{d}x}$ 取负号，内层 $e^{\int p\,\mathrm{d}x}$ 取正号。

### 1.4 伯努利方程

**形式**

$$\frac{\mathrm{d}y}{\mathrm{d}x} + p(x)\,y = f(x)\,y^{n},\quad n \ne 0,1$$

**解法**

令 $z = y^{1-n}$，代入化为关于 $z$ 的一阶线性方程：

$$\frac{\mathrm{d}z}{\mathrm{d}x} + (1-n)\,p(x)\,z = (1-n)\,f(x)$$

!!! warning
    $n=0$ 退化为线性方程；$n=1$ 退化为可分离方程；若 $n>0$，注意 $y\equiv 0$ 也是解。

**例题** (20-21) $x\,y' - 4y = x^2\sqrt{y}$

除以 $x$ 得 $y' - \dfrac{4}{x}y = x\sqrt{y}$（$n = \tfrac{1}{2}$）。令 $z = y^{1/2}$：

$$z' - \frac{2}{x}z = \frac{x}{2}$$

积分因子 $x^{-2}$，解得 $z = x^2\!\left(\tfrac{1}{2}\ln|x| + C\right)$，回代

$$y = x^4\!\left(\tfrac{1}{2}\ln|x| + C\right)^{2}$$

### 1.5 全微分方程

**形式**

$$M(x,y)\,\mathrm{d}x + N(x,y)\,\mathrm{d}y = 0$$

**判定与求解四步**

1. **判全微分**：若 $\dfrac{\partial M}{\partial y} = \dfrac{\partial N}{\partial x}$，存在原函数 $u(x,y)$ 使 $\mathrm{d}u = M\mathrm{d}x + N\mathrm{d}y$，通解 $u(x,y) = C$。

2. **求积分因子** $\mu$（不是全微分时）：

    - 若 $\dfrac{M_y - N_x}{N}$ 只依赖 $x$，则 $\mu = \mu(x)$，$\dfrac{\mu'(x)}{\mu(x)} = \dfrac{M_y - N_x}{N}$。
    - 若 $\dfrac{N_x - M_y}{M}$ 只依赖 $y$，则 $\mu = \mu(y)$，$\dfrac{\mu'(y)}{\mu(y)} = \dfrac{N_x - M_y}{M}$。

3. **凑原函数**：由 $\partial_x u = M$ 积分得 $u = \int M\,\mathrm{d}x + \varphi(y)$；再用 $\partial_y u = N$ 定出 $\varphi(y)$。

4. **写通解**：$u(x,y) = C$。

!!! info "常用全微分识别（凑微分表）"

    以下是考场常用的"一眼看出"恒等式：

    - $y\,\mathrm{d}x + x\,\mathrm{d}y = \mathrm{d}(xy)$
    - $\dfrac{x\,\mathrm{d}y - y\,\mathrm{d}x}{x^2} = \mathrm{d}\!\left(\dfrac{y}{x}\right)$
    - $\dfrac{y\,\mathrm{d}x - x\,\mathrm{d}y}{y^2} = \mathrm{d}\!\left(\dfrac{x}{y}\right)$
    - $\dfrac{x\,\mathrm{d}y - y\,\mathrm{d}x}{x^2 + y^2} = \mathrm{d}\!\left(\arctan\dfrac{y}{x}\right)$
    - $\dfrac{x\,\mathrm{d}x - y\,\mathrm{d}y}{x^2 - y^2} = \dfrac{1}{2}\mathrm{d}\!\left(\ln\!\left|\dfrac{x-y}{x+y}\right|\right)$
    - $\dfrac{x\,\mathrm{d}x + y\,\mathrm{d}y}{x^2 + y^2} = \dfrac{1}{2}\mathrm{d}\!\left(\ln(x^2+y^2)\right)$

**例题** (23-24) $(y^2 + 3xy^3)\,\mathrm{d}x + (1 + xy)\,\mathrm{d}y = 0$

$M_y \ne N_x$。算 $\dfrac{N_x - M_y}{M} = -\dfrac{3}{y}$，得积分因子 $\mu(y) = y^{-3}$。方程乘 $\mu$：

$$\left(\frac{1}{y} + 3x\right)\mathrm{d}x + \left(\frac{1}{y^3} + \frac{x}{y^2}\right)\mathrm{d}y = 0$$

凑 $u = \dfrac{x}{y} + \dfrac{3x^2}{2} + \varphi(y)$，由 $\partial_y u = N$ 得 $\varphi(y) = -\dfrac{1}{2y^2}$。通解：

$$\frac{x}{y} + \frac{3x^2}{2} - \frac{1}{2y^2} = C$$

### 1.6 变量代换（一阶方程的降维打击）

对"看起来像齐次/线性但不完全是"的方程，换元化归。

**例 1** (20-21) $y' = \cos^2(x+y)$

令 $u = x+y$，$u' = 1 + y'$：$u' = 1 + \cos^2 u$（可分离）。得 $\cot(x+y) + x = C$。

**例 2** (20-21) $y' = 2\!\left(\dfrac{y+2}{x+y-1}\right)^{2}$

解 $\begin{cases} x+y-1=0 \\ y+2=0 \end{cases}$ 得 $(3,-2)$。令 $X=x-3,\; Y=y+2$：

$$\frac{\mathrm{d}Y}{\mathrm{d}X} = 2\!\left(\frac{Y}{X+Y}\right)^2$$

再令 $u = Y/X$ 化为齐次方程。

### 1.7 $x,y$ 互换

把 $x$ 视作 $y$ 的函数，伯努利型有时反过来就是线性。

**例** (23-24) $\dfrac{\mathrm{d}y}{\mathrm{d}x} = \dfrac{y}{x(x^2y^2+1)}$

取倒数：$\dfrac{\mathrm{d}x}{\mathrm{d}y} = \dfrac{x}{y} + x^3 y$（以 $x$ 为未知量的伯努利方程，$n=3$）。令 $z = x^{-2}$：

$$\frac{\mathrm{d}z}{\mathrm{d}y} + \frac{2}{y}z = -2y$$

线性方程求解后回代（注意 $y=0$ 也是解）。

---

## 二、可降阶的二阶微分方程

### 2.1 不显含 $y$ 的方程

**形式** $y'' = f(x,\, y')$

**解法**：令 $p = y'$，则 $p' = y''$，化为一阶方程 $p' = f(x,p)$。解出 $p(x)$ 后再积一次分得 $y$。

**例题** (20-21) $y'' - y' = 12x^2 - 6$

令 $p = y'$：$p' - p = 12x^2 - 6$（一阶线性）。用公式：

$$p = e^{x}\!\left[\int (12x^2 - 6)\,e^{-x}\,\mathrm{d}x + C_1\right] = -6(2x^2 + 4x + 3) + C_1 e^{x}$$

再积分：

$$y = -4x^3 - 12x^2 - 18x + C_1 e^{x} + C_2$$

### 2.2 不显含 $x$ 的方程

**形式** $y'' = f(y,\, y')$

**解法**：令 $p = y'$，视 $p$ 为 $y$ 的函数，则

$$y'' = \frac{\mathrm{d}p}{\mathrm{d}x} = p\,\frac{\mathrm{d}p}{\mathrm{d}y}$$

方程化为 $p\dfrac{\mathrm{d}p}{\mathrm{d}y} = f(y,p)$。解出 $p = \varphi(y)$ 后再由 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\varphi(y)$ 分离积分。

**例题** (23-24) $yy'' - (y')^2 = yy',\; y(0)=1,\, y'(0)=2$

令 $p = y'$，$y'' = p\,p'_y$：

$$yp\,p'_y - p^2 = yp \;\Rightarrow\; p'_y - \frac{p}{y} = 1$$

一阶线性解得 $p = y(\ln|y| + C_1)$，由初值 $C_1 = 2$。再分离得

$$\ln\!\bigl|\ln|y| + 2\bigr| = x + C_2$$

---

## 三、高阶线性微分方程

### 3.1 $n$ 阶常系数齐次线性方程

**形式**

$$y^{(n)} + a_1 y^{(n-1)} + \cdots + a_{n-1} y' + a_n y = 0$$

**解法：特征方程法**

写出特征方程 $D(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_n = 0$，求出 $n$ 个特征根，按规则写出基础解系：

- 实根 $\lambda$（$k$ 重）：$e^{\lambda x},\; x e^{\lambda x},\; \dots,\; x^{k-1}e^{\lambda x}$
- 一对共轭复根 $\alpha \pm \mathrm{i}\beta$（$k$ 重）：

$$e^{\alpha x}\cos\beta x,\; x e^{\alpha x}\cos\beta x,\; \dots,\; x^{k-1}e^{\alpha x}\cos\beta x$$
$$e^{\alpha x}\sin\beta x,\; x e^{\alpha x}\sin\beta x,\; \dots,\; x^{k-1}e^{\alpha x}\sin\beta x$$

通解为所有基础解的线性组合。

**例题** (23-24) $y^{(4)} + 2y^{(3)} + 3y'' + 2y' + y = 0$

特征方程 $\lambda^4 + 2\lambda^3 + 3\lambda^2 + 2\lambda + 1 = (\lambda^2 + \lambda + 1)^2 = 0$，得 $\lambda = -\tfrac{1}{2} \pm \tfrac{\sqrt{3}}{2}\mathrm{i}$（二重）。

$$y = e^{-x/2}\!\left[(c_1 + c_2 x)\cos\tfrac{\sqrt{3}}{2}x + (c_3 + c_4 x)\sin\tfrac{\sqrt{3}}{2}x\right]$$

### 3.2 二阶常系数非齐次线性方程

**形式** $y'' + py' + qy = f(x)$

**解法**：$y = \bar{y} + y^{*}$。齐次通解 $\bar{y}$ 查表：

| 特征根 | 基础解系 | 齐次通解 |
|--------|----------|----------|
| $\lambda_1 \ne \lambda_2$（实） | $e^{\lambda_1 x},\; e^{\lambda_2 x}$ | $c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$ |
| $\lambda_1 = \lambda_2 = \lambda$ | $e^{\lambda x},\; x e^{\lambda x}$ | $(c_1 + c_2 x)e^{\lambda x}$ |
| $\alpha \pm \mathrm{i}\beta$ | $e^{\alpha x}\cos\beta x,\; e^{\alpha x}\sin\beta x$ | $e^{\alpha x}(c_1\cos\beta x + c_2\sin\beta x)$ |

特解 $y^{*}$ 用**待定系数法**，依 $f(x)$ 类型设形式：

| $f(x)$ 类型 | 特解形式 |
|-------------|----------|
| $P_m(x)\,e^{a x}$ | $x^{k} R_m(x)\,e^{a x}$ |
| $e^{\alpha x}[P_m(x)\cos\beta x + Q_l(x)\sin\beta x]$ | $x^{k} e^{\alpha x}[R_h(x)\cos\beta x + S_h(x)\sin\beta x]$，$h = \max\{m,l\}$ |

其中 $k$ = 对应特征根（$a$ 或 $\alpha \pm \mathrm{i}\beta$）作为齐次特征根的重数。

!!! tip "叠加原理"
    若 $f(x) = f_1(x) + f_2(x)$，分别求出 $y_1^{*}, y_2^{*}$，则 $y^{*} = y_1^{*} + y_2^{*}$。

**例题** $y'' - y = e^{x}\sin 2x$

齐次：$\lambda = \pm 1$，$\bar{y} = c_1 e^{x} + c_2 e^{-x}$。$1 \pm 2\mathrm{i}$ 非特征根，$k=0$。设

$$y^{*} = e^{x}(A\cos 2x + B\sin 2x)$$

代入比较系数得 $A = B = -\tfrac{1}{8}$：

$$y = c_1 e^{x} + c_2 e^{-x} - \tfrac{1}{8} e^{x}(\cos 2x + \sin 2x)$$

### 3.3 欧拉方程

**形式**

$$a_0 x^{n} y^{(n)} + a_1 x^{n-1} y^{(n-1)} + \cdots + a_{n-1} x y' + a_n y = f(x)$$

**解法**：令 $t = \ln|x|$，则

$$x y' = \dot{y},\qquad x^2 y'' = \ddot{y} - \dot{y}$$

方程化为关于 $t$ 的常系数线性方程，按 3.1/3.2 求解后回代 $t=\ln|x|$。

**例题** (23-24) $x^2 y'' - 7xy' + 16y = 0$

令 $t = \ln|x|$：$\ddot{y} - 8\dot{y} + 16 y = 0$。特征方程 $\lambda^2 - 8\lambda + 16 = 0$，$\lambda = 4$（二重）。

$$y = (c_1 + c_2 t)\,e^{4t} = (c_1 + c_2 \ln|x|)\,x^4$$

### 3.4 二阶变系数齐次线性方程（已知一解）

**形式** $y'' + p(x)\,y' + q(x)\,y = 0$

**解法（刘维尔公式）**：若已知一个非零解 $y_1$，则

$$y = y_1\!\left[c_1 + c_2 \int \frac{1}{y_1^{2}}\,e^{-\int p(x)\,\mathrm{d}x}\,\mathrm{d}x\right]$$

若 $2p'(x) + p^2(x) - 4q(x) = a$（常数），作代换 $y = u\,e^{-\int p/2\,\mathrm{d}x}$，方程化为 $u'' - \tfrac{a}{4}u = 0$。

### 3.5 二阶变系数非齐次线性方程（常数变易法）

**形式** $y'' + p(x)\,y' + q(x)\,y = f(x)$，已知齐次基础解系 $y_1, y_2$。

**通解公式**：记朗斯基行列式

$$W(x) = \begin{vmatrix} y_1(x) & y_2(x) \\ y_1'(x) & y_2'(x) \end{vmatrix}$$

则

$$y(x) = y_1(x)\!\left[c_1 - \int \frac{y_2(x) f(x)}{W(x)}\,\mathrm{d}x\right] + y_2(x)\!\left[c_2 + \int \frac{y_1(x) f(x)}{W(x)}\,\mathrm{d}x\right]$$

**例题** (17-18) 已知 $y_1 = \dfrac{e^{x}}{x}$ 是 $y'' + \dfrac{2}{x} y' - y = 0$ 的解，求 $y'' + \dfrac{2}{x} y' - y = x$ 的通解。

由刘维尔公式得另一基础解 $y_2 = \dfrac{e^{-x}}{x}$。$W = -\dfrac{2}{x^2}$。代入常数变易公式化简后：

$$y = c_1\frac{e^{x}}{x} + c_2\frac{e^{-x}}{x} - \frac{x^2 + 2}{x}$$

---

## 四、线性微分方程组

### 4.1 常系数齐次线性方程组

**形式**

$$\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A\mathbf{x},\quad A \in \mathbb{R}^{n\times n},\; \mathbf{x} = (x_1,\dots,x_n)^{T}$$

**解法**：求 $A$ 的特征值 $|A - \lambda E| = 0$。

- **$\lambda_i$ 对应单特征向量 $\boldsymbol{\xi}_i$**：贡献解 $\boldsymbol{\xi}_i e^{\lambda_i t}$
- **$\lambda_i$ 为 $k$ 重、有 $k$ 个线性无关特征向量**：直接给出 $k$ 个独立解
- **$\lambda_i$ 为 $k$ 重、特征向量不足**：求广义特征向量链 $(A - \lambda_i E)\mathbf{v}_{j+1} = \mathbf{v}_j$，解为

$$\mathbf{x}^{(i)}(t) = e^{\lambda_i t}\sum_{j=0}^{k-1}\frac{t^{j}}{j!}\,\mathbf{v}^{(i)}_{j}$$

- **复特征值 $\lambda = \alpha \pm \mathrm{i}\beta$，复特征向量 $\mathbf{p}\pm\mathrm{i}\mathbf{q}$**：取实部虚部

$$e^{\alpha t}(\mathbf{p}\cos\beta t - \mathbf{q}\sin\beta t),\quad e^{\alpha t}(\mathbf{p}\sin\beta t + \mathbf{q}\cos\beta t)$$

**例题** (23-24)

$$\begin{cases} x' = 3x - 2y - 2z \\ y' = -5x + 4y + 2z \\ z' = 5x - 5y - 3z \end{cases}$$

$A = \begin{pmatrix} 3 & -2 & -2 \\ -5 & 4 & 2 \\ 5 & -5 & -3 \end{pmatrix}$，特征方程 $(1-\lambda)(3-\lambda)(-2-\lambda) = 0$，$\lambda = 1, 3, -2$。分别求特征向量：

$$\boldsymbol{\xi}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix},\quad \boldsymbol{\xi}_2 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix},\quad \boldsymbol{\xi}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$

通解：

$$\begin{cases} x = c_1 e^{t} + c_2 e^{3t} \\ y = c_1 e^{t} + c_2 e^{3t} + c_3 e^{-2t} \\ z = c_2 e^{3t} + c_3 e^{-2t} \end{cases}$$

### 4.2 常系数非齐次线性方程组

**形式**

$$\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A\mathbf{x} + \mathbf{f}(t)$$

**常数变易法**：设齐次方程组的基本解矩阵为 $X(t)$，令 $\mathbf{x} = X(t)\,\mathbf{c}(t)$，代入得

$$X(t)\,\mathbf{c}'(t) = \mathbf{f}(t) \;\Rightarrow\; \mathbf{c}(t) = \int X^{-1}(t)\mathbf{f}(t)\,\mathrm{d}t + \mathbf{c}_0$$

通解：$\mathbf{x} = X(t)\,\mathbf{c}(t)$。

**例题** (23-24) $\begin{cases} x' = 2x - y \\ y' = x + 2y + 2e^{2t} \end{cases},\; x(0)=1,\, y(0)=-1$

解出齐次基本解矩阵

$$X(t) = \begin{pmatrix} e^{3t} & e^{t} \\ -e^{3t} & e^{t} \end{pmatrix}$$

由 $X\mathbf{c}' = \mathbf{f}$ 得 $\mathbf{c}'(t) = \begin{pmatrix} -e^{-t} \\ e^{t} \end{pmatrix}$，积分并代入初值解得

$$\begin{cases} x = 2e^{2t} - e^{t} \\ y = e^{t} \end{cases}$$

---

!!! info "说明"
    本讲义整理自 Savia 四讲 ODE 讲义及 Duo Xu《计算题类型整理》(2012)，公式按标准写法重排。如发现错误欢迎在评论区指出。
