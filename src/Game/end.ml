open Component_defs
open System_defs
open Ecs

let create name img =
  let e = Entity.create () in
  Position.set e { x = 0.; y = 0.};
  Name.set e name;
  Box.set e { width = Globals.canvas_height; height = Globals.canvas_width};
  Surface.set e (Texture.create_image img Globals.canvas_height Globals.canvas_width);
  Draw_S.register e;
  e
