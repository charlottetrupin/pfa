(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     zero=[254,0.,0.],
     name=caml_new_string("position"),
     name$0=caml_new_string("box"),
     name$1=caml_new_string("texture"),
     name$2=caml_new_string("name"),
     name$3=caml_new_string("velocity"),
     name$4=caml_new_string("mass"),
     cst_canvas=caml_new_string("canvas"),
     Stdlib_format=global_data.Stdlib__format,
     Gfx=global_data.Gfx,
     Ecs_Component=global_data.Ecs__Component,
     Stdlib_option=global_data.Stdlib__option,
     Stdlib_list=global_data.Stdlib__list,
     Ecs_System=global_data.Ecs__System,
     Ecs_Entity=global_data.Ecs__Entity,
     Stdlib=global_data.Stdlib,
     Game=[0];
    caml_register_global(19,Game,"Game__");
    var
     _a_=
      [0,
       [12,40,[8,0,0,0,[11,caml_new_string(", "),[8,0,0,0,[12,41,0]]]]],
       caml_new_string("(%f, %f)")],
     _b_=
      [0,
       [11,
        caml_new_string("[w:"),
        [4,0,0,0,[11,caml_new_string(",h:"),[4,0,0,0,[12,93,0]]]]],
       caml_new_string("[w:%d,h:%d]")];
    function add(a,b){return [254,a[1] + b[1],a[2] + b[2]]}
    function sub(a,b){return [254,a[1] - b[1],a[2] - b[2]]}
    function mult(k,a){return [254,k * a[1],k * a[2]]}
    function dot(a,b){return a[1] * b[1] + a[2] * b[2]}
    function norm(a){return Math.sqrt(dot(a,a))}
    function normalize(a){return mult(1. / norm(a),a)}
    function pp(fmt,a)
     {return caml_call4(Stdlib_format[123],fmt,_a_,a[1],a[2])}
    function is_zero(v)
     {var _h_=v[1] == 0.?1:0,_i_=_h_?v[2] == 0.?1:0:_h_;return _i_}
    var Game_Vector=[0,add,sub,mult,dot,norm,normalize,pp,zero,is_zero];
    caml_register_global(21,Game_Vector,"Game__Vector");
    function top_left(v,b){return v}
    function top_right(v,b){return [254,v[1] + b[1],v[2]]}
    function bottom_left(v,b){return [254,v[1],v[2] + b[2]]}
    function bottom_right(v,b){return [254,v[1] + b[1],v[2] + b[2]]}
    function center(v,b){return [254,v[1] + 0.5 * b[1],v[2] + 0.5 * b[2]]}
    function mdiff(v1,b1,v2,b2)
     {var
       x=v1[1] - v2[1] - b2[1],
       y=v1[2] - v2[2] - b2[2],
       h=b1[2] + b2[2] | 0,
       w=b1[1] + b2[1] | 0;
      return [0,[254,x,y],[0,w,h]]}
    function has_origin(v,b)
     {var _d_=v[1] < 0.?1:0;
      if(_d_)
       {var _e_=0. < v[1] + b[1]?1:0;
        if(_e_)
         var _f_=v[2] < 0.?1:0,_g_=_f_?0. < v[2] + b[2]?1:0:_f_;
        else
         var _g_=_e_}
      else
       var _g_=_d_;
      return _g_}
    function intersect(v1,b1,v2,b3)
     {var match=mdiff(v1,b1,v2,b3),b=match[2],v=match[1];
      return has_origin(v,b)}
    function pp$0(fmt,b)
     {return caml_call4(Stdlib_format[123],fmt,_b_,b[1],b[2])}
    var
     Game_Rect=
      [0,
       top_left,
       top_right,
       bottom_left,
       bottom_right,
       center,
       mdiff,
       has_origin,
       intersect,
       pp$0];
    caml_register_global(22,Game_Rect,"Game__Rect");
    var
     black=[0,caml_call4(Gfx[11],0,0,0,255)],
     red=[0,caml_call4(Gfx[11],255,0,0,255)],
     blue=[0,caml_call4(Gfx[11],0,0,255,255)],
     gray=[0,caml_call4(Gfx[11],128,128,128,255)];
    function create_image(im,dw,dh)
     {var r=caml_call2(Gfx[5],dw,dh);
      caml_call6(Gfx[17],r,im,2,4,dw,dh);
      return [1,r]}
    var Game_Texture=[0,black,red,blue,gray,create_image];
    caml_register_global(24,Game_Texture,"Game__Texture");
    var
     Position=caml_call1(Ecs_Component[1],[0,name]),
     Box=caml_call1(Ecs_Component[1],[0,name$0]),
     Surface=caml_call1(Ecs_Component[1],[0,name$1]),
     Name=caml_call1(Ecs_Component[1],[0,name$2]),
     Velocity=caml_call1(Ecs_Component[1],[0,name$3]),
     Mass=caml_call1(Ecs_Component[1],[0,name$4]),
     Game_Component_defs=[0,Position,Box,Surface,Name,Velocity,Mass];
    caml_register_global(26,Game_Component_defs,"Game__Component_defs");
    var ctx=[0,0];
    function init(param)
     {var match=caml_call1(Gfx[4],cst_canvas),c=match[2];
      ctx[1] = [0,c];
      return 0}
    function update(dt,el)
     {var ctx$0=caml_call1(Stdlib_option[4],ctx[1]);
      caml_call5(Gfx[13],ctx$0,0,0,800,600);
      function _c_(e)
       {var
         pos=caml_call1(Position[2],e),
         box=caml_call1(Box[2],e),
         surface=caml_call1(Surface[2],e);
        if(0 === surface[0])
         {var color=surface[1];
          return caml_call6
                  (Gfx[12],ctx$0,pos[1] | 0,pos[2] | 0,box[1],box[2],color)}
        var render=surface[1];
        return caml_call6
                (Gfx[9],ctx$0,render,pos[1] | 0,pos[2] | 0,box[1],box[2])}
      return caml_call2(Stdlib_list[15],_c_,el)}
    var Game_Draw_system=[0,ctx,init,update];
    caml_register_global(29,Game_Draw_system,"Game__Draw_system");
    var Game_Globals=[0,600,800,20,2000];
    caml_register_global(30,Game_Globals,"Game__Globals");
    var Draw_S=caml_call1(Ecs_System[1],[0,init,update]);
    caml_call1(Ecs_System[3],Draw_S);
    var Game_System_defs=[0,Draw_S];
    caml_register_global(32,Game_System_defs,"Game__System_defs");
    var
     walls=caml_call1(Ecs_Entity[7][1],17),
     canvas_width=600,
     wall_thickness=20;
    function create(name,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call3(Ecs_Entity[7][5],walls,e,0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,canvas_width,wall_thickness]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,red);
      caml_call1(Draw_S[3],e);
      return e}
    function is_wall(e){return caml_call2(Ecs_Entity[7][11],walls,e)}
    var Game_Wall=[0,walls,create,is_wall];
    caml_register_global(35,Game_Wall,"Game__Wall");
    var Game_Raquette=[0];
    caml_register_global(36,Game_Raquette,"Game__Raquette");
    var Game$0=[0];
    caml_register_global(37,Game$0,"Game");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZS5vYmpzL2dhbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInplcm8iLCJuYW1lIiwibmFtZSQwIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSQzIiwibmFtZSQ0IiwiYWRkIiwiYSIsImIiLCJzdWIiLCJtdWx0IiwiayIsImRvdCIsIm5vcm0iLCJub3JtYWxpemUiLCJwcCIsImZtdCIsImlzX3plcm8iLCJ2IiwidG9wX2xlZnQiLCJ0b3BfcmlnaHQiLCJib3R0b21fbGVmdCIsImJvdHRvbV9yaWdodCIsImNlbnRlciIsIm1kaWZmIiwidjEiLCJiMSIsInYyIiwiYjIiLCJ4IiwieSIsImgiLCJ3IiwiaGFzX29yaWdpbiIsImludGVyc2VjdCIsImIzIiwicHAkMCIsImJsYWNrIiwicmVkIiwiYmx1ZSIsImdyYXkiLCJjcmVhdGVfaW1hZ2UiLCJpbSIsImR3IiwiZGgiLCJyIiwiY3R4IiwiaW5pdCIsImMiLCJ1cGRhdGUiLCJkdCIsImVsIiwiY3R4JDAiLCJlIiwicG9zIiwiYm94Iiwic3VyZmFjZSIsImNvbG9yIiwicmVuZGVyIiwid2FsbHMiLCJjcmVhdGUiLCJpc193YWxsIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXSUE7S0NWdURDO0tBQ1BDO0tBQ1FDO0tBQ0pDO0tBQ0dDO0tBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthRExwREMsSUFBSUMsRUFBRUMsR0FBSSxZQUFORCxPQUFFQyxLQUFGRCxPQUFFQyxLQUFzQzthQUM1Q0MsSUFBSUYsRUFBRUMsR0FBSSxZQUFORCxPQUFFQyxLQUFGRCxPQUFFQyxLQUFzQzthQUU1Q0UsS0FBS0MsRUFBRUosR0FBSSxZQUFOSSxJQUFFSixLQUFGSSxJQUFFSixLQUFnQzthQUV2Q0ssSUFBSUwsRUFBRUMsR0FBSSxPQUFORCxPQUFFQyxPQUFGRCxPQUFFQyxJQUE0QjthQUNsQ0ssS0FBS04sR0FBUyxxQkFBVEEsS0FBa0I7YUFDdkJPLFVBQVVQLEdBQWlCLHNCQUFqQkEsS0FBMEI7YUFDcENRLEdBQUdDLElBQUlUO01BQUkscUNBQVJTLFFBQUlULFVBQXlDO2FBR2hEVSxRQUFRQztNQUFJLFFBQUpBLGVBQUksUUFBSkEsNkJBQTBCO3VCQVhsQ1osSUFDQUcsSUFFQUMsS0FFQUUsSUFDQUMsS0FDQUMsVUFDQUMsR0FFQWhCLEtBQ0FrQjs7YUVUQUUsU0FBU0QsRUFBRVYsR0FBSyxPQUFQVSxDQUFRO2FBQ2pCRSxVQUFVRixFQUFFVixHQUFJLFlBQU5VLE9BQUVWLEtBQUZVLEtBQXlDO2FBQ25ERyxZQUFZSCxFQUFFVixHQUFJLFlBQU5VLFlBQUVWLEtBQXdDO2FBRXREYyxhQUFhSixFQUFFVixHQUFJLFlBQU5VLE9BQUVWLEtBQUZVLE9BQUVWLEtBRUs7YUFFcEJlLE9BQU9MLEVBQUVWLEdBQUksWUFBTlUsYUFBRVYsS0FBRlUsYUFBRVYsS0FHWjthQUVHZ0IsTUFBTUMsR0FBR0MsR0FBR0MsR0FBR0M7TUFFakI7U0FGUUgsUUFBTUUsUUFBR0M7T0FFakIsRUFGUUgsUUFBTUUsUUFBR0M7T0FFakIsRUFGV0YsUUFBTUU7T0FFakIsRUFGV0YsUUFBTUU7TUFFakIsZUFBSUMsRUFDQUMsTUFFQUUsRUFEQUQsR0FFcUM7YUFFdkNFLFdBQVdmLEVBQUVWO01BQ2YsUUFEYVU7TUFDYjtxQkFEYUEsT0FBRVY7O2lCQUFGVSxrQ0FBRVY7Ozs7O2dCQUNvRTthQUVqRjBCLFVBQVVULEdBQUdDLEdBQUdDLEdBQUdRO01BQ1YsZ0JBRENWLEdBQUdDLEdBQUdDLEdBQUdRLElBQ1Y7d0JBQVBqQixFQUFHVixFQUNPO2FBRVo0QixLQUFHcEIsSUFBSVI7TUFBSSxxQ0FBUlEsUUFBSVIsVUFBcUQ7Ozs7T0E1QjVEVztPQUNBQztPQUNBQztPQUVBQztPQUlBQztPQUtBQztPQVFBUztPQUdBQztPQUlBRTs7SUM1QmM7O0tBQ0Y7S0FDQztLQUVBO2FBRWJLLGFBQWFDLEdBQUdDLEdBQUdDO01BQ1gsSUFBSkMsRUFBSSxrQkFEUUYsR0FBR0M7TUFFbkIsbUJBRElDLEVBRFNILE9BQUdDLEdBQUdDO01BRW5CLFVBRElDLEVBRUk7SUFMSyxvQkFKYlIsTUFDQUMsSUFDQUMsS0FFQUMsS0FFQUM7SUFGYTs7NkNGTjBDekM7S0VNMUMsbUNGTG1DQztLRUtuQyx1Q0ZKMkNDO0tFSTNDLG9DRkh1Q0M7S0VHdkMsd0NGRjBDQztLRUUxQyxvQ0ZEdUNDO0tFQ3ZDOztRQ0xieUM7YUFDQUM7TUFDUztrQkFBSkM7TUFBSSxRQUNFO2FBRVhDLE9BQU9DLEdBQUlDO01BQ0gsSUFBTkMsTUFBTSw0QkFOUk47TUFPRixtQkFESU07TUFDSixhQUNlQztRQUNIO29DQURHQTtTQUVILHNCQUZHQTtTQUdDLDhCQUhEQTtRQUdDLFNBQVZHO1VBRVcsSUFBVEMsTUFGRkQ7VUFFVzsyQkFQYkosTUFHRUUsc0JBQ0FDLGNBR0VFO1FBSkksSUFVRkMsT0FSSkY7UUFRYzt3QkFiaEJKLE1BYU1NLE9BVkpKLHNCQUNBQyxjQVlpRDtNQWZ2RCxzQ0FGYUosR0F3QlA7NEJBN0JKTCxJQUNBQyxLQUlBRTs7OzsyQ0FKQUYsS0FJQUU7SUNGRjs7OztLQ0RVOzs7YUFHUlcsT0FBTzVELEtBQUs2QixFQUFFQztNQUNSLElBQUp1QixFQUFJO01BQ1IsNEJBTEVNLE1BSUVOO01BR0osdUJBSElBLE9BRFV4QixFQUFFQztNQUtoQix1QkFKSXVCLEVOR0Z0RDtNTUVGLG1CQUxJc0Q7TUFNSixrQkFOSUE7TUFPSixtQkFQSUEsRUFES3JEO01BU1Qsc0JBUklxRCxFSEpGZjtNR2dCRixxQkFaSWU7TUFZSixPQVpJQSxDQWFIO0lBakJTLFNBa0JSUSxRQUFTUixHQUFJLG9DQWxCYk0sTUFrQlNOLEVBQTRCO0lBbEI3QixpQkFBUk0sTUFHQUMsT0FlQUM7SUFsQlE7Ozs7O1UiLCJzb3VyY2VzIjpbIi9ob21lL2pvdnlhbi9wZmEvcHJvamV0L19idWlsZC9kZWZhdWx0L3NyYy9Db21wb25lbnQvdmVjdG9yLm1sIiwiL2hvbWUvam92eWFuL3BmYS9wcm9qZXQvX2J1aWxkL2RlZmF1bHQvc3JjL0NvbXBvbmVudC9jb21wb25lbnRfZGVmcy5tbCIsIi9ob21lL2pvdnlhbi9wZmEvcHJvamV0L19idWlsZC9kZWZhdWx0L3NyYy9Db21wb25lbnQvcmVjdC5tbCIsIi9ob21lL2pvdnlhbi9wZmEvcHJvamV0L19idWlsZC9kZWZhdWx0L3NyYy9Db21wb25lbnQvdGV4dHVyZS5tbCIsIi9ob21lL2pvdnlhbi9wZmEvcHJvamV0L19idWlsZC9kZWZhdWx0L3NyYy9TeXN0ZW0vZHJhd19zeXN0ZW0ubWwiLCIvaG9tZS9qb3Z5YW4vcGZhL3Byb2pldC9fYnVpbGQvZGVmYXVsdC9zcmMvU3lzdGVtL3N5c3RlbV9kZWZzLm1sIiwiL2hvbWUvam92eWFuL3BmYS9wcm9qZXQvX2J1aWxkL2RlZmF1bHQvc3JjL0dhbWUvd2FsbC5tbCJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIHQgPSB7IHggOiBmbG9hdCA7IHkgOiBmbG9hdCB9XG5sZXQgYWRkIGEgYiA9IHsgeCA9IGEueCArLiBiLng7IHkgPSBhLnkgKy4gYi55IH1cbmxldCBzdWIgYSBiID0geyB4ID0gYS54IC0uIGIueDsgeSA9IGEueSAtLiBiLnkgfVxuXG5sZXQgbXVsdCBrIGEgPSB7IHggPSBrKi4gYS54OyB5ID0gayouIGEueSB9XG5cbmxldCBkb3QgYSBiID0gYS54ICouIGIueCArLiBhLnkgKi4gYi55XG5sZXQgbm9ybSBhID0gc3FydCAoZG90IGEgYSlcbmxldCBub3JtYWxpemUgYSA9IG11bHQgKDEuMCAvLiBub3JtIGEpIGFcbmxldCBwcCBmbXQgYSA9IEZvcm1hdC5mcHJpbnRmIGZtdCBcIiglZiwgJWYpXCIgYS54IGEueVxuXG5sZXQgemVybyA9IHsgeCA9IDAuMDsgeSA9IDAuMCB9XG5sZXQgaXNfemVybyB2ID0gdi54ID0gMC4wICYmIHYueSA9IDAuMCIsIm9wZW4gRWNzXG5tb2R1bGUgUG9zaXRpb24gPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBWZWN0b3IgbGV0IG5hbWUgPSBcInBvc2l0aW9uXCIgZW5kKVxubW9kdWxlIEJveCA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCBpbmNsdWRlIFJlY3QgbGV0IG5hbWUgPSBcImJveFwiIGVuZClcbm1vZHVsZSBTdXJmYWNlID0gQ29tcG9uZW50Lk1ha2UgKHN0cnVjdCBpbmNsdWRlIFRleHR1cmUgbGV0IG5hbWUgPSBcInRleHR1cmVcIiBlbmQpXG5tb2R1bGUgTmFtZSA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBzdHJpbmcgbGV0IG5hbWUgPSBcIm5hbWVcIiBlbmQpXG5tb2R1bGUgVmVsb2NpdHkgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBWZWN0b3IgbGV0IG5hbWUgPSBcInZlbG9jaXR5XCIgZW5kKVxubW9kdWxlIE1hc3MgPSBDb21wb25lbnQuTWFrZSAoc3RydWN0IHR5cGUgdCA9IGZsb2F0IGxldCBuYW1lID0gXCJtYXNzXCIgZW5kKVxuXG5cbiIsIm9wZW4gVmVjdG9yXG5cbnR5cGUgdCA9IHsgd2lkdGggOiBpbnQ7IGhlaWdodCA6IGludCB9XG5sZXQgdG9wX2xlZnQgdiBfYiA9IHZcbmxldCB0b3BfcmlnaHQgdiBiID0geyB2IHdpdGggeCA9IHYueCArLiBmbG9hdCBiLndpZHRoIH1cbmxldCBib3R0b21fbGVmdCB2IGIgPSB7IHYgd2l0aCB5ID0gdi55ICsuIGZsb2F0IGIuaGVpZ2h0IH1cblxubGV0IGJvdHRvbV9yaWdodCB2IGIgPSB7IHggPSB2LnggKy4gZmxvYXQgYi53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdi55ICsuIGZsb2F0IGIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbmxldCBjZW50ZXIgdiBiID0geyBcbiAgeCA9IHYueCArLiAwLjUgKi4gZmxvYXQgYi53aWR0aDtcbiAgeSA9IHYueSArLiAwLjUgKi4gZmxvYXQgYi5oZWlnaHQ7XG59XG5cbmxldCBtZGlmZiB2MSBiMSB2MiBiMiA9XG4gICgqIFdlIHVzZSB0aGUgTWlua293c2tpIGRpZmZlcmVuY2Ugb2YgQm94MSBhbmQgQm94MiAqKVxuICBsZXQgeCA9IHYxLnggLS4gdjIueCAtLiBmbG9hdCBiMi53aWR0aCBpblxuICBsZXQgeSA9IHYxLnkgLS4gdjIueSAtLiBmbG9hdCBiMi5oZWlnaHQgaW5cbiAgbGV0IGggPSBiMS5oZWlnaHQgKyBiMi5oZWlnaHQgaW5cbiAgbGV0IHcgPSBiMS53aWR0aCArIGIyLndpZHRoIGluXG4gICh7eCA9IHg7IHkgPSB5fSwge3dpZHRoID0gdzsgaGVpZ2h0ID0gaH0pXG4gXG5sZXQgaGFzX29yaWdpbiB2IGIgPVxuICB2LnggPCAwLjAgJiYgdi54ICsuIGZsb2F0IGIud2lkdGggPiAwLjAgJiYgdi55IDwgMC4wICYmIHYueSArLiBmbG9hdCBiLmhlaWdodCA+IDAuMCAgXG5cbmxldCBpbnRlcnNlY3QgdjEgYjEgdjIgYjMgPVxuICBsZXQgdiwgYiA9IG1kaWZmIHYxIGIxIHYyIGIzIGluIFxuICBoYXNfb3JpZ2luIHYgYlxuXG5sZXQgcHAgZm10IGIgPSBGb3JtYXQuZnByaW50ZiBmbXQgXCJbdzolZCxoOiVkXVwiIGIud2lkdGggYi5oZWlnaHRcblxuIiwidHlwZSB0ID0gQ29sb3Igb2YgR2Z4LmNvbG9yXG4gICAgICAgIHwgSW1hZ2Ugb2YgR2Z4LnJlbmRlclxuXG5sZXQgYmxhY2sgPSBDb2xvciAoR2Z4LmNvbG9yIDAgMCAwIDI1NSlcbmxldCByZWQgPSBDb2xvciAoR2Z4LmNvbG9yIDI1NSAwIDAgMjU1KVxubGV0IGJsdWUgPSBDb2xvciAoR2Z4LmNvbG9yIDAgMCAyNTUgMjU1KVxuXG5sZXQgZ3JheSA9IENvbG9yIChHZnguY29sb3IgMTI4IDEyOCAxMjggMjU1KVxuXG5sZXQgY3JlYXRlX2ltYWdlIGltIGR3IGRoID0gXG4gICAgbGV0IHIgPSBHZnguY3JlYXRlX29mZnNjcmVlbiBkdyBkaCBpblxuICAgIEdmeC5kcmF3X2ltYWdlX3NjYWxlIHIgaW0gMiA0IGR3IGRoOyBcbiAgICBJbWFnZShyKSIsIm9wZW4gQ29tcG9uZW50X2RlZnNcblxubGV0IGN0eCA9IHJlZiBOb25lXG5sZXQgaW5pdCAoKSA9XG4gIGxldCBfLCBjID0gR2Z4LmNyZWF0ZSBcImNhbnZhc1wiICBpblxuICBjdHggOj0gU29tZSBjXG5cbmxldCB1cGRhdGUgX2R0IGVsID1cbiAgbGV0IGN0eCA9IE9wdGlvbi5nZXQgIWN0eCBpblxuICBHZnguY2xlYXJfcmVjdCBjdHggMCAwIDgwMCA2MDA7XG4gIExpc3QuaXRlciAoZnVuIGUgLT5cbiAgICBsZXQgcG9zID0gUG9zaXRpb24uZ2V0IGUgaW5cbiAgICBsZXQgYm94ID0gQm94LmdldCBlIGluXG4gICAgbGV0IHN1cmZhY2UgPSBTdXJmYWNlLmdldCBlIGluIFxuICAgIG1hdGNoIHN1cmZhY2Ugd2l0aFxuICAgIENvbG9yIGNvbG9yIC0+IEdmeC5maWxsX3JlY3QgY3R4IChpbnRfb2ZfZmxvYXQgcG9zLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGludF9vZl9mbG9hdCBwb3MueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JcblxuICAgIHwgSW1hZ2UgcmVuZGVyIC0+IEdmeC5ibGl0X3NjYWxlIGN0eCByZW5kZXIgKGludF9vZl9mbG9hdCBwb3MueClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGludF9vZl9mbG9hdCBwb3MueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guaGVpZ2h0XG4gICAgKCp8IEFuaW1hdGlvbiBhbmltIC0+IFxuICAgICAgICAgICAgICAgIGxldCB2ID0gVmVsb2NpdHkuZ2V0IGUgaW5cbiAgICAgICAgICAgICAgICBsZXQgZCA9IGlmIHYueCA8IDAuMCB0aGVuIC0xIGVsc2UgaWYgdi54ID4gMC4wIHRoZW4gMSBlbHNlIDAgaW5cbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyID0gVGV4dHVyZS5nZXRfZnJhbWUgYW5pbSBkIGluXG4gICAgICAgICAgICAgICAgR2Z4LmJsaXRfc2NhbGUgY3R4IHJlbmRlciAoaW50X29mX2Zsb2F0IHBvcy54KVxuICAgICAgICAgICAgICAgIChpbnRfb2ZfZmxvYXQgcG9zLnkpIGJveC53aWR0aCBib3guaGVpZ2h0KilcbiAgICApIGVsXG5cbiIsIm9wZW4gRWNzXG5cbm1vZHVsZSBEcmF3X1MgPSBTeXN0ZW0uTWFrZShEcmF3X3N5c3RlbSkgXG5cbmxldCAoKSA9XG4gIFN5c3RlbS5yZWdpc3RlciAobW9kdWxlIERyYXdfUyk7Iiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBTeXN0ZW1fZGVmc1xub3BlbiBFY3NcblxubGV0IHdhbGxzID0gRW50aXR5LlRhYmxlLmNyZWF0ZSAxN1xuXG5cbmxldCBjcmVhdGUgbmFtZSB4IHkgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgRW50aXR5LlRhYmxlLmFkZCB3YWxscyBlICgpIDtcbiAgKCogY29tcG9uZW50cyAqKVxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gR2xvYmFscy5jYW52YXNfd2lkdGg7IGhlaWdodD1HbG9iYWxzLndhbGxfdGhpY2tuZXNzIH07XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSBUZXh0dXJlLnJlZDtcblxuICAoKiBTeXN0ZW1zICopXG4gICgqQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTsqKVxuICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgZVxubGV0IF9pc193YWxsIGUgPSBFbnRpdHkuVGFibGUubWVtIHdhbGxzIGVcblxuXG4iXX0=
