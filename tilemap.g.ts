// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007020304040404040404040404040408050201020202020202010205010201050304040802030404040802030408020505020202020502020205020202020205050203040408020502030404040802050501050202020205020202020105020505020502030404040802050201050205050205010502020201020502030802050502020203020304020205020202020503040404080202050203040404080205050202010308020501050202010304080502050202020203040802050202020505020501030404080202020304080105050203040802020202030408010502050502020202020308020201020205020603040404040404040404040404040408`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 . . . 2 
2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 
2 . . . . 2 . . . 2 . . . . . 2 
2 . 2 2 2 2 . 2 . 2 2 2 2 2 . 2 
2 . 2 . . . . 2 . . . . . 2 . 2 
2 . 2 . 2 2 2 2 2 . 2 . . 2 . 2 
2 . 2 . 2 . . . . . 2 . 2 2 . 2 
2 . . . 2 . 2 2 . . 2 . . . . 2 
2 2 2 2 2 . . 2 . 2 2 2 2 2 . 2 
2 . . . 2 2 . 2 . 2 . . . 2 2 2 
2 . 2 . . . . 2 2 2 . 2 . . . 2 
2 . 2 . 2 2 2 2 . . . 2 2 2 . 2 
2 . 2 2 2 . . . . 2 2 2 . 2 . 2 
2 . . . . . 2 2 . . . . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles4,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.builtin.forestTiles3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
