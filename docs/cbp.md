# Conditional Branch Predictors

Reverse engineered conditional branch predictors, using the methodology from the following papers:

- Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution
- Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon for Software Optimization and Architectural Analysis

Code can be found at [jiegec/cpu-micro-benchmarks](https://github.com/jiegec/cpu-micro-benchmarks).

Glossary:

- B: the branch address; on ARM64, it is the address of the first byte of the instruction; on AMD64, it is the address of the last byte of the instruction
- T: the target address
- PHR: Path History Register

## Qualcomm Oryon

- PHRT: 100 bits
- PHRB: 32 bits
- PHRT is updated upon taken branch: `PHRTnew = (PHRTold << 2) xor T[32:2]`
- PHRB is updated upon taken branch: `PHRBnew = (PHRBold << 2) xor B[5:2]`
- Source: Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon for Software Optimization and Architectural Analysis

## Apple Firestorm

- PHRT: 100 bits
- PHRB: 28 bits
- PHRT is updated upon taken branch: `PHRTnew = (PHRTold << 2) xor T[32:2]`
- PHRB is updated upon taken branch: `PHRBnew = (PHRBold << 2) xor B[5:2]`
- Source: Dissecting Conditional Branch Predictors of Apple Firestorm and Qualcomm Oryon for Software Optimization and Architectural Analysis

## Apple Icestorm

- PHRT: 60 bits
- PHRB: 16 bits
- PHRT is updated upon taken branch: `PHRTnew = (PHRTold << 2) xor T[47:2]`
- PHRB is updated upon taken branch: `PHRBnew = (PHRBold << 2) xor B[5:2]`
- Source: @jiegec

## Intel Haswell/Ivy Bridge EP

- PHR: `93*2=186` bits
- PHR is updated upon taken branch: `PHRnew = (PHRold << 2) xor footprint`
- footprint has 16 bits:
    - footprint[0] = B[6] xor T[0]
    - footprint[1] = B[7] xor T[1]
    - footprint[2] = B[10] xor T[2]
    - footprint[3] = B[11] xor T[3]
    - footprint[4] = B[14] xor T[4]
    - footprint[5] = B[13] xor T[5]
    - footprint[6] = B[4]
    - footprint[7] = B[5]
    - footprint[8] = B[8]
    - footprint[9] = B[9]
    - footprint[10] = B[12]
    - footprint[11] = B[13]
    - footprint[12] = B[16]
    - footprint[13] = B[17]
    - footprint[14] = B[18]
    - footprint[1t] = B[19]
- Source: Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution

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
    - footprint[1t] = B[18]
- Source: Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution
- Reproduced by @jiegec

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
- Source: Half&Half: Demystifying Intel’s Directional Branch Predictors for Fast, Secure Partitioned Execution
- Reproduced by @jiegec
