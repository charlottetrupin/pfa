open Ecs

module Draw_S = System.Make(Draw_system) 

let () =
  System.register (module Draw_S);