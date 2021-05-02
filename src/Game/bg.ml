open Component_defs
open System_defs
open Ecs

let create name img =
  let e = Entity.create () in
  Position.set e { x = 0.; y = float_of_int (Globals.canvas_width - Globals.play_height)};
  Name.set e name;
  Box.set e { width = Globals.canvas_height; height = Globals.play_height};
  Surface.set e (Texture.create_image img Globals.canvas_height Globals.play_height);

  Draw_S.register e;
  e
