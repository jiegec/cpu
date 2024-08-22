import pandas

all_data = pandas.read_csv("docs/uarch.csv")


def define_env(env):
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
        # remove column width
        for index, row in data.iterrows():
            data.loc[index, "uArch"] = row["uArch"].removeprefix("ARM ")
        # drop integer index
        data = data.set_index("uArch")
        data = data.transpose()
        return data.to_markdown()
