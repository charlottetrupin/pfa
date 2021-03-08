type t = Color of Gfx.color
        | Image of Gfx.render

let black = Color (Gfx.color 0 0 0 255)
let red = Color (Gfx.color 255 0 0 255)
let blue = Color (Gfx.color 0 0 255 255)

let gray = Color (Gfx.color 128 128 128 255)

let create_image im dw dh = 
    let r = Gfx.create_offscreen dw dh in
    Gfx.draw_image_scale r im 2 4 dw dh; 
    Image(r)