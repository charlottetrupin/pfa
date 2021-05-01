open Ecs
open Component_defs
open System_defs


type action = { mutable move_left : bool;
                mutable move_right : bool;
                mutable jump : bool;
    }
let action = { move_left = false; move_right = false ; jump = false}

let create name img x y =
  let e = Entity.create () in
  (* components *)
  Position.set e {x = x; y = y };
  Box.set e {width = 35 ; height = 50};
  Velocity.set e { x = 0.0; y = 0.0 };
  Mass.set e 10.0;
  Name.set e name;
  Surface.set e (Texture.create_image img 35 50);
  Resting.set e false;
  SumForces.set e Vector.zero;
  (*CollisionResolver.set e is_resting;*)
  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Move_S.register e;
  Draw_S.register e;
  Force_S.register e;
  e


let move fdir =
  let e = Game_state.get_player () in
    let old_f = SumForces.get e in
    let new_f = Vector.add fdir old_f in
    SumForces.set e new_f

let do_move () =
  let r = Resting.get (Game_state.get_player ()) in
  (* Si on teste r pour les mouvement horizontaux, on ne peut
     pas diriger le personnage en l'air : difficile de le contrôler
  *)
  if action.move_left then move { x = -0.05 ; y = 0.0 };
  if action.move_right then move { x = 0.05 ; y = 0.0 };
  if r then begin
    move { x = 0.0; y = -0.35 };
    Resting.set (Game_state.get_player ()) false
  end

let jump () = action.jump <- true
let run_left () = action.move_left <- true
let run_right () = action.move_right <- true

let stop_jump () = action.jump <-  false
let stop_run_left () = action.move_left <- false
let stop_run_right () = action.move_right <- false
