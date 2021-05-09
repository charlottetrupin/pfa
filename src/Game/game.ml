open Ecs
open Component_defs



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


let init_game _dt =
  System.init_all ();
  let _wall_top = Wall.create "wall_top" 0.0 (float_of_int (Globals.canvas_width - Globals.play_height)) Globals.canvas_height Globals.wall_thickness Texture.b in
  let _wall_bottom = Wall.create "wall_bottom" 0.0 (float_of_int (Globals.canvas_width - Globals.wall_thickness)) Globals.canvas_height Globals.wall_thickness Texture.red in
  let _wall_left = Wall.create "wall_left" 0.0 (float_of_int (Globals.canvas_width - Globals.play_height)) Globals.wall_thickness (Globals.play_height) Texture.gray in
  let _wall_right = Wall.create "wall_right" (float_of_int (Globals.canvas_height - Globals.wall_thickness)) (float_of_int (Globals.canvas_width - Globals.play_height)) Globals.wall_thickness (Globals.play_height) Texture.gray in

  let _platf1 = Plateforme.create "platmilieu" Globals.plat_img (float_of_int (Globals.canvas_height/2)) (float_of_int ( Globals.canvas_width/2)) in
  let _plat =  Plateforme.generatePlateforme 100 (float_of_int ((Globals.canvas_height/2)-10)) (float_of_int ( Globals.canvas_width/2))in
  let player = Player.create "player" Globals.per_img (float_of_int ((Globals.canvas_height/2)))  (float_of_int ((Globals.canvas_width/2)-150)) in
  let score = Score.create "score" in
  
  let _bg = Bg.create "bg" Globals.bg_img in
  Game_state.init player score;
  Input_handler.register_command (KeyDown "a") (Player.run_left);
  Input_handler.register_command (KeyUp "a") (Player.stop_run_left);
  Input_handler.register_command (KeyDown "d") (Player.run_right);
  Input_handler.register_command (KeyUp "d") (Player.stop_run_right);
  false

let play_game dt =
  Player.do_move ();
  System.update_all dt;
  let player = Game_state.get_player () in
  let _newScore = Score.maj_score player in
  let pos = Position.get player in
  if(pos.y < (float_of_int(Globals.canvas_width)) then
      if (pos.y < (float_of_int(Globals.canvas_width - Globals.play_height + (Globals.canvas_width/2)))) then
          (System.unregister_all ();
          let _start = End.create "win_img" Globals.win_img in
          false)
      else true
  else (
   System.unregister_all ();
   let _end = End.create "end_img" Globals.end_img in 
   false )

let game_over dt =
      System.update_all dt;
   true
let load_graphics _dt =
   not (Gfx.image_ready Globals.bg_img)
   || not (Gfx.image_ready Globals.plat_img)
   || not (Gfx.image_ready Globals.per_img)
   || not (Gfx.image_ready Globals.end_img)

let run () = Gfx.main_loop
    (chain_functions
    [load_graphics;
    init_game;
    play_game;
    game_over])
