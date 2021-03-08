let chain_functions f_list =
  let funs = ref f_list in
  fun dt -> match !funs with
               [] -> false
              | f :: ll ->
                 if f dt then true
                 else begin
                  funs := ll;
                  true
                 end;


let init_game _dt =
  System.init_all ();
  let _wall_top = Wall.create "wall_top" 0.0 0.0 in
  let _wall_bottom = Wall.create "wall_bottom" 0.0 580.0 in
  false;


let play_game dt =
  System.update_all dt;


let game_over _dt = false;


let () = Gfx.main_loop (
        chain_functions [
            init_game;
            play_game;
            game_over 
        ]);
 