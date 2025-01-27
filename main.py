import pandas
import math

all_data = pandas.read_csv("docs/uarch.csv")


def define_env(env):
    @env.macro
    def bp_comparison():
        data = all_data
        # filter columns
        data = data[
            [
                "uArch",
                "L1 BTB",
                "L2 BTB",
                "L3 BTB",
                "ITA",
                "RAS",
            ]
        ]
        # drop integer index
        data = data.set_index("uArch")
        # handle empty fields
        data = data.fillna("")
        # convert to integer
        fields = ["ITA"]
        for index, row in data.iterrows():
            for field in fields:
                if row[field] != "":
                    data.loc[index, field] = str(int(row[field]))
        return data.to_markdown()

    @env.macro
    def l1ic_comparison():
        data = all_data
        # filter columns
        data = data[
            [
                "uArch",
                "L1 IC",
                "L1 ITLB",
                "L2 ITLB",
            ]
        ]
        # drop integer index
        data = data.set_index("uArch")
        # handle empty fields
        data = data.fillna("")
        # convert to integer
        fields = ["L1 ITLB", "L2 ITLB"]
        for index, row in data.iterrows():
            for field in fields:
                if row[field] != "":
                    data.loc[index, field] = str(int(row[field]))
        return data.to_markdown()

    @env.macro
    def rob_comparison():
        data = all_data
        # filter columns
        data = data[
            [
                "uArch",
                "ROB",
            ]
        ]
        # drop integer index
        data = data.set_index("uArch")
        return data.to_markdown()

    @env.macro
    def eu_comparison():
        data = all_data
        # filter columns
        data = data[
            [
                "uArch",
                "ALU units",
                "Branch units",
                "FP/Vec units",
            ]
        ]
        # drop integer index
        data = data.set_index("uArch")
        return data.to_markdown()

    @env.macro
    def cortex_x_comparison():
        data = all_data
        # only consider cortex x cores
        data = data[data["uArch"].str.startswith("ARM Cortex-X")]
        # filter columns
        data = data[
            [
                "uArch",
                "ALU units",
                "Branch units",
                "Load/Store pipes",
                "Load-only pipes",
                "Store-only pipes",
                "ROB",
                "Decode width",
                "Rename width",
            ]
        ]
        data["Max Load"] = data["Load/Store pipes"].astype(int) + data["Load-only pipes"].astype(int)
        data["Max Store"] = data["Load/Store pipes"].astype(int) + data["Store-only pipes"].astype(int)
        data["Max Load+Store"] = (
            data["Load/Store pipes"].astype(int)
            + data["Load-only pipes"].astype(int)
            + data["Store-only pipes"].astype(int)
        )

        # reduce column width
        for index, row in data.iterrows():
            data.loc[index, "uArch"] = row["uArch"].removeprefix("ARM ")
        # drop integer index
        data = data.set_index("uArch")
        data = data.transpose()
        # compute maximum load
        return data.to_markdown()

    @env.macro
    def firestorm_oryon_comparison():
        data = all_data
        # only consider firestorm/oryon
        data = data[data["uArch"].isin(["Apple Firestorm", "Qualcomm Oryon"])]
        # filter columns
        data = data[
            [
                "uArch",
                "L1 BTB",
                "L2 BTB",
                "RAS",
                "L1 IC",
                "Decode width",
                "Rename width",
                "ROB",
                "Branch units",
                "ALU units",
                "FP/Vec units",
                "Load/Store pipes",
                "Load-only pipes",
                "Store-only pipes",
            ]
        ]
        # drop integer index
        data = data.set_index("uArch")
        fields = ["L1 BTB", "Rename width"]
        for index, row in data.iterrows():
            for field in fields:
                if row[field] != "":
                    data.loc[index, field] = str(row[field])
        data = data.transpose()
        return data.to_markdown()
