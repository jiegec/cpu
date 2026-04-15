# Comparisons across microarchitectures

## Frontend

### Branch Prediction

| uArch              | L1 BTB           | L2 BTB                 | L3 BTB                 | ITA  | RAS  |
| ------------------ | ---------------- | ---------------------- | ---------------------- | ---- | ---- |
| AMD Zen 1          | 8 (0 bubble)     | 256 (1 bubble)         | 4096 (4 bubble)        | 512  | 32   |
| AMD Zen 2          | 16 (0 bubble)    | 512 (1 bubble)         | 7168 (4 bubble)        | 1024 | 32   |
| AMD Zen 3          | 1024 (0 bubble)  | 6656 (3 bubble)        |                        | 1536 | 2x32 |
| AMD Zen 4          | 1536 (0 bubble)  | 7168/7680 (3 bubble)   |                        | 3072 | 2x32 |
| AMD Zen 5          | 16384 (0 bubble) | 8192 (8 bubble)        |                        | 3072 | 2x52 |
| Ampere One         | 256 (0 bubble)   | 8192 (2 bubble)        |                        |      |      |
| Apple Avalanche    | 1024 (0 bubble)  | 3072 (1 bubble)        | 192KB L1 IC (2 bubble) |      | 50   |
| Apple Firestorm    | 1024 (0 bubble)  | 192KB L1 IC (2 bubble) |                        |      | 50   |
| Apple Icestorm     |                  |                        |                        |      | 32   |
| ARM Cortex-A77     | 64 (0 bubble)    | 8192                   |                        |      |      |
| ARM Cortex-X1      | 96 (0 bubble)    | 8192 (1 bubble)        |                        |      | 16   |
| ARM Neoverse-V1    |                  |                        |                        |      |      |
| ARM Cortex-X2      |                  |                        |                        |      | 16   |
| ARM Neoverse-N2    |                  |                        |                        |      |      |
| ARM Cortex-X3      |                  |                        |                        |      | 32   |
| ARM Neoverse-V2    |                  |                        |                        |      |      |
| ARM Cortex-X4      |                  |                        |                        |      | 32   |
| ARM Neoverse-V3    |                  |                        |                        |      |      |
| ARM Cortex-A720    |                  |                        |                        |      |      |
| ARM Neoverse-N3    |                  |                        |                        |      |      |
| ARM Cortex-X925    |                  |                        |                        |      | 32   |
| ARM C1-Pro         |                  |                        |                        |      |      |
| Intel Crestmont    | 1024 (0 bubble)  | 6144 (2 bubble)        |                        |      |      |
| Intel Golden Cove  | 128 (0 bubble)   | 6144 (1 bubble)        | 12288 (2 bubble)       |      | 20   |
| Intel Gracemont    | 1024 (0 bubble)  | 5120 (2 bubble)        |                        |      |      |
| Intel Lion Cove    |                  |                        |                        |      |      |
| Intel Redwood Cove | 128 (0 bubble)   | 2x6144 (1 bubble)      |                        |      |      |
| Intel Skymont      |                  |                        |                        |      |      |
| Intel Sunny Cove   | 256 (0 bubble)   | 5120 (1 bubble)        |                        |      | 22   |
| Qualcomm Oryon     | 2048 (0 bubble)  | 192KB L1 IC (2 bubble) |                        |      | 50   |

### L1 ICache + ITLB

| uArch              | L1 IC       | L1 ITLB | L2 ITLB |
| ------------------ | ----------- | ------- | ------- |
| AMD Zen 1          | 4-way 64KB  | 64      | 512     |
| AMD Zen 2          | 8-way 32KB  | 64      | 512     |
| AMD Zen 3          | 8-way 32KB  | 64      | 512     |
| AMD Zen 4          | 8-way 32KB  | 64      | 512     |
| AMD Zen 5          | 8-way 32KB  | 64      | 2048    |
| Ampere One         | 4-way 16KB  | 64      | 768     |
| Apple Avalanche    | 192KB       | 192     |         |
| Apple Firestorm    | 6-way 192KB | 192     |         |
| Apple Icestorm     | 128KB       | 128     |         |
| ARM Cortex-A77     | 4-way 64KB  | 48      |         |
| ARM Cortex-X1      | 4-way 64KB  | 48      |         |
| ARM Neoverse-V1    |             |         |         |
| ARM Cortex-X2      | 4-way 64KB  | 48      |         |
| ARM Neoverse-N2    |             |         |         |
| ARM Cortex-X3      | 4-way 64KB  | 48      |         |
| ARM Neoverse-V2    |             |         |         |
| ARM Cortex-X4      | 4-way 64KB  | 48      |         |
| ARM Neoverse-V3    |             |         |         |
| ARM Cortex-A720    |             |         |         |
| ARM Neoverse-N3    |             |         |         |
| ARM Cortex-X925    | 4-way 64KB  | 128     |         |
| ARM C1-Pro         | 4-way 64KB  | 128     |         |
| Intel Crestmont    | 8-way 64KB  | 64      |         |
| Intel Golden Cove  | 8-way 32KB  | 256     |         |
| Intel Gracemont    | 8-way 64KB  | 64      |         |
| Intel Lion Cove    |             |         |         |
| Intel Redwood Cove | 64KB        |         |         |
| Intel Skymont      | 64KB        | 128     |         |
| Intel Sunny Cove   | 8-way 32KB  | 128     |         |
| Qualcomm Oryon     | 6-way 192KB | 256     |         |

