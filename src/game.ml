open Ecs
let chain_functions f_list =
  let funs = ref f_list in
  fun dt -> match !funs with
      [] -> false
    | f :: ll ->
      if f dt then true
      else begin
        funs := ll;
        true
      end
 (*
let load_level _dt =


  let ic = open_in "/static/level.txt" in
  let () =
    try
      let count = ref 0 in
      while true do
        let line = input_line ic in
        match String.split_on_char ',' line with
          [ sx; sy; sw; sh ] ->
          ignore (Wall.create ("wall" ^ string_of_int !count)
		    (float_of_string sx)
                    (float_of_string sy)
                    (int_of_string sw)
                    (int_of_string sh));
                    count := !count + 1;
	| _ ->  ()
      done
    with End_of_file -> ()
  in
  false
*)
let init_game _dt =
  let _wall_top = Wall.create "wall_top" 0.0 (float_of_int (Globals.canvas_width - Globals.play_height)) Globals.canvas_height Globals.wall_thickness Texture.b in
  let _wall_bottom = Wall.create "wall_bottom" 0.0 (float_of_int (Globals.canvas_width - Globals.wall_thickness)) Globals.canvas_height Globals.wall_thickness Texture.b in
  let _wall_left = Wall.create "wall_left" 0.0 (float_of_int (Globals.canvas_width - Globals.play_height)) Globals.wall_thickness (Globals.play_height) Texture.gray in
  let _wall_right = Wall.create "wall_right" (float_of_int (Globals.canvas_height - Globals.wall_thickness)) (float_of_int (Globals.canvas_width - Globals.play_height)) Globals.wall_thickness (Globals.play_height) Texture.gray in
  let _platf1 = Plateforme.create "platmilieu" 350. 450. in
  let _plat =  Plateforme.generatePlateforme 50 400. 450. in
  let player = Player.create "player" 350. 418. in
  (*let _platf1 = Plateforme.create_red "platmilieu" 0. 0. in *)
  Game_state.init player;
  Input_handler.register_command (KeyDown "a") (Player.run_left);
  Input_handler.register_command (KeyUp "a") (Player.stop_run_left);
  Input_handler.register_command (KeyDown "d") (Player.run_right);
  Input_handler.register_command (KeyUp "d") (Player.stop_run_right);

  System.init_all ();
  false

(*attention doit rendre false*)
let play_game dt =
  Player.do_move ();
  System.update_all dt;
  true

let game_over _dt = false


let run () = Gfx.main_loop
    (chain_functions
    [init_game;
    play_game;
    game_over])
