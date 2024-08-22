# Comparisons across microarchitectures

## Frontend

### Branch Prediction

{{ bp_comparison() }}

### L1 ICache + ITLB

{{ l1ic_comparison() }}

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
| Nop                        | **8.0** | **8.0**   | **5.7**     | **8.0**   | **6.0** | 4.0        | **5.0** |

- **Bold**: Not executed by ALU/FPU, eliminated at rename stage
- *Italics*: Executed by ALU/FPU, but source register dependency was removed so that dependent ops can be executed in parallel
- Although Cortex-X1 has 8 dispatch width, but it has many limitations on instruction type

## Backend

### ROB

{{ rob_comparison() }}

### LSU

| uArch       | 64b Load | 64b Store | 128b Load | 128b Store | 256b Load | 256b Store |
|-------------|----------|-----------|-----------|------------|-----------|------------|
| Zen2        | 2/cycle  | 1/cycle   | 2/cycle   | 1/cycle    | 2/cycle   | 1/cycle    |
| Zen4        | 3/cycle  | 2/cycle   | 2/cycle   | 1/cycle    | 2/cycle   | 1/cycle    |
| Golden Cove | 3/cycle  | 2/cycle   | 3/cycle   | 2/cycle    | 3/cycle   | 2/cycle    |
| Firestorm   | 3/cycle  | 2/cycle   | 3/cycle   | 2/cycle    | 1.5/cycle | 1/cycle    |
| Oryon       | 4/cycle  | 2/cycle   | 4/cycle   | 2/cycle    | 2/cycle   | 1/cycle    |

## Comparison between microarchitectures

### Firestorm vs Oryon

{{ firestorm_oryon_comparison() }}

## Cortex-X series

{{ cortex_x_comparison() }}

