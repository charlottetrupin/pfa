open Component_defs

let ctx = ref None
let init () =
  let _, c = Gfx.create
  "game_canvas:800x600:"
  in
  ctx := Some c


let update _dt el =
  let ctx = Option.get !ctx in
  Gfx.clear_rect ctx 0 0 800 600;
  (*let hmax = Globals.canvas_height in
  let h = 32. in
  let player = (List.hd el) in
  let posj = (Position.get player) in
  let yr = posj.y  in*)
(*  Gfx.debug (Printf.sprintf "yr= %f" (yr));*)
  List.iter (fun e ->
    let pos = Position.get e in
    let box = Box.get e in
    let name = Name.get e in
    (*let xr = ref 0 in *)
    if (name <> "player") then  Position.set e {x=pos.x; y= pos.y +. 0.5(*yr*)};
    if (name = "bg") then Position.set e {x=pos.x; y= pos.y +. 0.2(*yr*)};

    let pos = Position.get e in
    let surface = Surface.get e in

    match surface with
    Color color ->
        Gfx.fill_rect ctx ((int_of_float pos.x))
                         ((int_of_float pos.y))
                          box.width
                          box.height
                          color

    | Image render -> (*let _ = Gfx.debug (Printf.sprintf "nom= %s" (name))in *)
    Gfx.blit_scale ctx render ((int_of_float pos.x))
                                                ((int_of_float pos.y))
                                                box.width
                                               box.height
    | Animation anim ->
                let v = Velocity.get e in
                let d = if v.x < 0.0 then -1 else if v.x > 0.0 then 1 else 0 in
                let render = Texture.get_frame anim d in
                Gfx.blit_scale ctx render ((int_of_float pos.x))
                         ((int_of_float pos.y)) box.width box.height
    | Text (text, font, color) ->
           Gfx.draw_text ctx text ((int_of_float pos.x))
                         ((int_of_float pos.y)) font color
    ) el;
    Gfx.commit ctx
