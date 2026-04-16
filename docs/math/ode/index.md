---
comments: true
---
<div class="ode-notes" markdown>

# 常微分方程

!!! note "讲义说明"
    - **内容范围**：一阶微分方程、可降阶的二阶微分方程、高阶线性微分方程、线性微分方程组
    - **适用范围**：1 学分工科常微分方程

常微分方程（ODE）研究未知函数及其导数之间的关系式。本讲义按题型组织，每一类给出**形式、解法、例题**三段，便于按类查阅。

**基本概念速览**

- **阶**：方程中出现的最高阶导数的阶数。$F(x, y, y', \dots, y^{(n)}) = 0$ 为 $n$ 阶 ODE。
- **通解**：含 $n$ 个独立任意常数的解（$n$ = 方程阶数）。
- **特解**：由初值条件确定全部常数后的解。
- **初值问题**（Cauchy（柯西）问题）：方程 + 初值条件 $y(x_0) = y_0,\, y'(x_0) = y_1,\, \dots$
- **Picard（皮卡）存在唯一性定理**：$y' = f(x,y)$，若 $f$ 和 $\partial f / \partial y$ 在 $(x_0, y_0)$ 附近连续，则初值问题在某邻域内存在唯一解。

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

!!! example "例题 (20-21)"
    $\dfrac{\mathrm{d}y}{\mathrm{d}x} = (1-y^2)\,x$

    分离变量：$\dfrac{\mathrm{d}y}{1-y^2} = x\,\mathrm{d}x$，两端积分：

    $$\frac{1}{2}\ln\left|\frac{1+y}{1-y}\right| = \frac{x^2}{2} + C \;\Rightarrow\; \frac{1+y}{1-y} = C\,e^{x^2}$$

### 1.2 齐次方程

**形式**（右端只依赖 $y/x$）

$$\frac{\mathrm{d}y}{\mathrm{d}x} = f\!\left(\frac{y}{x}\right)$$

**解法**

令 $u = y/x$，则 $y = ux$，$\dfrac{\mathrm{d}y}{\mathrm{d}x} = u + x\dfrac{\mathrm{d}u}{\mathrm{d}x}$，化为关于 $u$ 的可分离方程：

$$x\frac{\mathrm{d}u}{\mathrm{d}x} = f(u) - u$$

!!! example "例题 (23-24)"
    $2xy\,y' = 4x^2 + 3y^2,\; y(1)=1$

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

### 1.4 Bernoulli（伯努利）方程

**形式**

$$\frac{\mathrm{d}y}{\mathrm{d}x} + p(x)\,y = f(x)\,y^{n},\quad n \ne 0,1$$

**解法**

令 $z = y^{1-n}$，代入化为关于 $z$ 的一阶线性方程：

$$\frac{\mathrm{d}z}{\mathrm{d}x} + (1-n)\,p(x)\,z = (1-n)\,f(x)$$

!!! warning
    $n=0$ 退化为线性方程；$n=1$ 退化为可分离方程；若 $n>0$，注意 $y\equiv 0$ 也是解。

!!! example "例题 (20-21)"
    $x\,y' - 4y = x^2\sqrt{y}$

    除以 $x$ 得 $y' - \dfrac{4}{x}y = x\sqrt{y}$（$n = \tfrac{1}{2}$）。令 $z = y^{1/2}$：

    $$z' - \frac{2}{x}z = \frac{x}{2}$$

    积分因子 $x^{-2}$，解得 $z = x^2\!\left(\tfrac{1}{2}\ln|x| + C\right)$，回代

    $$y = x^4\!\left(\tfrac{1}{2}\ln|x| + C\right)^{2}$$

### 1.5 Riccati（里卡提）方程

**形式**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = p(x)\,y^2 + q(x)\,y + r(x)$$

这是形式上最简单的非线性方程，一般不能用初等方法求解。

**解法**（已知一个特解 $y = \varphi_1(x)$ 时）

令 $u = y - \varphi_1(x)$，代入得

$$\frac{\mathrm{d}u}{\mathrm{d}x} = [2p\,\varphi_1 + q]\,u + p\,u^2$$

这是关于 $u$ 的 Bernoulli 方程（$n=2$），按 1.4 节方法求解。

!!! tip "识别技巧"
    如果题目给出了方程的一个特解，且方程含 $y^2$ 项，多半是 Riccati（里卡提）方程。

!!! example "例题 (23-24)"
    $y' + y^2 = \dfrac{2}{x^2}$

    提示一个解与 $\dfrac{1}{x}$ 成正比。试 $y_1 = \dfrac{a}{x}$，代入得 $a^2 - a = 2$，取 $y_1 = \dfrac{2}{x}$。令 $u = y - \dfrac{2}{x}$：

    $$u' + \frac{4}{x}\,u = -u^2$$

    这是 Bernoulli 方程（$n=2$），令 $z = u^{-1}$：

    $$z' - \frac{4}{x}\,z = 1$$

    解得 $z = Cx^4 - \dfrac{x}{3}$，回代 $y = \dfrac{2}{x} + \dfrac{1}{z}$：

    $$y = \frac{2}{x} + \frac{3}{3Cx^4 - x}$$

### 1.6 全微分方程

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

!!! example "例题 (23-24)"
    $(y^2 + 3xy^3)\,\mathrm{d}x + (1 + xy)\,\mathrm{d}y = 0$

    $M_y \ne N_x$。算 $\dfrac{N_x - M_y}{M} = -\dfrac{3}{y}$，得积分因子 $\mu(y) = y^{-3}$。方程乘 $\mu$：

    $$\left(\frac{1}{y} + 3x\right)\mathrm{d}x + \left(\frac{1}{y^3} + \frac{x}{y^2}\right)\mathrm{d}y = 0$$

    凑 $u = \dfrac{x}{y} + \dfrac{3x^2}{2} + \varphi(y)$，由 $\partial_y u = N$ 得 $\varphi(y) = -\dfrac{1}{2y^2}$。通解：

    $$\frac{x}{y} + \frac{3x^2}{2} - \frac{1}{2y^2} = C$$

!!! example "例题 2 (24-25)"
    $(2xy^2 - y)\,\mathrm{d}x + (3y^3 + x)\,\mathrm{d}y = 0$，$x > 0$

    $\dfrac{N_x - M_y}{M} = \dfrac{1 - (4xy - 1)}{2xy^2 - y} = -\dfrac{2}{y}$，得积分因子 $\mu(y) = \dfrac{1}{y^2}$。乘入后：

    $$2x\,\mathrm{d}x + 3y\,\mathrm{d}y + \frac{x\,\mathrm{d}y - y\,\mathrm{d}x}{y^2} = 0$$

    利用凑微分 $\dfrac{x\,\mathrm{d}y - y\,\mathrm{d}x}{y^2} = -\mathrm{d}\!\left(\dfrac{x}{y}\right)$，直接积分：

    $$x^2 + \frac{3}{2}y^2 - \frac{x}{y} = C$$

### 1.7 变量代换（一阶方程的降维打击）

对"看起来像齐次/线性但不完全是"的方程，换元化归。

!!! example "例 1 (20-21)"
    $y' = \cos^2(x+y)$

    令 $u = x+y$，$u' = 1 + y'$：$u' = 1 + \cos^2 u$（可分离）。得 $\cot(x+y) + x = C$。

!!! example "例 2 (20-21)"
    $y' = 2\!\left(\dfrac{y+2}{x+y-1}\right)^{2}$

    解 $\begin{cases} x+y-1=0 \\ y+2=0 \end{cases}$ 得 $(3,-2)$。令 $X=x-3,\; Y=y+2$：

    $$\frac{\mathrm{d}Y}{\mathrm{d}X} = 2\!\left(\frac{Y}{X+Y}\right)^2$$

    再令 $u = Y/X$ 化为齐次方程。

### 1.8 x, y 互换

把 $x$ 视作 $y$ 的函数，伯努利型有时反过来就是线性。

!!! example "例题 (23-24)"
    $\dfrac{\mathrm{d}y}{\mathrm{d}x} = \dfrac{y}{x(x^2y^2+1)}$

    取倒数：$\dfrac{\mathrm{d}x}{\mathrm{d}y} = \dfrac{x}{y} + x^3 y$（以 $x$ 为未知量的 Bernoulli 方程，$n=3$）。令 $z = x^{-2}$：

    $$\frac{\mathrm{d}z}{\mathrm{d}y} + \frac{2}{y}z = -2y$$

    线性方程求解后回代（注意 $y=0$ 也是解）。

!!! example "例题 2 (24-25夏)"
    $y\,\mathrm{d}x - x(1 + x^2y^3)\,\mathrm{d}y = 0$

    改写为 $\dfrac{\mathrm{d}x}{\mathrm{d}y} = \dfrac{x}{y} + x^3 y^2$（以 $x$ 为未知量的 Bernoulli 方程，$n=3$）。令 $z = x^{-2}$：

    $$z' + \frac{2}{y}\,z = -2y^2$$

    积分因子 $y^2$，解得 $z = -\dfrac{2y^3}{5} + \dfrac{C}{y^2}$，回代 $x^{-2} = z$：

    $$\frac{1}{x^2} = \frac{C}{y^2} - \frac{2y^3}{5}$$

### 1.9 Clairaut（克莱罗）方程与参数表示

**Clairaut（克莱罗）方程**

$$y = xy' + \psi(y')$$

