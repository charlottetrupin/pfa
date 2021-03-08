(*open Component_defs
open System_defs


let dir x y =
  Vector.{ x = x; y = y}
  *)

(*let create name x y m pv=
  let e = Entity.create () in
  (* components *)
  let px = 50.0 +. Random.float (200.0 -. 50.0) in
  let py = 50.0 +. Random.float (200.0 -. 50.0) in
  Position.set e {x = x; y = y };
  Box.set e {width = 5 ; height = 40};
  Name.set e name;
  Surface.set e Texture.black;

  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Move_S.register e;
  Draw_S.register e;
  e

let reset e x y  =
  Velocity.set e { x = 0.0; y = 0.0 };
  Position.set e { x = x; y = y}


*)