### Move Elimination / Zeroing Idiom / Ones Idiom

| Pattern\\uArch             | Oryon   | Firestorm | Golden Cove | Cortex X1 | Zen 3   | Sunny Cove | Zen 1-2 |
| -------------------------- | ------- | --------- | ----------- | --------- | ------- | ---------- | ------- |
| # ALU                      | 6       | 6         | 5           | 4         | 4       | 4          | 4       |
| # Dispatch                 | 8       | 8         | 6           | 8         | 6       | 5          | 5       |
| Dep int add                | 1.0     | 1.0       | 1.0         | 1.0       | 1.0     | 1.0        | 1.0     |
| Indep int add              | 6.0     | 3.9       | 4.7         | 4.0       | 4.0     | 4.0        | 4.0     |
| Dep int mov                | 1.2     | 1.2       | **5.5**     | 1.3       | **6.0** | **4.6**    | **5.0** |
| Indep int mov              | **8.0** | **8.0**   | **5.4**     | 4.0       | **6.0** | **4.6**    | **5.0** |
| Dep zero via xor           | 1.0     | 1.0       | **5.5**     | 1.0       | **6.0** | **4.6**    | *4.0*   |
| Dep zero via sub           | 1.0     | 1.0       | **6.0**     | 1.0       | **6.0** | **4.6**    | *4.0*   |
| Indep set zero via mov     | 6.0     | **8.0**   | **6.0**     | **6.0**   | 4.0     | 3.7        | 4.0     |
| Indep set one via mov      | 6.0     | **7.8**   | **6.0**     | 4.0       | 4.0     | 4.0        | 4.0     |
| Indep set two via mov      | 6.0     | **7.8**   | **6.0**     | 4.0       | 4.0     | 4.0        | 4.0     |
| Indep set 1024 via mov     | 6.0     | **7.8**   | 5.0         | 4.0       | 4.0     | 4.0        | 4.0     |
| Vec dep mov                | 0.6     | 0.6       | **6.0**     | 0.5       | **6.0** | 1.0        | 4.0     |
| Vec indep mov              | **8.0** | **8.0**   | **6.0**     | 4.0       | **6.0** | 3.0        | 4.0     |
| Vec dep set zero via xor   | 0.5     | 0.5       | **6.0**     | 0.5       | *4.0*   | **5.0**    | *4.0*   |
| Vec dep set zero via sub   | 0.5     | 0.5       | 0.5         | 0.5       | 0.3     | 0.25       | 0.3     |
| Vec indep set zero via mov | 4.0     | **8.0**   | N/A         | **6.0**   | N/A     | N/A        | N/A     |
| Nop                        | **8.0** | **8.0**   | **5.7**     | **8.0**   | **6.0** | 4.0        | **5.0** |

- **Bold**: Not executed by ALU/FPU, eliminated at rename stage
- *Italics*: Executed by ALU/FPU, but source register dependency was removed so that dependent ops can be executed in parallel
- Although Cortex-X1 has 8 dispatch width, but it has many limitations on instruction type

## Backend

### ROB

| uArch              | ROB       |
| ------------------ | --------- |
| AMD Zen 1          | 192       |
| AMD Zen 2          | 224       |
| AMD Zen 3          | 256       |
| AMD Zen 4          | 320       |
| AMD Zen 5          | 448       |
| Ampere One         | 208       |
| Apple Avalanche    | 274 Group |
| Apple Firestorm    | 330 Group |
| Apple Icestorm     | nan       |
| ARM Cortex-A77     | 160 MOP   |
| ARM Cortex-X1      | 224 MOP   |
| ARM Neoverse-V1    | nan       |
| ARM Cortex-X2      | 288 MOP   |
| ARM Neoverse-N2    | nan       |
| ARM Cortex-X3      | 320 MOP   |
| ARM Neoverse-V2    | nan       |
| ARM Cortex-X4      | 384 MOP   |
| ARM Neoverse-V3    | nan       |
| ARM Cortex-A720    | nan       |
| ARM Neoverse-N3    | nan       |
| ARM Cortex-X925    | 768 MOP   |
| ARM C1-Pro         | 1024 MOP  |
| Intel Crestmont    | 256       |
| Intel Golden Cove  | 512       |
| Intel Gracemont    | 256       |
| Intel Lion Cove    | 576       |
| Intel Redwood Cove | 512       |
| Intel Skymont      | 416       |
| Intel Sunny Cove   | 352       |
| Qualcomm Oryon     | 680       |

### LSU

