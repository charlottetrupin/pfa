open Ecs
open Component_defs
open System_defs


let create name =
  let e = Entity.create () in
  Position.set e { x = 10.; y = 20.};
  Name.set e name;
  Box.set e { width = 10; height = 20};
  Surface.set e (Texture.Text (("score:" ^ string_of_int (0)),"20px Arial",Gfx.color 0 0 0 255));
  Draw_S.register e;
  e

let maj_score player =
  let e = Game_state.get_score () in
  let pos = Position.get player in
  Surface.set e (Texture.Text (("score:" ^ string_of_float ((pos.y -. float_of_int Globals.play_height)),"20px Arial",Gfx.color 0 0 0 255));
