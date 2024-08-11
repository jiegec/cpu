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
| Intel Golden Cove           | 128 L1 + 6144 L2 + 12288 L3            |          |     |
| Intel Gracemont             | 1024 L1 + 5120 L2                      |          |     |
| Apple M1 P-core (Firestorm) | 1024 L1 + 192KB ICache as L2           |          | 50  |
| Apple M2 P-core (Avalanche) | 1024 L1 + 3072 L2 + 192KB ICache as L3 |          |     |
| Apple M3 P-core             |                                        |          |     |
| Apple M4 P-core             |                                        |          |     |
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