| uArch       | 64b Load | 64b Store | 128b Load | 128b Store | 256b Load | 256b Store |
| ----------- | -------- | --------- | --------- | ---------- | --------- | ---------- |
| Zen2        | 2/cycle  | 1/cycle   | 2/cycle   | 1/cycle    | 2/cycle   | 1/cycle    |
| Zen4        | 3/cycle  | 2/cycle   | 2/cycle   | 1/cycle    | 2/cycle   | 1/cycle    |
| Golden Cove | 3/cycle  | 2/cycle   | 3/cycle   | 2/cycle    | 3/cycle   | 2/cycle    |
| Firestorm   | 3/cycle  | 2/cycle   | 3/cycle   | 2/cycle    | 1.5/cycle | 1/cycle    |
| Oryon       | 4/cycle  | 2/cycle   | 4/cycle   | 2/cycle    | 2/cycle   | 1/cycle    |

### Execution Unit

| uArch              | ALU units | Branch units | FP/Vec units |
| ------------------ | --------- | ------------ | ------------ |
| AMD Zen 1          | 4         | 2            | 4x 128b      |
| AMD Zen 2          | 4         | 2            | 4x 256b      |
| AMD Zen 3          | 4         | 2            | 4x 256b      |
| AMD Zen 4          | 4         | 2            | 4x 256b      |
| AMD Zen 5          | 6         | 3            | 4x 512b      |
| Ampere One         | 4         | 2            | 2            |
| Apple Avalanche    | 6         | 2            | 4x 128b      |
| Apple Firestorm    | 6         | 2            | 4x 128b      |
| Apple Icestorm     | 4         | 2            | 2x 128b      |
| ARM Cortex-A77     | 4         | 2            | 2            |
| ARM Cortex-X1      | 4         | 2            | 4            |
| ARM Neoverse-V1    | 4         | 2            | 4x 128b      |
| ARM Cortex-X2      | 4         | 2            | 4x 128b      |
| ARM Neoverse-N2    | 4         | 2            | 2x 128b      |
| ARM Cortex-X3      | 6         | 2            | 4x 128b      |
| ARM Neoverse-V2    | 6         | 2            | 4x 128b      |
| ARM Cortex-X4      | 8         | 3            | 4            |
| ARM Neoverse-V3    | 8         | 3            | 4x 128b      |
| ARM Cortex-A720    | 4         | 2            | 2x 128b      |
| ARM Neoverse-N3    | 4         | 2            | 2x 128b      |
| ARM Cortex-X925    | 8         | 3            | 6x 128b      |
| ARM C1-Pro         | 4         | 2            | 2            |
| Intel Crestmont    | 4         | 2            | 3            |
| Intel Golden Cove  | 5         | 2            | 3            |
| Intel Gracemont    | 4         | 2            | 3x 128b      |
| Intel Lion Cove    | 6         | 3            | 4x 256b      |
| Intel Redwood Cove | 5         | 2            | 3x 256b      |
| Intel Skymont      | 8         | 3            | 4x 128b      |
| Intel Sunny Cove   | 4         | 2            | 2x 512b      |
| Qualcomm Oryon     | 6         | 2            | 4x 128b      |

## Comparison between microarchitectures

### Firestorm vs Oryon

|                  | Apple Firestorm        | Qualcomm Oryon         |
| ---------------- | ---------------------- | ---------------------- |
| L1 BTB           | 1024 (0 bubble)        | 2048 (0 bubble)        |
| L2 BTB           | 192KB L1 IC (2 bubble) | 192KB L1 IC (2 bubble) |
| RAS              | 50                     | 50                     |
| L1 IC            | 6-way 192KB            | 6-way 192KB            |
| Decode width     | 8                      | 8                      |
| Rename width     | 8                      | 8                      |
| ROB              | 330 Group              | 680                    |
| Branch units     | 2                      | 2                      |
| ALU units        | 6                      | 6                      |
| FP/Vec units     | 4x 128b                | 4x 128b                |
| Load/Store pipes | 1                      | 2                      |
| Load-only pipes  | 2                      | 2                      |
| Store-only pipes | 1                      | 0                      |

### Cortex-X series

|                  | Cortex-X1 | Cortex-X2 | Cortex-X3 | Cortex-X4 | Cortex-X925 |
| ---------------- | --------- | --------- | --------- | --------- | ----------- |
| ALU units        | 4         | 4         | 6         | 8         | 8           |
| Branch units     | 2         | 2         | 2         | 3         | 3           |
| Load/Store pipes | 2         | 2         | 2         | 1         | 2           |
| Load-only pipes  | 1         | 1         | 1         | 2         | 2           |
| Store-only pipes | 0         | 0         | 0         | 1         | 0           |
| ROB              | 224 MOP   | 288 MOP   | 320 MOP   | 384 MOP   | 768 MOP     |
| Decode width     | 5         | 5         | 6         | 10        | 10          |
| Rename width     | 8         | 8         | 8         | 10        | 10          |
| Max Load         | 3         | 3         | 3         | 3         | 4           |
| Max Store        | 2         | 2         | 2         | 2         | 2           |
| Max Load+Store   | 3         | 3         | 3         | 4         | 4           |