**解法**：令 $p = y'$，两端对 $x$ 微分得 $p = p + (x + \psi'(p))\,p'$，即

$$[x + \psi'(p)]\,p' = 0$$

- $p' = 0$：$p = C$，通解 $y = Cx + \psi(C)$（直线族）。
- $x + \psi'(p) = 0$：与 $y = xp + \psi(p)$ 联立消去 $p$，得**奇解**（直线族的包络线）。

!!! example "例题 (24-25)"
    $y = 2xy' - 3(y')^2$

    这不是标准 Clairaut 但可用参数法。令 $p = y'$，两端对 $x$ 微分：

    $$p = 2p + 2x\,p' - 6p\,p' \;\Rightarrow\; \frac{\mathrm{d}x}{\mathrm{d}p} + \frac{2}{p}\,x = 6$$

    一阶线性方程，解得 $x = 2p + \dfrac{C}{p^2}$。回代 $y = 2xp - 3p^2$：

    $$\begin{cases} x = 2p + Cp^{-2} \\ y = p^2 + 2Cp^{-1} \end{cases} \quad\text{（参数形式通解）}$$

    令 $p' = 0$ 还可得奇解 $y = 0$。

---

## 二、可降阶的二阶微分方程

### 2.1 不显含 y 的方程

**形式** $y'' = f(x,\, y')$

**解法**：令 $p = y'$，则 $p' = y''$，化为一阶方程 $p' = f(x,p)$。解出 $p(x)$ 后再积一次分得 $y$。

!!! example "例题 (20-21)"
    $y'' - y' = 12x^2 - 6$

    令 $p = y'$：$p' - p = 12x^2 - 6$（一阶线性）。用公式：

    $$p = e^{x}\!\left[\int (12x^2 - 6)\,e^{-x}\,\mathrm{d}x + C_1\right] = -6(2x^2 + 4x + 3) + C_1 e^{x}$$

    再积分：

    $$y = -4x^3 - 12x^2 - 18x + C_1 e^{x} + C_2$$

### 2.2 不显含 x 的方程

**形式** $y'' = f(y,\, y')$

**解法**：令 $p = y'$，视 $p$ 为 $y$ 的函数，则

$$y'' = \frac{\mathrm{d}p}{\mathrm{d}x} = p\,\frac{\mathrm{d}p}{\mathrm{d}y}$$

方程化为 $p\dfrac{\mathrm{d}p}{\mathrm{d}y} = f(y,p)$。解出 $p = \varphi(y)$ 后再由 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\varphi(y)$ 分离积分。

!!! example "例题 (23-24)"
    $yy'' - (y')^2 = yy',\; y(0)=1,\, y'(0)=2$

    令 $p = y'$，$y'' = p\,p'_y$：

    $$yp\,p'_y - p^2 = yp \;\Rightarrow\; p'_y - \frac{p}{y} = 1$$

    一阶线性解得 $p = y(\ln|y| + C_1)$，由初值 $C_1 = 2$。再分离得

    $$\ln\!\bigl|\ln|y| + 2\bigr| = x + C_2$$

!!! example "例题 2 (24-25)"
    $y'' = 2yy',\; y(0)=1,\, y'(0)=2$

    令 $p = y'$，$y'' = p\,\dfrac{\mathrm{d}p}{\mathrm{d}y}$：

    $$p\,\frac{\mathrm{d}p}{\mathrm{d}y} = 2yp \;\Rightarrow\; \frac{\mathrm{d}p}{\mathrm{d}y} = 2y$$

    积分得 $p = y^2 + C$。由 $y(0)=1,\, y'(0)=2$ 得 $C=1$。分离变量：

    $$\frac{\mathrm{d}y}{y^2 + 1} = \mathrm{d}x \;\Rightarrow\; \arctan y = x + C_2$$

    由初值 $C_2 = \dfrac{\pi}{4}$，故 $y = \tan\!\left(x + \dfrac{\pi}{4}\right)$。

!!! example "例题 3 (24-25夏)"
    $y'' = (y')^3 + y',\; y(0) = \dfrac{\pi}{4},\, y'(0) = 1$

    令 $p = y'$，$y'' = p\,\dfrac{\mathrm{d}p}{\mathrm{d}y}$：

    $$p\,\frac{\mathrm{d}p}{\mathrm{d}y} = p(p^2+1) \;\Rightarrow\; \frac{\mathrm{d}p}{\mathrm{d}y} = p^2 + 1$$

    分离：$\dfrac{\mathrm{d}p}{p^2+1} = \mathrm{d}y$，积分得 $\arctan p = y + C_1$。由初值 $C_1 = 0$，故 $p = \tan y$。

    再分离 $\cot y\,\mathrm{d}y = \mathrm{d}x$，积分得 $\ln|\sin y| = x + C_2$。由 $y(0) = \dfrac{\pi}{4}$：

    $$\sin y = \frac{1}{\sqrt{2}}\,e^{x}$$

---

## 三、高阶线性微分方程

**方法总览**（$n$ 阶线性方程 $y^{(n)} + a_1 y^{(n-1)} + \cdots + a_n y = f(x)$）

|  | 齐次 $f(x)=0$ | 非齐次 $f(x)\ne 0$ |
|--|----------------|---------------------|
| **常系数** | 特征方程 $D(\lambda)=0$：单根 $e^{\lambda x}$、复根 $e^{\alpha x}\cos/\sin\beta x$、$k$ 重根 $\times\,x^{0},\dots,x^{k-1}$（§3.1） | 待定系数法：设 $y^*=x^k R_m(x)e^{ax}$，叠加原理（§3.2） |
| **非常系数** | Euler（欧拉）方程 $x=e^t$ 化常系数（§3.3）；已知一解 $y_1$ 用 Liouville（刘维尔）公式 / 降阶法（§3.4） | 常数变易法（§3.5） |

---

### 3.1 n 阶常系数齐次线性方程

**形式**

$$y^{(n)} + a_1 y^{(n-1)} + \cdots + a_{n-1} y' + a_n y = 0$$

**解法：特征方程法**

写出特征方程 $D(\lambda) = \lambda^n + a_1\lambda^{n-1} + \cdots + a_n = 0$，求出 $n$ 个特征根，按规则写出基础解系：

- 实根 $\lambda$（$k$ 重）：$e^{\lambda x},\; x e^{\lambda x},\; \dots,\; x^{k-1}e^{\lambda x}$
- 一对共轭复根 $\alpha \pm \mathrm{i}\beta$（$k$ 重）：

$$e^{\alpha x}\cos\beta x,\; x e^{\alpha x}\cos\beta x,\; \dots,\; x^{k-1}e^{\alpha x}\cos\beta x$$
$$e^{\alpha x}\sin\beta x,\; x e^{\alpha x}\sin\beta x,\; \dots,\; x^{k-1}e^{\alpha x}\sin\beta x$$

通解为所有基础解的线性组合。

!!! example "例题 (23-24)"
    $y^{(4)} + 2y^{(3)} + 3y'' + 2y' + y = 0$

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

!!! example "例题"
    $y'' - y = e^{x}\sin 2x$

    齐次：$\lambda = \pm 1$，$\bar{y} = c_1 e^{x} + c_2 e^{-x}$。$1 \pm 2\mathrm{i}$ 非特征根，$k=0$。设

    $$y^{*} = e^{x}(A\cos 2x + B\sin 2x)$$

    代入比较系数得 $A = B = -\tfrac{1}{8}$：

    $$y = c_1 e^{x} + c_2 e^{-x} - \tfrac{1}{8} e^{x}(\cos 2x + \sin 2x)$$

!!! example "例题 2 (23-24)"
    $y'' + y = 2\sqrt{2}\sin\!\left(x - \dfrac{\pi}{4}\right)$

    先用和差化积展开右端：

    $$2\sqrt{2}\sin\!\left(x - \frac{\pi}{4}\right) = 2\sqrt{2}\!\left(\sin x \cos\frac{\pi}{4} - \cos x \sin\frac{\pi}{4}\right) = 2\sin x - 2\cos x$$

    齐次特征根 $\lambda = \pm\mathrm{i}$，$0 \pm 1\cdot\mathrm{i}$ 是特征根（$k=1$）。设 $y^{*} = x(A\cos x + B\sin x)$，代入得

    $$y^{*\prime\prime} + y^{*} = -2A\sin x + 2B\cos x = 2\sin x - 2\cos x$$

    解得 $A = -1,\, B = -1$：

    $$y = c_1\cos x + c_2\sin x - x(\cos x + \sin x)$$

!!! warning "先化简再设特解"
    含复合三角函数（如 $\sin(x-\pi/4)$）时，务必先展开为 $\sin x$, $\cos x$ 的线性组合，再判断 $k$ 并设特解形式。

### 3.3 Euler（欧拉）方程

**形式**

$$a_0 x^{n} y^{(n)} + a_1 x^{n-1} y^{(n-1)} + \cdots + a_{n-1} x y' + a_n y = f(x)$$

**解法**：令 $t = \ln|x|$，则

$$x y' = \dot{y},\qquad x^2 y'' = \ddot{y} - \dot{y}$$

方程化为关于 $t$ 的常系数线性方程，按 3.1/3.2 求解后回代 $t=\ln|x|$。

!!! example "例题 (23-24)"
    $x^2 y'' - 7xy' + 16y = 0$

    令 $t = \ln|x|$：$\ddot{y} - 8\dot{y} + 16 y = 0$。特征方程 $\lambda^2 - 8\lambda + 16 = 0$，$\lambda = 4$（二重）。

    $$y = (c_1 + c_2 t)\,e^{4t} = (c_1 + c_2 \ln|x|)\,x^4$$

!!! example "例题 2 (24-25)"
    $x^2 y'' - 5xy' + 9y = x\ln x$

    令 $t = \ln|x|$，$x = e^t$：$\ddot{y} - 6\dot{y} + 9y = te^{t}$。特征方程 $\lambda^2 - 6\lambda + 9 = 0$，$\lambda = 3$（二重）。

    齐次通解 $\bar{y} = (c_1 + c_2 t)\,e^{3t}$。右端 $te^{t}$：$a = 1$ 非特征根，$k = 0$，设 $y^{*} = (At+B)\,e^{t}$。代入比较系数得 $A = B = \dfrac{1}{4}$。回代 $t = \ln|x|$：

    $$y = (c_1 + c_2\ln|x|)\,x^3 + \frac{x}{4}(1 + \ln|x|)$$

!!! example "例题 3 (24-25夏)"
    $x^2 y'' - xy' - 3y = 2x^3$，$x > 0$

    令 $t = \ln x$：$\ddot{y} - 2\dot{y} - 3y = 2e^{3t}$。特征根 $\lambda = 3, -1$。

    $a = 3$ 是单特征根（$k=1$），设 $y^{*} = Ate^{3t}$。代入得 $4A = 2$，$A = \dfrac{1}{2}$。回代：

    $$y = c_1 x^3 + c_2 x^{-1} + \frac{1}{2} x^3 \ln x$$

### 3.4 二阶变系数齐次线性方程（已知一解）

**形式** $y'' + p(x)\,y' + q(x)\,y = 0$

**解法（Liouville（刘维尔）公式）**：若已知一个非零解 $y_1$，则

$$y = y_1\!\left[c_1 + c_2 \int \frac{1}{y_1^{2}}\,e^{-\int p(x)\,\mathrm{d}x}\,\mathrm{d}x\right]$$

若 $2p'(x) + p^2(x) - 4q(x) = a$（常数），作代换 $y = u\,e^{-\int p/2\,\mathrm{d}x}$，方程化为 $u'' - \tfrac{a}{4}u = 0$。

!!! example "例题 (24-25夏)"
    $(x^2 - 1)\,y'' - 2xy' + 2y = 0$

    观察到 $y_1 = x$ 是解（代入：$0 - 2x + 2x = 0$ ✓）。化标准形：$p(x) = \dfrac{-2x}{x^2-1}$。由 Liouville 公式求 $y_2$：

    $$y_2 = x \int \frac{1}{x^2}\,e^{\int \frac{2x}{x^2-1}\,\mathrm{d}x}\,\mathrm{d}x = x \int \frac{x^2-1}{x^2}\,\mathrm{d}x = x\!\left(x - \frac{1}{x} + C\right) \cdots$$

    取 $C = 0$ 并挑出与 $y_1$ 线性无关的部分：$y_2 = x^2 - 1$。通解：

    $$y = c_1 x + c_2(x^2 - 1)$$

!!! tip "如何猜特解"
    对变系数方程，优先试低次多项式 $1, x, x^2$ 或指数函数 $e^{ax}$，代入检验。

!!! example "例题 2 (24-25)"
    $(1-x^2)\,y''' + 2xy'' - 2y' = 0$

    令 $z = y'$，方程降为 $(1-x^2)\,z'' + 2xz' - 2z = 0$，即上题同型。观察得 $z_1 = x$。

    由 Liouville 公式（$p(x) = \dfrac{2x}{1-x^2}$）得 $z_2 = x^2 + 1$（取线性无关部分 $1+x^2$）。

    $$z = C_1 x + C_2(1+x^2) \;\Rightarrow\; y = C_1 x^2 + C_2(x^3 + 3x) + C_3$$

### 3.5 二阶变系数非齐次线性方程（常数变易法）

**形式** $y'' + p(x)\,y' + q(x)\,y = f(x)$，已知齐次基础解系 $y_1, y_2$。

**通解公式**：记 Wronskian（朗斯基）行列式

$$W(x) = \begin{vmatrix} y_1(x) & y_2(x) \\ y_1'(x) & y_2'(x) \end{vmatrix}$$

则

$$y(x) = y_1(x)\!\left[c_1 - \int \frac{y_2(x) f(x)}{W(x)}\,\mathrm{d}x\right] + y_2(x)\!\left[c_2 + \int \frac{y_1(x) f(x)}{W(x)}\,\mathrm{d}x\right]$$

!!! example "例题 1 (23-24)"
    $(x+2)\,y'' + 2y' - (x+2)\,y = x^2 + 2x + 2$

    除以 $(x+2)$ 化标准形：

    $$y'' + \frac{2}{x+2}\,y' - y = \frac{x^2 + 2x + 2}{x+2}$$

    这里 $p(x) = \dfrac{2}{x+2}$，$q(x) = -1$。验证

    $$2p'(x) + p^2(x) - 4q(x) = -\frac{4}{(x+2)^2} + \frac{4}{(x+2)^2} + 4 = 4$$

    为常数 $a = 4$。作代换 $y = u\,e^{-\int p/2\,\mathrm{d}x} = \dfrac{u}{x+2}$，方程化为

    $$u'' - u = 0$$

    得 $u_1 = e^{x},\; u_2 = e^{-x}$，于是齐次基础解系为

    $$y_1 = \frac{e^{x}}{x+2},\quad y_2 = \frac{e^{-x}}{x+2}$$

    Wronskian 行列式 $W = -\dfrac{2}{(x+2)^2}$。由常数变易公式求特解，化简后

    $$y = c_1\frac{e^{x}}{x+2} + c_2\frac{e^{-x}}{x+2} - \frac{x^2 + 2x + 2}{x+2}$$

!!! example "例题 2 (17-18)"
    已知 $y_1 = \dfrac{e^{x}}{x}$ 是 $y'' + \dfrac{2}{x} y' - y = 0$ 的解，求 $y'' + \dfrac{2}{x} y' - y = x$ 的通解。

    由 Liouville 公式得另一基础解 $y_2 = \dfrac{e^{-x}}{x}$。$W = -\dfrac{2}{x^2}$。代入常数变易公式化简后：

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

!!! example "例题 (23-24)"
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

!!! example "例题 (23-24)"
    $\begin{cases} x' = 2x - y \\ y' = x + 2y + 2e^{2t} \end{cases},\; x(0)=1,\, y(0)=-1$

    解出齐次基本解矩阵

    $$X(t) = \begin{pmatrix} e^{3t} & e^{t} \\ -e^{3t} & e^{t} \end{pmatrix}$$

    由 $X\mathbf{c}' = \mathbf{f}$ 得 $\mathbf{c}'(t) = \begin{pmatrix} -e^{-t} \\ e^{t} \end{pmatrix}$，积分并代入初值解得

    $$\begin{cases} x = 2e^{2t} - e^{t} \\ y = e^{t} \end{cases}$$

!!! tip "非齐次项为常数时，可设常向量特解"
    当 $\mathbf{f}(t) = \mathbf{b}$（常向量）时，设 $\mathbf{x}^{*} = \mathbf{a}$（常向量），代入 $A\mathbf{a} + \mathbf{b} = 0$ 解出 $\mathbf{a}$。

!!! example "例题 2 (24-25)"
    $\begin{cases} x' = 3x - 2y + 15 \\ y' = -x + 3y - 2z \\ z' = -y + 3z \end{cases}$

    齐次部分 $A = \begin{pmatrix} 3 & -2 & 0 \\ -1 & 3 & -2 \\ 0 & -1 & 3 \end{pmatrix}$，$\lambda_1 = 1,\, \lambda_2 = 3,\, \lambda_3 = 5$。对应特征向量：

    $$\boldsymbol{\xi}_1 = \begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix},\quad \boldsymbol{\xi}_2 = \begin{pmatrix} -2 \\ 0 \\ 1 \end{pmatrix},\quad \boldsymbol{\xi}_3 = \begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix}$$

    设常向量特解 $\mathbf{x}^{*} = (A, B, C)^T$，由 $A\mathbf{a} + \mathbf{b} = 0$ 解得 $A = -7,\, B = -3,\, C = -1$。通解：

    $$\mathbf{x} = c_1 \begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix} e^{t} + c_2 \begin{pmatrix} -2 \\ 0 \\ 1 \end{pmatrix} e^{3t} + c_3 \begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix} e^{5t} - \begin{pmatrix} 7 \\ 3 \\ 1 \end{pmatrix}$$

### 4.3 消元法

当方程组只含 2 个未知函数时，消元法往往比矩阵特征根法更简便。

**思路**：从方程组中消去一个未知函数，化为一个高阶常系数方程求解。

!!! example "例题"
    $\begin{cases} x' = 2x - y \\ y' = x + 2y \end{cases}$

    由第一式 $y = 2x - x'$，代入第二式：

    $$y' = 2x' - x'' = x + 2(2x - x') \;\Rightarrow\; x'' - 4x' + 3x = 0$$

    特征方程 $\lambda^2 - 4\lambda + 3 = 0$，$\lambda = 1, 3$。$x = c_1 e^{t} + c_2 e^{3t}$，回代 $y = 2x - x'$ 得

    $$y = c_1 e^{t} - c_2 e^{3t}$$

!!! tip "何时用消元法"
    变量只有 2 个且系数为常数时，消元法计算量通常小于求特征向量。变量 3 个及以上时建议用矩阵法。

### 4.4 二阶方程组化为一阶方程组

!!! example "例题 (24-25夏)"
    $\begin{cases} x'' = 6x + 2y \\ y'' = 3x + 7y \end{cases}$

    **消元法**：由第一式 $y = \dfrac{x'' - 6x}{2}$，代入第二式消去 $y$：

    $$y'' = \frac{x^{(4)} - 6x''}{2} = 3x + 7 \cdot \frac{x'' - 6x}{2}$$

    化简得 $x^{(4)} - 13x'' + 36x = 0$。特征方程 $\mu^4 - 13\mu^2 + 36 = 0$，令 $s = \mu^2$：

    $$s^2 - 13s + 36 = 0 \;\Rightarrow\; s = 4,\, 9 \;\Rightarrow\; \mu = \pm 2,\, \pm 3$$

    $$x = c_1 e^{2t} + c_2 e^{-2t} + c_3 e^{3t} + c_4 e^{-3t}$$

    回代 $y = \dfrac{x'' - 6x}{2}$：

    $$y = -c_1 e^{2t} - c_2 e^{-2t} + \frac{3}{2}c_3 e^{3t} + \frac{3}{2}c_4 e^{-3t}$$

---

## 五、证明题选讲

本节收录历年卷中的典型证明题。

!!! info "证明题常用定理与工具"
    第五部分的证明题虽然题面短，但默认你已经会用一批"基础工具"。先把这些工具和典型用途梳理清楚，再看后面的证明会顺很多。

    | 工具 | 核心结论 | 本节中的典型用途 |
    |------|----------|------------------|
    | 解的线性叠加性 | 齐次线性方程的任意线性组合仍是解 | 构造辅助函数 $\varphi(x)$，把"两个解的关系"转化为"新解是否恒为零" |
    | 唯一性定理 | 二阶线性方程在给定 $y(x_0), y'(x_0)$ 时解唯一 | 若某解在一点满足 $y(x_0)=y'(x_0)=0$，则该解只能是零解 |
    | Wronskian（朗斯基）判别 | 对二阶齐次线性方程，两解线性无关 $\Leftrightarrow W(x)\neq 0$ | 判断两个解能否在同一点同时为零，或是否构成基础解系 |
    | Liouville（刘维尔）公式 | $W' + p(x)W = 0$，故 $W(x)=Ce^{-\int p(x)\,\mathrm{d}x}$ | 说明只要某点 $W\neq 0$，则整个区间都不为零 |
    | Cramer 法则 | 线性方程组在系数行列式非零时有唯一解 | 由两组基础解反推方程系数 $p(x), q(x)$ |
    | Euler（欧拉）齐次函数定理 | 若 $P,Q$ 为 $m$ 次齐次函数，则 $xP_x+yP_y=mP,\;xQ_x+yQ_y=mQ$ | 化简积分因子证明中的偏导表达式 |
    | Riccati（里卡提）特解降阶法 | 已知 Riccati 方程一个特解时，可令 $y=y_1+u$ 降为 Bernoulli（伯努利）方程 | 证明"已知一解可化简原方程" |

!!! tip "学习顺序"
    建议先掌握"唯一性定理 + Wronskian + Cramer 法则"这三组工具，再看 5.1 和 5.2；5.3 和 5.4 更像是"结构识别题"，重点是看到题目后知道该套哪个工具。

### 5.1 线性无关解无公共零点

!!! example "命题 (24-25 / 23-24)"
    设 $u(x), v(x)$ 是 $y'' + p(x)y' + q(x)y = 0$ 的两个线性无关解（$p, q$ 连续），则 $u, v$ 不存在公共零点。


    **证明**：反设存在 $x^{*}$ 使 $u(x^{*}) = v(x^{*}) = 0$。则 Wronskian 行列式

    $$W(x^{*}) = \begin{vmatrix} u(x^{*}) & v(x^{*}) \\ u'(x^{*}) & v'(x^{*}) \end{vmatrix} = 0$$

    但 $u, v$ 线性无关 $\Rightarrow$ $W(x) \ne 0$（$\forall x$），矛盾。证毕。

!!! note "另证（不用 Wronskian）"
    若 $u(x^{*}) = 0$，由 $u \not\equiv 0$ 知 $u'(x^{*}) \ne 0$（否则由唯一性定理 $u \equiv 0$）。同理 $v'(x^{*}) \ne 0$。构造 $\varphi(x) = u'(x^{*})\,v(x) - v'(x^{*})\,u(x)$，它也是齐次方程的解，且 $\varphi(x^{*}) = \varphi'(x^{*}) = 0$，由唯一性 $\varphi \equiv 0$，即 $u, v$ 线性相关，矛盾。

### 5.2 系数由基础解系唯一确定

!!! example "命题 (23-24)"
    设 $y_1, y_2$ 是 $y'' + p(x)y' + q(x)y = 0$ 的两个线性无关解，则 $p(x), q(x)$ 由 $y_1, y_2$ 唯一确定。


    **证明**：由

    $$\begin{cases} y_1'' + p\,y_1' + q\,y_1 = 0 \\ y_2'' + p\,y_2' + q\,y_2 = 0 \end{cases}$$

    将其视为关于 $p, q$ 的线性方程组，系数行列式为

    $$\Delta = \begin{vmatrix} y_1' & y_1 \\ y_2' & y_2 \end{vmatrix} = -(y_1 y_2' - y_1' y_2) = -W \ne 0$$

    由 Cramer 法则，$p, q$ 有唯一解：

    $$p = \frac{y_1'' y_2 - y_2'' y_1}{W},\quad q = \frac{y_2'' y_1' - y_1'' y_2'}{W}$$

    故 $p(x), q(x)$ 被 $y_1, y_2$ 唯一确定。证毕。

### 5.3 齐次函数的积分因子

!!! example "命题 (24-25夏)"
    若 $P(x,y)\,\mathrm{d}x + Q(x,y)\,\mathrm{d}y = 0$ 中 $P, Q$ 均为 $m$ 次齐次函数（即 $P(tx,ty) = t^m P(x,y)$），则 $\mu = \dfrac{1}{Px + Qy}$ 是方程的一个积分因子（当 $Px + Qy \ne 0$）。


    **证明**：由 Euler 齐次函数定理，$m$ 次齐次函数满足 $xP_x + yP_y = mP$，$xQ_x + yQ_y = mQ$。

    需验证 $\mu P\,\mathrm{d}x + \mu Q\,\mathrm{d}y$ 是全微分，即 $\dfrac{\partial(\mu P)}{\partial y} = \dfrac{\partial(\mu Q)}{\partial x}$。

    记 $D = Px + Qy$。展开

    $$\frac{\partial(\mu P)}{\partial y} = \frac{P_y D - P(P_x y + Q + Q_y y + P_y x - P_y x)}{D^2}$$

    经齐次性化简（利用 Euler 定理及 $P_y = Q_x$ 不必要成立的一般情况），可对称地证得两侧相等。证毕。

### 5.4 Riccati（里卡提）方程化为 Bernoulli（伯努利）方程

!!! example "命题 (23-24)"
    若 $y_1$ 是 Riccati 方程 $y' = a(x) + b(x)\,y + c(x)\,y^2$ 的一个解，则代换 $y = y_1 + u$ 可将方程化为关于 $u$ 的 Bernoulli 方程。


    **证明**：将 $y = y_1 + u$ 代入，利用 $y_1' = a + by_1 + cy_1^2$：

    $$y_1' + u' = a + b(y_1 + u) + c(y_1 + u)^2$$

    $$u' = (b + 2cy_1)\,u + c\,u^2$$

    这正是关于 $u$ 的 Bernoulli 方程（$n = 2$）。证毕。

---

!!! info "说明"
    如发现错误欢迎在评论区指出。
