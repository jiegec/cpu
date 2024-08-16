# Comparisons across microarchitectures

## Frontend

### Branch Prediction

| uArch                       | BTB                                    | Indirect | RAS |
|-----------------------------|----------------------------------------|----------|-----|
| AMD Zen2                    | 16 L1 + 512 L2 + 7168 L3               | 1024     | 31  |
| AMD Zen3                    | 1024 L1 + 6656 L2                      | 1536     | 32  |
| AMD Zen4                    | 1536 L1 + 7168 L2                      | 3072     | 32  |
| AMD Zen5                    | 1024 L1 + 16384 L2 + 8192 L3           |          | 52  |
| Intel Sunny Cove            | 256 L1 + 5120 L2                       |          | 22  |
| Intel Golden Cove           | 128 L1 + 6144 L2 + 12288 L3            |          | 20  |
| Intel Gracemont             | 1024 L1 + 5120 L2                      |          |     |
| Apple M1 P-core (Firestorm) | 1024 L1 + 192KB ICache as L2           |          | 50  |
| Apple M2 P-core (Avalanche) | 1024 L1 + 3072 L2 + 192KB ICache as L3 |          |     |
| Qualcomm Oryon              | 2048 L1 + ICache as L2                 | 2048     | 48  |

### L1 ICache + ITLB

| uArch                       | ICache      | ITLB            |
|-----------------------------|-------------|-----------------|
| AMD Zen2                    | 32KB 8-way  | 64 L1 + 512 L2  |
| AMD Zen3                    | 32KB 8-way  | 64 L1 + 512 L2  |
| AMD Zen4                    | 32KB 8-way  | 64 L1 + 512 L2  |
| AMD Zen5                    | 32KB 8-way  | 64 L1 + 2048 L2 |
| Intel Sunny Cove            | 32KB 8-way  | 128             |
| Intel Golden Cove           | 32KB 8-way  | 256             |
| Intel Gracemont             | 64KB 8-way  | 64              |
| Apple M1 P-core (Firestorm) | 192KB       |                 |
| Apple M2 P-core (Avalanche) | 192KB       |                 |
| Apple M3 P-core             | 192KB       |                 |
| Apple M4 P-core             | 192KB       |                 |
| Qualcomm Oryon              | 192KB 6-way | 256 8-way ITLB  |

### Move Elimination / Zeroing Idiom / Ones Idiom

| Pattern\uArch              | Oryon   | Firestorm | Golden Cove | Cortex X1 | Zen 3   | Sunny Cove | Zen 1-2 |
|----------------------------|---------|-----------|-------------|-----------|---------|------------|---------|
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
| Vec dep mov                | 0.6     | 0.6       | 1.0         | 0.5       | 1.0     | 1.0        | 1.0     |
| Vec indep mov              | **8.0** | **8.0**   | 3.0         | 4.0       | 4.0     | 3.0        | 4.0     |
| Vec dep set zero via xor   | 0.5     | 0.5       | **6.0**     | 0.5       | *4.0*   | **5.0**    | *4.0*   |
| Vec dep set zero via sub   | 0.5     | 0.5       | 0.5         | 0.5       | 0.3     | 0.25       | 0.3     |
| Vec indep set zero via mov | 4.0     | **8.0**   | N/A         | **6.0**   | N/A     | N/A        | N/A     |
| Nop                        | **8.0** | **8.0**   | **5.7**     | **8.0**   | NT      | 4.0        | **5.0** |

- **Bold**: Not executed by ALU/FPU, eliminated at rename stage
- *Italics*: Executed by ALU/FPU, but source register dependency was removed so that dependent ops can be executed in parallel
- Although Cortex-X1 has 8 dispatch width, but it has many limitations on instruction type

## Backend

### ROB

| uArch             | ROB |
|-------------------|-----|
| AMD Zen2          | 224 |
| AMD Zen3          | 256 |
| AMD Zen4          | 320 |
| AMD Zen5          | 448 |
| Intel Sunny Cove  | 352 |
| Intel Golden Cove | 512 |
| Intel Gracemont   | 256 |
| Intel Crestmont   | 256 |

### LSU

| uArch       | 64b Load | 64b Store | 128b Load | 128b Store | 256b Load | 256b Store |
|-------------|----------|-----------|-----------|------------|-----------|------------|
| Zen2        | 2/cycle  | 1/cycle   | 2/cycle   | 1/cycle    | 2/cycle   | 1/cycle    |
| Zen4        | 3/cycle  | 2/cycle   | 2/cycle   | 1/cycle    | 2/cycle   | 1/cycle    |
| Golden Cove | 3/cycle  | 2/cycle   | 3/cycle   | 2/cycle    | 3/cycle   | 2/cycle    |
| Firestorm   | 3/cycle  | 2/cycle   | 3/cycle   | 2/cycle    | N/A       | N/A        |
| Oryon       | 4/cycle  | 2/cycle   | 4/cycle   | 2/cycle    | N/A       | N/A        |

## Comparison between microarchitecture pairs

### Firestorm vs Oryon

- L1 BTB: 1024(Firestorm) vs 2048(Oryon)
- L1 DC: 128KB(Firestorm) vs 96KB(Oryon)
- Load pipe: 3(Firestorm) vs 4(Oryon)
