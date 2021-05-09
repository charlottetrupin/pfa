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
  List.iter (fun e ->
    let pos = Position.get e in
    let box = Box.get e in
    let name = Name.get e in
    if (name <> "player" && name <> "score" && name <> "end_img" && name <> "win_img") then  Position.set e {x=pos.x; y= pos.y +. 0.5};
    if (name = "bg")
    || (name = "wall_top")
    || (name = "wall_right")
    || (name = "wall_left")
    && ((name <> "end_img")
    && (name <> "win_img"))
    && (name <> "score")
    && (name <> "player"))
    then Position.set e {x=pos.x; y= pos.y +. 0.2};

    let pos = Position.get e in
    let surface = Surface.get e in

    match surface with
    Color color ->
        Gfx.fill_rect ctx ((int_of_float pos.x))
                         ((int_of_float pos.y))
                          box.width
                          box.height
                          color

    | Image render ->
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
    | Text (text, font, color) -> Gfx.draw_text ctx text ((int_of_float pos.x))
                         ((int_of_float pos.y)) font color
    ) el;
    Gfx.commit ctx
