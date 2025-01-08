var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"CPU Microarchitecture Diagrams","text":"<p>Microarchitecture diagrams of several CPUs.</p> <p>Major microarchitectures of CPU vendors:</p> <ol> <li>AMD: Zen 1 -&gt; Zen 2 -&gt; Zen 3 -&gt; Zen 4 -&gt; Zen 5</li> <li>ARM:<ul> <li>Cortex-A76/Neoverse-N1</li> <li>Cortex-A77</li> <li>Cortex-A78/Cortex-X1/Neoverse-V1</li> <li>Cortex-A510/Cortex-A710/Cortex-X2/Neoverse-N2</li> <li>Cortex-A715/Cortex-X3/Neoverse-V2</li> <li>Cortex-A520/Cortex-A720/Cortex-X4/Neoverse-V3</li> <li>Cortex-A725/Cortex-X925/Neoverse-N3</li> </ul> </li> <li>Apple:<ul> <li>M1/A14 (Firestorm + Icestorm)</li> <li>M2/A15 (Avalanche + Blizzard)</li> <li>A16 (Everest + Sawtooth)</li> <li>M3</li> <li>A17</li> <li>M4</li> <li>A18</li> </ul> </li> <li>Intel:<ul> <li>Skylake</li> <li>Sunny Cove (Ice Lake)</li> <li>Golden Cove + Gracemont (Alder Lake/Sapphire Rapids) -&gt; Raptor Cove + Gracemont (Raptor Lake/Emerald Rapids)</li> <li>Redwood Cove + Crestmont (Meteor Lake/Granite Rapids/Sierra Forest)</li> <li>Lion Cove + Skymont (Lunar Lake/Arrow Lake/Clearwater Forest)</li> </ul> </li> <li>Qualcomm: Oryon</li> </ol>"},{"location":"3a6000.html","title":"Loongson 3A6000","text":"<p>References:</p> <ul> <li>Loongson 3A6000: A Star among Chinese CPUs</li> </ul>"},{"location":"ampere_one.html","title":"Ampere One","text":"<p>References:</p> <ul> <li>AmpereOne at Hot Chips 2024: Maximizing Density</li> </ul>"},{"location":"avalanche.html","title":"Apple M2 P-core aka Avalanche","text":"<p>References:</p> <ul> <li>Apple M2 Blizzard \u5fae\u67b6\u6784\u8bc4\u6d4b(\u4e0a)\uff1a\u9633\u6625\u767d\u96ea</li> <li>Apple M2 Blizzard \u5fae\u67b6\u6784\u8bc4\u6d4b(\u4e2d)\uff1a\u9633\u6625\u767d\u96ea</li> <li>\u4e0d\u4e3a\u4eba\u77e5\u7684\u89d2\u843d\uff0cApple M2 \u7684\u5c0f\u5c0f\u52aa\u529b\uff08\u5176\u4e00\uff09</li> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> </ul>"},{"location":"comparison.html","title":"Macro Rendering Error","text":"<p>File: <code>comparison.md</code></p> <p>ValueError: invalid literal for int() with base 10: '1024 (0 bubble)'</p> <pre><code>Traceback (most recent call last):\n  File \"/home/runner/.cache/pypoetry/virtualenvs/cpu-xkbKtu5s-py3.12/lib/python3.12/site-packages/mkdocs_macros/plugin.py\", line 527, in render\n    return md_template.render(**page_variables)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/runner/.cache/pypoetry/virtualenvs/cpu-xkbKtu5s-py3.12/lib/python3.12/site-packages/jinja2/environment.py\", line 1295, in render\n    self.environment.handle_exception()\n  File \"/home/runner/.cache/pypoetry/virtualenvs/cpu-xkbKtu5s-py3.12/lib/python3.12/site-packages/jinja2/environment.py\", line 942, in handle_exception\n    raise rewrite_traceback_stack(source=source)\n  File \"&lt;template&gt;\", line 64, in top-level template code\n  File \"/home/runner/work/cpu/cpu/main.py\", line 154, in firestorm_oryon_comparison\n    data.loc[index, field] = str(int(row[field]))\n                                 ^^^^^^^^^^^^^^^\nValueError: invalid literal for int() with base 10: '1024 (0 bubble)'\n</code></pre>"},{"location":"cortex_a77.html","title":"ARM Cortex A77","text":"<p>References:</p> <ul> <li>Arm's New Cortex-A77 CPU Micro-architecture: Evolving Performance</li> <li>Arm\u00ae Cortex\u00ae\u2011A77 Core Technical Reference Manual</li> <li>Arm Cortex-A77 Core Software Optimization Guide</li> </ul>"},{"location":"cortex_x1.html","title":"ARM Cortex X1","text":"<p>References:</p> <ul> <li>Arm's New Cortex-A78 and Cortex-X1 Microarchitectures: An Efficiency and Performance Divergence</li> <li>Arm Cortex-X1: The First From The Cortex-X Custom Program</li> <li>ARM Cortex X1 \u5fae\u67b6\u6784\u8bc4\u6d4b\uff08\u4e0a\uff09\uff1a\u5411\u5c71\u8fdb\u53d1</li> <li>ARM Cortex X1 \u5fae\u67b6\u6784\uff08\u4e0b\uff09\uff1a\u5411\u5c71\u8fdb\u53d1</li> <li>Arm\u00ae Cortex\u00ae\u2011X1 Core Technical Reference Manual</li> </ul>"},{"location":"cortex_x2.html","title":"ARM Cortex X2","text":"<p>References:</p> <ul> <li>Cortex X2: Arm Aims High</li> <li>Arm\u00ae Cortex\u00ae\u2011X2 Core Technical Reference Manual</li> <li>Arm Announces Mobile Armv9 CPU Microarchitectures: Cortex-X2, Cortex-A710 &amp; Cortex-A510</li> </ul>"},{"location":"cortex_x3.html","title":"ARM Cortex X3","text":"<p>References:</p> <ul> <li>Arm\u00ae Cortex\u2011X3 Core Technical Reference Manual</li> <li>Arm Unveils Next-Gen Flagship Core: Cortex-X3</li> </ul>"},{"location":"cortex_x4.html","title":"ARM Cortex X4","text":"<p>References:</p> <ul> <li>Arm Unveils 2023 Mobile CPU Core Designs: Cortex-X4, A720, and A520 - the Armv9.2 Family</li> <li>Arm\u00ae Cortex-X4 Core Technical Reference Manual</li> </ul>"},{"location":"cortex_x925.html","title":"ARM Cortex X925","text":"<p>References:</p> <ul> <li>Arm Unveils 2024 CPU Core Designs, Cortex X925, A725 and A520: Arm v9.2 Redefined For 3nm</li> <li>Arm\u00ae Cortex-X925 Core Technical Reference Manual</li> <li>Arm\u00ae Cortex-X925 Core Software Optimization Guide</li> <li>Cortex X925 \u5fae\u67b6\u6784\u8bc4\u6d4b\uff1a\u8def\u5728\u4f55\u65b9</li> </ul>"},{"location":"crestmont.html","title":"Intel Meteor Lake E-core aka Crestmont","text":"<p>References:</p> <ul> <li>Meteor Lake\u2019s E-Cores: Crestmont Makes Incremental Progress</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> <li>The Next Generation of High Performance, Energy-Efficient Computing: Intel\u00ae Xeon\u00ae Processors Built on Efficient-Core</li> </ul>"},{"location":"dieshot.html","title":"Dieshot","text":"<ul> <li>AMD Ryzen 9 9900x: https://www.bilibili.com/opus/965843745820901377</li> <li>AMD Strix Point: https://www.bilibili.com/opus/959217298443337751</li> <li>Apple A17: https://www.youtube.com/watch?v=veikj5uvAc8</li> <li>Google Tensor Gen1: https://twitter.com/Kurnalsalts/status/1792171201076551747 https://www.bilibili.com/opus/942059110279413798</li> <li>Google Tensor Gen2: https://twitter.com/Kurnalsalts/status/1792171201076551747 https://www.bilibili.com/opus/942059110279413798</li> <li>Google Tensor Gen3: https://twitter.com/Kurnalsalts/status/1799097967884083393 https://www.bilibili.com/opus/942059110279413798</li> <li>Intel Meteor Lake: https://www.bilibili.com/opus/967751673346785305</li> <li>MediaTek Dimensity 9200: 1x Cortex-X3, 3x Cortex-A715, 4x Cortex-A510, Immortalis-G715 https://i.mediatek.com/dimensity-9200 https://kurnal.xlog.app/D9200</li> <li>MediaTek Dimensity 9300: 4x Cortex-X4, 4x Cortex-A720, Immortalis-G720 https://i.mediatek.com/dimensity-9300 https://twitter.com/Kurnalsalts/status/1767976930446553369</li> <li>MediaTek Dimensity 930: 2x Cortex-A78, 6x Cortex-A55 https://i.mediatek.com/dimensity-930 https://twitter.com/Kurnalsalts/status/1727746638574420285</li> <li>MediaTek Helio X30: 2x Cortex-A73, 4x Cortex-A53, 4x Cortex-A35 https://www.mediatek.com/products/smartphones-2/mediatek-helio-x30 https://twitter.com/Kurnalsalts/status/1790624036613218466</li> <li>Nvidia AD102: https://twitter.com/Kurnalsalts/status/1784611359608680563</li> <li>Qualcomm 7 Gen1: 4x(1+3) Cortex-A710, 4x Cortex-A510 https://twitter.com/Kurnalsalts/status/1776276658426966068</li> <li>Qualcomm 8 Gen2: 1x Cortex-X3, 2x Cortex-A715, 2x Cortex-A710, 3x Cortex-A510 https://twitter.com/Kurnalsalts/status/1705935348893905147 https://kurnal.xlog.app/SM8550</li> <li>Qualcomm 8 Gen3: 1x Cortex-X4, 5x(2+3) Cortex-A720, 2x Cortex-A520 https://twitter.com/Kurnalsalts/status/1776276658426966068 https://twitter.com/Kurnalsalts/status/1776201339615514721</li> <li>Qualcomm 845: https://kurnal.xlog.app/SDM845</li> <li>Qualcomm 888: https://twitter.com/Kurnalsalts/status/1727744875305832710</li> <li>Qualcomm 8s Gen3: https://t.bilibili.com/916817677665697796 https://twitter.com/Kurnalsalts/status/1776276658426966068 https://twitter.com/Kurnalsalts/status/1776201339615514721</li> <li>Qualcomm X Elite: https://tieba.baidu.com/p/9194576062 https://chipwise.tech/our-portfolio/snapdragon-x-elite/</li> <li>Qualcomm 8 Elite: https://x.com/Kurnalsalts/status/1848700612181168601</li> <li>Samsung Exynos 2100: https://twitter.com/Kurnalsalts/status/1784620815474135151</li> <li>Samsung Exynos 2200: https://twitter.com/Kurnalsalts/status/1785040012188471347 https://www.bilibili.com/opus/942039658357850146</li> <li>Samsung Exynos 2300: https://www.bilibili.com/opus/942039658357850146</li> <li>Samsung Exynos 2400: https://twitter.com/Kurnalsalts/status/1785252470408773986 https://www.bilibili.com/opus/942039658357850146</li> </ul>"},{"location":"firestorm.html","title":"Apple M1 P-core aka Firestorm","text":"<p>References:</p> <ul> <li>Apple Microarchitecture Research by Dougall Johnson</li> <li>\u4e0d\u4e3a\u4eba\u77e5\u7684\u89d2\u843d\uff0cApple M2 \u7684\u5c0f\u5c0f\u52aa\u529b\uff08\u5176\u4e00\uff09 - JamesAslan</li> <li>Apple Announces The Apple Silicon M1: Ditching x86 - What to Expect, Based on A14 - Anandtech</li> <li>Exploration of Apple CPUs</li> <li>Apple M1 Icestorm \u5fae\u67b6\u6784\u8bc4\u6d4b\uff08\u4e0a\uff09:\u91cd\u94f8\u5c0f\u6838\u8363\u5149</li> <li>Apple M1 Icestorm \u5fae\u67b6\u6784\uff08\u4e0b\uff09:\u91cd\u94f8\u5c0f\u6838\u8363\u5149</li> <li>\u82f9\u679c\u7684\u9ed1\u9b54\u6cd5\uff1fApple M1 \u7684\u6808\u64cd\u4f5c\u6d88\u9664\uff08\u4e0a\uff09</li> <li>\u82f9\u679c\u7684\u9ed1\u9b54\u6cd5\uff1f\uff08\u4e0b\uff09Apple M1 \u7684\u6808\u64cd\u4f5c\u6d88\u9664</li> <li>Apple Firestorm/Icestorm CPU microarchitecture docs</li> <li>The 2020 Mac Mini Unleashed: Putting Apple Silicon M1 To The Test</li> </ul>"},{"location":"golden_cove.html","title":"Intel Alder Lake P-core aka Golden Cove","text":"<p>References:</p> <ul> <li>Popping the Hood on Golden Cove</li> <li>Intel Alder Lake CPU Architectures</li> <li>Golden Cove</li> <li>Golden Cove\u2019s Vector Register File: Checking with Official (SPR) Data</li> <li>4th Gen Intel Xeon Scalable Sapphire Rapids Leaps Forward</li> <li>Intel Details Golden Cove: Next-Generation Big Core For Client and Server SoCs</li> <li>Sapphire Rapids: Golden Cove Hits Servers</li> <li>Golden Cove\u2019s Lopsided Vector Register File</li> <li>Alder Lake Architecture on Hot Chips 33</li> <li>Sapphire Rapids on Hot Chips 33</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> <li>Sapphire Rapids Dieshot</li> </ul>"},{"location":"gracemont.html","title":"Intel Alder Lake E-core aka Gracemont","text":"<p>References:</p> <ul> <li>Gracemont: Revenge of the Atom Cores</li> <li>Intel Alder Lake CPU Architectures</li> <li>Intel\u2019s Gracemont Small Core Eclipses Last-Gen Big Core Performance</li> <li>Meteor Lake\u2019s E-Cores: Crestmont Makes Incremental Progress</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> </ul>"},{"location":"lion_cove.html","title":"Intel Lunar Lake P-core aka Lion Cove","text":"<p>References:</p> <ul> <li>An Interview with Intel\u2019s Arik Gihon about Lunar Lake at Hot Chips 2024</li> <li>Intel\u2019s Lion Cove Architecture Preview</li> <li>2024 Intel Tech Tour: Next Gen P-core-The Lion Cove Microarchitecture</li> <li>2024 Intel Tech Tour: LNL Architecture Session Highlights</li> <li>2024 Intel Technology Tour Keynote</li> <li>\u6708\u5149\u4e0b\u7684\u65b0\u63a2\u7d22\uff1aLunar Lake CPU (Lion Cove / Skymont) \u5fae\u67b6\u6784\u6d4b\u8bd5</li> <li>Lion Cove: Intel\u2019s P-Core Roars</li> <li>Intel Announces Core Ultra 200S Arrow Lake CPUs</li> <li>Intel\u00ae Core Ultra Desktop Processors Launch Briefing</li> </ul>"},{"location":"m3_pcore.html","title":"Apple M3 P-core","text":"<p>References:</p> <ul> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> <li>MacBook Air M3 \u7b80\u8bc4\uff1a\u6027\u80fd\u3001\u7eed\u822a\u5982\u4f55\uff1fM1 \u7528\u6237\u8981\u6362\u5417\uff1f</li> </ul>"},{"location":"m4_pcore.html","title":"Apple M4 P-core","text":"<p>References:</p> <ul> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> <li>iPhone 16\u7cfb\u5217\u6027\u80fd\u5206\u6790\uff1aA18\u5144\u5f1f\u633a\u5f3a\u7684\uff01</li> </ul>"},{"location":"neoverse_n2.html","title":"ARM Neoverse N2","text":"<p>References:</p> <ul> <li>Arm Neoverse N2: Arm\u2019s 2nd generation high performance infrastructure CPUs and system IPs</li> </ul>"},{"location":"neoverse_v2.html","title":"ARM Neoverse V2","text":"<p>References:</p> <ul> <li>Arm Neoverse V2 platform: Leadership Performance and Power Efficiency for Next-Generation Cloud Computing, ML and HPC Workloads</li> <li>Hot Chips 2023: Arm\u2019s Neoverse V2</li> </ul>"},{"location":"oryon.html","title":"Qualcomm Oryon","text":"<p>Oryon-M in Qualcomm 8 Elite:</p> <ol> <li>4-wide decode instead of 8</li> <li>4 integer pipelines instead of 6</li> <li>2 load store pipelines instead of 4</li> <li>2 fp/simd pipelines instead of 4</li> </ol> <p>References:</p> <ul> <li>Qualcomm\u2019s Oryon Core: A Long Time in the Making - Chips and Cheese</li> <li>The Qualcomm Snapdragon X Architecture Deep Dive: Getting To Know Oryon and Adreno X1 - Anandtech</li> <li>Snapdragon X Series - Architecture Overview</li> <li>\u9ad8\u901a X Elite Oryon \u5fae\u67b6\u6784\u8bc4\u6d4b\uff1a\u8d70\u8d70\u505c\u505c</li> <li>Snapdragon X Elite</li> <li>Qualcomm Oryon CPU</li> <li>Qualcomm\u2019s Oryon LLVM Patches</li> <li>\u9ad8\u901a\u81ea\u7814 PC \u82af\u7247 X Elite \u5b9e\u6d4b\uff1a\u771f\u80fd\u5e72\u7ffb\u82f9\u679c\u82f1\u7279\u5c14\uff1f</li> <li>\u592a\u8d35\u4e86\uff0c\u5b83\u6ca1\u4f60\u60f3\u7684\u90a3\u4e48\u7f8e\u597d\uff01\u9ad8\u901a\u9a81\u9f99 X Elite 78-100 \u7b14\u8bb0\u672c\u8be6\u7ec6\u8bc4\u6d4b</li> <li>AArch64SchedOryon.td in LLVM</li> <li>Hot Chips 2024: Qualcomm\u2019s Oryon Core</li> <li>\u9a81\u9f99 8 Elite \u9996\u53d1\u8bc4\u6d4b\uff1a\u4e00\u52a013\u80fd\u6548\u6709\u591a\u597d\uff1f</li> <li>\u9ad8\u901a X Elite \u6df1\u5ea6\u5206\u6790\uff1a\u5e74\u5ea6\u6700\u81ea\u4fe1 CPU</li> </ul>"},{"location":"p870.html","title":"SiFive P870","text":"<p>References:</p> <ul> <li>P870 High-Performance RISC-V Processor</li> </ul>"},{"location":"redwood_cove.html","title":"Intel Meteor Lake P-core aka Redwood Cove","text":"<p>References:</p> <ul> <li>Previewing Meteor Lake at CES</li> <li>Intel Unveils Meteor Lake Architecture: Intel 4 Heralds the Disaggregated Future of Mobile CPUs</li> <li>2023 Intel Tech Tour: Meteor Lake Architecture Overview</li> <li>Intel\u2019s Redwood Cove: Baby Steps are Still Steps</li> </ul>"},{"location":"skylake.html","title":"Intel Skylake","text":"<p>References:</p> <ul> <li>Skylake (client) - Microarchitectures - Intel</li> <li>Skylake (server) - Microarchitectures - Intel </li> </ul>"},{"location":"skymont.html","title":"Intel Lunar Lake E-core aka Skymont","text":"<p>References:</p> <ul> <li>Intel Details Skymont</li> <li>Thoughts on Skymont Slides</li> <li>\u6708\u5149\u4e0b\u7684\u65b0\u63a2\u7d22\uff1aLunar Lake CPU (Lion Cove / Skymont) \u5fae\u67b6\u6784\u6d4b\u8bd5</li> <li>Skymont: Intel\u2019s E-Cores reach for the Sky</li> </ul>"},{"location":"sunny_cove.html","title":"Intel Ice Lake aka Sunny Cove","text":"<p>References:</p> <ul> <li>Sunny Cove: Intel\u2019s Lost Generation</li> <li>Popping the Hood on Golden Cove</li> <li>Sunny Cove - Microarchitectures - Intel</li> <li>Golden Cove\u2019s Vector Register File: Checking with Official (SPR) Data</li> <li>4th Gen Intel Xeon Scalable Sapphire Rapids Leaps Forward</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> <li>Built for the Edge: The Next-Generation Intel\u00ae Xeon D 2700 &amp; 1700 processors</li> </ul>"},{"location":"xiaomi.html","title":"Phytium Xiaomi","text":"<p>References:</p> <ul> <li>Mars: A 64-core ARMv8 Processor</li> </ul>"},{"location":"zen1.html","title":"AMD Zen1","text":"<p>References:</p> <ul> <li>Software Optimization Guide for AMD Family 17h Processors</li> <li>The AMD Zen and Ryzen 7 Review: A Deep Dive on 1800X, 1700X and 1700</li> </ul>"},{"location":"zen2.html","title":"AMD Zen2","text":"<p>References:</p> <ul> <li>Deep Diving Neoverse N1</li> <li>AMD Zen 2 Microarchitecture Analysis: Ryzen 3000 and EPYC Rome</li> <li>AMD Zen 3 Ryzen Deep Dive Review: 5950X, 5900X, 5800X and 5600X Tested</li> <li>X86SchedulerZnver2.td in LLVM</li> <li>Software Optimization Guide for AMD Family 17h Models 30h and Greater Processors</li> <li>Zen 2 Dieshot</li> </ul>"},{"location":"zen3.html","title":"AMD Zen3","text":"<p>References:</p> <ul> <li>AMD Next Generation \"Zen 4\" Core and 4th Gen AMD EPYC(TM) 9004 Server CPU</li> <li>AND Next Generation \"Zen 3\" Core</li> <li>AMD\u2019s Zen 4 Part 1: Frontend and Execution Engine</li> <li>AMD Zen 3 Ryzen Deep Dive Review: 5950X, 5900X, 5800X and 5600X Tested</li> </ul>"},{"location":"zen4.html","title":"AMD Zen4","text":"<p>References:</p> <ul> <li>AMD Zen 4 Ryzen 9 7950X and Ryzen 5 7600X Review: Retaking The High-End</li> <li>AMD\u2019s Zen 4 Part 1: Frontend and Execution Engine</li> <li>AMD\u2019s Zen 4, Part 2: Memory Subsystem and Conclusion</li> <li>Inside the AMD Zen 4 CPU architecture</li> <li>AMD Reveals More Zen 5 CPU Core Details</li> <li>AMD Next Generation \"Zen 4\" Core and 4th Gen AMD EPYC(TM) 9004 Server CPU</li> <li>AMD Next-Generation \u201cZen 4\u201d Core and 4th Gen AMD EPYC Server CPUs</li> </ul>"},{"location":"zen5.html","title":"AMD Zen5","text":"<p>References:</p> <ul> <li>AMD Reveals More Zen 5 CPU Core Details</li> <li>Zen 5\u2019s 2-Ahead Branch Predictor Unit: How a 30 Year Old Idea Allows for New Tricks</li> <li>Zen 5\u2019s Leaked Slides</li> <li>AMD\u2019s Strix Point: Zen 5 Hits Mobile</li> <li>AMD\u2019s Ryzen 9950X: Zen 5 on Desktop</li> <li>Zen 5 Dieshot</li> <li>Strix Point Dieshot</li> <li>Software Optimization Guide for the AMD Zen5 Microarchitecture</li> <li>Discussing AMD\u2019s Zen 5 at Hot Chips 2024</li> <li>AMD EPYC 9965 \"Turin Dense\" Delivers Better Performance/Power Efficiency vs. AmpereOne 192-Core ARM CPU</li> <li>AMD EPYC 9755 / 9575F / 9965 Benchmarks Show Dominating Performance</li> <li>5TH GEN AMD EPYC\u2122 PROCESSOR ARCHITECTURE</li> <li>The AMD Zen 5 Microarchitecture: Powering Ryzen AI 300 Series For Mobile and Ryzen 9000 for Desktop</li> </ul>"}]}