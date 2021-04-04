open Component_defs
open System_defs
open Ecs

let plat = Entity.Table.create 17

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
    |0 -> let angle = Random.float Globals.pi  in
          let rx = ((cos angle) *. 50.) +. x in 
          let ry = ((sin angle) *. 50.) +. y in 
           create ("plateforme" ^ string_of_int nb) rx ry
    |_ -> let angle = Random.float Globals.pi  in
          let rx = ((cos angle) *. 50.) +. x in 
          let ry = ((sin angle) *. 50.) +. y in 
           create ("plateforme" ^ string_of_int nb) rx ry; generatePlateforme (nb-1) rx ry
  

  
let _is_plat e = Entity.Table.mem plat e
