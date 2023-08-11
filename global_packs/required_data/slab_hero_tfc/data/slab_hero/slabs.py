import os

planks = [
    "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove",
    "cherry", "bamboo",  "crimson", "warped",
]

slabs = [
    "bamboo_mosaic", "stone",
    "cobblestone", "mossy_cobblestone", "smooth_stone",
    "granite", "polished_granite", "diorite",
    "polished_diorite", "andesite", "polished_andesite", "cobbled_deepslate",
    "polished_deepslate",
    "sandstone", "smooth_sandstone", "cut_sandstone",
    "red_sandstone", "smooth_red_sandstone", "cut_red_sandstone", "prismarine",
    "dark_prismarine",
    "blackstone", "polished_blackstone",
    "smooth_quartz",

    "cut_copper", "exposed_cut_copper",
    "weathered_cut_copper", "oxidized_cut_copper",

    "waxed_cut_copper", "waxed_exposed_cut_copper",
    "waxed_weathered_cut_copper", "waxed_oxidized_cut_copper",
]

# Items here will append an "s" to the block name.
bricks = [
    "stone_brick", "mossy_stone_brick", "deepslate_brick", "brick", "mud_brick",
    "prismarine_brick", "nether_brick", "red_nether_brick",
    "polished_blackstone_brick", "end_stone_brick", "deepslate_tile"
]

template = """{{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "SS ",
        "   ",
        "   "
    ],
    "key": {{
        "S": {{
            "item": "minecraft:{1}"
        }}
    }},
    "result": {{
        "item": "minecraft:{0}",
        "count": 1
    }}
}}
"""


recipes = {}

# recipes["quartz_block"] = "quartz_slab"
recipes["purpur_block"] = "purpur_slab"

for p in planks:
    recipes[f"{p}_planks"] = f"{p}_slab"

# for s in slabs:
#     recipes[s] = f"{s}_slab"

# for b in bricks:
#     recipes[f"{b}s"] = f"{b}_slab"


for block, slab in recipes.items():
    root = os.path.dirname(__file__)

    out_dir = os.path.join(root, "out/")
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)

    path = os.path.join(root, f"{out_dir}/{slab}s_to_{block}.json")

    with open(path, "w+") as file:
        file.write(template.format(block, slab))
