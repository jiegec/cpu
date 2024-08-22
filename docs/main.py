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
                "RAS",
            ]
        ]
        # drop integer index
        data = data.set_index("uArch")
        # handle empty fields
        data = data.fillna("")
        # convert to integer
        for index, row in data.iterrows():
            if row["L1 BTB"] != "":
                data.loc[index, "L1 BTB"] = str(int(row["L1 BTB"]))
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
        for index, row in data.iterrows():
            if row["L1 ITLB"] != "":
                data.loc[index, "L1 ITLB"] = str(int(row["L1 ITLB"]))
            if row["L2 ITLB"] != "":
                data.loc[index, "L2 ITLB"] = str(int(row["L2 ITLB"]))
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
        # reduce column width
        for index, row in data.iterrows():
            data.loc[index, "uArch"] = row["uArch"].removeprefix("ARM ")
        # drop integer index
        data = data.set_index("uArch")
        data = data.transpose()
        return data.to_markdown()
