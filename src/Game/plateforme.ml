open Component_defs
open System_defs
open Ecs

let plat = Entity.Table.create 17
let () = Random.self_init()

let create name img x y =
  let e = Entity.create () in
  Entity.Table.add plat e () ;
  (* components *)
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = 50 ; height = 30};
  Name.set e name;
  Surface.set e (Texture.create_image img 50 30);

  (* Systems *)
  Collision_S.register e;
  Draw_S.register e;
  e

let rec generatePlateforme nb x y =
    match nb with
    | (-1) -> ()
    |_ -> let angle = Random.float (Random.float (Globals.pi))  in
          let arcx = (Random.float (float_of_int (Globals.canvas_height-40))) in 
          let arcy = (Random.float 30.)  in
          let rx = (((cos angle) *. arcx )+. 40.) in 
          let ry = (y -. ((sin angle) *. arcy )-. 30.) in
          if  (rx <= (float_of_int Globals.wall_thickness) || rx > (float_of_int (Globals.canvas_width - Globals.wall_thickness))) && (ry <= (float_of_int (Globals.canvas_width - Globals.play_height)) || ry > (float_of_int (Globals.canvas_height - Globals.wall_thickness)))   then generatePlateforme nb x y
           else let _ = create ("plateforme" ^ string_of_int nb) Globals.plat_img rx ry in generatePlateforme (nb-1) rx ry 



let _is_plat e = Entity.Table.mem plat e
