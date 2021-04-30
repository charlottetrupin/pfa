open Component_defs
open System_defs
open Ecs

let plat = Entity.Table.create 17
let () = Random.self_init()

let create name x y =
  let e = Entity.create () in
  Entity.Table.add plat e () ;
  (* components *)
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = 40 ; height = 5};
  Name.set e name;
  Surface.set e Texture.black;

  (* Systems *)
  Collision_S.register e;
  Draw_S.register e;
  e



let rec generatePlateforme nb x y =
    match nb with
    | (-1) -> ()
    |_ -> let angle = Random.float (Random.float (Globals.pi))  in
          let arcx = (Random.float 540.) in
          let arcy = (Random.float 20.)  in
          let rx = ((*x +.*) ((cos angle) *. arcx )+. 40.) in
          let ry = (y -. ((sin angle) *. arcy )-. 50.) in
          if  (rx <= (float_of_int Globals.wall_thickness) || rx > (float_of_int (Globals.canvas_width - Globals.wall_thickness))) && (ry <= (float_of_int (Globals.canvas_height - Globals.play_height)) || ry > (float_of_int (Globals.canvas_height - Globals.wall_thickness)))   then (*let _truc =  Gfx.debug (Printf.sprintf "ici:%f;%f" rx ry) in   *)          generatePlateforme nb x y
           else (*let _truc =  Gfx.debug (Printf.sprintf "%f;%f" rx ry) in *)
              let _ = create ("plateforme" ^ string_of_int nb) rx ry in generatePlateforme (nb-1) rx ry



let _is_plat e = Entity.Table.mem plat e
