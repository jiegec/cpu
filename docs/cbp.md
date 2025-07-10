# Reverse Engineered Conditional Branch Predictors

Reverse engineered conditional branch predictors, using the methodology from the following papers:

- Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution
- Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon for Software Optimization and Architectural Analysis

Code can be found at [jiegec/cpu-micro-benchmarks](https://github.com/jiegec/cpu-micro-benchmarks).

Glossary:

- B: the branch address; on ARM64, it is the address of the first byte of the instruction; on AMD64, it is the address of the last byte of the instruction
- T: the target address
- PHR: Path History Register
- PHT: Pattern History Table
- footprint: how many bits are xor-ed into PHR for each taken branch

Overview:

| uArch              | PHR in bits          | T bits  | B bits  | footprint bits |
|--------------------|----------------------|---------|---------|----------------|
| Qualcomm Oryon     | `100*1 + 32*1 = 132` | T[31:2] | B[5:2]  | 30 + 4         |
| Apple Firestorm    | `100*1 + 28*1 = 128` | T[31:2] | B[5:2]  | 30 + 4         |
| Apple Icestorm     | `60*1 + 16*1 = 76`   | T[47:2] | B[5:2]  | 46 + 4         |
| ARM Neoverse V2    | `264*2 = 528`        | T[11:2] | B[17:2] | 10             |
| ARM Neoverse N2    | `64*3 = 192`         | T[7:2]  | B[14:2] | 3              |
| ARM Neoverse V1    | `64*3 = 192`         | T[7:2]  | B[14:2] | 3              |
| ARM Neoverse N1    | `48*3 = 144`         | T[7:2]  | B[8:2]  | 3              |
| Intel Sunny Cove   | `194*2 = 388`        | T[5:0]  | B[15:0] | 16             |
| Intel Golden Cove  | `194*2 = 388`        | T[5:0]  | B[15:0] | 16             |
| Intel Raptor Cove  | `194*2 = 388`        | T[5:0]  | B[15:0] | 16             |
| Intel Redwood Cove | `194*2 = 388`        | T[5:0]  | B[15:0] | 16             |
| Intel Cascade Lake | `93*2 = 186`         | T[5:0]  | B[18:3] | 16             |
| Intel Skylake      | `93*2 = 186`         | T[5:0]  | B[18:3] | 16             |
| Intel Haswell      | `93*2 = 186`         | T[5:0]  | B[19:4] | 16             |
| Intel Ivy Bridge   | `93*2 = 186`         | T[5:0]  | B[19:4] | 16             |

## Qualcomm Oryon

- PHRT: 100 bits
- PHRB: 32 bits
- PHRT is updated upon taken branch: `PHRTnew = (PHRTold << 2) xor T[31:2]`
- PHRB is updated upon taken branch: `PHRBnew = (PHRBold << 2) xor B[5:2]`
- PHT: 6 tables, see [Result of Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon](https://github.com/jiegec/cpu-micro-benchmarks/blob/master/reports/dissecting_cbp_of_apple_firestorm_and_qualcomm_oryon/README.md)
- Source: Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon for Software Optimization and Architectural Analysis

## Apple Firestorm

- PHRT: 100 bits
- PHRB: 28 bits
- PHRT is updated upon taken branch: `PHRTnew = (PHRTold << 2) xor T[31:2]`
- PHRB is updated upon taken branch: `PHRBnew = (PHRBold << 2) xor B[5:2]`
- PHT: 6 tables, see [Result of Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon](https://github.com/jiegec/cpu-micro-benchmarks/blob/master/reports/dissecting_cbp_of_apple_firestorm_and_qualcomm_oryon/README.md)
- Source: Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon for Software Optimization and Architectural Analysis

## Apple Icestorm

- PHRT: 60 bits
- PHRB: 16 bits
- PHRT is updated upon taken branch: `PHRTnew = (PHRTold << 2) xor T[47:2]`
- PHRB is updated upon taken branch: `PHRBnew = (PHRBold << 2) xor B[5:2]`
- Source: [Jiajie Chen](https://github.com/jiegec)

## ARM Neoverse V2

- PHR: `264*2=528` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 2) xor footprint`
- footprint has 10 bits:
    - footprint[0] = B[2] xor T[7]
    - footprint[1] = B[3] xor T[8]
    - footprint[2] = B[4] xor T[9]
    - footprint[3] = B[5] xor T[10]
    - footprint[4] = B[6] xor B[12] xor T[11]
    - footprint[5] = B[7] xor B[13] xor T[2]
    - footprint[6] = B[8] xor B[14] xor T[3]
    - footprint[7] = B[9] xor B[15] xor T[4]
    - footprint[8] = B[10] xor B[16] xor T[5]
    - footprint[9] = B[11] xor B[17] xor T[6]
- PHT: 8 tables, 2 way set associative, 1024 entries per table, 16K entries in total
- Source: [Jiajie Chen](https://github.com/jiegec)

## ARM Neoverse N2/ARM Neoverse V1

- ARM Neoverse N2 and ARM Neoverse V1 shares the (almost) same frontend design
- PHR: `64*3=192` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 3) xor footprint`
- footprint has 3 bits:
    - footprint[0] = T[2] xor T[5] xor B[3] xor B[6] xor B[9] xor B[12]
    - footprint[1] = T[3] xor T[6] xor B[4] xor B[7] xor B[10] xor B[13]
    - footprint[2] = T[4] xor T[7] xor B[5] xor B[8] xor B[11] xor B[14]
- BIM: 1024 entries, 16 bits per entry, 2KB in total
- PHT: 8 tables, 1024 entries per table, 16 bits per entry, 8K entries & 16KB in total
- Source: [Jiajie Chen](https://github.com/jiegec)

## ARM Neoverse N1

- PHR: `48*3=144` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 3) xor footprint`
- footprint has 3 bits:
    - footprint[0] = T[2] xor T[5] xor B[3] xor B[6]
    - footprint[1] = T[3] xor T[6] xor B[4] xor B[7]
    - footprint[2] = T[4] xor T[7] xor B[5] xor B[8]
- PHT: 6 tables, 1024 entries per table, 16 bits per entry, 6K entries & 12KB in total
- Source: [Jiajie Chen](https://github.com/jiegec)


## Intel Haswell/Ivy Bridge

- PHR: `93*2=186` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 2) xor footprint`
- footprint has 16 bits:
    - footprint[0] = B[6] xor T[0]
    - footprint[1] = B[7] xor T[1]
    - footprint[2] = B[10] xor T[2]
    - footprint[3] = B[11] xor T[3]
    - footprint[4] = B[14] xor T[4]
    - footprint[5] = B[15] xor T[5]
    - footprint[6] = B[4]
    - footprint[7] = B[5]
    - footprint[8] = B[8]
    - footprint[9] = B[9]
    - footprint[10] = B[12]
    - footprint[11] = B[13]
    - footprint[12] = B[16]
    - footprint[13] = B[17]
    - footprint[14] = B[18]
    - footprint[15] = B[19]
- PHT:
    - 3 tables
    - each table is 4-way set associative
    - each table has 9 index bits, including PC[4]
    - each table has `4*2^9=2048` entries
- Source: Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution (There is a typo in `B13 xor T5`, which should be `B15 xor T5`)
- Reproduced by [Jiajie Chen](https://github.com/jiegec)

## Intel Cascade Lake/Skylake

- PHR: `93*2=186` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 2) xor footprint`
- footprint has 16 bits:
    - footprint[0] = B[3] xor T[0]
    - footprint[1] = B[4] xor T[1]
    - footprint[2] = B[7] xor T[2]
    - footprint[3] = B[8] xor T[3]
    - footprint[4] = B[11] xor T[4]
    - footprint[5] = B[12] xor T[5]
    - footprint[6] = B[5]
    - footprint[7] = B[6]
    - footprint[8] = B[9]
    - footprint[9] = B[10]
    - footprint[10] = B[13]
    - footprint[11] = B[14]
    - footprint[12] = B[15]
    - footprint[13] = B[16]
    - footprint[14] = B[17]
    - footprint[15] = B[18]
- PHT:
    - 3 tables
    - history length of the 3 tables: 22, 58, 186
    - each table is 4-way set associative
    - each table has 9 index bits, including PC[5]
    - each table has `4*2^9=2048` entries
- Source: Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution
- Reproduced by [Jiajie Chen](https://github.com/jiegec)

## Intel Sunny Cove/Golden Cove/Raptor Cove/Redwood Cove

- PHR: `194*2=388` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 2) xor footprint`
- footprint has 16 bits:
    - footprint[0] = B[3] xor T[0]
    - footprint[1] = B[4] xor T[1]
    - footprint[2] = B[5]
    - footprint[3] = B[6]
    - footprint[4] = B[7]
    - footprint[5] = B[8]
    - footprint[6] = B[9]
    - footprint[7] = B[10]
    - footprint[8] = B[0] xor T[2]
    - footprint[9] = B[1] xor T[3]
    - footprint[10] = B[2] xor T[4]
    - footprint[11] = B[11] xor T[5]
    - footprint[12] = B[12]
    - footprint[13] = B[13]
    - footprint[14] = B[14]
    - footprint[15] = B[15]
- PHT:
    - 4 tables
    - history length of the 4 tables: 36, 68, 132, 388
    - each table is 4-way set associative
    - each table has 9 index bits, including PC[5]
    - each table has `4*2^9=2048` entries
- Source: Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution ([Jiajie Chen](https://github.com/jiegec) leads to a different conclusion regarding the PHT tables from the paper)
- Reproduced by [Jiajie Chen](https://github.com/jiegec)
