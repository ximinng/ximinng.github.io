---
permalink: /
title: "Ximing Xing, XiMing Xing, ximingxing, 行习铭, ximing xing, ximing, ximinng"
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. student in Software Engineering at Beihang University, advised
by [Prof. Qian Yu](https://yuqian1023.github.io/). My research focuses on deep generative models, vector art synthesis
and robust machine learning.

<!-- https://github.com/idealclover/GitHub-Star-Counter -->
<!-- <a href="https://github.com/ximinng/">
  <img src="https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub%20Stars&style=for-the-badge&query=%24.stars&url=https://api.github-star-counter.workers.dev/user/ximinng">
</a>
<a href="https://huggingface.co/xingxm">
  <img src="https://img.shields.io/badge/huggingface-space-ffcc00?logo=huggingface&style=for-the-badge" alt="GitHub Stars">
</a> -->
[![github](https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub%20Stars&style=for-the-badge&query=%24.stars&url=https://api.github-star-counter.workers.dev/user/ximinng)](https://github.com/ximinng/)
[![blog](https://img.shields.io/badge/huggingface-space-ffcc00?logo=huggingface&style=for-the-badge)](https://huggingface.co/xingxm)

# 🔥 News

- *2024.02*: &nbsp;🎉🎉 Our paper [SVGDreamer](https://ximinng.github.io/SVGDreamer-project/) accepted by CVPR'2024!
- *2023.12*: &nbsp;🎉🎉 We released the [PyTorch-SVGRender](https://github.com/ximinng/PyTorch-SVGRender).
  Pytorch-SVGRender is
  the go-to library for state-of-the-art differentiable rendering methods for SVG generation.

<!-- 
# 📄 Writing
Blog: "[Robust Deep Leanring based on Meta-Learning]&#40;https://www.craft.do/s/N0N70a75WHn9iZ&#41;"
January 1, 2022 · 10min · Ximing Xing
-->

# 📝 Publications

<!-- paper 8 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/svgfusion_cover.png' alt="SVGFusion"></div></div>
<div class='paper-box-text' markdown="1">
[SVGFusion: Scalable Text-to-SVG Generation via Vector Space Diffusion](https://arxiv.org/abs/2412.10437)

**Ximing Xing**, Juncheng Hu, Jing Zhang, Dong Xu, Qian Yu

<b><u>TL;DR:</u></b> SVGFusion is a novel Text-to-SVG model that generates high-quality vector graphics by learning continuous latent space representations.

[**Project**](https://ximinng.github.io/SVGFusionProject/) | [**Code**](https://github.com/ximinng/SVGFusion)
</div>
</div>

<!-- paper 7 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/svgdreamerv2_cover.png' alt="SVGDreamer++"></div></div>
<div class='paper-box-text' markdown="1">
[SVGDreamer++: Advancing Editability and Diversity in Text-Guided SVG Generation](https://arxiv.org/abs/2411.17832)

**Ximing Xing**, Qian Yu, Chuang Wang, Haitao Zhou, Jing Zhang, Dong Xu

<b><u>TL;DR:</u></b> Upgrade version of SVGDreamer: A new optimization-based Text-to-SVG method 

[**Project**](https://ximinng.github.io/SVGDreamerV2Project/) | [**Code**](https://github.com/ximinng/SVGDreamerV2)
</div>
</div>

<!-- paper 6 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/llm4svg_cover.png' alt="LLM4SVG"></div></div>
<div class='paper-box-text' markdown="1">
[Empowering LLMs to Understand and Generate Complex Vector Graphics](https://arxiv.org/abs/2412.11102)

**Ximing Xing**, Juncheng Hu, Guotao Liang, Jing Zhang, Dong Xu, Qian Yu

<b><u>TL;DR:</u></b> LLM4SVG enables LLMs to understand and generate vector graphics using SVG Semantic Tokens.

[**Project**](https://ximinng.github.io/LLM4SVGProject/) | [**Code**](https://github.com/ximinng/LLM4SVG)
</div>
</div>

<!-- paper 5 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/vectorpainter-cover.png' alt="VectorPainter"></div></div>
<div class='paper-box-text' markdown="1">
[VectorPainter: Advanced Stylized Vector Graphics Synthesis Using Stroke-Style Priors](https://arxiv.org/abs/2405.02962)

Juncheng Hu, **Ximing Xing**, Jing Zhang, Qian Yu

<b><u>TL;DR:</u></b> VectorPainter synthesizes text-guided vector graphics by imitating strokes.

[//]: # ([**Project**]&#40;https://ximinng.github.io/SVGDreamerV2Project/&#41; | [**Code**]&#40;https://github.com/ximinng/SVGDreamerV2&#41;)
</div>
</div>

<!-- paper 4 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/svgdreamerv1_cover.png' alt="SVGDreamer"></div></div>
<div class='paper-box-text' markdown="1">
[SVGDreamer: Text Guided SVG Generation with Diffusion Model](https://arxiv.org/abs/2312.16476)

**Ximing Xing**, Chuang Wang, Haitao Zhou, Jing Zhang, Dong Xu, Qian Yu

<b><u>TL;DR:</u></b> SVGDreamer introduces semantic-driven vectorization (SIVE) and particle-based distillation (VPSD) to generate editable, high-quality SVGs with better shape control and diversity.

IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024

[**Project**](https://ximinng.github.io/DiffSketcher-project/) | [**Code**](https://github.com/ximinng/PyTorch-SVGRender) | [**Blog**](https://huggingface.co/blog/xingxm/svgdreamer)
</div>
</div>

<!-- paper 3 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">NIPS 2023</div><img src='images/diffsketcher_cover.png' alt="DiffSketcher"></div></div>
<div class='paper-box-text' markdown="1">
[DiffSketcher: Text Guided Vector Sketch Synthesis through Latent Diffusion Models](https://arxiv.org/abs/2306.14685)

**Ximing Xing**, Chuang Wang, Haitao Zhou, Jing Zhang, Qian Yu, Dong Xu

<b><u>TL;DR:</u></b> DiffSketcher pioneered the use of diffusion models for text-to-vector sketch generation.

Advances in Neural Information Processing Systems (NeurIPS), 2023

[**Project**](https://ximinng.github.io/DiffSketcher-project/) | [**Code**](https://github.com/ximinng/DiffSketcher)
</div>
</div>

<!-- paper 2 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/Inv-by-Inv-teaser.png' alt="Inversion-By-Inversion"></div></div>
<div class='paper-box-text' markdown="1">

[Inversion-by-Inversion: Exemplar-based Sketch-to-Photo Synthesis via Stochastic Differential Equations without Training](https://arxiv.org/abs/2308.07665)

**Ximing Xing**, Chuang Wang, Haitao Zhou, Zhihao Hu, Chongxuan Li, Dong Xu, Qian Yu

<b><u>TL;DR:</u></b> Free training for sketch control image synthesis via Stochastic Differential Equations (SDEs).

[**Project**](https://ximinng.github.io/inversion-by-inversion-project/) | [**Code
**](https://github.com/ximinng/inversion-by-inversion)
</div>
</div>

<!-- paper 1 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2021</div><img src='images/DualGraph-cover.png' alt="DualGraph"></div></div>
<div class='paper-box-text' markdown="1">

[A Graph-Based Method for Reasoning About Label Noise](https://openaccess.thecvf.com/content/CVPR2021/papers/Zhang_DualGraph_A_Graph-Based_Method_for_Reasoning_About_Label_Noise_CVPR_2021_paper.pdf)

HaiYang Zhang, **Ximing Xing**, Liang Liu

<b><u>TL;DR:</u></b> DualGraph: The first method for label noise processing based on graph neural networks.

IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2021
</div>
</div>

[//]: # (# 📖 Educations)

[//]: # (- *2022.09 - &#40;now&#41;*, Phd student, Beihang University, Beijing. )
<!-- - *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 📒 Projects

<!-- project 1 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="project-badge">open source</div><img src='images/PyTorch-SVGRender-cover.png' alt="PyTorch-SVGRender" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Pytorch-SVGRender: A Differentiable Rendering Library for SVG Creation](https://ximinng.github.io/PyTorch-SVGRender-project/)

<b><u>TL;DR:</u></b> SVG Differentiable Rendering: Generating vector graphics using neural networks. Support: text-to-SVG, Image-to-SVG, SVG Editing.

<a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.10-or?logo=python" alt="pyhton"></a>
<a href="http://mozilla.org/MPL/2.0/"><img src="https://img.shields.io/badge/License-MPL2.0-orange" alt="license"></a>
<a href="https://ximinng.github.io/PyTorch-SVGRender-project/"><img src="https://img.shields.io/badge/Website-Gitpage-yellow" alt="website"></a>
<a href="https://pytorch-svgrender.readthedocs.io/en/latest/index.html"><img src="https://img.shields.io/badge/DOCS-Readthedocs-purple?logo=readthedocs" alt="docs"></a>
<a href="https://huggingface.co/SVGRender"><img src="https://img.shields.io/badge/SPACE-HuggingFace-ffcc00?logo=huggingface" alt="space"></a>

👥 Contributors: **Ximing Xing**, Juncheng Hu

🌐 [**Project**](https://ximinng.github.io/PyTorch-SVGRender-project/) | 📁[**Code**](https://github.com/ximinng/PyTorch-SVGRender) | 🤗[**HuggingFace**](https://huggingface.co/SVGRender) | 📄[**Docs**](https://pytorch-svgrender.readthedocs.io/en/latest/index.html)
</div>
</div>

# 🎖 Honors and Awards
- *2024.12* National Scholarship for Doctoral Students.
- *2021.12* National Scholarship

# 📑 Professional Activities

- Conference Reviewer

  CVPR 2024, ECCV 2024, NIPS 2024, ACM MM 2024, AAAI 2025, CVPR 2025

- Journal Reviewer

  IJCV, IEEE T-VCG

# 💻 Internships

- *2021.06 - 2021.11*, [Ant Group](https://www.antgroup.com/en), research intern. HangZhou, China.

  Dialogue System, Task-based Dialogue System based on Deep Reinforcement Learning