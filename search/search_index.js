var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"CPU Microarchitecture Diagrams","text":"<p>Microarchitecture diagrams of several CPUs.</p> <p>Major microarchitectures of CPU vendors:</p> <ol> <li>AMD: Zen -&gt; Zen 2 -&gt; Zen 3 -&gt; Zen 4 -&gt; Zen 5</li> <li>ARM:<ul> <li>Cortex-A78/Cortex-X1</li> <li>Cortex-A510/Cortex-A710/Cortex-X2</li> <li>Cortex-A715/Cortex-X3</li> <li>Cortex-A520/Cortex-A720/Cortex-X4</li> <li>Cortex-A725/Cortex-X925</li> </ul> </li> <li>Apple:<ul> <li>M1/A14 (Firestorm + Icestorm)</li> <li>M2/A15 (Avalanche + Blizzard)</li> <li>A16 (Everest + Sawtooth)</li> <li>M3</li> <li>M4</li> </ul> </li> <li>Intel:<ul> <li>Skylake</li> <li>Sunny Cove (Ice Lake) </li> <li>Golden Cove + Gracemont (Alder Lake/Sapphire Rapids)</li> <li>Redwood Cove + Crestmont (Meteor Lake/Granite Rapids)</li> <li>Lion Cove + Skymont (Lunar Lake)</li> </ul> </li> <li>Qualcomm: Oryon</li> </ol>"},{"location":"3a6000.html","title":"Loongson 3A6000","text":"<p>References:</p> <ul> <li>Loongson 3A6000: A Star among Chinese CPUs</li> </ul>"},{"location":"avalanche.html","title":"Apple M2 P-core aka Avalanche","text":"<p>References:</p> <ul> <li>Apple M2 Blizzard \u5fae\u67b6\u6784\u8bc4\u6d4b(\u4e0a)\uff1a\u9633\u6625\u767d\u96ea</li> <li>Apple M2 Blizzard \u5fae\u67b6\u6784\u8bc4\u6d4b(\u4e2d)\uff1a\u9633\u6625\u767d\u96ea</li> <li>\u4e0d\u4e3a\u4eba\u77e5\u7684\u89d2\u843d\uff0cApple M2 \u7684\u5c0f\u5c0f\u52aa\u529b\uff08\u5176\u4e00\uff09</li> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> </ul>"},{"location":"comparison.html","title":"Comparisons across microarchitectures","text":""},{"location":"comparison.html#frontend","title":"Frontend","text":""},{"location":"comparison.html#branch-prediction","title":"Branch Prediction","text":"uArch L1 BTB L2 BTB L3 BTB ITA RAS AMD Zen 2 16 (0 bubble) 512 (1 bubble) 7168 (4 bubble) 1024 32 AMD Zen 3 1024 (0 bubble) 6656 (3 buble) 1536 2x32 AMD Zen 4 1536 (0 bubble) 7186/7680 (3 bubble) 3072 2x32 AMD Zen 5 16384 (0 bubble) 8192 (8 bubble) 3072 2x52 Apple Avalanche 1024 3072 192KB L1 IC Apple Firestorm 1024 192KB L1 IC 50 ARM Cortex-X1 96 8192 16 ARM Cortex-X2 ARM Cortex-X3 ARM Cortex-X4 ARM Cortex-X925 Intel Crestmont 1024 6144 Intel Golden Cove 128 6144 12288 20 Intel Gracemont 1024 5120 Intel Sunny Cove 256 5120 22 Qualcomm Oryon 2048 192KB L1 IC 50"},{"location":"comparison.html#l1-icache-itlb","title":"L1 ICache + ITLB","text":"uArch L1 IC L1 ITLB L2 ITLB AMD Zen 2 8-way 32KB 64 512 AMD Zen 3 8-way 32KB 64 512 AMD Zen 4 8-way 32KB 64 512 AMD Zen 5 8-way 32KB 64 2048 Apple Avalanche 192KB Apple Firestorm 192KB ARM Cortex-X1 4-way 64KB 48 ARM Cortex-X2 4-way 64KB 48 ARM Cortex-X3 ARM Cortex-X4 4-way 64KB 48 ARM Cortex-X925 4-way 64KB 128 Intel Crestmont 8-way 64KB 64 Intel Golden Cove 8-way 32KB 256 Intel Gracemont 8-way 64KB 64 Intel Sunny Cove 8-way 32Kb 128 Qualcomm Oryon 6-way 192KB 256"},{"location":"comparison.html#move-elimination-zeroing-idiom-ones-idiom","title":"Move Elimination / Zeroing Idiom / Ones Idiom","text":"Pattern\\uArch Oryon Firestorm Golden Cove Cortex X1 Zen 3 Sunny Cove Zen 1-2 # ALU 6 6 5 4 4 4 4 # Dispatch 8 8 6 8 6 5 5 Dep int add 1.0 1.0 1.0 1.0 1.0 1.0 1.0 Indep int add 6.0 3.9 4.7 4.0 4.0 4.0 4.0 Dep int mov 1.2 1.2 5.5 1.3 6.0 4.6 5.0 Indep int mov 8.0 8.0 5.4 4.0 6.0 4.6 5.0 Dep zero via xor 1.0 1.0 5.5 1.0 6.0 4.6 4.0 Dep zero via sub 1.0 1.0 6.0 1.0 6.0 4.6 4.0 Indep set zero via mov 6.0 8.0 6.0 6.0 4.0 3.7 4.0 Indep set one via mov 6.0 7.8 6.0 4.0 4.0 4.0 4.0 Indep set two via mov 6.0 7.8 6.0 4.0 4.0 4.0 4.0 Indep set 1024 via mov 6.0 7.8 5.0 4.0 4.0 4.0 4.0 Vec dep mov 0.6 0.6 1.0 0.5 1.0 1.0 1.0 Vec indep mov 8.0 8.0 3.0 4.0 4.0 3.0 4.0 Vec dep set zero via xor 0.5 0.5 6.0 0.5 4.0 5.0 4.0 Vec dep set zero via sub 0.5 0.5 0.5 0.5 0.3 0.25 0.3 Vec indep set zero via mov 4.0 8.0 N/A 6.0 N/A N/A N/A Nop 8.0 8.0 5.7 8.0 6.0 4.0 5.0 <ul> <li>Bold: Not executed by ALU/FPU, eliminated at rename stage</li> <li>Italics: Executed by ALU/FPU, but source register dependency was removed so that dependent ops can be executed in parallel</li> <li>Although Cortex-X1 has 8 dispatch width, but it has many limitations on instruction type</li> </ul>"},{"location":"comparison.html#backend","title":"Backend","text":""},{"location":"comparison.html#rob","title":"ROB","text":"uArch ROB AMD Zen 2 224 AMD Zen 3 256 AMD Zen 4 320 AMD Zen 5 448 Apple Avalanche 274 Group Apple Firestorm 330 Group ARM Cortex-X1 224 MOP ARM Cortex-X2 288 MOP ARM Cortex-X3 230 MOP ARM Cortex-X4 384 MOP ARM Cortex-X925 ? Intel Crestmont 256 Intel Golden Cove 512 Intel Gracemont 256 Intel Sunny Cove 352 Qualcomm Oryon 680"},{"location":"comparison.html#lsu","title":"LSU","text":"uArch 64b Load 64b Store 128b Load 128b Store 256b Load 256b Store Zen2 2/cycle 1/cycle 2/cycle 1/cycle 2/cycle 1/cycle Zen4 3/cycle 2/cycle 2/cycle 1/cycle 2/cycle 1/cycle Golden Cove 3/cycle 2/cycle 3/cycle 2/cycle 3/cycle 2/cycle Firestorm 3/cycle 2/cycle 3/cycle 2/cycle 1.5/cycle 1/cycle Oryon 4/cycle 2/cycle 4/cycle 2/cycle 2/cycle 1/cycle"},{"location":"comparison.html#comparison-between-microarchitectures","title":"Comparison between microarchitectures","text":""},{"location":"comparison.html#firestorm-vs-oryon","title":"Firestorm vs Oryon","text":"Apple Firestorm Qualcomm Oryon L1 BTB 1024 2048 L2 BTB 192KB L1 IC 192KB L1 IC RAS 50 50 L1 IC 192KB 6-way 192KB Decode width 8 8 Rename width 8 8 ROB 330 Group 680 Branch units 2 2 ALU units 6 6 FP/Vec units 4 4 Load/Store pipes 1 2 Load-only pipes 2 2 Store-only pipes 1 0"},{"location":"comparison.html#cortex-x-series","title":"Cortex-X series","text":"Cortex-X1 Cortex-X2 Cortex-X3 Cortex-X4 Cortex-X925 ALU units 4 4 6 8 8 Branch units 2 2 2 3 3 Load/Store pipes 2 2 2 1 2 Load-only pipes 1 1 1 2 2 Store-only pipes 0 0 0 1 0 ROB 224 MOP 288 MOP 230 MOP 384 MOP ? Decode width 5 5 6 10 10 Rename width 8.0 8.0 8.0 10.0 10.0"},{"location":"cortex_x1.html","title":"ARM Cortex X1","text":"<p>References:</p> <ul> <li>Arm's New Cortex-A78 and Cortex-X1 Microarchitectures: An Efficiency and Performance Divergence</li> <li>Arm Cortex-X1: The First From The Cortex-X Custom Program</li> <li>ARM Cortex X1 \u5fae\u67b6\u6784\u8bc4\u6d4b\uff08\u4e0a\uff09\uff1a\u5411\u5c71\u8fdb\u53d1</li> <li>Arm\u00ae Cortex\u00ae\u2011X1 Core Technical Reference Manual</li> </ul>"},{"location":"cortex_x2.html","title":"ARM Cortex X2","text":"<p>References:</p> <ul> <li>Cortex X2: Arm Aims High</li> <li>Arm\u00ae Cortex\u00ae\u2011X2 Core Technical Reference Manual</li> <li>Arm Announces Mobile Armv9 CPU Microarchitectures: Cortex-X2, Cortex-A710 &amp; Cortex-A510</li> </ul>"},{"location":"cortex_x3.html","title":"ARM Cortex X3","text":"<p>References:</p> <ul> <li>Arm\u00ae Cortex\u2011X3 Core Technical Reference Manual</li> <li>Arm Unveils Next-Gen Flagship Core: Cortex-X3</li> </ul>"},{"location":"cortex_x4.html","title":"ARM Cortex X4","text":"<p>References:</p> <ul> <li>Arm Unveils 2023 Mobile CPU Core Designs: Cortex-X4, A720, and A520 - the Armv9.2 Family</li> <li>Arm\u00ae Cortex-X4 Core Technical Reference Manual</li> </ul>"},{"location":"cortex_x925.html","title":"ARM Cortex X925","text":"<p>References:</p> <ul> <li>Arm Unveils 2024 CPU Core Designs, Cortex X925, A725 and A520: Arm v9.2 Redefined For 3nm</li> <li>Arm\u00ae Cortex-X925 Core Technical Reference Manual</li> <li>Arm\u00ae Cortex-X925 Core Software Optimization Guide</li> </ul>"},{"location":"crestmont.html","title":"Intel Meteor Lake E-core aka Crestmont","text":"<p>References:</p> <ul> <li>Meteor Lake\u2019s E-Cores: Crestmont Makes Incremental Progress</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> <li>The Next Generation of High Performance, Energy-Efficient Computing: Intel\u00ae Xeon\u00ae Processors Built on Efficient-Core</li> </ul>"},{"location":"firestorm.html","title":"Apple M1 P-core aka Firestorm","text":"<p>References:</p> <ul> <li>Apple Microarchitecture Research by Dougall Johnson</li> <li>\u4e0d\u4e3a\u4eba\u77e5\u7684\u89d2\u843d\uff0cApple M2 \u7684\u5c0f\u5c0f\u52aa\u529b\uff08\u5176\u4e00\uff09 - JamesAslan</li> <li>Apple Announces The Apple Silicon M1: Ditching x86 - What to Expect, Based on A14 - Anandtech</li> <li>Exploration of Apple CPUs</li> <li>Apple M1 Icestorm \u5fae\u67b6\u6784\u8bc4\u6d4b\uff08\u4e0a\uff09:\u91cd\u94f8\u5c0f\u6838\u8363\u5149</li> <li>Apple M1 Icestorm \u5fae\u67b6\u6784\uff08\u4e0b\uff09:\u91cd\u94f8\u5c0f\u6838\u8363\u5149</li> <li>\u82f9\u679c\u7684\u9ed1\u9b54\u6cd5\uff1fApple M1 \u7684\u6808\u64cd\u4f5c\u6d88\u9664\uff08\u4e0a\uff09</li> <li>\u82f9\u679c\u7684\u9ed1\u9b54\u6cd5\uff1f\uff08\u4e0b\uff09Apple M1 \u7684\u6808\u64cd\u4f5c\u6d88\u9664</li> <li>Apple Firestorm/Icestorm CPU microarchitecture docs</li> <li>The 2020 Mac Mini Unleashed: Putting Apple Silicon M1 To The Test</li> </ul>"},{"location":"golden_cove.html","title":"Intel Alder Lake P-core aka Golden Cove","text":"<p>References:</p> <ul> <li>Popping the Hood on Golden Cove</li> <li>Intel Alder Lake CPU Architectures</li> <li>Golden Cove</li> <li>Golden Cove\u2019s Vector Register File: Checking with Official (SPR) Data</li> <li>4th Gen Intel Xeon Scalable Sapphire Rapids Leaps Forward</li> <li>Intel Details Golden Cove: Next-Generation Big Core For Client and Server SoCs</li> <li>Sapphire Rapids: Golden Cove Hits Servers</li> <li>Golden Cove\u2019s Lopsided Vector Register File</li> <li>Alder Lake Architecture on Hot Chips 33</li> <li>Sapphire Rapids on Hot Chips 33</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> <li>Sapphire Rapids Dieshot</li> </ul>"},{"location":"gracemont.html","title":"Intel Alder Lake E-core aka Gracemont","text":"<p>References:</p> <ul> <li>Gracemont: Revenge of the Atom Cores</li> <li>Intel Alder Lake CPU Architectures</li> <li>Intel\u2019s Gracemont Small Core Eclipses Last-Gen Big Core Performance</li> <li>Meteor Lake\u2019s E-Cores: Crestmont Makes Incremental Progress</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> </ul>"},{"location":"m3_pcore.html","title":"Apple M3 P-core","text":"<p>References:</p> <ul> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> <li>MacBook Air M3 \u7b80\u8bc4\uff1a\u6027\u80fd\u3001\u7eed\u822a\u5982\u4f55\uff1fM1 \u7528\u6237\u8981\u6362\u5417\uff1f</li> </ul>"},{"location":"m4_pcore.html","title":"Apple M4 P-core","text":"<p>References:</p> <ul> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> </ul>"},{"location":"oryon.html","title":"Qualcomm Oryon","text":"<p>References:</p> <ul> <li>Qualcomm\u2019s Oryon Core: A Long Time in the Making - Chips and Cheese</li> <li>The Qualcomm Snapdragon X Architecture Deep Dive: Getting To Know Oryon and Adreno X1 - Anandtech</li> <li>Snapdragon X Series - Architecture Overview</li> <li>\u9ad8\u901a X Elite Oryon \u5fae\u67b6\u6784\u8bc4\u6d4b\uff1a\u8d70\u8d70\u505c\u505c</li> <li>Snapdragon X Elite</li> <li>Qualcomm Oryon CPU</li> <li>Qualcomm\u2019s Oryon LLVM Patches</li> <li>\u9ad8\u901a\u81ea\u7814 PC \u82af\u7247 X Elite \u5b9e\u6d4b\uff1a\u771f\u80fd\u5e72\u7ffb\u82f9\u679c\u82f1\u7279\u5c14\uff1f</li> <li>\u592a\u8d35\u4e86\uff0c\u5b83\u6ca1\u4f60\u60f3\u7684\u90a3\u4e48\u7f8e\u597d\uff01\u9ad8\u901a\u9a81\u9f99 X Elite 78-100 \u7b14\u8bb0\u672c\u8be6\u7ec6\u8bc4\u6d4b</li> <li>AArch64SchedOryon.td in LLVM</li> </ul>"},{"location":"p870.html","title":"SiFive P870","text":"<p>References:</p> <ul> <li>P870 High-Performance RISC-V Processor</li> </ul>"},{"location":"redwood_cove.html","title":"Intel Meteor Lake P-core aka Redwood Cove","text":"<p>TODO</p> <p>References:</p> <ul> <li>Previewing Meteor Lake at CES</li> </ul>"},{"location":"skylake.html","title":"Intel Skylake","text":"<p>References:</p> <ul> <li>Skylake (client) - Microarchitectures - Intel</li> <li>Skylake (server) - Microarchitectures - Intel </li> </ul>"},{"location":"sunny_cove.html","title":"Intel Ice Lake aka Sunny Cove","text":"<p>References:</p> <ul> <li>Sunny Cove: Intel\u2019s Lost Generation</li> <li>Popping the Hood on Golden Cove</li> <li>Sunny Cove - Microarchitectures - Intel</li> <li>Golden Cove\u2019s Vector Register File: Checking with Official (SPR) Data</li> <li>4th Gen Intel Xeon Scalable Sapphire Rapids Leaps Forward</li> <li>Intel 64 and IA-32 Architectures Optimization Reference Manual Volume 1</li> <li>Built for the Edge: The Next-Generation Intel\u00ae Xeon D 2700 &amp; 1700 processors</li> </ul>"},{"location":"zen2.html","title":"AMD Zen2","text":"<p>References:</p> <ul> <li>Deep Diving Neoverse N1</li> <li>AMD Zen 2 Microarchitecture Analysis: Ryzen 3000 and EPYC Rome</li> <li>AMD Zen 3 Ryzen Deep Dive Review: 5950X, 5900X, 5800X and 5600X Tested</li> <li>X86SchedulerZnver2.td in LLVM</li> <li>Software Optimization Guide for AMD Family 17h Models 30h and Greater Processors</li> <li>Zen 2 Dieshot</li> </ul>"},{"location":"zen3.html","title":"AMD Zen3","text":"<p>References:</p> <ul> <li>AMD Next Generation \"Zen 4\" Core and 4th Gen AMD EPYC(TM) 9004 Server CPU</li> <li>AND Next Generation \"Zen 3\" Core</li> <li>AMD\u2019s Zen 4 Part 1: Frontend and Execution Engine</li> <li>AMD Zen 3 Ryzen Deep Dive Review: 5950X, 5900X, 5800X and 5600X Tested</li> </ul>"},{"location":"zen4.html","title":"AMD Zen4","text":"<p>References:</p> <ul> <li>AMD Zen 4 Ryzen 9 7950X and Ryzen 5 7600X Review: Retaking The High-End</li> <li>AMD\u2019s Zen 4 Part 1: Frontend and Execution Engine</li> <li>AMD\u2019s Zen 4, Part 2: Memory Subsystem and Conclusion</li> <li>Inside the AMD Zen 4 CPU architecture</li> <li>AMD Reveals More Zen 5 CPU Core Details</li> <li>AMD Next Generation \"Zen 4\" Core and 4th Gen AMD EPYC(TM) 9004 Server CPU</li> <li>AMD Next-Generation \u201cZen 4\u201d Core and 4th Gen AMD EPYC Server CPUs</li> </ul>"},{"location":"zen5.html","title":"AMD Zen5","text":"<p>References:</p> <ul> <li>AMD Reveals More Zen 5 CPU Core Details</li> <li>Zen 5\u2019s 2-Ahead Branch Predictor Unit: How a 30 Year Old Idea Allows for New Tricks</li> <li>Zen 5\u2019s Leaked Slides</li> <li>AMD\u2019s Strix Point: Zen 5 Hits Mobile</li> <li>AMD\u2019s Ryzen 9950X: Zen 5 on Desktop</li> <li>Zen 5 Dieshot</li> <li>Strix Point Dieshot</li> <li>Software Optimization Guide for the AMD Zen5 Microarchitecture</li> </ul>"}]}