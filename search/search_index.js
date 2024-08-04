var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"CPU Microarchitecture Diagrams","text":"<p>Microarchitecture diagrams of several CPUs.</p>"},{"location":"avalanche.html","title":"Apple M2 P-core aka Avalanche","text":"<p>References:</p> <ul> <li>Apple M2 Blizzard \u5fae\u67b6\u6784\u8bc4\u6d4b(\u4e0a)\uff1a\u9633\u6625\u767d\u96ea</li> <li>Apple M2 Blizzard \u5fae\u67b6\u6784\u8bc4\u6d4b(\u4e2d)\uff1a\u9633\u6625\u767d\u96ea</li> <li>\u4e0d\u4e3a\u4eba\u77e5\u7684\u89d2\u843d\uff0cApple M2 \u7684\u5c0f\u5c0f\u52aa\u529b\uff08\u5176\u4e00\uff09</li> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> </ul>"},{"location":"comparison.html","title":"Comparisons across microarchitectures","text":""},{"location":"comparison.html#frontend","title":"Frontend","text":""},{"location":"comparison.html#branch-prediction","title":"Branch Prediction","text":"uArch BTB Indirect RAS AMD Zen3 1024 L1 + 6656 L2 1536 32 AMD Zen4 1536 L1 + 7168 L2 3072 32 AMD Zen5 16384 L1 + 8192 L2 52 Intel Golden Cove 128 L1 + 6144 L2 + 12288 L3 Intel Gracemont 1024 L1 + 5120 L2 Apple M1 P-core (Firestorm) 1024 L1 + 192KB ICache as L2 50 Apple M2 P-core (Avalanche) 1024 L1 + 3072 L2 + 192KB ICache as L3 Apple M3 P-core Apple M4 P-core Qualcomm Oryon 2048 L1 + ICache as L2 2048 48"},{"location":"comparison.html#l1-icache-itlb","title":"L1 ICache + ITLB","text":"uArch ICache ITLB AMD Zen3 32KB 8-way 64 L1 + 512 L2 AMD Zen4 32KB 8-way 64 L1 + 512 L2 AMD Zen5 32KB 8-way 64 L1 + 2048 L2 Intel Golden Cove 32KB 8-way 256 Intel Gracemont 64KB 8-way 64 Apple M1 P-core (Firestorm) 192KB Apple M2 P-core (Avalanche) 192KB Apple M3 P-core 192KB Apple M4 P-core 192KB Qualcomm Oryon 192KB 6-way 256 8-way ITLB"},{"location":"firestorm.html","title":"Apple M1 P-core aka Firestorm","text":"<p>References:</p> <ul> <li>Apple Microarchitecture Research by Dougall Johnson</li> <li>\u4e0d\u4e3a\u4eba\u77e5\u7684\u89d2\u843d\uff0cApple M2 \u7684\u5c0f\u5c0f\u52aa\u529b\uff08\u5176\u4e00\uff09 - JamesAslan</li> <li>Apple Announces The Apple Silicon M1: Ditching x86 - What to Expect, Based on A14 - Anandtech</li> <li>Exploration of Apple CPUs</li> <li>Apple M1 Icestorm \u5fae\u67b6\u6784\u8bc4\u6d4b\uff08\u4e0a\uff09:\u91cd\u94f8\u5c0f\u6838\u8363\u5149</li> <li>Apple M1 Icestorm \u5fae\u67b6\u6784\uff08\u4e0b\uff09:\u91cd\u94f8\u5c0f\u6838\u8363\u5149</li> <li>\u82f9\u679c\u7684\u9ed1\u9b54\u6cd5\uff1fApple M1 \u7684\u6808\u64cd\u4f5c\u6d88\u9664\uff08\u4e0a\uff09</li> <li>\u82f9\u679c\u7684\u9ed1\u9b54\u6cd5\uff1f\uff08\u4e0b\uff09Apple M1 \u7684\u6808\u64cd\u4f5c\u6d88\u9664</li> <li>Apple Firestorm/Icestorm CPU microarchitecture docs</li> <li>The 2020 Mac Mini Unleashed: Putting Apple Silicon M1 To The Test</li> </ul>"},{"location":"golden_cove.html","title":"Intel Alder Lake P-core aka Golden Cove","text":"<p>References:</p> <ul> <li>Popping the Hood on Golden Cove</li> <li>Intel Alder Lake CPU Architectures</li> </ul>"},{"location":"gracemont.html","title":"Intel Alder Lake E-core aka Gracemont","text":"<p>References:</p> <ul> <li>Gracemont: Revenge of the Atom Cores</li> <li>Intel Alder Lake CPU Architectures</li> </ul>"},{"location":"m3_pcore.html","title":"Apple M3 P-core","text":"<p>References:</p> <ul> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> <li>MacBook Air M3 \u7b80\u8bc4\uff1a\u6027\u80fd\u3001\u7eed\u822a\u5982\u4f55\uff1fM1 \u7528\u6237\u8981\u6362\u5417\uff1f</li> </ul>"},{"location":"m4_pcore.html","title":"Apple M4 P-core","text":"<p>References:</p> <ul> <li>\u82f9\u679c M4 \u6027\u80fd\u5206\u6790\uff1a\u5c3d\u529b\u4e86\uff0c\u4f46\u82af\u7247\u5de5\u827a\u5feb\u5230\u5934\u4e86\uff01</li> </ul>"},{"location":"oryon.html","title":"Qualcomm Oryon","text":"<p>References:</p> <ul> <li>Qualcomm\u2019s Oryon Core: A Long Time in the Making - Chips and Cheese</li> <li>The Qualcomm Snapdragon X Architecture Deep Dive: Getting To Know Oryon and Adreno X1 - Anandtech</li> <li>Snapdragon X Series - Architecture Overview</li> <li>\u9ad8\u901a X Elite Oryon \u5fae\u67b6\u6784\u8bc4\u6d4b\uff1a\u8d70\u8d70\u505c\u505c</li> <li>Snapdragon X Elite</li> <li>Qualcomm Oryon CPU</li> <li>Qualcomm\u2019s Oryon LLVM Patches</li> <li>\u9ad8\u901a\u81ea\u7814 PC \u82af\u7247 X Elite \u5b9e\u6d4b\uff1a\u771f\u80fd\u5e72\u7ffb\u82f9\u679c\u82f1\u7279\u5c14\uff1f</li> <li>\u592a\u8d35\u4e86\uff0c\u5b83\u6ca1\u4f60\u60f3\u7684\u90a3\u4e48\u7f8e\u597d\uff01\u9ad8\u901a\u9a81\u9f99 X Elite 78-100 \u7b14\u8bb0\u672c\u8be6\u7ec6\u8bc4\u6d4b</li> </ul>"},{"location":"zen3.html","title":"AMD Zen3","text":"<p>References:</p> <ul> <li>AMD Next Generation \"Zen 4\" Core and 4th Gen AMD EPYC(TM) 9004 Server CPU</li> <li>AND Next Generation \"Zen 3\" Core</li> <li>AMD\u2019s Zen 4 Part 1: Frontend and Execution Engine</li> </ul>"},{"location":"zen4.html","title":"AMD Zen4","text":"<p>References:</p> <ul> <li>AMD Zen 4 Ryzen 9 7950X and Ryzen 5 7600X Review: Retaking The High-End</li> <li>AMD\u2019s Zen 4 Part 1: Frontend and Execution Engine</li> <li>AMD\u2019s Zen 4, Part 2: Memory Subsystem and Conclusion</li> <li>Inside the AMD Zen 4 CPU architecture</li> <li>AMD Reveals More Zen 5 CPU Core Details</li> <li>AMD Next Generation \"Zen 4\" Core and 4th Gen AMD EPYC(TM) 9004 Server CPU</li> </ul>"},{"location":"zen5.html","title":"AMD Zen5","text":"<p>References:</p> <ul> <li>AMD Reveals More Zen 5 CPU Core Details</li> <li>Zen 5\u2019s 2-Ahead Branch Predictor Unit: How a 30 Year Old Idea Allows for New Tricks</li> </ul>"}]}