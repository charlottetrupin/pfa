(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_new_string(""),
     cst_Gfx_Gfx_base_GfxError=caml_new_string("Gfx__Gfx_base.GfxError"),
     cst_0=caml_new_string("0)"),
     cst$0=caml_new_string(", "),
     cst$1=caml_new_string(", "),
     cst$2=caml_new_string(", "),
     cst_rgba=caml_new_string("rgba("),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib=global_data.Stdlib,
     Stdlib_format=global_data.Stdlib__format,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Stdlib_queue=global_data.Stdlib__queue,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Gfx_gfx_jsoo=[0];
    caml_register_global(50,Gfx_gfx_jsoo,"Gfx__gfx_jsoo__");
    var Gfx=[0];
    caml_register_global(51,Gfx,"Gfx__");
    var
     GfxError=[248,cst_Gfx_Gfx_base_GfxError,runtime.caml_fresh_oo_id(0)],
     _d_=
      [0,
       [20,
        0,
        caml_new_string
         ("\xff\xff\xff\xff\xff\xff\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
        [12,58,[4,0,0,0,[12,120,[4,0,0,0,[12,58,[2,0,0]]]]]]],
       caml_new_string("%[^:]:%dx%d:%s")],
     _a_=
      [0,
       [11,
        caml_new_string("Invalid window spec `"),
        [2,0,[11,caml_new_string("` : "),[2,0,0]]]],
       caml_new_string("Invalid window spec `%s` : %s")],
     _b_=
      [0,
       [11,caml_new_string("Invalid window spec `"),[2,0,[12,96,0]]],
       caml_new_string("Invalid window spec `%s`")],
     _c_=
      [0,
       [11,caml_new_string("Invalid window spec `"),[2,0,[12,96,0]]],
       caml_new_string("Invalid window spec `%s`")],
     _e_=
      [0,
       [11,caml_new_string("Cannot find canvas with id `"),[2,0,[12,96,0]]],
       caml_new_string("Cannot find canvas with id `%s`")];
    function gfx_error(fmt)
     {function _A_(msg){throw [0,GfxError,msg]}
      return caml_call2(Stdlib_format[134],_A_,fmt)}
    function parse_window_spec(s)
     {try
       {var
         _y_=
          function(title,width,height,flags)
           {return [0,
                    title,
                    width,
                    height,
                    caml_call2(Stdlib_string[35],44,flags)]},
         _z_=caml_call3(Stdlib_scanf[4],s,_d_,_y_);
        return _z_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Stdlib_scanf[2])
         {var msg=exn[2],match=caml_call2(Stdlib_string[35],58,msg);
          if(match)
           {var _w_=match[2];
            if(_w_)
             {var l=_w_[2],_x_=caml_call2(Stdlib_string[7],cst,l);
              return caml_call2(gfx_error(_a_),s,_x_)}}
          return caml_call1(gfx_error(_b_),s)}
        if(exn === Stdlib[12])return caml_call1(gfx_error(_c_),s);
        throw exn}}
    var include=[0,GfxError,gfx_error,parse_window_spec];
    caml_register_global(56,include,"Gfx__Gfx_base");
    var events=caml_call1(Stdlib_queue[2],0);
    function create(s)
     {var
       match=parse_window_spec(s),
       h=match[3],
       w=match[2],
       id=match[1],
       match$0=
        caml_call2(Js_of_ocaml_Dom_html[5],id,Js_of_ocaml_Dom_html[117][10]);
      if(match$0)
       {var canvas=match$0[1];
        canvas.width = w;
        canvas.height = h;
        var
         ctx=canvas.getContext(Js_of_ocaml_Dom_html[1]),
         _s_=
          function(e)
           {function _v_(k)
             {return caml_call2
                      (Stdlib_queue[3],[1,caml_js_to_string(k)],events)}
            caml_call2(Js_of_ocaml_Js[6][6],e.key,_v_);
            return Js_of_ocaml_Js[7]};
        canvas.onkeydown = caml_call1(Js_of_ocaml_Dom_html[10],_s_);
        var
         _t_=
          function(e)
           {function _u_(k)
             {return caml_call2
                      (Stdlib_queue[3],[0,caml_js_to_string(k)],events)}
            caml_call2(Js_of_ocaml_Js[6][6],e.key,_u_);
            return Js_of_ocaml_Js[7]};
        canvas.onkeyup = caml_call1(Js_of_ocaml_Dom_html[10],_t_);
        return [0,canvas,ctx]}
      return caml_call1(gfx_error(_e_),id)}
    function create_offscreen(w,h)
     {var
       canvas=
        caml_call1(Js_of_ocaml_Dom_html[110],Js_of_ocaml_Dom_html[2]);
      canvas.height = h;
      canvas.width = w;
      return canvas.getContext(Js_of_ocaml_Dom_html[1])}
    function render_width(ctx){return ctx.canvas.width}
    function render_height(ctx){return ctx.canvas.width}
    function blit(dst,src,x,y){return dst.drawImage(src.canvas,x,y)}
    function blit_scale(dst,src,dx,dy,dw,dh)
     {return dst.drawImage(src.canvas,dx,dy,dw,dh)}
    function blit_full(dst,src,sx,sy,sw,sh,dx,dy,dw,dh)
     {return dst.drawImage(src.canvas,sx,sy,sw,sh,dx,dy,dw,dh)}
    function color(r,g,b,a)
     {var
       _h_=caml_call1(Stdlib[35],a / 255.),
       _i_=caml_call2(Stdlib[28],_h_,cst_0),
       _j_=caml_call2(Stdlib[28],cst$0,_i_),
       _k_=caml_call1(Stdlib[33],b),
       _l_=caml_call2(Stdlib[28],_k_,_j_),
       _m_=caml_call2(Stdlib[28],cst$1,_l_),
       _n_=caml_call1(Stdlib[33],g),
       _o_=caml_call2(Stdlib[28],_n_,_m_),
       _p_=caml_call2(Stdlib[28],cst$2,_o_),
       _q_=caml_call1(Stdlib[33],r),
       _r_=caml_call2(Stdlib[28],_q_,_p_);
      return caml_call2(Stdlib[28],cst_rgba,_r_)}
    function clear_rect(ctx,x,y,w,h){return ctx.clearRect(x,y,w,h)}
    function fill_rect(ctx,x,y,w,h,c)
     {ctx.fillStyle = c.toString();return ctx.fillRect(x,y,w,h)}
    function load_image(src)
     {var img=caml_call1(Js_of_ocaml_Dom_html[67],Js_of_ocaml_Dom_html[2]);
      img.src = src.toString();
      return img}
    function image_ready(img){return img.complete | 0}
    function draw_image(ctx,img,x,y){return ctx.drawImage(img,x,y)}
    function draw_image_scale(ctx,img,dx,dy,dw,dh)
     {return ctx.drawImage(img,dx,dy,dw,dh)}
    function draw_image_full(ctx,img,sx,sy,sw,sh,dx,dy,dw,dh)
     {return ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)}
    function draw_text(ctx,text,x,y,font,color)
     {ctx.font = font.toString();
      ctx.fillStyle = color.toString();
      return ctx.fillText(text.toString(),x,y)}
    function measure_text(ctx,text,font)
     {ctx.font = font.toString();
      var m=ctx.measureText(text.toString());
      return m.width | 0}
    function poll_event(param)
     {return caml_call1(Stdlib_queue[13],events)
              ?0
              :caml_call1(Stdlib_queue[7],events)}
    function main_loop(f)
     {var cb=[0,caml_js_wrap_callback(function(param){return 0})];
      function loop(dt)
       {var
         _f_=caml_call1(f,dt),
         _g_=_f_?(Js_of_ocaml_Dom_html[8].requestAnimationFrame(cb[1]),0):_f_;
        return _g_}
      cb[1] = caml_js_wrap_callback(loop);
      Js_of_ocaml_Dom_html[8].requestAnimationFrame(cb[1]);
      return 0}
    function commit(param){return 0}
    function debug(msg){return Js_of_ocaml_Firebug[1].log(msg.toString())}
    var
     Gfx$0=
      [0,
       GfxError,
       gfx_error,
       parse_window_spec,
       create,
       create_offscreen,
       render_width,
       render_height,
       blit,
       blit_scale,
       blit_full,
       color,
       fill_rect,
       clear_rect,
       load_image,
       image_ready,
       draw_image,
       draw_image_scale,
       draw_image_full,
       draw_text,
       measure_text,
       poll_event,
       main_loop,
       commit,
       debug];
    caml_register_global(61,Gfx$0,"Gfx");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2Z4X2pzb28ub2Jqcy9nZnhfanNvby5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiZXZlbnRzIiwiY3JlYXRlIiwicyIsImgiLCJ3IiwiaWQiLCJjYW52YXMiLCJjdHgiLCJlIiwiayIsImNyZWF0ZV9vZmZzY3JlZW4iLCJyZW5kZXJfd2lkdGgiLCJyZW5kZXJfaGVpZ2h0IiwiYmxpdCIsImRzdCIsInNyYyIsIngiLCJ5IiwiYmxpdF9zY2FsZSIsImR4IiwiZHkiLCJkdyIsImRoIiwiYmxpdF9mdWxsIiwic3giLCJzeSIsInN3Iiwic2giLCJjb2xvciIsInIiLCJnIiwiYiIsImEiLCJjbGVhcl9yZWN0IiwiZmlsbF9yZWN0IiwiYyIsImxvYWRfaW1hZ2UiLCJpbWciLCJpbWFnZV9yZWFkeSIsImRyYXdfaW1hZ2UiLCJkcmF3X2ltYWdlX3NjYWxlIiwiZHJhd19pbWFnZV9mdWxsIiwiZHJhd190ZXh0IiwidGV4dCIsImZvbnQiLCJtZWFzdXJlX3RleHQiLCJtIiwicG9sbF9ldmVudCIsIm1haW5fbG9vcCIsImYiLCJjYiIsImxvb3AiLCJkdCIsImNvbW1pdCIsImRlYnVnIiwibXNnIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUWEsSUFBVEEsT0FBUzthQUNUQyxPQUFPQztNQUNTOytCQURUQTtPQUNTOzs7T0FDWjsyQ0FERkc7TUFDRTtRQUdGLElBRElDO1FBQ0osZUFKSUY7UUFLSixnQkFMT0Q7UUFJUDtTQUVVOzttQkFDb0NLO1lBQzVDLGFBQTZCQztjQUNDOzREQUREQSxJQVZqQ1QsT0FXMEQ7WUFEdEQsZ0NBRDRDUTtZQUM1Qyx3QkFFUTtRQUhWLG1CQUF3QjtRQUh4Qjs7bUJBTzRDQTtZQUMxQyxhQUE2QkM7Y0FDRDs0REFEQ0EsSUFkakNULE9BZXdEO1lBRHBELGdDQUQwQ1E7WUFD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T0FHQUM7T0FLQUM7T0FLQUc7T0FLQUU7T0FLQUM7T0FVQUs7T0FFQUM7SUFoSFM7VSIsInNvdXJjZXMiOlsiL2hvbWUvam92eWFuL3BmYS9wcm9qZXQvX2J1aWxkL2RlZmF1bHQvbGliL2dmeC9nZnhfanNvby9nZngubWwiXSwic291cmNlc0NvbnRlbnQiOlsib3BlbiBKc19vZl9vY2FtbFxuaW5jbHVkZSBHZnhfYmFzZVxuXG5cbnR5cGUgd2luZG93ID0gRG9tX2h0bWwuY2FudmFzRWxlbWVudCBKcy50XG50eXBlIHJlbmRlciA9IERvbV9odG1sLmNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCBKcy50XG50eXBlIGNvbG9yID0gc3RyaW5nXG5cbmxldCBldmVudHMgPSBRdWV1ZS5jcmVhdGUgKClcbmxldCBjcmVhdGUgcyA9XG4gIGxldCBpZCwgdywgaCwgXyA9IHBhcnNlX3dpbmRvd19zcGVjIHMgaW4gXG4gIG1hdGNoIERvbV9odG1sLmdldEVsZW1lbnRCeUlkX2NvZXJjZSBpZCBEb21faHRtbC5Db2VyY2VUby5jYW52YXMgd2l0aFxuICAgICBOb25lIC0+ICBnZnhfZXJyb3IgXCJDYW5ub3QgZmluZCBjYW52YXMgd2l0aCBpZCBgJXNgXCIgaWRcbiAgIHwgU29tZSBjYW52YXMgLT5cbiAgICAgIGNhbnZhcyAjIy53aWR0aCA6PSAgdztcbiAgICAgIGNhbnZhcyAjIy5oZWlnaHQgOj0gaDtcbiAgICAgIGxldCBjdHggPSBjYW52YXMgIyNnZXRDb250ZXh0IERvbV9odG1sLl8yZF8gaW5cbiAgICAgIGNhbnZhcyAjIy4gb25rZXlkb3duIDo9IERvbV9odG1sLmhhbmRsZXIgKGZ1biBlIC0+XG4gICAgICAgIEpzLk9wdGRlZi5pdGVyIGUgIyMua2V5IChmdW4gayAtPlxuICAgICAgICAgIFF1ZXVlLmFkZCAoR2Z4X2Jhc2UuS2V5RG93biAoSnMudG9fc3RyaW5nIGspKSBldmVudHMpO1xuICAgICAgICBKcy5fdHJ1ZSk7XG4gICAgICBjYW52YXMgIyMuIG9ua2V5dXAgOj0gRG9tX2h0bWwuaGFuZGxlciAoZnVuIGUgLT5cbiAgICAgICAgSnMuT3B0ZGVmLml0ZXIgZSAjIy5rZXkgKGZ1biBrIC0+XG4gICAgICAgICAgUXVldWUuYWRkIChHZnhfYmFzZS5LZXlVcCAoSnMudG9fc3RyaW5nIGspKSBldmVudHMpO1xuICAgICAgICBKcy5fdHJ1ZSk7XG4gICAgICAoY2FudmFzLCBjdHgpXG5cbmxldCBjcmVhdGVfb2Zmc2NyZWVuIHcgaCA9XG4gIGxldCBjYW52YXMgPSBEb21faHRtbC5jcmVhdGVDYW52YXMgRG9tX2h0bWwuZG9jdW1lbnQgaW5cbiAgICBjYW52YXMgIyMuIGhlaWdodCA6PSBoO1xuICAgIGNhbnZhcyAjIy4gd2lkdGggOj0gdztcbiAgICBjYW52YXMjI2dldENvbnRleHQgRG9tX2h0bWwuXzJkX1xuXG5sZXQgcmVuZGVyX3dpZHRoIChjdHggOiByZW5kZXIpID1cbiAgY3R4ICMjLiBjYW52YXMgIyMuIHdpZHRoXG5cbmxldCByZW5kZXJfaGVpZ2h0IChjdHggOiByZW5kZXIpID1cbiAgY3R4ICMjLiBjYW52YXMgIyMuIHdpZHRoXG5cblxubGV0IGJsaXQgKGRzdCA6IHJlbmRlcikgKHNyYyA6IHJlbmRlcikgeCB5ID1cbiAgZHN0ICMjIGRyYXdJbWFnZV9mcm9tQ2FudmFzIChzcmMgIyMuIGNhbnZhcykgKGZsb2F0IHgpIChmbG9hdCB5KVxuXG5sZXQgYmxpdF9zY2FsZSAoZHN0IDogcmVuZGVyKSAoc3JjIDogcmVuZGVyKSBkeCBkeSBkdyBkaCA9XG4gICAgZHN0ICMjIGRyYXdJbWFnZV9mcm9tQ2FudmFzV2l0aFNpemUgKHNyYyAjIy4gY2FudmFzKVxuICAgICAoZmxvYXQgZHgpIChmbG9hdCBkeSkgKGZsb2F0IGR3KSAoZmxvYXQgZGgpXG5cbmxldCBibGl0X2Z1bGwgKGRzdCA6IHJlbmRlcikgKHNyYyA6IHJlbmRlcikgc3ggc3kgc3cgc2ggZHggZHkgZHcgZGggPVxuICAgIGRzdCAjIyBkcmF3SW1hZ2VfZnVsbEZyb21DYW52YXMgKHNyYyAjIy4gY2FudmFzKVxuICAgIChmbG9hdCBzeCkgKGZsb2F0IHN5KSAoZmxvYXQgc3cpIChmbG9hdCBzaClcbiAgICAoZmxvYXQgZHgpIChmbG9hdCBkeSkgKGZsb2F0IGR3KSAoZmxvYXQgZGgpXG5cbmxldCBjb2xvciByIGcgYiBhID1cbiAgXCJyZ2JhKFwiIF4gc3RyaW5nX29mX2ludCByIF4gXCIsIFwiIF5cbiAgICAgICAgICAgIHN0cmluZ19vZl9pbnQgZyBeIFwiLCBcIiBeXG4gICAgICAgICAgICBzdHJpbmdfb2ZfaW50IGIgXiBcIiwgXCIgXlxuICAgICAgICAgICAgc3RyaW5nX29mX2Zsb2F0IChmbG9hdCBhIC8uIDI1NS4pIF4gXCIwKVwiICgqIHdvcmsgYXJvdW5kOlxuICAgICAgICAgICAgT2NhbWwgZ2VuZXJhdGVzIHRoZSBsaXRlcmFsIGZvciBzdHJpbmdfb2ZfZmxvYXQgKDEuMCkgXCIxLlwiLFxuICAgICAgICAgICAgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgcmdiYSBzeW50YXguIEl0J3MgYWx3YXlzIHNhZmVcbiAgICAgICAgICAgIHRvIGFkZCBhIHRyYWlubGluZyAwIGluIHRoaXMgY2FzZSwgc2luY2UgdGhlIG51bWJlciBpcyBlaXRoZXI6XG4gICAgICAgICAgICAwLiDihpIgMC4wXG4gICAgICAgICAgICAxLiAtPiAxLjBcbiAgICAgICAgICAgIDAuMjQyMyAtPiAwLjI0MjMwXG4qKVxubGV0IGNsZWFyX3JlY3QgKGN0eCA6IHJlbmRlcikgeCB5IHcgaCA9XG4gIGN0eCAjIyBjbGVhclJlY3QgKGZsb2F0IHgpIChmbG9hdCB5KSAoZmxvYXQgdykgKGZsb2F0IGgpXG5cbmxldCBmaWxsX3JlY3QgKGN0eCA6IHJlbmRlcikgeCB5IHcgaCBjID1cbiAgKCogRmlyZWJ1Zy5jb25zb2xlICMjIGxvZyAoSnMuc3RyaW5nIGMpOyAqKVxuICAgIGN0eCAjIy4gZmlsbFN0eWxlIDo9IEpzLnN0cmluZyBjO1xuICAgIGN0eCAjIyBmaWxsUmVjdCAoZmxvYXQgeCkgKGZsb2F0IHkpIChmbG9hdCB3KSAoZmxvYXQgaClcblxudHlwZSBpbWFnZSA9IERvbV9odG1sLmltYWdlRWxlbWVudCBKcy50XG5cbmxldCBsb2FkX2ltYWdlIHNyYyA9XG4gIGxldCBpbWcgPSBEb21faHRtbC5jcmVhdGVJbWcgRG9tX2h0bWwuZG9jdW1lbnQgaW5cbiAgaW1nICMjLnNyYyA6PSBKcy5zdHJpbmcgc3JjO1xuICBpbWdcblxubGV0IGltYWdlX3JlYWR5IGltZyA9XG4gIEpzLnRvX2Jvb2wgaW1nICMjLmNvbXBsZXRlXG5cbmxldCBkcmF3X2ltYWdlIChjdHggOiByZW5kZXIpIGltZyB4IHkgPVxuICBjdHggIyMgZHJhd0ltYWdlIGltZyAoZmxvYXQgeCkgKGZsb2F0IHkpXG5cbmxldCBkcmF3X2ltYWdlX3NjYWxlIChjdHggOiByZW5kZXIpIGltZyBkeCBkeSBkdyBkaCA9XG4gIGN0eCAjIyBkcmF3SW1hZ2Vfd2l0aFNpemUgaW1nICAoZmxvYXQgZHgpIChmbG9hdCBkeSkgKGZsb2F0IGR3KSAoZmxvYXQgZGgpXG5cbmxldCBkcmF3X2ltYWdlX2Z1bGwgKGN0eCA6IHJlbmRlcikgaW1nIHN4IHN5IHN3IHNoIGR4IGR5IGR3IGRoID1cbiAgY3R4ICMjIGRyYXdJbWFnZV9mdWxsIGltZ1xuICAoZmxvYXQgc3gpIChmbG9hdCBzeSkgKGZsb2F0IHN3KSAoZmxvYXQgc2gpXG4gIChmbG9hdCBkeCkgKGZsb2F0IGR5KSAoZmxvYXQgZHcpIChmbG9hdCBkaClcblxubGV0IGRyYXdfdGV4dCAoY3R4IDogcmVuZGVyKSB0ZXh0IHggeSBmb250IGNvbG9yID1cbiAgY3R4ICMjLiBmb250IDo9IEpzLnN0cmluZyBmb250O1xuICBjdHggIyMuIGZpbGxTdHlsZSA6PSBKcy5zdHJpbmcgY29sb3I7XG4gIGN0eCAjIyBmaWxsVGV4dCAoSnMuc3RyaW5nIHRleHQpIChmbG9hdCB4KSAoZmxvYXQgeSlcblxubGV0IG1lYXN1cmVfdGV4dCAoY3R4IDogcmVuZGVyKSB0ZXh0IGZvbnQgPVxuICBjdHggIyMuIGZvbnQgOj0gSnMuc3RyaW5nIGZvbnQ7XG4gIGxldCBtID0gY3R4ICMjIG1lYXN1cmVUZXh0IChKcy5zdHJpbmcgdGV4dCkgaW5cbiAgaW50X29mX2Zsb2F0IChtICMjLiB3aWR0aClcblxubGV0IHBvbGxfZXZlbnQgKCkgPVxuICBpZiBRdWV1ZS5pc19lbXB0eSBldmVudHMgdGhlbiBHZnhfYmFzZS5Ob0V2ZW50XG4gIGVsc2UgUXVldWUucG9wIGV2ZW50c1xuXG5cbmxldCBtYWluX2xvb3AgZiA9XG4gIGxldCBjYiA9IHJlZiAoSnMud3JhcF9jYWxsYmFjayAoZnVuIF8gLT4gKCkpKSBpblxuICBsZXQgbG9vcCBkdCA9XG4gICAgICBpZiBmIGR0IHRoZW5cbiAgICAgICAgaWdub3JlIChEb21faHRtbC53aW5kb3cgIyMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICghY2IpKVxuICBpblxuICBjYiA6PSBKcy53cmFwX2NhbGxiYWNrIGxvb3A7XG4gIGlnbm9yZShEb21faHRtbC53aW5kb3cgIyMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICFjYilcblxuXG5sZXQgY29tbWl0IF8gPSAoKVxuXG5sZXQgZGVidWcgbXNnID1cbiAgRmlyZWJ1Zy5jb25zb2xlICMjIGxvZyAoSnMuc3RyaW5nIG1zZykiXX0=
