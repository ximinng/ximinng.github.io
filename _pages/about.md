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

Ximing Xing is a Ph.D. student (2022-Present) in Software Engineering at Beihang University, advised by Professor [Qian Yu](https://yuqian1023.github.io/).

He is dedicated to advancing the frontiers of AI-driven content creation, with a particular focus on the generation and understanding of vector graphics. 
To this end, his research interests include **deep generative models, vector art synthesis, text-to-SVG, neural rendering, SVG diffusion, and SVG LLMs**. 
His research has been published in top-tier international conferences and journals such as CVPR, T-PAMI, and NeurIPS. 
Some of his representative works include:

* **LLMs for Vector Graphics**: [LLM4SVG](https://ximinng.github.io/LLM4SVGProject/)[[Code](https://github.com/ximinng/LLM4SVG)] [![](https://img.shields.io/github/stars/ximinng/LLM4SVG?style=social&label=Code%20Stars)](https://github.com/ximinng/LLM4SVG), [Reason-SVG](https://arxiv.org/abs/2505.24499)
* **Text-to-SVG Synthesis**: [SVGDreamer++](https://ximinng.github.io/SVGDreamerV2Project/)[[Code](https://github.com/ximinng/SVGDreamerV2)] [![](https://img.shields.io/github/stars/ximinng/SVGDreamerV2?style=social&label=Code%20Stars)](https://github.com/ximinng/SVGDreamerV2), [SVGDreamer](https://ximinng.github.io/SVGDreamer-project/) [[Code](https://github.com/ximinng/SVGDreamer)] [![](https://img.shields.io/github/stars/ximinng/SVGDreamer?style=social&label=Code%20Stars)](https://github.com/ximinng/SVGDreamer)
* **Vector Diffusion Models**: [SVGFusion](https://ximinng.github.io/SVGFusionProject/)[[Code](https://github.com/ximinng/SVGFusion)] [![](https://img.shields.io/github/stars/ximinng/SVGFusion?style=social&label=Code%20Stars)](https://github.com/ximinng/SVGFusion)
* **Sketch Synthesis**: [DiffSketcher](https://ximinng.github.io/DiffSketcher-project/)[[Code](https://github.com/ximinng/DiffSketcher)] [![](https://img.shields.io/github/stars/ximinng/DiffSketcher?style=social&label=Code%20Stars)](https://github.com/ximinng/DiffSketcher)
* **Differentiable SVG Rendering Library**: [PyTorch-SVGRender](https://ximinng.github.io/PyTorch-SVGRender-project/)[[Code](https://github.com/ximinng/PyTorch-SVGRender)] [![](https://img.shields.io/github/stars/ximinng/PyTorch-SVGRender?style=social&label=Code%20Stars)](https://github.com/ximinng/PyTorch-SVGRender)

His commitment to open science is reflected in his popular open-source projects, which have collectively garnered a
substantial number of stars on GitHub.
[![github](https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub%20Stars&style=for-the-badge&query=%24.stars&url=https://api.github-star-counter.workers.dev/user/ximinng)](https://github.com/ximinng/)

He further contributes to the AI community by sharing models and hosting interactive demonstrations on
HuggingFace ([@xingxm profile](https://huggingface.co/xingxm), [SVGRender Space](https://huggingface.co/SVGRender)).

[//]: # ([![blog]&#40;https://img.shields.io/badge/huggingface-space-ffcc00?logo=huggingface&style=for-the-badge&#41;]&#40;https://huggingface.co/xingxm&#41;)

# 🔥 News

- *2025.02*: &nbsp;🎉🎉 Our paper [LLM4SVG](https://ximinng.github.io/LLM4SVGProject/) has been accepted by **CVPR2025!**
- *2025.02*: &nbsp;🎉🎉 Our paper [SVGDreamer++](https://ximinng.github.io/SVGDreamerV2Project/) has been accepted by **T-PAMI !** This is the **first paper on SVG generation** ever published in **T-PAMI**.
- *2024.02*: &nbsp;🎉🎉 Our paper [SVGDreamer](https://ximinng.github.io/SVGDreamer-project/) has been accepted by **CVPR 2024!**
- *2023.12*: &nbsp;🎉🎉 We released [PyTorch-SVGRender](https://github.com/ximinng/PyTorch-SVGRender), a state-of-the-art library for differentiable SVG rendering in PyTorch.

<!-- 
# 📄 Writing
Blog: "[Robust Deep Leanring based on Meta-Learning]&#40;https://www.craft.do/s/N0N70a75WHn9iZ&#41;"
January 1, 2022 · 10min · Ximing Xing
-->

# 📝 Publications

<h3 style="color: #4169E1;">🏷️ Topic: Vector Graphics Synthesis</h3>

<!-- paper 10 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ArXiv</div><img src='images/reason-svg.png' loading="lazy" alt="ReasonSVG"></div></div>
<div class='paper-box-text' markdown="1">
[Reason-SVG: Hybrid Reward RL for Aha-Moments in Vector Graphics Generation](https://arxiv.org/abs/2505.24499)

**Ximing Xing**, Yandong Guan, Jing Zhang, Dong Xu, Qian Yu

<b><u>TL;DR:</u></b> Reason-SVG introduces the first framework to enhance SVG generation in LLMs through a **"Drawing-with-Thought" (DwT)** paradigm—combining explicit design reasoning with code—trained via supervised fine-tuning and **HyperReward-driven** reinforcement learning.

</div>
</div>

<!-- paper 9 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/llm4svg_cover.png' loading="lazy" alt="LLM4SVG"></div></div>
<div class='paper-box-text' markdown="1">
[Empowering LLMs to Understand and Generate Complex Vector Graphics](https://arxiv.org/abs/2412.11102)

**Ximing Xing**, Juncheng Hu, Guotao Liang, Jing Zhang, Dong Xu, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-LLM4SVG-orange.svg)](https://ximinng.github.io/LLM4SVGProject/) [![dataset](https://img.shields.io/badge/Dataset-SVGX_SFT_1M-ffcc00?logo=huggingface)](https://huggingface.co/datasets/xingxm/SVGX-SFT-1M) [![](https://img.shields.io/github/stars/ximinng/LLM4SVG?style=social&label=Code+Stars)](https://github.com/ximinng/LLM4SVG)

<b><u>TL;DR:</u></b> LLM4SVG introduces learnable **SVG Semantic Tokens** and a large **SVGX-SFT dataset**, enabling LLMs to understand and generate complex vector graphics.

IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2025

[**Project**](https://ximinng.github.io/LLM4SVGProject/) | [**Code**](https://github.com/ximinng/LLM4SVG) | [**SVGX-SFT-1M Dataset**](https://huggingface.co/datasets/xingxm/SVGX-SFT-1M)
</div>
</div>

<!-- paper 8 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">T-PAMI 2025</div><img src='images/svgdreamerv2_cover.png' loading="lazy" alt="SVGDreamer++"></div></div>
<div class='paper-box-text' markdown="1">
[SVGDreamer++: Advancing Editability and Diversity in Text-Guided SVG Generation](https://arxiv.org/abs/2411.17832)

**Ximing Xing**, Qian Yu, Chuang Wang, Haitao Zhou, Jing Zhang, Dong Xu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-SVGDreamer++-orange.svg)](https://ximinng.github.io/SVGDreamerV2Project/) [![](https://img.shields.io/github/stars/ximinng/SVGDreamerV2?style=social&label=Code+Stars)](https://github.com/ximinng/SVGDreamerV2)

<b><u>TL;DR:</u></b> SVGDreamer++ is an advanced text-to-SVG generator with two core innovations:
**Hierarchical Image Vectorization (HIVE)** - enables semantic object-level and component-level image vectorization,
and **Adaptive Vector Primitive Control** – dynamically assigns the optimal number of vector primitives, capturing fine-grained details without wasting computation.

IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI 2025)

[**Project**](https://ximinng.github.io/SVGDreamerV2Project/) | [**Code**](https://github.com/ximinng/SVGDreamerV2) | [**Blog**](https://huggingface.co/blog/xingxm/svgdreamer)
</div>
</div>

<!-- paper 7 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/svgfusion_cover.png' loading="lazy" alt="SVGFusion"></div></div>
<div class='paper-box-text' markdown="1">
[SVGFusion: Scalable Text-to-SVG Generation via Vector Space Diffusion](https://arxiv.org/abs/2412.10437)

**Ximing Xing**, Juncheng Hu, Jing Zhang, Dong Xu, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-SVGFusion-orange.svg)](https://ximinng.github.io/SVGFusionProject/) [![dataset](https://img.shields.io/badge/Dataset-SVGX_Core_250k-ffcc00?logo=huggingface)](https://huggingface.co/datasets/xingxm/SVGX-Core-250k) [![](https://img.shields.io/github/stars/ximinng/SVGFusion?style=social&label=Code+Stars)](https://github.com/ximinng/SVGFusion)

<b><u>TL;DR:</u></b> SVGFusion improves text-to-SVG generation by using a **VP-VAE to learn a vector representation of SVG elements**, and a **VS-DiT** to generate SVGs from text prompts by performing diffusion within that **learned vector space**.

[**Project**](https://ximinng.github.io/SVGFusionProject/) | [**Code**](https://github.com/ximinng/SVGFusion) | [**SVGX-Core-250k Dataset**](https://huggingface.co/datasets/xingxm/SVGX-Core-250k)
</div>
</div>

<!-- paper 6 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/svgdreamer11_cover.png' loading="lazy" alt="SVGDreamer"></div></div>
<div class='paper-box-text' markdown="1">
[SVGDreamer: Text Guided SVG Generation with Diffusion Model](https://arxiv.org/abs/2312.16476)

**Ximing Xing**, Chuang Wang, Haitao Zhou, Jing Zhang, Dong Xu, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-SVGDreamer-orange.svg)](https://ximinng.github.io/SVGDreamer-project/) [![](https://img.shields.io/github/stars/ximinng/SVGDreamer?style=social&label=Code+Stars)](https://github.com/ximinng/SVGDreamer)

<b><u>TL;DR:</u></b> SVGDreamer introduces **Semantic-driven Image VEctorization (SIVE)** and **Vector Particle-based Score Distillation (VPSD)** to generate editable, high-quality SVGs with better shape control and diversity.

IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2024

[**Project**](https://ximinng.github.io/SVGDreamer-project/) | [**Code**](https://github.com/ximinng/SVGDreamer) | [**Blog**](https://huggingface.co/blog/xingxm/svgdreamer)
</div>
</div>

<!-- paper 5 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICME 2025</div><img src='images/vectorpainter-cover.png' loading="lazy" alt="VectorPainter"></div></div>
<div class='paper-box-text' markdown="1">
[VectorPainter: Advanced Stylized Vector Graphics Synthesis Using Stroke-Style Priors](https://arxiv.org/abs/2405.02962)

Juncheng Hu, **Ximing Xing**, Jing Zhang, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-VectorPainter-orange.svg)](https://hjc-owo.github.io/VectorPainterProject/)

<b><u>TL;DR:</u></b> VectorPainter synthesizes text-guided vector graphics by **imitating stylized strokes**.

[**Project**](https://hjc-owo.github.io/VectorPainterProject/) | [**Code**](https://github.com/hjc-owo/VectorPainter)
</div>
</div>

<!-- paper 4 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">NIPS 2023</div><img src='images/diffsketcher_cover.png' loading="lazy" alt="DiffSketcher"></div></div>
<div class='paper-box-text' markdown="1">
[DiffSketcher: Text Guided Vector Sketch Synthesis through Latent Diffusion Models](https://arxiv.org/abs/2306.14685)

**Ximing Xing**, Chuang Wang, Haitao Zhou, Jing Zhang, Qian Yu, Dong Xu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-DiffSketcher-orange.svg)](https://ximinng.github.io/DiffSketcher-project/) [![](https://img.shields.io/github/stars/ximinng/DiffSketcher?style=social&label=Code+Stars)](https://github.com/ximinng/DiffSketcher)

<b><u>TL;DR:</u></b> DiffSketcher pioneered the use of diffusion models for **text-to-vector sketch** generation.

Advances in Neural Information Processing Systems (NeurIPS), 2023

[**Project**](https://ximinng.github.io/DiffSketcher-project/) | [**Code**](https://github.com/ximinng/DiffSketcher)
</div>
</div>

<h3 style="color: #4169E1;">🏷 Topic: CAD Generation</h3>

<!-- paper 3 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/cad-coder.png' loading="lazy" alt="Inversion-By-Inversion"></div></div>
<div class='paper-box-text' markdown="1">

[CAD-Coder: Text-to-CAD Generation with Chain-of-Thought and Geometric Reward](https://arxiv.org/abs/2505.19713)

Yandong Guan, Xilin Wang, **Ximing Xing**, Jing Zhang, Dong Xu, Qian Yu

<b><u>TL;DR:</u></b> CAD-Coder enables LLMs to generate complex, valid 3D CAD models from text by outputting CadQuery (Python) scripts, using a novel two-stage training and chain-of-thought approach.

</div>
</div>

<h3 style="color: #4169E1;">🏷 Topic: Controllable Text-to-Image Generation</h3>

<!-- paper 2 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/Inv-by-Inv-teaser.png' loading="lazy" alt="Inversion-By-Inversion"></div></div>
<div class='paper-box-text' markdown="1">

[Inversion-by-Inversion: Exemplar-based Sketch-to-Photo Synthesis via Stochastic Differential Equations without Training](https://arxiv.org/abs/2308.07665)

**Ximing Xing**, Chuang Wang, Haitao Zhou, Zhihao Hu, Chongxuan Li, Dong Xu, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-InversionbyInversion-orange.svg)](https://ximinng.github.io/inversion-by-inversion-project/)

<b><u>TL;DR:</u></b> Free training for sketch control image synthesis via Stochastic Differential Equations (SDEs).

[**Project**](https://ximinng.github.io/inversion-by-inversion-project/) | [**Code**](https://github.com/ximinng/inversion-by-inversion)
</div>
</div>

<h3 style="color: #4169E1;">🏷 Topic: Robust Machine Learning</h3>

<!-- paper 1 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2021</div><img src='images/dualgraph_cover.png' loading="lazy" alt="DualGraph"></div></div>
<div class='paper-box-text' markdown="1">

[A Graph-Based Method for Reasoning About Label Noise](https://openaccess.thecvf.com/content/CVPR2021/papers/Zhang_DualGraph_A_Graph-Based_Method_for_Reasoning_About_Label_Noise_CVPR_2021_paper.pdf)

HaiYang Zhang, **Ximing Xing**, Liang Liu

<b><u>TL;DR:</u></b> DualGraph, the first method for label noise processing based on graph neural networks.

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

👥 Main Contributors: **Ximing Xing**, Juncheng Hu

<b><u>TL;DR:</u></b> SVG Differentiable Rendering: Generating vector graphics using neural networks. Support:
Text-to-SVG, Image-to-SVG and SVG Editing.

<a href="https://ximinng.github.io/PyTorch-SVGRender-project/"><img src="https://img.shields.io/badge/Website-Gitpage-yellow" alt="website"></a>
<a href="https://pytorch-svgrender.readthedocs.io/en/latest/index.html"><img src="https://img.shields.io/badge/DOCS-Readthedocs-purple?logo=readthedocs" alt="docs"></a>
<a href="https://huggingface.co/SVGRender"><img src="https://img.shields.io/badge/SPACE-HuggingFace-ffcc00?logo=huggingface" alt="space"></a> [![](https://img.shields.io/github/stars/ximinng/PyTorch-SVGRender?style=social&label=Code+Stars)](https://github.com/ximinng/PyTorch-SVGRender)

🌐 [**Project**](https://ximinng.github.io/PyTorch-SVGRender-project/) | 📁 [**Code**](https://github.com/ximinng/PyTorch-SVGRender) | 🤗 [**HuggingFace**](https://huggingface.co/SVGRender) | 📄 [**Docs**](https://pytorch-svgrender.readthedocs.io/en/latest/index.html)
</div>
</div>

# 🎖 Honors and Awards

- *2025.04* Academic Excellence Foundation of BUAA for PhD Students.
- *2024.12* National Scholarship for Doctoral Students.
- *2021.12* National Scholarship.

# 📑 Professional Activities

- Conference Reviewer

  CVPR 2024, ECCV 2024, NIPS 2024, ACM MM 2024, AAAI 2025, CVPR 2025, SIGGRAPH 2025, NIPS 2025

- Journal Reviewer

  IJCV, IEEE T-VCG

# 💻 Internships

- *2021.06 - 2021.11*, [Ant Group](https://www.antgroup.com/en), machine learning algorithm intern. HangZhou, China.

  **Multi-Turn Task-Oriented Dialogue System** based on deep reinforcement learning.

  - Behavior cloning to enhance model cold-start training.
  - Agenda-based User Simulator in RL.
  - Turns- and sessions-level reward design for PPO training.
