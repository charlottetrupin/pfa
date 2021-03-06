(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_from_string=runtime.caml_js_from_string,
     caml_js_get=runtime.caml_js_get,
     caml_js_html_escape=runtime.caml_js_html_escape,
     caml_js_set=runtime.caml_js_set,
     caml_js_to_byte_string=runtime.caml_js_to_byte_string,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_js_wrap_meth_callback=runtime.caml_js_wrap_meth_callback,
     caml_jsbytes_of_string=runtime.caml_jsbytes_of_string,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_array=runtime.caml_string_of_array,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_parseFloat=caml_new_string("parseFloat"),
     cst_parseInt=caml_new_string("parseInt"),
     cst_Js_of_ocaml_Js_Error=caml_new_string("Js_of_ocaml__Js.Error"),
     cst_jsError=caml_new_string("jsError"),
     cst_can_t_retrieve_file_name_not_implemented=
      caml_new_string("can't retrieve file name: not implemented"),
     cst_endings=caml_new_string("endings"),
     cst_type=caml_new_string("type"),
     cst_loadstart=caml_new_string("loadstart"),
     cst_progress=caml_new_string("progress"),
     cst_abort=caml_new_string("abort"),
     cst_error=caml_new_string("error"),
     cst_load=caml_new_string("load"),
     cst_loadend=caml_new_string("loadend"),
     cst_a$1=caml_new_string("a"),
     cst_area$1=caml_new_string("area"),
     cst_audio$1=caml_new_string("audio"),
     cst_base$1=caml_new_string("base"),
     cst_blockquote$1=caml_new_string("blockquote"),
     cst_body$1=caml_new_string("body"),
     cst_br$1=caml_new_string("br"),
     cst_button$1=caml_new_string("button"),
     cst_canvas$1=caml_new_string("canvas"),
     cst_caption$1=caml_new_string("caption"),
     cst_col$1=caml_new_string("col"),
     cst_colgroup$1=caml_new_string("colgroup"),
     cst_del$1=caml_new_string("del"),
     cst_div$1=caml_new_string("div"),
     cst_dl$1=caml_new_string("dl"),
     cst_embed$1=caml_new_string("embed"),
     cst_fieldset$1=caml_new_string("fieldset"),
     cst_form$1=caml_new_string("form"),
     cst_frame$1=caml_new_string("frame"),
     cst_frameset$1=caml_new_string("frameset"),
     cst_h1$1=caml_new_string("h1"),
     cst_h2$1=caml_new_string("h2"),
     cst_h3$1=caml_new_string("h3"),
     cst_h4$1=caml_new_string("h4"),
     cst_h5$1=caml_new_string("h5"),
     cst_h6$1=caml_new_string("h6"),
     cst_head$1=caml_new_string("head"),
     cst_hr$1=caml_new_string("hr"),
     cst_html$1=caml_new_string("html"),
     cst_iframe$1=caml_new_string("iframe"),
     cst_img$1=caml_new_string("img"),
     cst_input$2=caml_new_string("input"),
     cst_ins$1=caml_new_string("ins"),
     cst_label$1=caml_new_string("label"),
     cst_legend$1=caml_new_string("legend"),
     cst_li$1=caml_new_string("li"),
     cst_link$1=caml_new_string("link"),
     cst_map$1=caml_new_string("map"),
     cst_meta$1=caml_new_string("meta"),
     cst_object$1=caml_new_string("object"),
     cst_ol$1=caml_new_string("ol"),
     cst_optgroup$1=caml_new_string("optgroup"),
     cst_option$1=caml_new_string("option"),
     cst_p$1=caml_new_string("p"),
     cst_param$1=caml_new_string("param"),
     cst_pre$1=caml_new_string("pre"),
     cst_q$1=caml_new_string("q"),
     cst_script$1=caml_new_string("script"),
     cst_select$2=caml_new_string("select"),
     cst_style$1=caml_new_string("style"),
     cst_table$1=caml_new_string("table"),
     cst_tbody$1=caml_new_string("tbody"),
     cst_td$1=caml_new_string("td"),
     cst_textarea$1=caml_new_string("textarea"),
     cst_tfoot$1=caml_new_string("tfoot"),
     cst_th$1=caml_new_string("th"),
     cst_thead$1=caml_new_string("thead"),
     cst_title$1=caml_new_string("title"),
     cst_tr$1=caml_new_string("tr"),
     cst_ul$1=caml_new_string("ul"),
     cst_video$1=caml_new_string("video"),
     cst_KeyH=caml_new_string("KeyH"),
     cst_Digit6=caml_new_string("Digit6"),
     cst_BrowserRefresh=caml_new_string("BrowserRefresh"),
     cst_Backslash=caml_new_string("Backslash"),
     cst_AltLeft=caml_new_string("AltLeft"),
     cst_AltRight=caml_new_string("AltRight"),
     cst_ArrowDown=caml_new_string("ArrowDown"),
     cst_ArrowLeft=caml_new_string("ArrowLeft"),
     cst_ArrowRight=caml_new_string("ArrowRight"),
     cst_ArrowUp=caml_new_string("ArrowUp"),
     cst_Backquote=caml_new_string("Backquote"),
     cst_Backspace=caml_new_string("Backspace"),
     cst_BracketLeft=caml_new_string("BracketLeft"),
     cst_BracketRight=caml_new_string("BracketRight"),
     cst_BrowserBack=caml_new_string("BrowserBack"),
     cst_BrowserFavorites=caml_new_string("BrowserFavorites"),
     cst_BrowserForward=caml_new_string("BrowserForward"),
     cst_BrowserHome=caml_new_string("BrowserHome"),
     cst_Delete=caml_new_string("Delete"),
     cst_BrowserSearch=caml_new_string("BrowserSearch"),
     cst_BrowserStop=caml_new_string("BrowserStop"),
     cst_CapsLock=caml_new_string("CapsLock"),
     cst_Comma=caml_new_string("Comma"),
     cst_ContextMenu=caml_new_string("ContextMenu"),
     cst_ControlLeft=caml_new_string("ControlLeft"),
     cst_ControlRight=caml_new_string("ControlRight"),
     cst_Digit0=caml_new_string("Digit0"),
     cst_Digit1=caml_new_string("Digit1"),
     cst_Digit2=caml_new_string("Digit2"),
     cst_Digit3=caml_new_string("Digit3"),
     cst_Digit4=caml_new_string("Digit4"),
     cst_Digit5=caml_new_string("Digit5"),
     cst_F6=caml_new_string("F6"),
     cst_F1=caml_new_string("F1"),
     cst_Digit7=caml_new_string("Digit7"),
     cst_Digit8=caml_new_string("Digit8"),
     cst_Digit9=caml_new_string("Digit9"),
     cst_End=caml_new_string("End"),
     cst_Enter=caml_new_string("Enter"),
     cst_Equal=caml_new_string("Equal"),
     cst_Escape=caml_new_string("Escape"),
     cst_F10=caml_new_string("F10"),
     cst_F11=caml_new_string("F11"),
     cst_F12=caml_new_string("F12"),
     cst_F2=caml_new_string("F2"),
     cst_F3=caml_new_string("F3"),
     cst_F4=caml_new_string("F4"),
     cst_F5=caml_new_string("F5"),
     cst_KeyA=caml_new_string("KeyA"),
     cst_F7=caml_new_string("F7"),
     cst_F8=caml_new_string("F8"),
     cst_F9=caml_new_string("F9"),
     cst_Home=caml_new_string("Home"),
     cst_Insert=caml_new_string("Insert"),
     cst_IntlBackslash=caml_new_string("IntlBackslash"),
     cst_IntlYen=caml_new_string("IntlYen"),
     cst_KeyB=caml_new_string("KeyB"),
     cst_KeyC=caml_new_string("KeyC"),
     cst_KeyD=caml_new_string("KeyD"),
     cst_KeyE=caml_new_string("KeyE"),
     cst_KeyF=caml_new_string("KeyF"),
     cst_KeyG=caml_new_string("KeyG"),
     cst_Numpad4=caml_new_string("Numpad4"),
     cst_KeyX=caml_new_string("KeyX"),
     cst_KeyP=caml_new_string("KeyP"),
     cst_KeyI=caml_new_string("KeyI"),
     cst_KeyJ=caml_new_string("KeyJ"),
     cst_KeyK=caml_new_string("KeyK"),
     cst_KeyL=caml_new_string("KeyL"),
     cst_KeyM=caml_new_string("KeyM"),
     cst_KeyN=caml_new_string("KeyN"),
     cst_KeyO=caml_new_string("KeyO"),
     cst_KeyQ=caml_new_string("KeyQ"),
     cst_KeyR=caml_new_string("KeyR"),
     cst_KeyS=caml_new_string("KeyS"),
     cst_KeyT=caml_new_string("KeyT"),
     cst_KeyU=caml_new_string("KeyU"),
     cst_KeyV=caml_new_string("KeyV"),
     cst_KeyW=caml_new_string("KeyW"),
     cst_MetaRight=caml_new_string("MetaRight"),
     cst_KeyY=caml_new_string("KeyY"),
     cst_KeyZ=caml_new_string("KeyZ"),
     cst_MediaPlayPause=caml_new_string("MediaPlayPause"),
     cst_MediaStop=caml_new_string("MediaStop"),
     cst_MediaTrackNext=caml_new_string("MediaTrackNext"),
     cst_MediaTrackPrevious=caml_new_string("MediaTrackPrevious"),
     cst_MetaLeft=caml_new_string("MetaLeft"),
     cst_Minus=caml_new_string("Minus"),
     cst_NumLock=caml_new_string("NumLock"),
     cst_Numpad0=caml_new_string("Numpad0"),
     cst_Numpad1=caml_new_string("Numpad1"),
     cst_Numpad2=caml_new_string("Numpad2"),
     cst_Numpad3=caml_new_string("Numpad3"),
     cst_PageUp=caml_new_string("PageUp"),
     cst_NumpadDivide=caml_new_string("NumpadDivide"),
     cst_Numpad5=caml_new_string("Numpad5"),
     cst_Numpad6=caml_new_string("Numpad6"),
     cst_Numpad7=caml_new_string("Numpad7"),
     cst_Numpad8=caml_new_string("Numpad8"),
     cst_Numpad9=caml_new_string("Numpad9"),
     cst_NumpadAdd=caml_new_string("NumpadAdd"),
     cst_NumpadDecimal=caml_new_string("NumpadDecimal"),
     cst_NumpadEnter=caml_new_string("NumpadEnter"),
     cst_NumpadEqual=caml_new_string("NumpadEqual"),
     cst_NumpadMultiply=caml_new_string("NumpadMultiply"),
     cst_NumpadSubtract=caml_new_string("NumpadSubtract"),
     cst_OSLeft=caml_new_string("OSLeft"),
     cst_OSRight=caml_new_string("OSRight"),
     cst_PageDown=caml_new_string("PageDown"),
     cst_ShiftRight=caml_new_string("ShiftRight"),
     cst_Pause=caml_new_string("Pause"),
     cst_Period=caml_new_string("Period"),
     cst_PrintScreen=caml_new_string("PrintScreen"),
     cst_Quote=caml_new_string("Quote"),
     cst_ScrollLock=caml_new_string("ScrollLock"),
     cst_Semicolon=caml_new_string("Semicolon"),
     cst_ShiftLeft=caml_new_string("ShiftLeft"),
     cst_Slash=caml_new_string("Slash"),
     cst_Space=caml_new_string("Space"),
     cst_Tab=caml_new_string("Tab"),
     cst_VolumeDown=caml_new_string("VolumeDown"),
     cst_VolumeMute=caml_new_string("VolumeMute"),
     cst_VolumeUp=caml_new_string("VolumeUp"),
     cst_mouseout$0=caml_new_string("mouseout"),
     cst_mouseover$0=caml_new_string("mouseover"),
     cst_video$0=caml_new_string("video"),
     cst_audio$0=caml_new_string("audio"),
     cst_ul$0=caml_new_string("ul"),
     cst_tr$0=caml_new_string("tr"),
     cst_title$0=caml_new_string("title"),
     cst_thead$0=caml_new_string("thead"),
     cst_th$0=caml_new_string("th"),
     cst_tfoot$0=caml_new_string("tfoot"),
     cst_textarea$0=caml_new_string("textarea"),
     cst_td$0=caml_new_string("td"),
     cst_tbody$0=caml_new_string("tbody"),
     cst_table$0=caml_new_string("table"),
     cst_style$0=caml_new_string("style"),
     cst_select$1=caml_new_string("select"),
     cst_script$0=caml_new_string("script"),
     cst_q$0=caml_new_string("q"),
     cst_pre$0=caml_new_string("pre"),
     cst_param$0=caml_new_string("param"),
     cst_p$0=caml_new_string("p"),
     cst_option$0=caml_new_string("option"),
     cst_optgroup$0=caml_new_string("optgroup"),
     cst_ol$0=caml_new_string("ol"),
     cst_object$0=caml_new_string("object"),
     cst_meta$0=caml_new_string("meta"),
     cst_map$0=caml_new_string("map"),
     cst_link$0=caml_new_string("link"),
     cst_li$0=caml_new_string("li"),
     cst_legend$0=caml_new_string("legend"),
     cst_label$0=caml_new_string("label"),
     cst_ins$0=caml_new_string("ins"),
     cst_input$1=caml_new_string("input"),
     cst_img$0=caml_new_string("img"),
     cst_iframe$0=caml_new_string("iframe"),
     cst_html$0=caml_new_string("html"),
     cst_hr$0=caml_new_string("hr"),
     cst_head$0=caml_new_string("head"),
     cst_h6$0=caml_new_string("h6"),
     cst_h5$0=caml_new_string("h5"),
     cst_h4$0=caml_new_string("h4"),
     cst_h3$0=caml_new_string("h3"),
     cst_h2$0=caml_new_string("h2"),
     cst_h1$0=caml_new_string("h1"),
     cst_frame$0=caml_new_string("frame"),
     cst_frameset$0=caml_new_string("frameset"),
     cst_form$0=caml_new_string("form"),
     cst_embed$0=caml_new_string("embed"),
     cst_fieldset$0=caml_new_string("fieldset"),
     cst_dl$0=caml_new_string("dl"),
     cst_div$0=caml_new_string("div"),
     cst_del$0=caml_new_string("del"),
     cst_colgroup$0=caml_new_string("colgroup"),
     cst_col$0=caml_new_string("col"),
     cst_caption$0=caml_new_string("caption"),
     cst_canvas$0=caml_new_string("canvas"),
     cst_button$0=caml_new_string("button"),
     cst_br$0=caml_new_string("br"),
     cst_body$0=caml_new_string("body"),
     cst_blockquote$0=caml_new_string("blockquote"),
     cst_base$0=caml_new_string("base"),
     cst_area$0=caml_new_string("area"),
     cst_a$0=caml_new_string("a"),
     cst_canvas=caml_new_string("canvas"),
     cst_video=caml_new_string("video"),
     cst_audio=caml_new_string("audio"),
     cst_iframe=caml_new_string("iframe"),
     cst_frame=caml_new_string("frame"),
     cst_frameset=caml_new_string("frameset"),
     cst_address=caml_new_string("address"),
     cst_noscript=caml_new_string("noscript"),
     cst_dt=caml_new_string("dt"),
     cst_dd=caml_new_string("dd"),
     cst_abbr=caml_new_string("abbr"),
     cst_var=caml_new_string("var"),
     cst_kbd=caml_new_string("kbd"),
     cst_samp=caml_new_string("samp"),
     cst_code=caml_new_string("code"),
     cst_dfn=caml_new_string("dfn"),
     cst_cite=caml_new_string("cite"),
     cst_strong=caml_new_string("strong"),
     cst_em=caml_new_string("em"),
     cst_small=caml_new_string("small"),
     cst_big=caml_new_string("big"),
     cst_b=caml_new_string("b"),
     cst_i=caml_new_string("i"),
     cst_tt=caml_new_string("tt"),
     cst_span=caml_new_string("span"),
     cst_sup=caml_new_string("sup"),
     cst_sub=caml_new_string("sub"),
     cst_td=caml_new_string("td"),
     cst_th=caml_new_string("th"),
     cst_tr=caml_new_string("tr"),
     cst_tbody=caml_new_string("tbody"),
     cst_tfoot=caml_new_string("tfoot"),
     cst_thead=caml_new_string("thead"),
     cst_colgroup=caml_new_string("colgroup"),
     cst_col=caml_new_string("col"),
     cst_caption=caml_new_string("caption"),
     cst_table=caml_new_string("table"),
     cst_script=caml_new_string("script"),
     cst_area=caml_new_string("area"),
     cst_map=caml_new_string("map"),
     cst_param=caml_new_string("param"),
     cst_object=caml_new_string("object"),
     cst_img=caml_new_string("img"),
     cst_a=caml_new_string("a"),
     cst_del=caml_new_string("del"),
     cst_ins=caml_new_string("ins"),
     cst_hr=caml_new_string("hr"),
     cst_br=caml_new_string("br"),
     cst_pre=caml_new_string("pre"),
     cst_blockquote=caml_new_string("blockquote"),
     cst_q=caml_new_string("q"),
     cst_h6=caml_new_string("h6"),
     cst_h5=caml_new_string("h5"),
     cst_h4=caml_new_string("h4"),
     cst_h3=caml_new_string("h3"),
     cst_h2=caml_new_string("h2"),
     cst_h1=caml_new_string("h1"),
     cst_p=caml_new_string("p"),
     cst_embed=caml_new_string("embed"),
     cst_div=caml_new_string("div"),
     cst_li=caml_new_string("li"),
     cst_dl=caml_new_string("dl"),
     cst_ol=caml_new_string("ol"),
     cst_ul=caml_new_string("ul"),
     cst_legend=caml_new_string("legend"),
     cst_fieldset=caml_new_string("fieldset"),
     cst_label=caml_new_string("label"),
     cst_button=caml_new_string("button"),
     cst_textarea=caml_new_string("textarea"),
     cst_input$0=caml_new_string("input"),
     cst_select$0=caml_new_string("select"),
     cst_option=caml_new_string("option"),
     cst_optgroup=caml_new_string("optgroup"),
     cst_form=caml_new_string("form"),
     cst_body=caml_new_string("body"),
     cst_style=caml_new_string("style"),
     cst_base=caml_new_string("base"),
     cst_meta=caml_new_string("meta"),
     cst_title=caml_new_string("title"),
     cst_link=caml_new_string("link"),
     cst_head=caml_new_string("head"),
     cst_html=caml_new_string("html"),
     cst_click=caml_new_string("click"),
     cst_dblclick=caml_new_string("dblclick"),
     cst_mousedown=caml_new_string("mousedown"),
     cst_mouseup=caml_new_string("mouseup"),
     cst_mouseover=caml_new_string("mouseover"),
     cst_mousemove=caml_new_string("mousemove"),
     cst_mouseout=caml_new_string("mouseout"),
     cst_keypress=caml_new_string("keypress"),
     cst_keydown=caml_new_string("keydown"),
     cst_keyup=caml_new_string("keyup"),
     cst_mousewheel=caml_new_string("mousewheel"),
     cst_DOMMouseScroll=caml_new_string("DOMMouseScroll"),
     cst_touchstart=caml_new_string("touchstart"),
     cst_touchmove=caml_new_string("touchmove"),
     cst_touchend=caml_new_string("touchend"),
     cst_touchcancel=caml_new_string("touchcancel"),
     cst_dragstart=caml_new_string("dragstart"),
     cst_dragend=caml_new_string("dragend"),
     cst_dragenter=caml_new_string("dragenter"),
     cst_dragover=caml_new_string("dragover"),
     cst_dragleave=caml_new_string("dragleave"),
     cst_drag=caml_new_string("drag"),
     cst_drop=caml_new_string("drop"),
     cst_hashchange=caml_new_string("hashchange"),
     cst_change=caml_new_string("change"),
     cst_input=caml_new_string("input"),
     cst_timeupdate=caml_new_string("timeupdate"),
     cst_submit=caml_new_string("submit"),
     cst_scroll=caml_new_string("scroll"),
     cst_focus=caml_new_string("focus"),
     cst_blur=caml_new_string("blur"),
     cst_load$0=caml_new_string("load"),
     cst_unload=caml_new_string("unload"),
     cst_beforeunload=caml_new_string("beforeunload"),
     cst_resize=caml_new_string("resize"),
     cst_orientationchange=caml_new_string("orientationchange"),
     cst_popstate=caml_new_string("popstate"),
     cst_error$0=caml_new_string("error"),
     cst_abort$0=caml_new_string("abort"),
     cst_select=caml_new_string("select"),
     cst_online=caml_new_string("online"),
     cst_offline=caml_new_string("offline"),
     cst_checking=caml_new_string("checking"),
     cst_noupdate=caml_new_string("noupdate"),
     cst_downloading=caml_new_string("downloading"),
     cst_progress$0=caml_new_string("progress"),
     cst_updateready=caml_new_string("updateready"),
     cst_cached=caml_new_string("cached"),
     cst_obsolete=caml_new_string("obsolete"),
     cst_DOMContentLoaded=caml_new_string("DOMContentLoaded"),
     cst_animationstart=caml_new_string("animationstart"),
     cst_animationend=caml_new_string("animationend"),
     cst_animationiteration=caml_new_string("animationiteration"),
     cst_animationcancel=caml_new_string("animationcancel"),
     cst_canplay=caml_new_string("canplay"),
     cst_canplaythrough=caml_new_string("canplaythrough"),
     cst_durationchange=caml_new_string("durationchange"),
     cst_emptied=caml_new_string("emptied"),
     cst_ended=caml_new_string("ended"),
     cst_gotpointercapture=caml_new_string("gotpointercapture"),
     cst_loadeddata=caml_new_string("loadeddata"),
     cst_loadedmetadata=caml_new_string("loadedmetadata"),
     cst_loadstart$0=caml_new_string("loadstart"),
     cst_lostpointercapture=caml_new_string("lostpointercapture"),
     cst_pause=caml_new_string("pause"),
     cst_play=caml_new_string("play"),
     cst_playing=caml_new_string("playing"),
     cst_pointerenter=caml_new_string("pointerenter"),
     cst_pointercancel=caml_new_string("pointercancel"),
     cst_pointerdown=caml_new_string("pointerdown"),
     cst_pointerleave=caml_new_string("pointerleave"),
     cst_pointermove=caml_new_string("pointermove"),
     cst_pointerout=caml_new_string("pointerout"),
     cst_pointerover=caml_new_string("pointerover"),
     cst_pointerup=caml_new_string("pointerup"),
     cst_ratechange=caml_new_string("ratechange"),
     cst_seeked=caml_new_string("seeked"),
     cst_seeking=caml_new_string("seeking"),
     cst_stalled=caml_new_string("stalled"),
     cst_suspend=caml_new_string("suspend"),
     cst_volumechange=caml_new_string("volumechange"),
     cst_waiting=caml_new_string("waiting"),
     cst_Js_of_ocaml_Dom_html_Canvas_not_available=
      caml_new_string("Js_of_ocaml__Dom_html.Canvas_not_available"),
     cst_checkbox=caml_new_string("checkbox"),
     cst_file=caml_new_string("file"),
     cst_password=caml_new_string("password"),
     cst_radio=caml_new_string("radio"),
     cst_reset=caml_new_string("reset"),
     cst_submit$0=caml_new_string("submit"),
     cst_text=caml_new_string("text"),
     cst_readystatechange=caml_new_string("readystatechange"),
     cst_loadstart$1=caml_new_string("loadstart"),
     cst_progress$1=caml_new_string("progress"),
     cst_abort$1=caml_new_string("abort"),
     cst_error$1=caml_new_string("error"),
     cst_load$1=caml_new_string("load"),
     cst_timeout=caml_new_string("timeout"),
     cst_loadend$0=caml_new_string("loadend"),
     cst_Worker_onmessage_is_undefined$0=
      caml_new_string("Worker.onmessage is undefined"),
     cst_Worker_onmessage_is_undefined=
      caml_new_string("Worker.onmessage is undefined"),
     cst_Worker_import_scripts_is_undefined=
      caml_new_string("Worker.import_scripts is undefined"),
     cst_webglcontextlost=caml_new_string("webglcontextlost"),
     cst_webglcontextrestored=caml_new_string("webglcontextrestored"),
     cst_webglcontextcreationerror=
      caml_new_string("webglcontextcreationerror"),
     cst_g=caml_new_string("g"),
     cst=caml_new_string("[\\][()\\\\|+*.?{}^$]"),
     cst$37=caml_new_string(""),
     cst$13=caml_new_string(""),
     cst$21=caml_new_string(""),
     cst$14=caml_new_string("#"),
     cst$15=caml_new_string("?"),
     cst$20=caml_new_string(""),
     cst$16=caml_new_string("/"),
     cst$17=caml_new_string("/"),
     cst$19=caml_new_string(":"),
     cst$18=caml_new_string(""),
     cst_http$1=caml_new_string("http://"),
     cst$22=caml_new_string(""),
     cst$30=caml_new_string(""),
     cst$23=caml_new_string("#"),
     cst$24=caml_new_string("?"),
     cst$29=caml_new_string(""),
     cst$25=caml_new_string("/"),
     cst$26=caml_new_string("/"),
     cst$28=caml_new_string(":"),
     cst$27=caml_new_string(""),
     cst_https$1=caml_new_string("https://"),
     cst$31=caml_new_string(""),
     cst$36=caml_new_string(""),
     cst$32=caml_new_string("#"),
     cst$33=caml_new_string("?"),
     cst$35=caml_new_string(""),
     cst$34=caml_new_string("/"),
     cst_file$2=caml_new_string("file://"),
     cst$12=caml_new_string(""),
     cst$11=caml_new_string(""),
     cst$10=caml_new_string(""),
     cst$9=caml_new_string(""),
     cst$8=caml_new_string(""),
     cst$7=caml_new_string(""),
     cst$6=caml_new_string(""),
     cst$4=caml_new_string("="),
     cst$5=caml_new_string("&"),
     cst$2=caml_new_string(""),
     cst$3=caml_new_string(""),
     cst_file$0=caml_new_string("file"),
     cst_file$1=caml_new_string("file:"),
     cst_http=caml_new_string("http"),
     cst_http$0=caml_new_string("http:"),
     cst_https=caml_new_string("https"),
     cst_https$0=caml_new_string("https:"),
     cst$1=caml_new_string(" "),
     cst_2B=caml_new_string("%2B"),
     cst_Js_of_ocaml_Url_Local_exn=
      caml_new_string("Js_of_ocaml__Url.Local_exn"),
     cst$0=caml_new_string("+"),
     cst_Js_of_ocaml_Url_Not_an_http_protocol=
      caml_new_string("Js_of_ocaml__Url.Not_an_http_protocol"),
     cst_Hh_Tt_Tt_Pp_Ss_0_9a_zA_Z_0_9a_zA_Z_0_9A_Fa_f_0_9=
      caml_new_string
       ("^([Hh][Tt][Tt][Pp][Ss]?)://([0-9a-zA-Z.-]+|\\[[0-9a-zA-Z.-]+\\]|\\[[0-9A-Fa-f:.]+\\])?(:([0-9]+))?(/([^\\?#]*)(\\?([^#]*))?(#(.*))?)?$"),
     cst_Ff_Ii_Ll_Ee=
      caml_new_string
       ("^([Ff][Ii][Ll][Ee])://([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),
     s=caml_new_string("3.5.2"),
     git_version=caml_new_string(""),
     cst$38=caml_new_string(""),
     cst$41=caml_new_string("+"),
     cst_Jstable_keys=caml_new_string("Jstable.keys"),
     dummy_string=caml_new_string(""),
     cst_is_not_a_valid_length$0=caml_new_string(" is not a valid length"),
     cst_d_d_deg_grad_rad_turns=
      caml_new_string("^(\\d*(?:\\.\\d*))(deg|grad|rad|turns)$"),
     cst_length_conversion_error$0=
      caml_new_string("length conversion error: "),
     cst_deg$0=caml_new_string("deg"),
     cst_grad$0=caml_new_string("grad"),
     cst_rad$0=caml_new_string("rad"),
     cst_turns$0=caml_new_string("turns"),
     cst_deg=caml_new_string("deg"),
     cst_grad=caml_new_string("grad"),
     cst_rad=caml_new_string("rad"),
     cst_turns=caml_new_string("turns"),
     cst_is_not_a_valid_length=caml_new_string(" is not a valid length"),
     cst_0$0=caml_new_string("0"),
     cst_d_d_s_S=caml_new_string("^(\\d*(?:\\.\\d*)?)\\s*(\\S*)$"),
     cst_length_conversion_error=caml_new_string("length conversion error: "),
     cst_pc$0=caml_new_string("pc"),
     cst_ch$0=caml_new_string("ch"),
     cst_cm$0=caml_new_string("cm"),
     cst_em$1=caml_new_string("em"),
     cst_ex$0=caml_new_string("ex"),
     cst_gd$0=caml_new_string("gd"),
     cst_in$0=caml_new_string("in"),
     cst_mm$0=caml_new_string("mm"),
     cst_pt$0=caml_new_string("pt"),
     cst_px$0=caml_new_string("px"),
     cst_rem$0=caml_new_string("rem"),
     cst_vh$0=caml_new_string("vh"),
     cst_vm$0=caml_new_string("vm"),
     cst_vw$0=caml_new_string("vw"),
     cst_0=caml_new_string("0"),
     cst_em$0=caml_new_string("em"),
     cst_ex=caml_new_string("ex"),
     cst_px=caml_new_string("px"),
     cst_gd=caml_new_string("gd"),
     cst_rem=caml_new_string("rem"),
     cst_vw=caml_new_string("vw"),
     cst_vh=caml_new_string("vh"),
     cst_vm=caml_new_string("vm"),
     cst_ch=caml_new_string("ch"),
     cst_mm=caml_new_string("mm"),
     cst_cm=caml_new_string("cm"),
     cst_in=caml_new_string("in"),
     cst_pt=caml_new_string("pt"),
     cst_pc=caml_new_string("pc"),
     cst$40=caml_new_string("): "),
     cst_color_conversion_error$0=caml_new_string("color conversion error ("),
     cst$39=caml_new_string("): "),
     cst_color_conversion_error=caml_new_string("color conversion error ("),
     cst_is_not_a_valid_color$0=caml_new_string(" is not a valid color"),
     cst_rgba_d_d_d_d_d=
      caml_new_string
       ("(rgba?)\\((?:(\\d*),(\\d*),(\\d*)(?:,(\\d*(?:\\.\\d*)?))?)\\)"),
     cst_rgba_d_d_d_d_d$0=
      caml_new_string
       ("(rgba?)\\((?:(\\d*)%,(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),
     cst_hsla_d_d_d_d_d=
      caml_new_string
       ("(hsla?)\\((?:(\\d*),(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),
     cst_rgb=caml_new_string("rgb"),
     cst_rgba=caml_new_string("rgba"),
     cst_rgb$0=caml_new_string("rgb"),
     cst_rgba$0=caml_new_string("rgba"),
     cst_hsl=caml_new_string("hsl"),
     cst_hsla=caml_new_string("hsla"),
     cst_rgb_s_d_s_d_s_d=
      caml_new_string("^rgb\\(\\s*\\d*,\\s*\\d*,\\s*\\d*\\)$"),
     cst_rgb_s_d_s_d_s_d$0=
      caml_new_string("^rgb\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%\\)$"),
     cst_rgba_s_d_s_d_s_d_d_d=
      caml_new_string("^rgba\\(\\s*\\d*,\\s*\\d*,\\s*\\d*,\\d*\\.?\\d*\\)$"),
     cst_rgba_s_d_s_d_s_d_d_d$0=
      caml_new_string
       ("^rgba\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),
     cst_hsl_s_d_s_d_s_d=
      caml_new_string("^hsl\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%\\)$"),
     cst_hsla_s_d_s_d_s_d_d_d=
      caml_new_string("^hsla\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),
     cst_is_not_a_valid_color=caml_new_string(" is not a valid color"),
     cst_is_out_of_valid_range=caml_new_string(" is out of valid range"),
     partial=[8,0,0,0,[12,41,0]],
     partial$0=[12,41,0],
     cst_lightgrey$0=caml_new_string("lightgrey"),
     cst_darkslategray$0=caml_new_string("darkslategray"),
     cst_cornsilk$0=caml_new_string("cornsilk"),
     cst_blue$0=caml_new_string("blue"),
     cst_aliceblue$0=caml_new_string("aliceblue"),
     cst_antiquewhite$0=caml_new_string("antiquewhite"),
     cst_aqua$0=caml_new_string("aqua"),
     cst_aquamarine$0=caml_new_string("aquamarine"),
     cst_azure$0=caml_new_string("azure"),
     cst_beige$0=caml_new_string("beige"),
     cst_bisque$0=caml_new_string("bisque"),
     cst_black$0=caml_new_string("black"),
     cst_blanchedalmond$0=caml_new_string("blanchedalmond"),
     cst_blueviolet$0=caml_new_string("blueviolet"),
     cst_brown$0=caml_new_string("brown"),
     cst_burlywood$0=caml_new_string("burlywood"),
     cst_cadetblue$0=caml_new_string("cadetblue"),
     cst_chartreuse$0=caml_new_string("chartreuse"),
     cst_chocolate$0=caml_new_string("chocolate"),
     cst_coral$0=caml_new_string("coral"),
     cst_cornflowerblue$0=caml_new_string("cornflowerblue"),
     cst_darkkhaki$0=caml_new_string("darkkhaki"),
     cst_crimson$0=caml_new_string("crimson"),
     cst_cyan$0=caml_new_string("cyan"),
     cst_darkblue$0=caml_new_string("darkblue"),
     cst_darkcyan$0=caml_new_string("darkcyan"),
     cst_darkgoldenrod$0=caml_new_string("darkgoldenrod"),
     cst_darkgray$0=caml_new_string("darkgray"),
     cst_darkgreen$0=caml_new_string("darkgreen"),
     cst_darkgrey$0=caml_new_string("darkgrey"),
     cst_darkmagenta$0=caml_new_string("darkmagenta"),
     cst_darkolivegreen$0=caml_new_string("darkolivegreen"),
     cst_darkorange$0=caml_new_string("darkorange"),
     cst_darkorchid$0=caml_new_string("darkorchid"),
     cst_darkred$0=caml_new_string("darkred"),
     cst_darksalmon$0=caml_new_string("darksalmon"),
     cst_darkseagreen$0=caml_new_string("darkseagreen"),
     cst_darkslateblue$0=caml_new_string("darkslateblue"),
     cst_greenyellow$0=caml_new_string("greenyellow"),
     cst_floralwhite$0=caml_new_string("floralwhite"),
     cst_darkslategrey$0=caml_new_string("darkslategrey"),
     cst_darkturquoise$0=caml_new_string("darkturquoise"),
     cst_darkviolet$0=caml_new_string("darkviolet"),
     cst_deeppink$0=caml_new_string("deeppink"),
     cst_deepskyblue$0=caml_new_string("deepskyblue"),
     cst_dimgray$0=caml_new_string("dimgray"),
     cst_dimgrey$0=caml_new_string("dimgrey"),
     cst_dodgerblue$0=caml_new_string("dodgerblue"),
     cst_firebrick$0=caml_new_string("firebrick"),
     cst_forestgreen$0=caml_new_string("forestgreen"),
     cst_fuchsia$0=caml_new_string("fuchsia"),
     cst_gainsboro$0=caml_new_string("gainsboro"),
     cst_ghostwhite$0=caml_new_string("ghostwhite"),
     cst_gold$0=caml_new_string("gold"),
     cst_goldenrod$0=caml_new_string("goldenrod"),
     cst_gray$0=caml_new_string("gray"),
     cst_green$0=caml_new_string("green"),
     cst_lavenderblush$0=caml_new_string("lavenderblush"),
     cst_grey$0=caml_new_string("grey"),
     cst_honeydew$0=caml_new_string("honeydew"),
     cst_hotpink$0=caml_new_string("hotpink"),
     cst_indianred$0=caml_new_string("indianred"),
     cst_indigo$0=caml_new_string("indigo"),
     cst_ivory$0=caml_new_string("ivory"),
     cst_khaki$0=caml_new_string("khaki"),
     cst_lavender$0=caml_new_string("lavender"),
     cst_lawngreen$0=caml_new_string("lawngreen"),
     cst_lemonchiffon$0=caml_new_string("lemonchiffon"),
     cst_lightblue$0=caml_new_string("lightblue"),
     cst_lightcoral$0=caml_new_string("lightcoral"),
     cst_lightcyan$0=caml_new_string("lightcyan"),
     cst_lightgoldenrodyellow$0=caml_new_string("lightgoldenrodyellow"),
     cst_lightgray$0=caml_new_string("lightgray"),
     cst_lightgreen$0=caml_new_string("lightgreen"),
     cst_paleturquoise$0=caml_new_string("paleturquoise"),
     cst_mediumslateblue$0=caml_new_string("mediumslateblue"),
     cst_limegreen$0=caml_new_string("limegreen"),
     cst_lightpink$0=caml_new_string("lightpink"),
     cst_lightsalmon$0=caml_new_string("lightsalmon"),
     cst_lightseagreen$0=caml_new_string("lightseagreen"),
     cst_lightskyblue$0=caml_new_string("lightskyblue"),
     cst_lightslategray$0=caml_new_string("lightslategray"),
     cst_lightslategrey$0=caml_new_string("lightslategrey"),
     cst_lightsteelblue$0=caml_new_string("lightsteelblue"),
     cst_lightyellow$0=caml_new_string("lightyellow"),
     cst_lime$0=caml_new_string("lime"),
     cst_linen$0=caml_new_string("linen"),
     cst_magenta$0=caml_new_string("magenta"),
     cst_maroon$0=caml_new_string("maroon"),
     cst_mediumaquamarine$0=caml_new_string("mediumaquamarine"),
     cst_mediumblue$0=caml_new_string("mediumblue"),
     cst_mediumorchid$0=caml_new_string("mediumorchid"),
     cst_mediumpurple$0=caml_new_string("mediumpurple"),
     cst_mediumseagreen$0=caml_new_string("mediumseagreen"),
     cst_navy$0=caml_new_string("navy"),
     cst_mediumspringgreen$0=caml_new_string("mediumspringgreen"),
     cst_mediumturquoise$0=caml_new_string("mediumturquoise"),
     cst_mediumvioletred$0=caml_new_string("mediumvioletred"),
     cst_midnightblue$0=caml_new_string("midnightblue"),
     cst_mintcream$0=caml_new_string("mintcream"),
     cst_mistyrose$0=caml_new_string("mistyrose"),
     cst_moccasin$0=caml_new_string("moccasin"),
     cst_navajowhite$0=caml_new_string("navajowhite"),
     cst_oldlace$0=caml_new_string("oldlace"),
     cst_olive$0=caml_new_string("olive"),
     cst_olivedrab$0=caml_new_string("olivedrab"),
     cst_orange$0=caml_new_string("orange"),
     cst_orangered$0=caml_new_string("orangered"),
     cst_orchid$0=caml_new_string("orchid"),
     cst_palegoldenrod$0=caml_new_string("palegoldenrod"),
     cst_palegreen$0=caml_new_string("palegreen"),
     cst_skyblue$0=caml_new_string("skyblue"),
     cst_rosybrown$0=caml_new_string("rosybrown"),
     cst_palevioletred$0=caml_new_string("palevioletred"),
     cst_papayawhip$0=caml_new_string("papayawhip"),
     cst_peachpuff$0=caml_new_string("peachpuff"),
     cst_peru$0=caml_new_string("peru"),
     cst_pink$0=caml_new_string("pink"),
     cst_plum$0=caml_new_string("plum"),
     cst_powderblue$0=caml_new_string("powderblue"),
     cst_purple$0=caml_new_string("purple"),
     cst_red$0=caml_new_string("red"),
     cst_royalblue$0=caml_new_string("royalblue"),
     cst_saddlebrown$0=caml_new_string("saddlebrown"),
     cst_salmon$0=caml_new_string("salmon"),
     cst_sandybrown$0=caml_new_string("sandybrown"),
     cst_seagreen$0=caml_new_string("seagreen"),
     cst_seashell$0=caml_new_string("seashell"),
     cst_sienna$0=caml_new_string("sienna"),
     cst_silver$0=caml_new_string("silver"),
     cst_thistle$0=caml_new_string("thistle"),
     cst_slateblue$0=caml_new_string("slateblue"),
     cst_slategray$0=caml_new_string("slategray"),
     cst_slategrey$0=caml_new_string("slategrey"),
     cst_snow$0=caml_new_string("snow"),
     cst_springgreen$0=caml_new_string("springgreen"),
     cst_steelblue$0=caml_new_string("steelblue"),
     cst_tan$0=caml_new_string("tan"),
     cst_teal$0=caml_new_string("teal"),
     cst_tomato$0=caml_new_string("tomato"),
     cst_turquoise$0=caml_new_string("turquoise"),
     cst_violet$0=caml_new_string("violet"),
     cst_wheat$0=caml_new_string("wheat"),
     cst_white$0=caml_new_string("white"),
     cst_whitesmoke$0=caml_new_string("whitesmoke"),
     cst_yellow$0=caml_new_string("yellow"),
     cst_yellowgreen$0=caml_new_string("yellowgreen"),
     cst_is_not_a_valid_color_name=
      caml_new_string(" is not a valid color name"),
     cst_aliceblue=caml_new_string("aliceblue"),
     cst_antiquewhite=caml_new_string("antiquewhite"),
     cst_aqua=caml_new_string("aqua"),
     cst_aquamarine=caml_new_string("aquamarine"),
     cst_azure=caml_new_string("azure"),
     cst_beige=caml_new_string("beige"),
     cst_bisque=caml_new_string("bisque"),
     cst_black=caml_new_string("black"),
     cst_blanchedalmond=caml_new_string("blanchedalmond"),
     cst_blue=caml_new_string("blue"),
     cst_blueviolet=caml_new_string("blueviolet"),
     cst_brown=caml_new_string("brown"),
     cst_burlywood=caml_new_string("burlywood"),
     cst_cadetblue=caml_new_string("cadetblue"),
     cst_chartreuse=caml_new_string("chartreuse"),
     cst_chocolate=caml_new_string("chocolate"),
     cst_coral=caml_new_string("coral"),
     cst_cornflowerblue=caml_new_string("cornflowerblue"),
     cst_cornsilk=caml_new_string("cornsilk"),
     cst_crimson=caml_new_string("crimson"),
     cst_cyan=caml_new_string("cyan"),
     cst_darkblue=caml_new_string("darkblue"),
     cst_darkcyan=caml_new_string("darkcyan"),
     cst_darkgoldenrod=caml_new_string("darkgoldenrod"),
     cst_darkgray=caml_new_string("darkgray"),
     cst_darkgreen=caml_new_string("darkgreen"),
     cst_darkgrey=caml_new_string("darkgrey"),
     cst_darkkhaki=caml_new_string("darkkhaki"),
     cst_darkmagenta=caml_new_string("darkmagenta"),
     cst_darkolivegreen=caml_new_string("darkolivegreen"),
     cst_darkorange=caml_new_string("darkorange"),
     cst_darkorchid=caml_new_string("darkorchid"),
     cst_darkred=caml_new_string("darkred"),
     cst_darksalmon=caml_new_string("darksalmon"),
     cst_darkseagreen=caml_new_string("darkseagreen"),
     cst_darkslateblue=caml_new_string("darkslateblue"),
     cst_darkslategray=caml_new_string("darkslategray"),
     cst_darkslategrey=caml_new_string("darkslategrey"),
     cst_darkturquoise=caml_new_string("darkturquoise"),
     cst_darkviolet=caml_new_string("darkviolet"),
     cst_deeppink=caml_new_string("deeppink"),
     cst_deepskyblue=caml_new_string("deepskyblue"),
     cst_dimgray=caml_new_string("dimgray"),
     cst_dimgrey=caml_new_string("dimgrey"),
     cst_dodgerblue=caml_new_string("dodgerblue"),
     cst_firebrick=caml_new_string("firebrick"),
     cst_floralwhite=caml_new_string("floralwhite"),
     cst_forestgreen=caml_new_string("forestgreen"),
     cst_fuchsia=caml_new_string("fuchsia"),
     cst_gainsboro=caml_new_string("gainsboro"),
     cst_ghostwhite=caml_new_string("ghostwhite"),
     cst_gold=caml_new_string("gold"),
     cst_goldenrod=caml_new_string("goldenrod"),
     cst_gray=caml_new_string("gray"),
     cst_grey=caml_new_string("grey"),
     cst_green=caml_new_string("green"),
     cst_greenyellow=caml_new_string("greenyellow"),
     cst_honeydew=caml_new_string("honeydew"),
     cst_hotpink=caml_new_string("hotpink"),
     cst_indianred=caml_new_string("indianred"),
     cst_indigo=caml_new_string("indigo"),
     cst_ivory=caml_new_string("ivory"),
     cst_khaki=caml_new_string("khaki"),
     cst_lavender=caml_new_string("lavender"),
     cst_lavenderblush=caml_new_string("lavenderblush"),
     cst_lawngreen=caml_new_string("lawngreen"),
     cst_lemonchiffon=caml_new_string("lemonchiffon"),
     cst_lightblue=caml_new_string("lightblue"),
     cst_lightcoral=caml_new_string("lightcoral"),
     cst_lightcyan=caml_new_string("lightcyan"),
     cst_lightgoldenrodyellow=caml_new_string("lightgoldenrodyellow"),
     cst_lightgray=caml_new_string("lightgray"),
     cst_lightgreen=caml_new_string("lightgreen"),
     cst_lightgrey=caml_new_string("lightgrey"),
     cst_lightpink=caml_new_string("lightpink"),
     cst_lightsalmon=caml_new_string("lightsalmon"),
     cst_lightseagreen=caml_new_string("lightseagreen"),
     cst_lightskyblue=caml_new_string("lightskyblue"),
     cst_lightslategray=caml_new_string("lightslategray"),
     cst_lightslategrey=caml_new_string("lightslategrey"),
     cst_lightsteelblue=caml_new_string("lightsteelblue"),
     cst_lightyellow=caml_new_string("lightyellow"),
     cst_lime=caml_new_string("lime"),
     cst_limegreen=caml_new_string("limegreen"),
     cst_linen=caml_new_string("linen"),
     cst_magenta=caml_new_string("magenta"),
     cst_maroon=caml_new_string("maroon"),
     cst_mediumaquamarine=caml_new_string("mediumaquamarine"),
     cst_mediumblue=caml_new_string("mediumblue"),
     cst_mediumorchid=caml_new_string("mediumorchid"),
     cst_mediumpurple=caml_new_string("mediumpurple"),
     cst_mediumseagreen=caml_new_string("mediumseagreen"),
     cst_mediumslateblue=caml_new_string("mediumslateblue"),
     cst_mediumspringgreen=caml_new_string("mediumspringgreen"),
     cst_mediumturquoise=caml_new_string("mediumturquoise"),
     cst_mediumvioletred=caml_new_string("mediumvioletred"),
     cst_midnightblue=caml_new_string("midnightblue"),
     cst_mintcream=caml_new_string("mintcream"),
     cst_mistyrose=caml_new_string("mistyrose"),
     cst_moccasin=caml_new_string("moccasin"),
     cst_navajowhite=caml_new_string("navajowhite"),
     cst_navy=caml_new_string("navy"),
     cst_oldlace=caml_new_string("oldlace"),
     cst_olive=caml_new_string("olive"),
     cst_olivedrab=caml_new_string("olivedrab"),
     cst_orange=caml_new_string("orange"),
     cst_orangered=caml_new_string("orangered"),
     cst_orchid=caml_new_string("orchid"),
     cst_palegoldenrod=caml_new_string("palegoldenrod"),
     cst_palegreen=caml_new_string("palegreen"),
     cst_paleturquoise=caml_new_string("paleturquoise"),
     cst_palevioletred=caml_new_string("palevioletred"),
     cst_papayawhip=caml_new_string("papayawhip"),
     cst_peachpuff=caml_new_string("peachpuff"),
     cst_peru=caml_new_string("peru"),
     cst_pink=caml_new_string("pink"),
     cst_plum=caml_new_string("plum"),
     cst_powderblue=caml_new_string("powderblue"),
     cst_purple=caml_new_string("purple"),
     cst_red=caml_new_string("red"),
     cst_rosybrown=caml_new_string("rosybrown"),
     cst_royalblue=caml_new_string("royalblue"),
     cst_saddlebrown=caml_new_string("saddlebrown"),
     cst_salmon=caml_new_string("salmon"),
     cst_sandybrown=caml_new_string("sandybrown"),
     cst_seagreen=caml_new_string("seagreen"),
     cst_seashell=caml_new_string("seashell"),
     cst_sienna=caml_new_string("sienna"),
     cst_silver=caml_new_string("silver"),
     cst_skyblue=caml_new_string("skyblue"),
     cst_slateblue=caml_new_string("slateblue"),
     cst_slategray=caml_new_string("slategray"),
     cst_slategrey=caml_new_string("slategrey"),
     cst_snow=caml_new_string("snow"),
     cst_springgreen=caml_new_string("springgreen"),
     cst_steelblue=caml_new_string("steelblue"),
     cst_tan=caml_new_string("tan"),
     cst_teal=caml_new_string("teal"),
     cst_thistle=caml_new_string("thistle"),
     cst_tomato=caml_new_string("tomato"),
     cst_turquoise=caml_new_string("turquoise"),
     cst_violet=caml_new_string("violet"),
     cst_wheat=caml_new_string("wheat"),
     cst_white=caml_new_string("white"),
     cst_whitesmoke=caml_new_string("whitesmoke"),
     cst_yellow=caml_new_string("yellow"),
     cst_yellowgreen=caml_new_string("yellowgreen"),
     cst_vkern$0=caml_new_string("vkern"),
     cst_view$0=caml_new_string("view"),
     cst_use$0=caml_new_string("use"),
     cst_tspan$0=caml_new_string("tspan"),
     cst_tref$0=caml_new_string("tref"),
     cst_title$3=caml_new_string("title"),
     cst_textpath$0=caml_new_string("textpath"),
     cst_text$1=caml_new_string("text"),
     cst_symbol$0=caml_new_string("symbol"),
     cst_switch$0=caml_new_string("switch"),
     cst_svg$0=caml_new_string("svg"),
     cst_style$3=caml_new_string("style"),
     cst_stop$0=caml_new_string("stop"),
     cst_set$0=caml_new_string("set"),
     cst_script$3=caml_new_string("script"),
     cst_rect$0=caml_new_string("rect"),
     cst_radialgradient$0=caml_new_string("radialgradient"),
     cst_polyline$0=caml_new_string("polyline"),
     cst_polygon$0=caml_new_string("polygon"),
     cst_pattern$0=caml_new_string("pattern"),
     cst_path$0=caml_new_string("path"),
     cst_mpath$0=caml_new_string("mpath"),
     cst_missing_glyph$0=caml_new_string("missing-glyph"),
     cst_metadata$0=caml_new_string("metadata"),
     cst_mask$0=caml_new_string("mask"),
     cst_lineargradient$0=caml_new_string("lineargradient"),
     cst_line$0=caml_new_string("line"),
     cst_image$0=caml_new_string("image"),
     cst_hkern$0=caml_new_string("hkern"),
     cst_glyphref$0=caml_new_string("glyphref"),
     cst_glyph$0=caml_new_string("glyph"),
     cst_g$1=caml_new_string("g"),
     cst_foreignobject=caml_new_string("foreignobject"),
     cst_font_face_uri$0=caml_new_string("font-face-uri"),
     cst_font_face_src$0=caml_new_string("font-face-src"),
     cst_font_face_name$0=caml_new_string("font-face-name"),
     cst_font_face_format$0=caml_new_string("font-face-format"),
     cst_font_face$0=caml_new_string("font-face"),
     cst_font$0=caml_new_string("font"),
     cst_filter$0=caml_new_string("filter"),
     cst_ellipse$0=caml_new_string("ellipse"),
     cst_desc$0=caml_new_string("desc"),
     cst_defs$0=caml_new_string("defs"),
     cst_cursor$0=caml_new_string("cursor"),
     cst_clippath$0=caml_new_string("clippath"),
     cst_circle$0=caml_new_string("circle"),
     cst_animatetransform$0=caml_new_string("animatetransform"),
     cst_animatemotion$0=caml_new_string("animatemotion"),
     cst_animatecolor$0=caml_new_string("animatecolor"),
     cst_animate$0=caml_new_string("animate"),
     cst_altglyphitem$0=caml_new_string("altglyphitem"),
     cst_altglyphdef$0=caml_new_string("altglyphdef"),
     cst_altglyph$0=caml_new_string("altglyph"),
     cst_a$3=caml_new_string("a"),
     cst_vkern=caml_new_string("vkern"),
     cst_view=caml_new_string("view"),
     cst_use=caml_new_string("use"),
     cst_tspan=caml_new_string("tspan"),
     cst_tref=caml_new_string("tref"),
     cst_title$2=caml_new_string("title"),
     cst_textpath=caml_new_string("textpath"),
     cst_text$0=caml_new_string("text"),
     cst_symbol=caml_new_string("symbol"),
     cst_switch=caml_new_string("switch"),
     cst_svg=caml_new_string("svg"),
     cst_style$2=caml_new_string("style"),
     cst_stop=caml_new_string("stop"),
     cst_set=caml_new_string("set"),
     cst_script$2=caml_new_string("script"),
     cst_rect=caml_new_string("rect"),
     cst_radialgradient=caml_new_string("radialgradient"),
     cst_polyline=caml_new_string("polyline"),
     cst_polygon=caml_new_string("polygon"),
     cst_pattern=caml_new_string("pattern"),
     cst_path=caml_new_string("path"),
     cst_mpath=caml_new_string("mpath"),
     cst_missing_glyph=caml_new_string("missing-glyph"),
     cst_metadata=caml_new_string("metadata"),
     cst_mask=caml_new_string("mask"),
     cst_lineargradient=caml_new_string("lineargradient"),
     cst_line=caml_new_string("line"),
     cst_image=caml_new_string("image"),
     cst_hkern=caml_new_string("hkern"),
     cst_glyphref=caml_new_string("glyphref"),
     cst_glyph=caml_new_string("glyph"),
     cst_g$0=caml_new_string("g"),
     cst_foreignObject=caml_new_string("foreignObject"),
     cst_font_face_uri=caml_new_string("font-face-uri"),
     cst_font_face_src=caml_new_string("font-face-src"),
     cst_font_face_name=caml_new_string("font-face-name"),
     cst_font_face_format=caml_new_string("font-face-format"),
     cst_font_face=caml_new_string("font-face"),
     cst_font=caml_new_string("font"),
     cst_filter=caml_new_string("filter"),
     cst_ellipse=caml_new_string("ellipse"),
     cst_desc=caml_new_string("desc"),
     cst_defs=caml_new_string("defs"),
     cst_cursor=caml_new_string("cursor"),
     cst_clippath=caml_new_string("clippath"),
     cst_circle=caml_new_string("circle"),
     cst_animatetransform=caml_new_string("animatetransform"),
     cst_animatemotion=caml_new_string("animatemotion"),
     cst_animatecolor=caml_new_string("animatecolor"),
     cst_animate=caml_new_string("animate"),
     cst_altglyphitem=caml_new_string("altglyphitem"),
     cst_altglyphdef=caml_new_string("altglyphdef"),
     cst_altglyph=caml_new_string("altglyph"),
     cst_a$2=caml_new_string("a"),
     cst_Js_of_ocaml_Dom_svg_SVGError=
      caml_new_string("Js_of_ocaml__Dom_svg.SVGError"),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib=global_data.Stdlib,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Assert_failure=global_data.Assert_failure,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_uchar=global_data.Stdlib__uchar,
     Stdlib_printf=global_data.Stdlib__printf,
     Js_of_ocaml=[0];
    caml_register_global(1627,Js_of_ocaml,"Js_of_ocaml__");
    var
     Poly=[0],
     _d_=[0,caml_new_string("lib/js_of_ocaml/dom.ml"),351,67],
     _e_=[0,caml_new_string("transparent")],
     _f_=[0,caml_new_string("native")],
     _j_=[0,caml_new_string("lib/js_of_ocaml/dom_html.ml"),2790,58],
     _i_=[0,caml_new_string("lib/js_of_ocaml/dom_html.ml"),2789,61],
     _h_=
      [0,
       [11,
        caml_new_string("getElementById_exn: "),
        [3,0,[11,caml_new_string(" not found"),0]]],
       caml_new_string("getElementById_exn: %S not found")],
     _l_=[0,caml_new_string("lib/js_of_ocaml/form.ml"),177,13],
     _k_=[0,1],
     _m_=[0,caml_new_string("lib/js_of_ocaml/xmlHttpRequest.ml"),129,75],
     _n_=[0,caml_new_string("lib/js_of_ocaml/regexp.ml"),34,64],
     _o_=[0,caml_new_string(""),0],
     _ci_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cj_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _ck_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cl_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b6_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b7_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b8_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b9_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b__=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b$_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _ca_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cb_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cc_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cd_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _ce_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cf_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _cg_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _ch_=[0,[8,0,0,0,[2,0,0]],caml_new_string("%f%s")],
     _b5_=
      caml_list_of_js_array
       ([caml_new_string("aliceblue"),
         caml_new_string("antiquewhite"),
         caml_new_string("aqua"),
         caml_new_string("aquamarine"),
         caml_new_string("azure"),
         caml_new_string("beige"),
         caml_new_string("bisque"),
         caml_new_string("black"),
         caml_new_string("blanchedalmond"),
         caml_new_string("blue"),
         caml_new_string("blueviolet"),
         caml_new_string("brown"),
         caml_new_string("burlywood"),
         caml_new_string("cadetblue"),
         caml_new_string("chartreuse"),
         caml_new_string("chocolate"),
         caml_new_string("coral"),
         caml_new_string("cornflowerblue"),
         caml_new_string("cornsilk"),
         caml_new_string("crimson"),
         caml_new_string("cyan"),
         caml_new_string("darkblue"),
         caml_new_string("darkcyan"),
         caml_new_string("darkgoldenrod"),
         caml_new_string("darkgray"),
         caml_new_string("darkgreen"),
         caml_new_string("darkgrey"),
         caml_new_string("darkkhaki"),
         caml_new_string("darkmagenta"),
         caml_new_string("darkolivegreen"),
         caml_new_string("darkorange"),
         caml_new_string("darkorchid"),
         caml_new_string("darkred"),
         caml_new_string("darksalmon"),
         caml_new_string("darkseagreen"),
         caml_new_string("darkslateblue"),
         caml_new_string("darkslategray"),
         caml_new_string("darkslategrey"),
         caml_new_string("darkturquoise"),
         caml_new_string("darkviolet"),
         caml_new_string("deeppink"),
         caml_new_string("deepskyblue"),
         caml_new_string("dimgray"),
         caml_new_string("dimgrey"),
         caml_new_string("dodgerblue"),
         caml_new_string("firebrick"),
         caml_new_string("floralwhite"),
         caml_new_string("forestgreen"),
         caml_new_string("fuchsia"),
         caml_new_string("gainsboro"),
         caml_new_string("ghostwhite"),
         caml_new_string("gold"),
         caml_new_string("goldenrod"),
         caml_new_string("gray"),
         caml_new_string("green"),
         caml_new_string("greenyellow"),
         caml_new_string("grey"),
         caml_new_string("honeydew"),
         caml_new_string("hotpink"),
         caml_new_string("indianred"),
         caml_new_string("indigo"),
         caml_new_string("ivory"),
         caml_new_string("khaki"),
         caml_new_string("lavender"),
         caml_new_string("lavenderblush"),
         caml_new_string("lawngreen"),
         caml_new_string("lemonchiffon"),
         caml_new_string("lightblue"),
         caml_new_string("lightcoral"),
         caml_new_string("lightcyan"),
         caml_new_string("lightgoldenrodyellow"),
         caml_new_string("lightgray"),
         caml_new_string("lightgreen"),
         caml_new_string("lightgrey"),
         caml_new_string("lightpink"),
         caml_new_string("lightsalmon"),
         caml_new_string("lightseagreen"),
         caml_new_string("lightskyblue"),
         caml_new_string("lightslategray"),
         caml_new_string("lightslategrey"),
         caml_new_string("lightsteelblue"),
         caml_new_string("lightyellow"),
         caml_new_string("lime"),
         caml_new_string("limegreen"),
         caml_new_string("linen"),
         caml_new_string("magenta"),
         caml_new_string("maroon"),
         caml_new_string("mediumaquamarine"),
         caml_new_string("mediumblue"),
         caml_new_string("mediumorchid"),
         caml_new_string("mediumpurple"),
         caml_new_string("mediumseagreen"),
         caml_new_string("mediumslateblue"),
         caml_new_string("mediumspringgreen"),
         caml_new_string("mediumturquoise"),
         caml_new_string("mediumvioletred"),
         caml_new_string("midnightblue"),
         caml_new_string("mintcream"),
         caml_new_string("mistyrose"),
         caml_new_string("moccasin"),
         caml_new_string("navajowhite"),
         caml_new_string("navy"),
         caml_new_string("oldlace"),
         caml_new_string("olive"),
         caml_new_string("olivedrab"),
         caml_new_string("orange"),
         caml_new_string("orangered"),
         caml_new_string("orchid"),
         caml_new_string("palegoldenrod"),
         caml_new_string("palegreen"),
         caml_new_string("paleturquoise"),
         caml_new_string("palevioletred"),
         caml_new_string("papayawhip"),
         caml_new_string("peachpuff"),
         caml_new_string("peru"),
         caml_new_string("pink"),
         caml_new_string("plum"),
         caml_new_string("powderblue"),
         caml_new_string("purple"),
         caml_new_string("red"),
         caml_new_string("rosybrown"),
         caml_new_string("royalblue"),
         caml_new_string("saddlebrown"),
         caml_new_string("salmon"),
         caml_new_string("sandybrown"),
         caml_new_string("seagreen"),
         caml_new_string("seashell"),
         caml_new_string("sienna"),
         caml_new_string("silver"),
         caml_new_string("skyblue"),
         caml_new_string("slateblue"),
         caml_new_string("slategray"),
         caml_new_string("slategrey"),
         caml_new_string("snow"),
         caml_new_string("springgreen"),
         caml_new_string("steelblue"),
         caml_new_string("tan"),
         caml_new_string("teal"),
         caml_new_string("thistle"),
         caml_new_string("tomato"),
         caml_new_string("turquoise"),
         caml_new_string("violet"),
         caml_new_string("wheat"),
         caml_new_string("white"),
         caml_new_string("whitesmoke"),
         caml_new_string("yellow"),
         caml_new_string("yellowgreen")]),
     _b4_=
      [0,
       [12,35,[4,8,[0,2,2],0,[4,8,[0,2,2],0,[4,8,[0,2,2],0,0]]]],
       caml_new_string("#%02X%02X%02X")],
     _bY_=
      [0,
       [11,
        caml_new_string("rgb("),
        [4,0,0,0,[12,44,[4,0,0,0,[12,44,[4,0,0,0,[12,41,0]]]]]]],
       caml_new_string("rgb(%d,%d,%d)")],
     _bZ_=
      [0,
       [11,
        caml_new_string("rgb("),
        [4,
         0,
         0,
         0,
         [12,37,[12,44,[4,0,0,0,[12,37,[12,44,[4,0,0,0,[12,37,[12,41,0]]]]]]]]]],
       caml_new_string("rgb(%d%%,%d%%,%d%%)")],
     _b0_=
      [0,
       [11,
        caml_new_string("rgba("),
        [4,
         0,
         0,
         0,
         [12,44,[4,0,0,0,[12,44,[4,0,0,0,[12,44,[8,0,0,0,[12,41,0]]]]]]]]],
       caml_new_string("rgba(%d,%d,%d,%f)")],
     _b1_=
      [0,
       [11,
        caml_new_string("rgba("),
        [4,
         0,
         0,
         0,
         [12,
          37,
          [12,44,[4,0,0,0,[12,37,[12,44,[4,0,0,0,[12,37,[12,44,partial]]]]]]]]]],
       caml_new_string("rgba(%d%%,%d%%,%d%%,%f)")],
     _b2_=
      [0,
       [11,
        caml_new_string("hsl("),
        [4,
         0,
         0,
         0,
         [12,44,[4,0,0,0,[12,37,[12,44,[4,0,0,0,[12,37,[12,41,0]]]]]]]]],
       caml_new_string("hsl(%d,%d%%,%d%%)")],
     _b3_=
      [0,
       [11,
        caml_new_string("hsla("),
        [4,
         0,
         0,
         0,
         [12,
          44,
          [4,
           0,
           0,
           0,
           [12,37,[12,44,[4,0,0,0,[12,37,[12,44,[8,0,0,0,partial$0]]]]]]]]]],
       caml_new_string("hsla(%d,%d%%,%d%%,%f)")],
     _v_=[0,240,248,255],
     _w_=[0,250,235,215],
     _x_=[0,0,255,255],
     _y_=[0,127,255,212],
     _z_=[0,240,255,255],
     _A_=[0,245,245,220],
     _B_=[0,255,228,196],
     _C_=[0,0,0,0],
     _D_=[0,255,235,205],
     _E_=[0,0,0,255],
     _F_=[0,138,43,226],
     _G_=[0,165,42,42],
     _H_=[0,222,184,135],
     _I_=[0,95,158,160],
     _J_=[0,127,255,0],
     _K_=[0,210,105,30],
     _L_=[0,255,127,80],
     _M_=[0,100,149,237],
     _N_=[0,255,248,220],
     _O_=[0,220,20,60],
     _P_=[0,0,255,255],
     _Q_=[0,0,0,139],
     _R_=[0,0,139,139],
     _S_=[0,184,134,11],
     _T_=[0,169,169,169],
     _U_=[0,0,100,0],
     _V_=[0,169,169,169],
     _W_=[0,189,183,107],
     _X_=[0,139,0,139],
     _Y_=[0,85,107,47],
     _Z_=[0,255,140,0],
     ___=[0,153,50,204],
     _$_=[0,139,0,0],
     _aa_=[0,233,150,122],
     _ab_=[0,143,188,143],
     _ac_=[0,72,61,139],
     _ad_=[0,47,79,79],
     _ae_=[0,47,79,79],
     _af_=[0,0,206,209],
     _ag_=[0,148,0,211],
     _ah_=[0,255,20,147],
     _ai_=[0,0,191,255],
     _aj_=[0,105,105,105],
     _ak_=[0,105,105,105],
     _al_=[0,30,144,255],
     _am_=[0,178,34,34],
     _an_=[0,255,250,240],
     _ao_=[0,34,139,34],
     _ap_=[0,255,0,255],
     _aq_=[0,220,220,220],
     _ar_=[0,248,248,255],
     _as_=[0,255,215,0],
     _at_=[0,218,165,32],
     _au_=[0,128,128,128],
     _av_=[0,128,128,128],
     _aw_=[0,0,128,0],
     _ax_=[0,173,255,47],
     _ay_=[0,240,255,240],
     _az_=[0,255,105,180],
     _aA_=[0,205,92,92],
     _aB_=[0,75,0,130],
     _aC_=[0,255,255,240],
     _aD_=[0,240,230,140],
     _aE_=[0,230,230,250],
     _aF_=[0,255,240,245],
     _aG_=[0,124,252,0],
     _aH_=[0,255,250,205],
     _aI_=[0,173,216,230],
     _aJ_=[0,240,128,128],
     _aK_=[0,224,255,255],
     _aL_=[0,250,250,210],
     _aM_=[0,211,211,211],
     _aN_=[0,144,238,144],
     _aO_=[0,211,211,211],
     _aP_=[0,255,182,193],
     _aQ_=[0,255,160,122],
     _aR_=[0,32,178,170],
     _aS_=[0,135,206,250],
     _aT_=[0,119,136,153],
     _aU_=[0,119,136,153],
     _aV_=[0,176,196,222],
     _aW_=[0,255,255,224],
     _aX_=[0,0,255,0],
     _aY_=[0,50,205,50],
     _aZ_=[0,250,240,230],
     _a0_=[0,255,0,255],
     _a1_=[0,128,0,0],
     _a2_=[0,102,205,170],
     _a3_=[0,0,0,205],
     _a4_=[0,186,85,211],
     _a5_=[0,147,112,219],
     _a6_=[0,60,179,113],
     _a7_=[0,123,104,238],
     _a8_=[0,0,250,154],
     _a9_=[0,72,209,204],
     _a__=[0,199,21,133],
     _a$_=[0,25,25,112],
     _ba_=[0,245,255,250],
     _bb_=[0,255,228,225],
     _bc_=[0,255,228,181],
     _bd_=[0,255,222,173],
     _be_=[0,0,0,128],
     _bf_=[0,253,245,230],
     _bg_=[0,128,128,0],
     _bh_=[0,107,142,35],
     _bi_=[0,255,165,0],
     _bj_=[0,255,69,0],
     _bk_=[0,218,112,214],
     _bl_=[0,238,232,170],
     _bm_=[0,152,251,152],
     _bn_=[0,175,238,238],
     _bo_=[0,219,112,147],
     _bp_=[0,255,239,213],
     _bq_=[0,255,218,185],
     _br_=[0,205,133,63],
     _bs_=[0,255,192,203],
     _bt_=[0,221,160,221],
     _bu_=[0,176,224,230],
     _bv_=[0,128,0,128],
     _bw_=[0,255,0,0],
     _bx_=[0,188,143,143],
     _by_=[0,65,105,225],
     _bz_=[0,139,69,19],
     _bA_=[0,250,128,114],
     _bB_=[0,244,164,96],
     _bC_=[0,46,139,87],
     _bD_=[0,255,245,238],
     _bE_=[0,160,82,45],
     _bF_=[0,192,192,192],
     _bG_=[0,135,206,235],
     _bH_=[0,106,90,205],
     _bI_=[0,112,128,144],
     _bJ_=[0,112,128,144],
     _bK_=[0,255,250,250],
     _bL_=[0,0,255,127],
     _bM_=[0,70,130,180],
     _bN_=[0,210,180,140],
     _bO_=[0,0,128,128],
     _bP_=[0,216,191,216],
     _bQ_=[0,255,99,71],
     _bR_=[0,64,224,208],
     _bS_=[0,238,130,238],
     _bT_=[0,245,222,179],
     _bU_=[0,255,255,255],
     _bV_=[0,245,245,245],
     _bW_=[0,255,255,0],
     _bX_=[0,154,205,50];
    function symbol(x,y){return x < y?1:0}
    function symbol$0(x,y){return x <= y?1:0}
    function symbol$1(x,y){return x !== y?1:0}
    function symbol$2(x,y){return x === y?1:0}
    function symbol$3(x,y){return y < x?1:0}
    function symbol$4(x,y){return y <= x?1:0}
    var compare=runtime.caml_int_compare;
    function equal(x,y){return x === y?1:0}
    function max(x,y){return y <= x?x:y}
    function min(x,y){return x <= y?x:y}
    var
     Int_replace_polymorphic_compare=
      [0,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       compare,
       equal,
       max,
       min],
     make=Stdlib_string[1],
     init=Stdlib_string[2],
     copy=Stdlib_string[3],
     sub=Stdlib_string[4],
     fill=Stdlib_string[5],
     blit=Stdlib_string[6],
     concat=Stdlib_string[7],
     iter=Stdlib_string[8],
     iteri=Stdlib_string[9],
     map=Stdlib_string[10],
     mapi=Stdlib_string[11],
     trim=Stdlib_string[12],
     escaped=Stdlib_string[13],
     index=Stdlib_string[14],
     index_opt=Stdlib_string[15],
     rindex=Stdlib_string[16],
     rindex_opt=Stdlib_string[17],
     index_from=Stdlib_string[18],
     index_from_opt=Stdlib_string[19],
     rindex_from=Stdlib_string[20],
     rindex_from_opt=Stdlib_string[21],
     contains=Stdlib_string[22],
     contains_from=Stdlib_string[23],
     rcontains_from=Stdlib_string[24],
     uppercase=Stdlib_string[25],
     lowercase=Stdlib_string[26],
     capitalize=Stdlib_string[27],
     uncapitalize=Stdlib_string[28],
     uppercase_ascii=Stdlib_string[29],
     lowercase_ascii=Stdlib_string[30],
     capitalize_ascii=Stdlib_string[31],
     uncapitalize_ascii=Stdlib_string[32],
     compare$0=Stdlib_string[33],
     split_on_char=Stdlib_string[35],
     to_seq=Stdlib_string[36],
     to_seqi=Stdlib_string[37],
     of_seq=Stdlib_string[38],
     equal$0=runtime.caml_string_equal,
     String=
      [0,
       make,
       init,
       copy,
       sub,
       fill,
       blit,
       concat,
       iter,
       iteri,
       map,
       mapi,
       trim,
       escaped,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase,
       lowercase,
       capitalize,
       uncapitalize,
       uppercase_ascii,
       lowercase_ascii,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$0,
       split_on_char,
       to_seq,
       to_seqi,
       of_seq,
       equal$0],
     chr=Stdlib_char[1],
     escaped$0=Stdlib_char[2],
     lowercase$0=Stdlib_char[3],
     uppercase$0=Stdlib_char[4],
     lowercase_ascii$0=Stdlib_char[5],
     uppercase_ascii$0=Stdlib_char[6],
     compare$1=Stdlib_char[7];
    function equal$1(x,y){return x === y?1:0}
    var
     Char=
      [0,
       chr,
       escaped$0,
       lowercase$0,
       uppercase$0,
       lowercase_ascii$0,
       uppercase_ascii$0,
       compare$1,
       equal$1],
     symbol$5=Int_replace_polymorphic_compare[1],
     symbol$6=Int_replace_polymorphic_compare[2],
     symbol$7=Int_replace_polymorphic_compare[3],
     symbol$8=Int_replace_polymorphic_compare[4],
     symbol$9=Int_replace_polymorphic_compare[5],
     symbol$10=Int_replace_polymorphic_compare[6],
     compare$2=Int_replace_polymorphic_compare[7],
     equal$2=Int_replace_polymorphic_compare[8],
     max$0=Int_replace_polymorphic_compare[9],
     min$0=Int_replace_polymorphic_compare[10],
     Js_of_ocaml_Import=
      [0,
       Poly,
       Int_replace_polymorphic_compare,
       String,
       Char,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       compare$2,
       equal$2,
       max$0,
       min$0];
    caml_register_global(1630,Js_of_ocaml_Import,"Js_of_ocaml__Import");
    var
     global=joo_global_object,
     Unsafe=[0,global],
     no_handler=null,
     t37=undefined;
    function return$0(_gQ_){return _gQ_}
    function map$0(x,f){return x == no_handler?no_handler:caml_call1(f,x)}
    function bind(x,f){return x == no_handler?no_handler:caml_call1(f,x)}
    function test(x){return 1 - (x == no_handler?1:0)}
    function iter$0(x,f)
     {var _gP_=1 - (x == no_handler?1:0);return _gP_?caml_call1(f,x):_gP_}
    function case$0(x,f,g)
     {return x == no_handler?caml_call1(f,0):caml_call1(g,x)}
    function get(x,f){return x == no_handler?caml_call1(f,0):x}
    function option(x){if(x){var x$0=x[1];return x$0}return no_handler}
    function to_option(x)
     {function _gO_(x){return [0,x]}
      return case$0(x,function(param){return 0},_gO_)}
    var
     Opt=
      [0,
       no_handler,
       return$0,
       map$0,
       bind,
       test,
       iter$0,
       case$0,
       get,
       option,
       to_option];
    function return$1(_gN_){return _gN_}
    function map$1(x,f){return x === t37?t37:caml_call1(f,x)}
    function bind$0(x,f){return x === t37?t37:caml_call1(f,x)}
    function test$0(x){return x !== t37?1:0}
    function iter$1(x,f)
     {var _gM_=x !== t37?1:0;return _gM_?caml_call1(f,x):_gM_}
    function case$1(x,f,g){return x === t37?caml_call1(f,0):caml_call1(g,x)}
    function get$0(x,f){return x === t37?caml_call1(f,0):x}
    function option$0(x){if(x){var x$0=x[1];return x$0}return t37}
    function to_option$0(x)
     {function _gL_(x){return [0,x]}
      return case$1(x,function(param){return 0},_gL_)}
    var
     Optdef=
      [0,
       t37,
       return$1,
       map$1,
       bind$0,
       test$0,
       iter$1,
       case$1,
       get$0,
       option$0,
       to_option$0];
    function coerce(x,f,g)
     {function _gJ_(param){return caml_call1(g,x)}
      var _gK_=caml_call1(f,x);
      return caml_call2(Opt[8],_gK_,_gJ_)}
    function coerce_opt(x,f,g)
     {function _gH_(param){return caml_call1(g,x)}
      var _gI_=caml_call2(Opt[4],x,f);
      return caml_call2(Opt[8],_gI_,_gH_)}
    var
     true$0=true,
     false$0=false,
     string_constr=Unsafe[1].String,
     regExp_withFlags=Unsafe[1].RegExp,
     object_constructor=Unsafe[1].Object;
    function object_keys(o){return object_constructor.keys(o)}
    var
     array_length=Unsafe[1].Array,
     array_get=caml_js_get,
     array_set=caml_js_set;
    function array_map(f,a)
     {return a.map
              (caml_js_wrap_callback
                (function(x,idx,param){return caml_call1(f,x)}))}
    function array_mapi(f,a)
     {return a.map
              (caml_js_wrap_callback
                (function(x,idx,param){return caml_call2(f,idx,x)}))}
    function str_array(_gG_){return _gG_}
    function match_result(_gF_){return _gF_}
    var
     date_ms=Unsafe[1].Date,
     math=Unsafe[1].Math,
     Error=[248,cst_Js_of_ocaml_Js_Error,caml_fresh_oo_id(0)],
     error_constr=Unsafe[1].Error;
    caml_call2(Stdlib_callback[2],cst_jsError,[0,Error,{}]);
    function raise_js_error(exn){throw exn}
    var JSON=Unsafe[1].JSON;
    function decodeURI(s){return Unsafe[1].decodeURI(s)}
    function decodeURIComponent(s){return Unsafe[1].decodeURIComponent(s)}
    function encodeURI(s){return Unsafe[1].encodeURI(s)}
    function encodeURIComponent(s){return Unsafe[1].encodeURIComponent(s)}
    function escape(s){return Unsafe[1].escape(s)}
    function unescape(s){return Unsafe[1].unescape(s)}
    function isNaN(i){return Unsafe[1].isNaN(i) | 0}
    function parseInt(s)
     {var s$0=Unsafe[1].parseInt(s);
      return isNaN(s$0)?caml_call1(Stdlib[2],cst_parseInt):s$0}
    function parseFloat(s)
     {var s$0=Unsafe[1].parseFloat(s);
      return isNaN(s$0)?caml_call1(Stdlib[2],cst_parseFloat):s$0}
    function _a_(param)
     {if(param[1] === Error)
       {var e=param[2];return [0,caml_js_to_string(e.toString())]}
      return 0}
    caml_call1(Stdlib_printexc[8],_a_);
    function _b_(e)
     {return e instanceof array_length?0:[0,caml_js_to_string(e.toString())]}
    caml_call1(Stdlib_printexc[8],_b_);
    function string_of_error(e){return caml_js_to_string(e.toString())}
    function export_js(field,x)
     {return runtime.caml_js_export_var(0)[field] = x}
    function export$0(field,x){return export_js(field.toString(),x)}
    function export_all(obj)
     {var keys=object_keys(obj);
      return keys.forEach
              (caml_js_wrap_callback
                (function(key,param,_gE_){return export_js(key,obj[key])}))}
    function _c_(_gD_){return _gD_}
    var
     Js_of_ocaml_Js=
      [0,
       no_handler,
       function(_gC_){return _gC_},
       t37,
       _c_,
       Opt,
       Optdef,
       true$0,
       false$0,
       string_constr,
       regExp_withFlags,
       regExp_withFlags,
       regExp_withFlags,
       object_keys,
       array_length,
       array_length,
       array_get,
       array_set,
       array_map,
       array_mapi,
       str_array,
       match_result,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       date_ms,
       math,
       error_constr,
       string_of_error,
       raise_js_error,
       Error,
       JSON,
       decodeURI,
       decodeURIComponent,
       encodeURI,
       encodeURIComponent,
       escape,
       unescape,
       isNaN,
       parseInt,
       parseFloat,
       coerce,
       coerce_opt,
       export$0,
       export_all,
       Unsafe];
    caml_register_global(1634,Js_of_ocaml_Js,"Js_of_ocaml__Js");
    function list_of_nodeList(nodeList)
     {var length=nodeList.length,acc=0,i=0;
      for(;;)
       {if(caml_call2(symbol$5,i,length))
         {var _gB_=nodeList.item(i),match=caml_call1(Opt[10],_gB_);
          if(match)
           {var e=match[1],i$0=i + 1 | 0,acc$0=[0,e,acc],acc=acc$0,i=i$0;
            continue}
          var i$1=i + 1 | 0,i=i$1;
          continue}
        return caml_call1(Stdlib_list[9],acc)}}
    var
     disconnected=1,
     preceding=2,
     following=4,
     contains$0=8,
     contained_by=16,
     implementation_specific=32;
    function has(t,mask){return caml_call2(symbol$8,t & mask,mask)}
    function add(x,y){return x | y}
    var
     DocumentPosition=
      [0,
       disconnected,
       preceding,
       following,
       contains$0,
       contained_by,
       implementation_specific,
       has,
       add,
       add];
    function appendChild(p,n){p.appendChild(n);return 0}
    function removeChild(p,n){p.removeChild(n);return 0}
    function replaceChild(p,n,o){p.replaceChild(n,o);return 0}
    function insertBefore(p,n,o){p.insertBefore(n,o);return 0}
    function nodeType(e)
     {var match=e.nodeType;
      if(0 !== match)
       {var switcher=match - 1 | 0;
        switch(switcher)
         {case 0:return [0,e];case 1:return [1,e];case 2:case 3:return [2,e]}}
      return [3,e]}
    function cast(e,t){return e.nodeType === t?e:no_handler}
    function element(e){return cast(e,1)}
    function text(e)
     {if(3 !== e.nodeType)if(4 !== e.nodeType)return no_handler;return e}
    function attr(e){return cast(e,2)}
    function handler(f)
     {return function(e)
       {if(caml_call1(Opt[5],e))
         {var res=caml_call1(f,e);
          if(1 - (res | 0))e.preventDefault();
          return res}
        var e$0=event,res$0=caml_call1(f,e$0);
        if(1 - (res$0 | 0))e$0.returnValue = res$0;
        return res$0}}
    function full_handler(f)
     {return runtime.caml_js_wrap_meth_callback_unsafe
              (function(this$0,e)
                {if(caml_call1(Opt[5],e))
                  {var res=caml_call2(f,this$0,e);
                   if(1 - (res | 0))e.preventDefault();
                   return res}
                 var e$0=event,res$0=caml_call2(f,this$0,e$0);
                 if(1 - (res$0 | 0))e$0.returnValue = res$0;
                 return res$0})}
    function invoke_handler(f,this$0,event){return f.call(this$0,event)}
    function eventTarget(e)
     {function _gy_(param)
       {function _gA_(param){throw Stdlib[8]}
        return caml_call2(Opt[8],e.srcElement,_gA_)}
      var target=caml_call2(Opt[8],e.target,_gy_);
      if(target instanceof Unsafe[1].Node)
       {if(3 === target.nodeType)
         {var _gz_=function(param){throw [0,Assert_failure,_d_]};
          return caml_call2(Opt[8],target.parentNode,_gz_)}
        return target}
      return target}
    var make$0=caml_js_from_string,Event=[0,make$0];
    function addEventListenerWithOptions(e,typ,capture,once,passive,h)
     {if(e.addEventListener === t37)
       {var
         ev="on".concat(typ),
         callback=
          function(e)
           {var _gv_=[0,h,e,[0]];
            return function(_gw_,_gx_)
             {return runtime.caml_js_call(_gv_,_gw_,_gx_)}};
        e.attachEvent(ev,callback);
        return function(param){return e.detachEvent(ev,callback)}}
      var opts={};
      function iter(t,f){if(t){var b=t[1];return caml_call1(f,b)}return 0}
      iter(capture,function(b){return opts.capture = b});
      iter(once,function(b){return opts.once = b});
      iter(passive,function(b){return opts.passive = b});
      e.addEventListener(typ,h,opts);
      return function(param){return e.removeEventListener(typ,h,opts)}}
    function addEventListener(e,typ,h,capt)
     {return addEventListenerWithOptions(e,typ,[0,capt],0,0,h)}
    function removeEventListener(id){return caml_call1(id,0)}
    function preventDefault(ev)
     {return caml_call1(Optdef[5],ev.preventDefault)
              ?ev.preventDefault()
              :ev.returnValue = ! ! 0}
    function createCustomEvent(bubbles,cancelable,detail,typ)
     {function opt_iter(f,param)
       {if(param){var x=param[1];return caml_call1(f,x)}return 0}
      var opts={};
      opt_iter(function(x){return opts.bubbles = ! ! x},bubbles);
      opt_iter(function(x){return opts.cancelable = ! ! x},cancelable);
      opt_iter(function(x){return opts.detail = x},detail);
      var constr=Unsafe[1].CustomEvent;
      return new constr(typ,opts)}
    var
     Js_of_ocaml_Dom=
      [0,
       DocumentPosition,
       insertBefore,
       replaceChild,
       removeChild,
       appendChild,
       list_of_nodeList,
       nodeType,
       [0,element,text,attr],
       no_handler,
       handler,
       full_handler,
       invoke_handler,
       eventTarget,
       Event,
       addEventListenerWithOptions,
       addEventListener,
       removeEventListener,
       preventDefault,
       createCustomEvent];
    caml_register_global(1637,Js_of_ocaml_Dom,"Js_of_ocaml__Dom");
    var
     arrayBuffer=Unsafe[1].ArrayBuffer,
     int8Array_inBuffer=Unsafe[1].Int8Array,
     uint8Array_fromBuffer=Unsafe[1].Uint8Array,
     int16Array_inBuffer=Unsafe[1].Int16Array,
     uint16Array_inBuffer=Unsafe[1].Uint16Array,
     int32Array_inBuffer=Unsafe[1].Int32Array,
     uint32Array_inBuffer=Unsafe[1].Uint32Array,
     float32Array_inBuffer=Unsafe[1].Float32Array,
     float64Array_inBuffer=Unsafe[1].Float64Array,
     set=caml_js_set,
     get$1=caml_js_get,
     unsafe_get=caml_js_get,
     dataView=Unsafe[1].DataView;
    function of_arrayBuffer(ab)
     {var uint8=new uint8Array_fromBuffer(ab);
      return caml_string_of_array(uint8)}
    var
     Js_of_ocaml_Typed_array=
      [0,
       arrayBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       int8Array_inBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       uint8Array_fromBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       int16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       uint16Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       int32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       uint32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float32Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       float64Array_inBuffer,
       set,
       get$1,
       unsafe_get,
       dataView,
       dataView,
       [0,
        runtime.bigstring_to_array_buffer,
        runtime.bigstring_to_typed_array,
        runtime.bigstring_of_array_buffer,
        runtime.bigstring_of_typed_array],
       [0,of_arrayBuffer,caml_string_of_array]];
    caml_register_global
     (1638,Js_of_ocaml_Typed_array,"Js_of_ocaml__Typed_array");
    var blob_constr=Unsafe[1].Blob;
    function filter_map(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var q=param$0[2],v=param$0[1],match=caml_call1(f,v);
          if(match){var v$0=match[1];return [0,v$0,filter_map(f,q)]}
          var param$0=q;
          continue}
        return 0}}
    function blob_raw(contentType,endings,a)
     {var _gr_=0;
      if(endings)
       var _gs_=116179762 <= endings[1]?_e_:_f_,_gt_=_gs_;
      else
       var _gt_=0;
      var
       _gu_=[0,[0,cst_type,contentType],[0,[0,cst_endings,_gt_],_gr_]],
       options=
        filter_map
         (function(param)
           {var v=param[2],name=param[1];
            if(v){var v$0=v[1];return [0,[0,name,v$0.toString()]]}
            return 0},
          _gu_),
       options$0=
        options
         ?runtime.caml_js_object(caml_call1(Stdlib_array[12],options))
         :t37;
      return new blob_constr(caml_js_from_array(a),options$0)}
    function blob_from_string(contentType,endings,s)
     {return blob_raw(contentType,endings,[0,s.toString()])}
    function blob_from_any(contentType,endings,l)
     {function _gp_(param)
       {var _gq_=param[1];
        if(155580615 === _gq_){var s=param[2];return s}
        if(486041214 <= _gq_)
         {if(1037850489 <= _gq_){var a=param[2];return a}
          var a$0=param[2];
          return a$0}
        if(288368849 <= _gq_){var s$0=param[2];return s$0.toString()}
        var b=param[2];
        return b}
      var l$0=caml_call2(Stdlib_list[17],_gp_,l);
      return blob_raw(contentType,endings,caml_call1(Stdlib_array[12],l$0))}
    function filename(file)
     {var match=caml_call1(Optdef[10],file.name);
      if(match){var name=match[1];return name}
      var match$0=caml_call1(Optdef[10],file.fileName);
      if(match$0){var name$0=match$0[1];return name$0}
      return caml_call1
              (Stdlib[2],cst_can_t_retrieve_file_name_not_implemented)}
    var doc_constr=Unsafe[1].Document;
    function document(e){return e instanceof doc_constr?e:no_handler}
    function blob(e){return e instanceof blob_constr?e:no_handler}
    function string(e){return typeof e === "string"?e:no_handler}
    function arrayBuffer$0(e){return e instanceof arrayBuffer?e:no_handler}
    var
     loadstart=caml_call1(Event[1],cst_loadstart),
     progress=caml_call1(Event[1],cst_progress),
     abort=caml_call1(Event[1],cst_abort),
     error=caml_call1(Event[1],cst_error),
     load=caml_call1(Event[1],cst_load),
     loadend=caml_call1(Event[1],cst_loadend),
     ReaderEvent=[0,loadstart,progress,abort,error,load,loadend],
     fileReader=Unsafe[1].FileReader,
     Js_of_ocaml_File=
      [0,
       blob_from_string,
       blob_from_any,
       [0,document,blob,function(_go_){return _go_},string,arrayBuffer$0],
       ReaderEvent,
       filename,
       fileReader,
       addEventListener];
    caml_register_global(1640,Js_of_ocaml_File,"Js_of_ocaml__File");
    var
     onIE=runtime.caml_js_on_ie(0) | 0,
     click=caml_call1(Event[1],cst_click),
     dblclick=caml_call1(Event[1],cst_dblclick),
     mousedown=caml_call1(Event[1],cst_mousedown),
     mouseup=caml_call1(Event[1],cst_mouseup),
     mouseover=caml_call1(Event[1],cst_mouseover),
     mousemove=caml_call1(Event[1],cst_mousemove),
     mouseout=caml_call1(Event[1],cst_mouseout),
     keypress=caml_call1(Event[1],cst_keypress),
     keydown=caml_call1(Event[1],cst_keydown),
     keyup=caml_call1(Event[1],cst_keyup),
     mousewheel=caml_call1(Event[1],cst_mousewheel),
     DOMMouseScroll=caml_call1(Event[1],cst_DOMMouseScroll),
     touchstart=caml_call1(Event[1],cst_touchstart),
     touchmove=caml_call1(Event[1],cst_touchmove),
     touchend=caml_call1(Event[1],cst_touchend),
     touchcancel=caml_call1(Event[1],cst_touchcancel),
     dragstart=caml_call1(Event[1],cst_dragstart),
     dragend=caml_call1(Event[1],cst_dragend),
     dragenter=caml_call1(Event[1],cst_dragenter),
     dragover=caml_call1(Event[1],cst_dragover),
     dragleave=caml_call1(Event[1],cst_dragleave),
     drag=caml_call1(Event[1],cst_drag),
     drop=caml_call1(Event[1],cst_drop),
     hashchange=caml_call1(Event[1],cst_hashchange),
     change=caml_call1(Event[1],cst_change),
     input=caml_call1(Event[1],cst_input),
     timeupdate=caml_call1(Event[1],cst_timeupdate),
     submit=caml_call1(Event[1],cst_submit),
     scroll=caml_call1(Event[1],cst_scroll),
     focus=caml_call1(Event[1],cst_focus),
     blur=caml_call1(Event[1],cst_blur),
     load$0=caml_call1(Event[1],cst_load$0),
     unload=caml_call1(Event[1],cst_unload),
     beforeunload=caml_call1(Event[1],cst_beforeunload),
     resize=caml_call1(Event[1],cst_resize),
     orientationchange=caml_call1(Event[1],cst_orientationchange),
     popstate=caml_call1(Event[1],cst_popstate),
     error$0=caml_call1(Event[1],cst_error$0),
     abort$0=caml_call1(Event[1],cst_abort$0),
     select=caml_call1(Event[1],cst_select),
     online=caml_call1(Event[1],cst_online),
     offline=caml_call1(Event[1],cst_offline),
     checking=caml_call1(Event[1],cst_checking),
     noupdate=caml_call1(Event[1],cst_noupdate),
     downloading=caml_call1(Event[1],cst_downloading),
     progress$0=caml_call1(Event[1],cst_progress$0),
     updateready=caml_call1(Event[1],cst_updateready),
     cached=caml_call1(Event[1],cst_cached),
     obsolete=caml_call1(Event[1],cst_obsolete),
     domContentLoaded=caml_call1(Event[1],cst_DOMContentLoaded),
     animationstart=caml_call1(Event[1],cst_animationstart),
     animationend=caml_call1(Event[1],cst_animationend),
     animationiteration=caml_call1(Event[1],cst_animationiteration),
     animationcancel=caml_call1(Event[1],cst_animationcancel),
     canplay=caml_call1(Event[1],cst_canplay),
     canplaythrough=caml_call1(Event[1],cst_canplaythrough),
     durationchange=caml_call1(Event[1],cst_durationchange),
     emptied=caml_call1(Event[1],cst_emptied),
     ended=caml_call1(Event[1],cst_ended),
     gotpointercapture=caml_call1(Event[1],cst_gotpointercapture),
     loadeddata=caml_call1(Event[1],cst_loadeddata),
     loadedmetadata=caml_call1(Event[1],cst_loadedmetadata),
     loadstart$0=caml_call1(Event[1],cst_loadstart$0),
     lostpointercapture=caml_call1(Event[1],cst_lostpointercapture),
     pause=caml_call1(Event[1],cst_pause),
     play=caml_call1(Event[1],cst_play),
     playing=caml_call1(Event[1],cst_playing),
     pointerenter=caml_call1(Event[1],cst_pointerenter),
     pointercancel=caml_call1(Event[1],cst_pointercancel),
     pointerdown=caml_call1(Event[1],cst_pointerdown),
     pointerleave=caml_call1(Event[1],cst_pointerleave),
     pointermove=caml_call1(Event[1],cst_pointermove),
     pointerout=caml_call1(Event[1],cst_pointerout),
     pointerover=caml_call1(Event[1],cst_pointerover),
     pointerup=caml_call1(Event[1],cst_pointerup),
     ratechange=caml_call1(Event[1],cst_ratechange),
     seeked=caml_call1(Event[1],cst_seeked),
     seeking=caml_call1(Event[1],cst_seeking),
     stalled=caml_call1(Event[1],cst_stalled),
     suspend=caml_call1(Event[1],cst_suspend),
     volumechange=caml_call1(Event[1],cst_volumechange),
     waiting=caml_call1(Event[1],cst_waiting),
     make$1=Event[1],
     Event$0=
      [0,
       click,
       dblclick,
       mousedown,
       mouseup,
       mouseover,
       mousemove,
       mouseout,
       keypress,
       keydown,
       keyup,
       mousewheel,
       DOMMouseScroll,
       touchstart,
       touchmove,
       touchend,
       touchcancel,
       dragstart,
       dragend,
       dragenter,
       dragover,
       dragleave,
       drag,
       drop,
       hashchange,
       change,
       input,
       timeupdate,
       submit,
       scroll,
       focus,
       blur,
       load$0,
       unload,
       beforeunload,
       resize,
       orientationchange,
       popstate,
       error$0,
       abort$0,
       select,
       online,
       offline,
       checking,
       noupdate,
       downloading,
       progress$0,
       updateready,
       cached,
       obsolete,
       domContentLoaded,
       animationstart,
       animationend,
       animationiteration,
       animationcancel,
       canplay,
       canplaythrough,
       durationchange,
       emptied,
       ended,
       gotpointercapture,
       loadeddata,
       loadedmetadata,
       loadstart$0,
       lostpointercapture,
       pause,
       play,
       playing,
       pointerenter,
       pointercancel,
       pointerdown,
       pointerleave,
       pointermove,
       pointerout,
       pointerover,
       pointerup,
       ratechange,
       seeked,
       seeking,
       stalled,
       suspend,
       volumechange,
       waiting,
       make$1],
     d="2d";
    function location_origin(loc)
     {function _gm_(o){return o}
      function _gn_(param)
       {var protocol=loc.protocol,hostname=loc.hostname,port=loc.port;
        if(caml_call2(symbol$8,protocol.length,0))
         if(caml_call2(symbol$8,hostname.length,0))return "";
        var origin=protocol.concat("//",hostname);
        return caml_call2(symbol$9,port.length,0)
                ?origin.concat(":",loc.port)
                :origin}
      return caml_call3(Optdef[7],loc.origin,_gn_,_gm_)}
    var _g_=Unsafe[1],document$0=_g_.document;
    function getElementById(id)
     {function _gj_(pnode){return pnode}
      function _gk_(param){throw Stdlib[8]}
      var _gl_=document$0.getElementById(id.toString());
      return caml_call3(Opt[7],_gl_,_gk_,_gj_)}
    function getElementById_exn(id)
     {function _gf_(pnode){return pnode}
      function _gg_(param)
       {var _gi_=caml_call2(Stdlib_printf[4],_h_,id);
        return caml_call1(Stdlib[2],_gi_)}
      var _gh_=document$0.getElementById(id.toString());
      return caml_call3(Opt[7],_gh_,_gg_,_gf_)}
    function getElementById_opt(id)
     {var _ge_=document$0.getElementById(id.toString());
      return caml_call1(Opt[10],_ge_)}
    function getElementById_coerce(id,coerce)
     {function _ga_(e)
       {var _gd_=caml_call1(coerce,e);return caml_call1(Opt[10],_gd_)}
      function _gb_(param){return 0}
      var _gc_=document$0.getElementById(id.toString());
      return caml_call3(Opt[7],_gc_,_gb_,_ga_)}
    function opt_iter(x,f){if(x){var v=x[1];return caml_call1(f,v)}return 0}
    function createElement(doc,name)
     {return doc.createElement(name.toString())}
    function unsafeCreateElement(doc,name){return createElement(doc,name)}
    var createElementSyntax=[0,785140586];
    function unsafeCreateElementEx(type,name,doc,elt)
     {for(;;)
       {if(0 === type)if(0 === name)return createElement(doc,elt);
        var _f6_=createElementSyntax[1];
        if(785140586 === _f6_)
         {try
           {var
             el=document$0.createElement('<input name="x">'),
             _f9_=el.tagName.toLowerCase() === "input"?1:0,
             _f__=_f9_?el.name === "x"?1:0:_f9_,
             _f7_=_f__}
          catch(_f$_){var _f7_=0}
          var _f8_=_f7_?982028505:-1003883683;
          createElementSyntax[1] = _f8_;
          continue}
        if(982028505 <= _f6_)
         {var a=new array_length();
          a.push("<",elt.toString());
          opt_iter
           (type,
            function(t){a.push(' type="',caml_js_html_escape(t),'"');return 0});
          opt_iter
           (name,
            function(n){a.push(' name="',caml_js_html_escape(n),'"');return 0});
          a.push(">");
          return doc.createElement(a.join(""))}
        var res=createElement(doc,elt);
        opt_iter(type,function(t){return res.type = t});
        opt_iter(name,function(n){return res.name = n});
        return res}}
    function createHtml(doc){return unsafeCreateElement(doc,cst_html)}
    function createHead(doc){return unsafeCreateElement(doc,cst_head)}
    function createLink(doc){return unsafeCreateElement(doc,cst_link)}
    function createTitle(doc){return unsafeCreateElement(doc,cst_title)}
    function createMeta(doc){return unsafeCreateElement(doc,cst_meta)}
    function createBase(doc){return unsafeCreateElement(doc,cst_base)}
    function createStyle(doc){return unsafeCreateElement(doc,cst_style)}
    function createBody(doc){return unsafeCreateElement(doc,cst_body)}
    function createForm(doc){return unsafeCreateElement(doc,cst_form)}
    function createOptgroup(doc){return unsafeCreateElement(doc,cst_optgroup)}
    function createOption(doc){return unsafeCreateElement(doc,cst_option)}
    function createSelect(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_select$0)}
    function createInput(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_input$0)}
    function createTextarea(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_textarea)}
    function createButton(type,name,doc)
     {return unsafeCreateElementEx(type,name,doc,cst_button)}
    function createLabel(doc){return unsafeCreateElement(doc,cst_label)}
    function createFieldset(doc){return unsafeCreateElement(doc,cst_fieldset)}
    function createLegend(doc){return unsafeCreateElement(doc,cst_legend)}
    function createUl(doc){return unsafeCreateElement(doc,cst_ul)}
    function createOl(doc){return unsafeCreateElement(doc,cst_ol)}
    function createDl(doc){return unsafeCreateElement(doc,cst_dl)}
    function createLi(doc){return unsafeCreateElement(doc,cst_li)}
    function createDiv(doc){return unsafeCreateElement(doc,cst_div)}
    function createEmbed(doc){return unsafeCreateElement(doc,cst_embed)}
    function createP(doc){return unsafeCreateElement(doc,cst_p)}
    function createH1(doc){return unsafeCreateElement(doc,cst_h1)}
    function createH2(doc){return unsafeCreateElement(doc,cst_h2)}
    function createH3(doc){return unsafeCreateElement(doc,cst_h3)}
    function createH4(doc){return unsafeCreateElement(doc,cst_h4)}
    function createH5(doc){return unsafeCreateElement(doc,cst_h5)}
    function createH6(doc){return unsafeCreateElement(doc,cst_h6)}
    function createQ(doc){return unsafeCreateElement(doc,cst_q)}
    function createBlockquote(doc)
     {return unsafeCreateElement(doc,cst_blockquote)}
    function createPre(doc){return unsafeCreateElement(doc,cst_pre)}
    function createBr(doc){return unsafeCreateElement(doc,cst_br)}
    function createHr(doc){return unsafeCreateElement(doc,cst_hr)}
    function createIns(doc){return unsafeCreateElement(doc,cst_ins)}
    function createDel(doc){return unsafeCreateElement(doc,cst_del)}
    function createA(doc){return unsafeCreateElement(doc,cst_a)}
    function createImg(doc){return unsafeCreateElement(doc,cst_img)}
    function createObject(doc){return unsafeCreateElement(doc,cst_object)}
    function createParam(doc){return unsafeCreateElement(doc,cst_param)}
    function createMap(doc){return unsafeCreateElement(doc,cst_map)}
    function createArea(doc){return unsafeCreateElement(doc,cst_area)}
    function createScript(doc){return unsafeCreateElement(doc,cst_script)}
    function createTable(doc){return unsafeCreateElement(doc,cst_table)}
    function createCaption(doc){return unsafeCreateElement(doc,cst_caption)}
    function createCol(doc){return unsafeCreateElement(doc,cst_col)}
    function createColgroup(doc){return unsafeCreateElement(doc,cst_colgroup)}
    function createThead(doc){return unsafeCreateElement(doc,cst_thead)}
    function createTfoot(doc){return unsafeCreateElement(doc,cst_tfoot)}
    function createTbody(doc){return unsafeCreateElement(doc,cst_tbody)}
    function createTr(doc){return unsafeCreateElement(doc,cst_tr)}
    function createTh(doc){return unsafeCreateElement(doc,cst_th)}
    function createTd(doc){return unsafeCreateElement(doc,cst_td)}
    function createSub(doc){return createElement(doc,cst_sub)}
    function createSup(doc){return createElement(doc,cst_sup)}
    function createSpan(doc){return createElement(doc,cst_span)}
    function createTt(doc){return createElement(doc,cst_tt)}
    function createI(doc){return createElement(doc,cst_i)}
    function createB(doc){return createElement(doc,cst_b)}
    function createBig(doc){return createElement(doc,cst_big)}
    function createSmall(doc){return createElement(doc,cst_small)}
    function createEm(doc){return createElement(doc,cst_em)}
    function createStrong(doc){return createElement(doc,cst_strong)}
    function createCite(doc){return createElement(doc,cst_cite)}
    function createDfn(doc){return createElement(doc,cst_dfn)}
    function createCode(doc){return createElement(doc,cst_code)}
    function createSamp(doc){return createElement(doc,cst_samp)}
    function createKbd(doc){return createElement(doc,cst_kbd)}
    function createVar(doc){return createElement(doc,cst_var)}
    function createAbbr(doc){return createElement(doc,cst_abbr)}
    function createDd(doc){return createElement(doc,cst_dd)}
    function createDt(doc){return createElement(doc,cst_dt)}
    function createNoscript(doc){return createElement(doc,cst_noscript)}
    function createAddress(doc){return createElement(doc,cst_address)}
    function createFrameset(doc){return unsafeCreateElement(doc,cst_frameset)}
    function createFrame(doc){return unsafeCreateElement(doc,cst_frame)}
    function createIframe(doc){return unsafeCreateElement(doc,cst_iframe)}
    function createAudio(doc){return unsafeCreateElement(doc,cst_audio)}
    function createVideo(doc){return unsafeCreateElement(doc,cst_video)}
    var
     Canvas_not_available=
      [248,cst_Js_of_ocaml_Dom_html_Canvas_not_available,caml_fresh_oo_id(0)];
    function createCanvas(doc)
     {var c=unsafeCreateElement(doc,cst_canvas);
      if(1 - caml_call1(Opt[5],c.getContext))throw Canvas_not_available;
      return c}
    var
     html_element=Unsafe[1].HTMLElement,
     element$0=
      html_element === t37
       ?function(e){return e.innerHTML === t37?no_handler:e}
       :function(e){return e instanceof html_element?e:no_handler};
    function unsafeCoerce(tag,e)
     {var _f5_=tag.toString();
      return e.tagName.toLowerCase() === _f5_?e:no_handler}
    function a(e){return unsafeCoerce(cst_a$0,e)}
    function area(e){return unsafeCoerce(cst_area$0,e)}
    function base(e){return unsafeCoerce(cst_base$0,e)}
    function blockquote(e){return unsafeCoerce(cst_blockquote$0,e)}
    function body(e){return unsafeCoerce(cst_body$0,e)}
    function br(e){return unsafeCoerce(cst_br$0,e)}
    function button(e){return unsafeCoerce(cst_button$0,e)}
    function canvas(e){return unsafeCoerce(cst_canvas$0,e)}
    function caption(e){return unsafeCoerce(cst_caption$0,e)}
    function col(e){return unsafeCoerce(cst_col$0,e)}
    function colgroup(e){return unsafeCoerce(cst_colgroup$0,e)}
    function del(e){return unsafeCoerce(cst_del$0,e)}
    function div(e){return unsafeCoerce(cst_div$0,e)}
    function dl(e){return unsafeCoerce(cst_dl$0,e)}
    function fieldset(e){return unsafeCoerce(cst_fieldset$0,e)}
    function embed(e){return unsafeCoerce(cst_embed$0,e)}
    function form(e){return unsafeCoerce(cst_form$0,e)}
    function frameset(e){return unsafeCoerce(cst_frameset$0,e)}
    function frame(e){return unsafeCoerce(cst_frame$0,e)}
    function h1(e){return unsafeCoerce(cst_h1$0,e)}
    function h2(e){return unsafeCoerce(cst_h2$0,e)}
    function h3(e){return unsafeCoerce(cst_h3$0,e)}
    function h4(e){return unsafeCoerce(cst_h4$0,e)}
    function h5(e){return unsafeCoerce(cst_h5$0,e)}
    function h6(e){return unsafeCoerce(cst_h6$0,e)}
    function head(e){return unsafeCoerce(cst_head$0,e)}
    function hr(e){return unsafeCoerce(cst_hr$0,e)}
    function html(e){return unsafeCoerce(cst_html$0,e)}
    function iframe(e){return unsafeCoerce(cst_iframe$0,e)}
    function img(e){return unsafeCoerce(cst_img$0,e)}
    function input$0(e){return unsafeCoerce(cst_input$1,e)}
    function ins(e){return unsafeCoerce(cst_ins$0,e)}
    function label(e){return unsafeCoerce(cst_label$0,e)}
    function legend(e){return unsafeCoerce(cst_legend$0,e)}
    function li(e){return unsafeCoerce(cst_li$0,e)}
    function link(e){return unsafeCoerce(cst_link$0,e)}
    function map$2(e){return unsafeCoerce(cst_map$0,e)}
    function meta(e){return unsafeCoerce(cst_meta$0,e)}
    function object(e){return unsafeCoerce(cst_object$0,e)}
    function ol(e){return unsafeCoerce(cst_ol$0,e)}
    function optgroup(e){return unsafeCoerce(cst_optgroup$0,e)}
    function option$1(e){return unsafeCoerce(cst_option$0,e)}
    function p(e){return unsafeCoerce(cst_p$0,e)}
    function param(e){return unsafeCoerce(cst_param$0,e)}
    function pre(e){return unsafeCoerce(cst_pre$0,e)}
    function q(e){return unsafeCoerce(cst_q$0,e)}
    function script(e){return unsafeCoerce(cst_script$0,e)}
    function select$0(e){return unsafeCoerce(cst_select$1,e)}
    function style(e){return unsafeCoerce(cst_style$0,e)}
    function table(e){return unsafeCoerce(cst_table$0,e)}
    function tbody(e){return unsafeCoerce(cst_tbody$0,e)}
    function td(e){return unsafeCoerce(cst_td$0,e)}
    function textarea(e){return unsafeCoerce(cst_textarea$0,e)}
    function tfoot(e){return unsafeCoerce(cst_tfoot$0,e)}
    function th(e){return unsafeCoerce(cst_th$0,e)}
    function thead(e){return unsafeCoerce(cst_thead$0,e)}
    function title(e){return unsafeCoerce(cst_title$0,e)}
    function tr(e){return unsafeCoerce(cst_tr$0,e)}
    function ul(e){return unsafeCoerce(cst_ul$0,e)}
    function audio(e){return unsafeCoerce(cst_audio$0,e)}
    function video(e){return unsafeCoerce(cst_video$0,e)}
    function unsafeCoerceEvent(constr,ev)
     {if(constr !== t37)if(ev instanceof constr)return ev;return no_handler}
    function mouseEvent(ev){return unsafeCoerceEvent(Unsafe[1].MouseEvent,ev)}
    function keyboardEvent(ev)
     {return unsafeCoerceEvent(Unsafe[1].KeyboardEvent,ev)}
    function wheelEvent(ev){return unsafeCoerceEvent(Unsafe[1].WheelEvent,ev)}
    function mouseScrollEvent(ev)
     {return unsafeCoerceEvent(Unsafe[1].MouseScrollEvent,ev)}
    function popStateEvent(ev)
     {return unsafeCoerceEvent(Unsafe[1].PopStateEvent,ev)}
    function eventRelatedTarget(e)
     {function _f2_(param)
       {var match=caml_js_to_string(e.type);
        if(caml_string_notequal(match,cst_mouseout$0))
         {if(caml_string_notequal(match,cst_mouseover$0))return no_handler;
          var _f3_=function(param){throw [0,Assert_failure,_i_]};
          return caml_call2(Optdef[8],e.fromElement,_f3_)}
        function _f4_(param){throw [0,Assert_failure,_j_]}
        return caml_call2(Optdef[8],e.toElement,_f4_)}
      return caml_call2(Optdef[8],e.relatedTarget,_f2_)}
    function eventAbsolutePosition(e)
     {var body=document$0.body,html=document$0.documentElement;
      return [0,
              (e.clientX + body.scrollLeft | 0) + html.scrollLeft | 0,
              (e.clientY + body.scrollTop | 0) + html.scrollTop | 0]}
    function eventAbsolutePosition$0(e)
     {function _fY_(x)
       {function _f0_(y){return [0,x,y]}
        function _f1_(param){return eventAbsolutePosition(e)}
        return caml_call3(Optdef[7],e.pageY,_f1_,_f0_)}
      function _fZ_(param){return eventAbsolutePosition(e)}
      return caml_call3(Optdef[7],e.pageX,_fZ_,_fY_)}
    function elementClientPosition(e)
     {var
       r=e.getBoundingClientRect(),
       body=document$0.body,
       html=document$0.documentElement;
      return [0,
              ((r.left | 0) - body.clientLeft | 0) - html.clientLeft | 0,
              ((r.top | 0) - body.clientTop | 0) - html.clientTop | 0]}
    function getDocumentScroll(param)
     {var body=document$0.body,html=document$0.documentElement;
      return [0,
              body.scrollLeft + html.scrollLeft | 0,
              body.scrollTop + html.scrollTop | 0]}
    function buttonPressed(ev)
     {function _fW_(x){return x}
      function _fX_(param)
       {var match=ev.button,switcher=match - 1 | 0;
        if(! (3 < switcher >>> 0))
         switch(switcher)
          {case 0:return 1;case 1:return 3;case 2:break;default:return 2}
        return 0}
      return caml_call3(Optdef[7],ev.which,_fX_,_fW_)}
    function addMousewheelEventListenerWithOptions(e,capture,once,passive,h)
     {var d=createDiv(document$0);
      d.setAttribute("onmousewheel","return;");
      if(typeof d.onmousewheel === "function")
       {var
         _fS_=
          handler
           (function(e)
             {function _fU_(param){return 0}
              var
               dx=
                (- caml_call2(Optdef[8],e.wheelDeltaX,_fU_) | 0) / 40 | 0;
              function _fV_(param){return e.wheelDelta}
              var
               dy=
                (- caml_call2(Optdef[8],e.wheelDeltaY,_fV_) | 0) / 40 | 0;
              return caml_call3(h,e,dx,dy)});
        return addEventListenerWithOptions
                (e,Event$0[11],capture,once,passive,_fS_)}
      var
       _fT_=
        handler
         (function(e)
           {var d=e.detail;
            return e.axis === e.HORIZONTAL
                    ?caml_call3(h,e,d,0)
                    :caml_call3(h,e,0,d)});
      return addEventListenerWithOptions
              (e,Event$0[12],capture,once,passive,_fT_)}
    function addMousewheelEventListener(e,h,capt)
     {return addMousewheelEventListenerWithOptions(e,[0,capt],0,0,h)}
    function f(v)
     {var
       match=caml_js_to_string(v),
       switch$0=caml_string_compare(match,cst_KeyH);
      if(0 <= switch$0)
       {if(! (0 < switch$0))return 8;
        var switch$1=caml_string_compare(match,cst_Numpad4);
        if(0 <= switch$1)
         {if(! (0 < switch$1))return 72;
          var switch$2=caml_string_compare(match,cst_PageUp);
          if(0 <= switch$2)
           {if(! (0 < switch$2))return 98;
            var switch$3=caml_string_compare(match,cst_ShiftRight);
            if(0 <= switch$3)
             {if(! (0 < switch$3))return 91;
              if(! caml_string_notequal(match,cst_Slash))return 55;
              if(! caml_string_notequal(match,cst_Space))return 41;
              if(! caml_string_notequal(match,cst_Tab))return 39;
              if(! caml_string_notequal(match,cst_VolumeDown))return 103;
              if(! caml_string_notequal(match,cst_VolumeMute))return 102;
              if(! caml_string_notequal(match,cst_VolumeUp))return 104}
            else
             {if(! caml_string_notequal(match,cst_Pause))return 123;
              if(! caml_string_notequal(match,cst_Period))return 54;
              if(! caml_string_notequal(match,cst_PrintScreen))return 120;
              if(! caml_string_notequal(match,cst_Quote))return 50;
              if(! caml_string_notequal(match,cst_ScrollLock))return 119;
              if(! caml_string_notequal(match,cst_Semicolon))return 49;
              if(! caml_string_notequal(match,cst_ShiftLeft))return 90}}
          else
           {var switch$4=caml_string_compare(match,cst_NumpadDivide);
            if(0 <= switch$4)
             {if(! (0 < switch$4))return 84;
              if(! caml_string_notequal(match,cst_NumpadEnter))return 83;
              if(! caml_string_notequal(match,cst_NumpadEqual))return 82;
              if(! caml_string_notequal(match,cst_NumpadMultiply))return 78;
              if(! caml_string_notequal(match,cst_NumpadSubtract))return 79;
              if(! caml_string_notequal(match,cst_OSLeft))return 117;
              if(! caml_string_notequal(match,cst_OSRight))return 118;
              if(! caml_string_notequal(match,cst_PageDown))return 99}
            else
             {if(! caml_string_notequal(match,cst_Numpad5))return 73;
              if(! caml_string_notequal(match,cst_Numpad6))return 74;
              if(! caml_string_notequal(match,cst_Numpad7))return 75;
              if(! caml_string_notequal(match,cst_Numpad8))return 76;
              if(! caml_string_notequal(match,cst_Numpad9))return 77;
              if(! caml_string_notequal(match,cst_NumpadAdd))return 80;
              if(! caml_string_notequal(match,cst_NumpadDecimal))return 81}}}
        else
         {var switch$5=caml_string_compare(match,cst_KeyX);
          if(0 <= switch$5)
           {if(! (0 < switch$5))return 24;
            var switch$6=caml_string_compare(match,cst_MetaRight);
            if(0 <= switch$6)
             {if(! (0 < switch$6))return 89;
              if(! caml_string_notequal(match,cst_Minus))return 37;
              if(! caml_string_notequal(match,cst_NumLock))return 85;
              if(! caml_string_notequal(match,cst_Numpad0))return 68;
              if(! caml_string_notequal(match,cst_Numpad1))return 69;
              if(! caml_string_notequal(match,cst_Numpad2))return 70;
              if(! caml_string_notequal(match,cst_Numpad3))return 71}
            else
             {if(! caml_string_notequal(match,cst_KeyY))return 25;
              if(! caml_string_notequal(match,cst_KeyZ))return 26;
              if(! caml_string_notequal(match,cst_MediaPlayPause))return 107;
              if(! caml_string_notequal(match,cst_MediaStop))return 108;
              if(! caml_string_notequal(match,cst_MediaTrackNext))return 106;
              if(! caml_string_notequal(match,cst_MediaTrackPrevious))
               return 105;
              if(! caml_string_notequal(match,cst_MetaLeft))return 88}}
          else
           {var switch$7=caml_string_compare(match,cst_KeyP);
            if(0 <= switch$7)
             {if(! (0 < switch$7))return 16;
              if(! caml_string_notequal(match,cst_KeyQ))return 17;
              if(! caml_string_notequal(match,cst_KeyR))return 18;
              if(! caml_string_notequal(match,cst_KeyS))return 19;
              if(! caml_string_notequal(match,cst_KeyT))return 20;
              if(! caml_string_notequal(match,cst_KeyU))return 21;
              if(! caml_string_notequal(match,cst_KeyV))return 22;
              if(! caml_string_notequal(match,cst_KeyW))return 23}
            else
             {if(! caml_string_notequal(match,cst_KeyI))return 9;
              if(! caml_string_notequal(match,cst_KeyJ))return 10;
              if(! caml_string_notequal(match,cst_KeyK))return 11;
              if(! caml_string_notequal(match,cst_KeyL))return 12;
              if(! caml_string_notequal(match,cst_KeyM))return 13;
              if(! caml_string_notequal(match,cst_KeyN))return 14;
              if(! caml_string_notequal(match,cst_KeyO))return 15}}}}
      else
       {var switch$8=caml_string_compare(match,cst_Digit6);
        if(0 <= switch$8)
         {if(! (0 < switch$8))return 33;
          var switch$9=caml_string_compare(match,cst_F6);
          if(0 <= switch$9)
           {if(! (0 < switch$9))return 61;
            var switch$10=caml_string_compare(match,cst_KeyA);
            if(0 <= switch$10)
             {if(! (0 < switch$10))return 1;
              if(! caml_string_notequal(match,cst_KeyB))return 2;
              if(! caml_string_notequal(match,cst_KeyC))return 3;
              if(! caml_string_notequal(match,cst_KeyD))return 4;
              if(! caml_string_notequal(match,cst_KeyE))return 5;
              if(! caml_string_notequal(match,cst_KeyF))return 6;
              if(! caml_string_notequal(match,cst_KeyG))return 7}
            else
             {if(! caml_string_notequal(match,cst_F7))return 62;
              if(! caml_string_notequal(match,cst_F8))return 63;
              if(! caml_string_notequal(match,cst_F9))return 64;
              if(! caml_string_notequal(match,cst_Home))return 100;
              if(! caml_string_notequal(match,cst_Insert))return 44;
              if(! caml_string_notequal(match,cst_IntlBackslash))return 121;
              if(! caml_string_notequal(match,cst_IntlYen))return 122}}
          else
           {var switch$11=caml_string_compare(match,cst_F1);
            if(0 <= switch$11)
             {if(! (0 < switch$11))return 56;
              if(! caml_string_notequal(match,cst_F10))return 65;
              if(! caml_string_notequal(match,cst_F11))return 66;
              if(! caml_string_notequal(match,cst_F12))return 67;
              if(! caml_string_notequal(match,cst_F2))return 57;
              if(! caml_string_notequal(match,cst_F3))return 58;
              if(! caml_string_notequal(match,cst_F4))return 59;
              if(! caml_string_notequal(match,cst_F5))return 60}
            else
             {if(! caml_string_notequal(match,cst_Digit7))return 34;
              if(! caml_string_notequal(match,cst_Digit8))return 35;
              if(! caml_string_notequal(match,cst_Digit9))return 36;
              if(! caml_string_notequal(match,cst_End))return 101;
              if(! caml_string_notequal(match,cst_Enter))return 40;
              if(! caml_string_notequal(match,cst_Equal))return 38;
              if(! caml_string_notequal(match,cst_Escape))return 42}}}
        else
         {var switch$12=caml_string_compare(match,cst_BrowserRefresh);
          if(0 <= switch$12)
           {if(! (0 < switch$12))return 113;
            var switch$13=caml_string_compare(match,cst_Delete);
            if(0 <= switch$13)
             {if(! (0 < switch$13))return 45;
              if(! caml_string_notequal(match,cst_Digit0))return 27;
              if(! caml_string_notequal(match,cst_Digit1))return 28;
              if(! caml_string_notequal(match,cst_Digit2))return 29;
              if(! caml_string_notequal(match,cst_Digit3))return 30;
              if(! caml_string_notequal(match,cst_Digit4))return 31;
              if(! caml_string_notequal(match,cst_Digit5))return 32}
            else
             {if(! caml_string_notequal(match,cst_BrowserSearch))return 110;
              if(! caml_string_notequal(match,cst_BrowserStop))return 114;
              if(! caml_string_notequal(match,cst_CapsLock))return 46;
              if(! caml_string_notequal(match,cst_Comma))return 53;
              if(! caml_string_notequal(match,cst_ContextMenu))return 109;
              if(! caml_string_notequal(match,cst_ControlLeft))return 86;
              if(! caml_string_notequal(match,cst_ControlRight))return 87}}
          else
           {var switch$14=caml_string_compare(match,cst_Backslash);
            if(0 <= switch$14)
             {if(! (0 < switch$14))return 52;
              if(! caml_string_notequal(match,cst_Backspace))return 43;
              if(! caml_string_notequal(match,cst_BracketLeft))return 47;
              if(! caml_string_notequal(match,cst_BracketRight))return 48;
              if(! caml_string_notequal(match,cst_BrowserBack))return 116;
              if(! caml_string_notequal(match,cst_BrowserFavorites))
               return 112;
              if(! caml_string_notequal(match,cst_BrowserForward))return 115;
              if(! caml_string_notequal(match,cst_BrowserHome))return 111}
            else
             {if(! caml_string_notequal(match,cst_AltLeft))return 92;
              if(! caml_string_notequal(match,cst_AltRight))return 93;
              if(! caml_string_notequal(match,cst_ArrowDown))return 97;
              if(! caml_string_notequal(match,cst_ArrowLeft))return 94;
              if(! caml_string_notequal(match,cst_ArrowRight))return 95;
              if(! caml_string_notequal(match,cst_ArrowUp))return 96;
              if(! caml_string_notequal(match,cst_Backquote))return 51}}}}
      return 0}
    function try_key_code_left(param)
     {if(19 <= param)
       {if(91 === param)return 88}
      else
       if(16 <= param)
        {var switcher=param - 16 | 0;
         switch(switcher){case 0:return 90;case 1:return 86;default:return 92}}
      return 0}
    function try_key_code_right(param)
     {if(19 <= param)
       {if(91 === param)return 89}
      else
       if(16 <= param)
        {var switcher=param - 16 | 0;
         switch(switcher){case 0:return 91;case 1:return 87;default:return 93}}
      return 0}
    function try_key_code_numpad(param)
     {if(47 <= param)
       {var switcher=param - 96 | 0;
        if(! (15 < switcher >>> 0))
         switch(switcher)
          {case 0:return 68;
           case 1:return 69;
           case 2:return 70;
           case 3:return 71;
           case 4:return 72;
           case 5:return 73;
           case 6:return 74;
           case 7:return 75;
           case 8:return 76;
           case 9:return 77;
           case 10:return 78;
           case 11:return 80;
           case 12:break;
           case 13:return 79;
           case 14:return 81;
           default:return 84}}
      else
       if(12 <= param)
        {var switcher$0=param - 12 | 0;
         switch(switcher$0)
          {case 0:return 73;
           case 1:return 83;
           case 21:return 77;
           case 22:return 71;
           case 23:return 69;
           case 24:return 75;
           case 25:return 72;
           case 26:return 76;
           case 27:return 74;
           case 28:return 70;
           case 33:return 68;
           case 34:return 81
           }}
      return 0}
    function try_key_code_normal(param)
     {var switcher=param - 8 | 0;
      if(! (214 < switcher >>> 0))
       {var _fR_=switcher;
        if(67 <= _fR_)
         switch(_fR_)
          {case 67:return 11;
           case 68:return 12;
           case 69:return 13;
           case 70:return 14;
           case 71:return 15;
           case 72:return 16;
           case 73:return 17;
           case 74:return 18;
           case 75:return 19;
           case 76:return 20;
           case 77:return 21;
           case 78:return 22;
           case 79:return 23;
           case 80:return 24;
           case 81:return 25;
           case 82:return 26;
           case 85:return 109;
           case 104:return 56;
           case 105:return 57;
           case 106:return 58;
           case 107:return 59;
           case 108:return 60;
           case 109:return 61;
           case 110:return 62;
           case 111:return 63;
           case 112:return 64;
           case 113:return 65;
           case 114:return 66;
           case 115:return 67;
           case 137:return 119;
           case 178:return 49;
           case 179:return 38;
           case 180:return 53;
           case 181:return 37;
           case 182:return 54;
           case 183:return 55;
           case 184:return 51;
           case 211:return 47;
           case 212:return 52;
           case 213:return 48;
           case 214:return 50
           }
        else
         switch(_fR_)
          {case 0:return 43;
           case 1:return 39;
           case 5:return 40;
           case 11:return 123;
           case 12:return 46;
           case 19:return 42;
           case 24:return 41;
           case 25:return 98;
           case 26:return 99;
           case 27:return 101;
           case 28:return 100;
           case 29:return 94;
           case 30:return 96;
           case 31:return 95;
           case 32:return 97;
           case 34:return 120;
           case 37:return 44;
           case 38:return 45;
           case 40:return 27;
           case 41:return 28;
           case 42:return 29;
           case 43:return 30;
           case 44:return 31;
           case 45:return 32;
           case 46:return 33;
           case 47:return 34;
           case 48:return 35;
           case 49:return 36;
           case 57:return 1;
           case 58:return 2;
           case 59:return 3;
           case 60:return 4;
           case 61:return 5;
           case 62:return 6;
           case 63:return 7;
           case 64:return 8;
           case 65:return 9;
           case 66:return 10
           }}
      return 0}
    function make_unidentified(param){return 0}
    function run_next(value,f,v){return 0 === v?caml_call1(f,value):v}
    function symbol$11(x,f){return caml_call1(f,x)}
    function of_event(evt)
     {var _fK_=evt.keyCode;
      function _fL_(_fQ_){return run_next(_fK_,try_key_code_normal,_fQ_)}
      var match=evt.location,switcher=match - 1 | 0;
      if(2 < switcher >>> 0)
       var _fM_=make_unidentified;
      else
       switch(switcher)
        {case 0:
          var
           _fH_=evt.keyCode,
           _fM_=function(_fO_){return run_next(_fH_,try_key_code_left,_fO_)};
          break;
         case 1:
          var
           _fI_=evt.keyCode,
           _fM_=function(_fN_){return run_next(_fI_,try_key_code_right,_fN_)};
          break;
         default:
          var
           _fJ_=evt.keyCode,
           _fM_=function(_fP_){return run_next(_fJ_,try_key_code_numpad,_fP_)}}
      var value=evt.code;
      return symbol$11
              (symbol$11
                (symbol$11
                  (0,
                   function(v)
                    {return 0 === v
                             ?caml_call3(Optdef[7],value,make_unidentified,f)
                             :v}),
                 _fM_),
               _fL_)}
    function char_of_int(value)
     {if(caml_call2(symbol$5,0,value))
       try
        {var _fF_=[0,caml_call1(Stdlib_uchar[8],value)];return _fF_}
       catch(_fG_){return 0}
      return 0}
    function empty_string(param){return ""}
    function none(param){return 0}
    function of_event$0(evt)
     {var key=caml_call2(Optdef[8],evt.key,empty_string),match=key.length;
      return 0 === match
              ?caml_call3(Optdef[7],evt.charCode,none,char_of_int)
              :1 === match?char_of_int(key.charCodeAt(0) | 0):0}
    function element$1(_fE_){return _fE_}
    function tagged(e)
     {var tag=caml_js_to_byte_string(e.tagName.toLowerCase());
      if(caml_call2(symbol$8,caml_ml_string_length(tag),0))return [61,e];
      var match=runtime.caml_string_unsafe_get(tag,0),switcher=match - 97 | 0;
      if(! (21 < switcher >>> 0))
       switch(switcher)
        {case 0:
          return caml_string_notequal(tag,cst_a$1)
                  ?caml_string_notequal(tag,cst_area$1)
                    ?caml_string_notequal(tag,cst_audio$1)?[61,e]:[2,e]
                    :[1,e]
                  :[0,e];
         case 1:
          return caml_string_notequal(tag,cst_base$1)
                  ?caml_string_notequal(tag,cst_blockquote$1)
                    ?caml_string_notequal(tag,cst_body$1)
                      ?caml_string_notequal(tag,cst_br$1)
                        ?caml_string_notequal(tag,cst_button$1)?[61,e]:[7,e]
                        :[6,e]
                      :[5,e]
                    :[4,e]
                  :[3,e];
         case 2:
          return caml_string_notequal(tag,cst_canvas$1)
                  ?caml_string_notequal(tag,cst_caption$1)
                    ?caml_string_notequal(tag,cst_col$1)
                      ?caml_string_notequal(tag,cst_colgroup$1)?[61,e]:[11,e]
                      :[10,e]
                    :[9,e]
                  :[8,e];
         case 3:
          return caml_string_notequal(tag,cst_del$1)
                  ?caml_string_notequal(tag,cst_div$1)
                    ?caml_string_notequal(tag,cst_dl$1)?[61,e]:[14,e]
                    :[13,e]
                  :[12,e];
         case 4:return caml_string_notequal(tag,cst_embed$1)?[61,e]:[15,e];
         case 5:
          return caml_string_notequal(tag,cst_fieldset$1)
                  ?caml_string_notequal(tag,cst_form$1)
                    ?caml_string_notequal(tag,cst_frame$1)
                      ?caml_string_notequal(tag,cst_frameset$1)?[61,e]:[18,e]
                      :[19,e]
                    :[17,e]
                  :[16,e];
         case 7:
          return caml_string_notequal(tag,cst_h1$1)
                  ?caml_string_notequal(tag,cst_h2$1)
                    ?caml_string_notequal(tag,cst_h3$1)
                      ?caml_string_notequal(tag,cst_h4$1)
                        ?caml_string_notequal(tag,cst_h5$1)
                          ?caml_string_notequal(tag,cst_h6$1)
                            ?caml_string_notequal(tag,cst_head$1)
                              ?caml_string_notequal(tag,cst_hr$1)
                                ?caml_string_notequal(tag,cst_html$1)?[61,e]:[28,e]
                                :[27,e]
                              :[26,e]
                            :[25,e]
                          :[24,e]
                        :[23,e]
                      :[22,e]
                    :[21,e]
                  :[20,e];
         case 8:
          return caml_string_notequal(tag,cst_iframe$1)
                  ?caml_string_notequal(tag,cst_img$1)
                    ?caml_string_notequal(tag,cst_input$2)
                      ?caml_string_notequal(tag,cst_ins$1)?[61,e]:[32,e]
                      :[31,e]
                    :[30,e]
                  :[29,e];
         case 11:
          return caml_string_notequal(tag,cst_label$1)
                  ?caml_string_notequal(tag,cst_legend$1)
                    ?caml_string_notequal(tag,cst_li$1)
                      ?caml_string_notequal(tag,cst_link$1)?[61,e]:[36,e]
                      :[35,e]
                    :[34,e]
                  :[33,e];
         case 12:
          return caml_string_notequal(tag,cst_map$1)
                  ?caml_string_notequal(tag,cst_meta$1)?[61,e]:[38,e]
                  :[37,e];
         case 14:
          return caml_string_notequal(tag,cst_object$1)
                  ?caml_string_notequal(tag,cst_ol$1)
                    ?caml_string_notequal(tag,cst_optgroup$1)
                      ?caml_string_notequal(tag,cst_option$1)?[61,e]:[42,e]
                      :[41,e]
                    :[40,e]
                  :[39,e];
         case 15:
          return caml_string_notequal(tag,cst_p$1)
                  ?caml_string_notequal(tag,cst_param$1)
                    ?caml_string_notequal(tag,cst_pre$1)?[61,e]:[45,e]
                    :[44,e]
                  :[43,e];
         case 16:return caml_string_notequal(tag,cst_q$1)?[61,e]:[46,e];
         case 18:
          return caml_string_notequal(tag,cst_script$1)
                  ?caml_string_notequal(tag,cst_select$2)
                    ?caml_string_notequal(tag,cst_style$1)?[61,e]:[49,e]
                    :[48,e]
                  :[47,e];
         case 19:
          return caml_string_notequal(tag,cst_table$1)
                  ?caml_string_notequal(tag,cst_tbody$1)
                    ?caml_string_notequal(tag,cst_td$1)
                      ?caml_string_notequal(tag,cst_textarea$1)
                        ?caml_string_notequal(tag,cst_tfoot$1)
                          ?caml_string_notequal(tag,cst_th$1)
                            ?caml_string_notequal(tag,cst_thead$1)
                              ?caml_string_notequal(tag,cst_title$1)
                                ?caml_string_notequal(tag,cst_tr$1)?[61,e]:[58,e]
                                :[57,e]
                              :[56,e]
                            :[55,e]
                          :[54,e]
                        :[53,e]
                      :[52,e]
                    :[51,e]
                  :[50,e];
         case 20:return caml_string_notequal(tag,cst_ul$1)?[61,e]:[59,e];
         case 21:return caml_string_notequal(tag,cst_video$1)?[61,e]:[60,e]
         }
      return [61,e]}
    function opt_tagged(e)
     {function _fC_(e){return [0,tagged(e)]}
      function _fD_(param){return 0}
      return caml_call3(Opt[7],e,_fD_,_fC_)}
    function taggedEvent(ev)
     {function _fn_(ev){return [0,ev]}
      function _fo_(param)
       {function _fq_(ev){return [1,ev]}
        function _fr_(param)
         {function _ft_(ev){return [2,ev]}
          function _fu_(param)
           {function _fw_(ev){return [3,ev]}
            function _fx_(param)
             {function _fz_(ev){return [4,ev]}
              function _fA_(param){return [5,ev]}
              var _fB_=popStateEvent(ev);
              return caml_call3(Opt[7],_fB_,_fA_,_fz_)}
            var _fy_=mouseScrollEvent(ev);
            return caml_call3(Opt[7],_fy_,_fx_,_fw_)}
          var _fv_=wheelEvent(ev);
          return caml_call3(Opt[7],_fv_,_fu_,_ft_)}
        var _fs_=keyboardEvent(ev);
        return caml_call3(Opt[7],_fs_,_fr_,_fq_)}
      var _fp_=mouseEvent(ev);
      return caml_call3(Opt[7],_fp_,_fo_,_fn_)}
    function opt_taggedEvent(ev)
     {function _fl_(ev){return [0,taggedEvent(ev)]}
      function _fm_(param){return 0}
      return caml_call3(Opt[7],ev,_fm_,_fl_)}
    function stopPropagation(ev)
     {function _fj_(param){return ev.stopPropagation()}
      function _fk_(param){return ev.cancelBubble = true$0}
      return caml_call3(Optdef[7],ev.stopPropagation,_fk_,_fj_)}
    var
     requestAnimationFrame=
      runtime.caml_js_pure_expr
       (function(param)
         {var
           l=
            [0,
             _g_.requestAnimationFrame,
             [0,
              _g_.mozRequestAnimationFrame,
              [0,
               _g_.webkitRequestAnimationFrame,
               [0,
                _g_.oRequestAnimationFrame,
                [0,_g_.msRequestAnimationFrame,0]]]]];
          try
           {var
             _fg_=function(c){return caml_call1(Optdef[5],c)},
             req=caml_call2(Stdlib_list[34],_fg_,l),
             _fh_=function(callback){return req(callback)};
            return _fh_}
          catch(_fi_)
           {_fi_ = caml_wrap_exception(_fi_);
            if(_fi_ === Stdlib[8])
             {var
               now=function(param){return new date_ms().getTime()},
               last=[0,now(0)];
              return function(callback)
               {var
                 t=now(0),
                 dt=last[1] + 16.6666666666666679 - t,
                 dt$0=dt < 0.?0.:dt;
                last[1] = t;
                _g_.setTimeout(callback,dt$0);
                return 0}}
            throw _fi_}});
    function hasPushState(param)
     {return caml_call1(Optdef[5],_g_.history.pushState)}
    function hasPlaceholder(param)
     {var i=createInput(0,0,document$0);
      return caml_call1(Optdef[5],i.placeholder)}
    function hasRequired(param)
     {var i=createInput(0,0,document$0);
      return caml_call1(Optdef[5],i.required)}
    var overflow_limit=2147483000.;
    function setTimeout(callback,d)
     {var id=[0,0];
      function loop(step,param)
       {if(2147483000. < step)
         var step$0=overflow_limit,remain=step - 2147483000.;
        else
         var step$0=step,remain=0.;
        var cb=remain == 0.?callback:function(_ff_){return loop(remain,_ff_)};
        id[1] = [0,_g_.setTimeout(caml_js_wrap_callback(cb),step$0)];
        return 0}
      loop(d,0);
      return id}
    function clearTimeout(id)
     {var _fe_=id[1];
      if(_fe_){var x=_fe_[1];id[1] = 0;return _g_.clearTimeout(x)}
      return 0}
    function js_array_of_collection(c){return [].slice.call(c)}
    var
     Js_of_ocaml_Dom_html=
      [0,
       d,
       document$0,
       getElementById_opt,
       getElementById_exn,
       getElementById_coerce,
       getElementById,
       location_origin,
       _g_,
       no_handler,
       handler,
       full_handler,
       invoke_handler,
       eventTarget,
       eventRelatedTarget,
       Event$0,
       addEventListenerWithOptions,
       addEventListener,
       removeEventListener,
       addMousewheelEventListenerWithOptions,
       addMousewheelEventListener,
       createCustomEvent,
       buttonPressed,
       eventAbsolutePosition$0,
       elementClientPosition,
       getDocumentScroll,
       [0,of_event,try_key_code_normal],
       [0,of_event$0],
       createHtml,
       createHead,
       createLink,
       createTitle,
       createMeta,
       createBase,
       createStyle,
       createBody,
       createForm,
       createOptgroup,
       createOption,
       createSelect,
       createInput,
       createTextarea,
       createButton,
       createLabel,
       createFieldset,
       createLegend,
       createUl,
       createOl,
       createDl,
       createLi,
       createDiv,
       createEmbed,
       createP,
       createH1,
       createH2,
       createH3,
       createH4,
       createH5,
       createH6,
       createQ,
       createBlockquote,
       createPre,
       createBr,
       createHr,
       createIns,
       createDel,
       createA,
       createImg,
       createObject,
       createParam,
       createMap,
       createArea,
       createScript,
       createTable,
       createCaption,
       createCol,
       createColgroup,
       createThead,
       createTfoot,
       createTbody,
       createTr,
       createTh,
       createTd,
       createSub,
       createSup,
       createSpan,
       createTt,
       createI,
       createB,
       createBig,
       createSmall,
       createEm,
       createStrong,
       createCite,
       createDfn,
       createCode,
       createSamp,
       createKbd,
       createVar,
       createAbbr,
       createDd,
       createDt,
       createNoscript,
       createAddress,
       createFrameset,
       createFrame,
       createIframe,
       createAudio,
       createVideo,
       Canvas_not_available,
       createCanvas,
       element$1,
       tagged,
       opt_tagged,
       taggedEvent,
       opt_taggedEvent,
       stopPropagation,
       [0,
        element$0,
        a,
        area,
        audio,
        base,
        blockquote,
        body,
        br,
        button,
        canvas,
        caption,
        col,
        colgroup,
        del,
        div,
        embed,
        dl,
        fieldset,
        form,
        frameset,
        frame,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        head,
        hr,
        html,
        iframe,
        img,
        input$0,
        ins,
        label,
        legend,
        li,
        link,
        map$2,
        meta,
        object,
        ol,
        optgroup,
        option$1,
        p,
        param,
        pre,
        q,
        script,
        select$0,
        style,
        table,
        tbody,
        td,
        textarea,
        tfoot,
        th,
        thead,
        title,
        tr,
        ul,
        video,
        mouseEvent,
        keyboardEvent,
        wheelEvent,
        mouseScrollEvent,
        popStateEvent],
       setTimeout,
       clearTimeout,
       js_array_of_collection,
       requestAnimationFrame,
       runtime.caml_js_html_entities,
       onIE,
       hasPushState,
       hasPlaceholder,
       hasRequired];
    caml_register_global(1643,Js_of_ocaml_Dom_html,"Js_of_ocaml__Dom_html");
    var formData=Unsafe[1].FormData,formData_form=Unsafe[1].FormData;
    function filter_map$0(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var q=param$0[2],v=param$0[1],match=caml_call1(f,v);
          if(match){var v$0=match[1];return [0,v$0,filter_map$0(f,q)]}
          var param$0=q;
          continue}
        return 0}}
    function have_content(elt)
     {var
       _fc_=caml_call2(symbol$9,elt.name.length,0),
       _fd_=_fc_?1 - (elt.disabled | 0):_fc_;
      return _fd_}
    function form_elements(get,form)
     {var length=form.elements.length;
      function _e2_(i)
       {var _fb_=form.elements.item(i);return caml_call1(Opt[10],_fb_)}
      var
       _e3_=caml_call2(Stdlib_array[2],length,_e2_),
       elements=caml_call1(Stdlib_array[11],_e3_);
      function _e4_(param)
       {if(param)
         {var v=param[1],match$3=tagged(v);
          switch(match$3[0])
           {case 31:
             var v$0=match$3[1];
             if(get)var sth=get[1],get$0=sth;else var get$0=0;
             if(have_content(v$0))
              {var
                name$1=caml_js_to_string(v$0.name),
                value=v$0.value,
                match=caml_js_to_byte_string(v$0.type.toLowerCase());
               if(caml_string_notequal(match,cst_checkbox))
                {if(! caml_string_notequal(match,cst_file))
                  {if(get$0)return [0,[0,name$1,[0,-976970511,value]],0];
                   var match$0=caml_call1(Optdef[10],v$0.files);
                   if(match$0)
                    {var list=match$0[1];
                     if(caml_call2(symbol$8,list.length,0))
                      return [0,[0,name$1,[0,-976970511,""]],0];
                     var match$1=caml_call1(Optdef[10],v$0.multiple);
                     if(match$1)
                      if(0 !== match$1[1])
                       {var
                         _e9_=function(i){return list.item(i)},
                         _e__=caml_call2(Stdlib_array[2],list.length,_e9_),
                         _e$_=caml_call1(Stdlib_array[11],_e__);
                        return filter_map$0
                                (function(f)
                                  {var match=caml_call1(Opt[10],f);
                                   if(match)
                                    {var file=match[1];return [0,[0,name$1,[0,781515420,file]]]}
                                   return 0},
                                 _e$_)}
                     var _e8_=list.item(0),match$2=caml_call1(Opt[10],_e8_);
                     if(match$2)
                      {var file=match$2[1];
                       return [0,[0,name$1,[0,781515420,file]],0]}
                     return 0}
                   return 0}
                 if(caml_string_notequal(match,cst_password))
                  if(caml_string_notequal(match,cst_radio))
                   {if(caml_string_notequal(match,cst_reset))
                     if(caml_string_notequal(match,cst_submit$0))
                      {if(caml_string_notequal(match,cst_text))
                        return [0,[0,name$1,[0,-976970511,value]],0];
                       var switch$0=1,switch$1=0}
                     else
                      var switch$1=1;
                    else
                     var switch$1=1;
                    if(switch$1)return 0}
                  else
                   var switch$0=0;
                 else
                  var switch$0=1;
                 if(switch$0)return [0,[0,name$1,[0,-976970511,value]],0]}
               return v$0.checked | 0?[0,[0,name$1,[0,-976970511,value]],0]:0}
             return 0;
            case 48:
             var v$1=match$3[1];
             if(have_content(v$1))
              {var name$0=caml_js_to_string(v$1.name);
               if(v$1.multiple | 0)
                {var
                  _e6_=
                   function(i)
                    {var _fa_=v$1.options.item(i);
                     return caml_call1(Opt[10],_fa_)},
                  options=caml_call2(Stdlib_array[2],v$1.options.length,_e6_),
                  _e7_=caml_call1(Stdlib_array[11],options);
                 return filter_map$0
                         (function(param)
                           {if(param)
                             {var e=param[1];
                              return e.selected | 0
                                      ?[0,[0,name$0,[0,-976970511,e.value]]]
                                      :0}
                            return 0},
                          _e7_)}
               return [0,[0,name$0,[0,-976970511,v$1.value]],0]}
             return 0;
            case 53:
             var v$2=match$3[1];
             if(have_content(v$2))
              {var name=caml_js_to_string(v$2.name);
               return [0,[0,name,[0,-976970511,v$2.value]],0]}
             return 0;
            default:return 0}}
        return 0}
      var
       _e5_=caml_call2(Stdlib_list[17],_e4_,elements),
       contents=caml_call1(Stdlib_list[14],_e5_);
      return contents}
    function append(form_contents,form_elt)
     {if(891486873 <= form_contents[1])
       {var list=form_contents[2];list[1] = [0,form_elt,list[1]];return 0}
      var f=form_contents[2],_e0_=form_elt[2],_e1_=form_elt[1];
      if(781515420 <= _e0_[1])
       {var file=_e0_[2];return f.append(_e1_.toString(),file)}
      var s=_e0_[2];
      return f.append(_e1_.toString(),s)}
    function empty_form_contents(param)
     {var match=caml_call1(Optdef[10],formData);
      if(match){var constr=match[1];return [0,808620462,new constr()]}
      return [0,891486873,[0,0]]}
    function post_form_contents(form)
     {var contents=empty_form_contents(0),_eX_=form_elements(0,form);
      function _eY_(_eZ_){return append(contents,_eZ_)}
      caml_call2(Stdlib_list[15],_eY_,_eX_);
      return contents}
    function get_form_contents(form)
     {var _eT_=form_elements(_k_,form);
      function _eU_(param)
       {var _eV_=param[2],_eW_=param[1];
        if(typeof _eV_ !== "number")
         if(-976970511 === _eV_[1])
          {var s=_eV_[2];return [0,_eW_,caml_js_to_string(s)]}
        throw [0,Assert_failure,_l_]}
      return caml_call2(Stdlib_list[17],_eU_,_eT_)}
    var
     Js_of_ocaml_Form=
      [0,
       formData,
       formData_form,
       append,
       post_form_contents,
       get_form_contents,
       empty_form_contents,
       form_elements];
    caml_register_global(1644,Js_of_ocaml_Form,"Js_of_ocaml__Form");
    var
     readystatechange=caml_call1(Event[1],cst_readystatechange),
     loadstart$1=caml_call1(Event[1],cst_loadstart$1),
     progress$1=caml_call1(Event[1],cst_progress$1),
     abort$1=caml_call1(Event[1],cst_abort$1),
     error$1=caml_call1(Event[1],cst_error$1),
     load$1=caml_call1(Event[1],cst_load$1),
     timeout=caml_call1(Event[1],cst_timeout),
     loadend$0=caml_call1(Event[1],cst_loadend$0),
     Event$1=
      [0,
       readystatechange,
       loadstart$1,
       progress$1,
       abort$1,
       error$1,
       load$1,
       timeout,
       loadend$0];
    function create(param)
     {var
       xmlHttpRequest=Unsafe[1].XMLHttpRequest,
       activeXObject=Unsafe[1].activeXObject;
      try
       {var _eO_=new xmlHttpRequest();return _eO_}
      catch(_eP_)
       {try
         {var _eN_=new activeXObject("Msxml2.XMLHTTP");return _eN_}
        catch(_eQ_)
         {try
           {var _eM_=new activeXObject("Msxml3.XMLHTTP");return _eM_}
          catch(_eR_)
           {try
             {var _eL_=new activeXObject("Microsoft.XMLHTTP");return _eL_}
            catch(_eS_){throw [0,Assert_failure,_m_]}}}}}
    var Js_of_ocaml_XmlHttpRequest=[0,create,Event$1];
    caml_register_global
     (1645,Js_of_ocaml_XmlHttpRequest,"Js_of_ocaml__XmlHttpRequest");
    var worker=Unsafe[1].Worker;
    function create$0(script){return new worker(script.toString())}
    function import_scripts(scripts)
     {if(Unsafe[1].importScripts === t37)
       caml_call1(Stdlib[1],cst_Worker_import_scripts_is_undefined);
      var
       _eJ_=caml_call1(Stdlib_array[12],scripts),
       _eK_=caml_call2(Stdlib_array[15],caml_js_from_string,_eJ_);
      return runtime.caml_js_fun_call(Unsafe[1].importScripts,_eK_)}
    function set_onmessage(handler)
     {if(Unsafe[1].onmessage === t37)
       caml_call1(Stdlib[1],cst_Worker_onmessage_is_undefined);
      function js_handler(ev){return caml_call1(handler,ev.data)}
      return Unsafe[1].onmessage = caml_js_wrap_callback(js_handler)}
    function post_message(msg)
     {if(Unsafe[1].postMessage === t37)
       caml_call1(Stdlib[1],cst_Worker_onmessage_is_undefined$0);
      return Unsafe[1].postMessage(msg)}
    var
     Js_of_ocaml_Worker=
      [0,create$0,import_scripts,set_onmessage,post_message];
    caml_register_global(1646,Js_of_ocaml_Worker,"Js_of_ocaml__Worker");
    var webSocket=Unsafe[1].WebSocket;
    function is_supported(param){return caml_call1(Optdef[5],webSocket)}
    var Js_of_ocaml_WebSockets=[0,webSocket,webSocket,webSocket,is_supported];
    caml_register_global
     (1647,Js_of_ocaml_WebSockets,"Js_of_ocaml__WebSockets");
    var
     defaultContextAttributes=
      {"alpha":true$0,
       "depth":true$0,
       "stencil":false$0,
       "antialias":true$0,
       "premultipliedAlpha":false$0,
       "preserveDrawingBuffer":false$0,
       "preferLowPowerToHighPerformance":false$0,
       "failIfMajorPerformanceCaveat":false$0},
     webglcontextlost=caml_call1(Event$0[83],cst_webglcontextlost),
     webglcontextrestored=caml_call1(Event$0[83],cst_webglcontextrestored),
     webglcontextcreationerror=
      caml_call1(Event$0[83],cst_webglcontextcreationerror),
     Event$2=
      [0,webglcontextlost,webglcontextrestored,webglcontextcreationerror];
    function getContext(c)
     {var ctx=c.getContext("webgl");
      return caml_call1(Opt[5],ctx)?ctx:c.getContext("experimental-webgl")}
    function getContextWithAttributes(c,attribs)
     {var ctx=c.getContext("webgl",attribs);
      return caml_call1(Opt[5],ctx)
              ?ctx
              :c.getContext("experimental-webgl",attribs)}
    var
     Js_of_ocaml_WebGL=
      [0,defaultContextAttributes,Event$2,getContext,getContextWithAttributes];
    caml_register_global(1648,Js_of_ocaml_WebGL,"Js_of_ocaml__WebGL");
    function regexp(s)
     {return new regExp_withFlags(caml_jsbytes_of_string(s),"g")}
    function regexp_case_fold(s)
     {return new regExp_withFlags(caml_jsbytes_of_string(s),"gi")}
    function regexp_with_flag(s,f)
     {var _eI_=caml_call2(Stdlib[28],cst_g,f).toString();
      return new regExp_withFlags(caml_jsbytes_of_string(s),_eI_)}
    function blunt_str_array_get(a,i)
     {function _eH_(param){throw [0,Assert_failure,_n_]}
      return caml_js_to_byte_string(caml_call2(Optdef[8],a[i],_eH_))}
    function string_match(r,s,i)
     {r.lastIndex = i;
      var
       _eF_=r.exec(caml_jsbytes_of_string(s)),
       _eG_=caml_call2(Opt[3],_eF_,match_result);
      return caml_call1(Opt[10],_eG_)}
    function search_forward(r,s,i)
     {r.lastIndex = i;
      function _eC_(res){return [0,res.index,res]}
      var
       _eD_=r.exec(caml_jsbytes_of_string(s)),
       _eE_=caml_call2(Opt[3],_eD_,_eC_);
      return caml_call1(Opt[10],_eE_)}
    function matched_string(r){return blunt_str_array_get(r,0)}
    function matched_group(r,i)
     {var _eB_=caml_call2(Optdef[3],r[i],caml_js_to_byte_string);
      return caml_call1(Optdef[10],_eB_)}
    var quote_repl_re=new regExp_withFlags("[$]","g");
    function quote_repl(s)
     {return caml_jsbytes_of_string(s).replace(quote_repl_re,"$$$$")}
    function global_replace(r,s,s_by)
     {r.lastIndex = 0;
      var _eA_=quote_repl(s_by);
      return caml_js_to_byte_string(caml_jsbytes_of_string(s).replace(r,_eA_))}
    function replace_first(r,s,s_by)
     {var
       match=r.ignoreCase | 0,
       match$0=r.multiline | 0,
       flags=0 === match?0 === match$0?"":"m":0 === match$0?"i":"mi",
       r$0=new regExp_withFlags(r.source,flags),
       _ez_=quote_repl(s_by);
      return caml_js_to_byte_string
              (caml_jsbytes_of_string(s).replace(r$0,_ez_))}
    function list_of_js_array(a)
     {var idx$1=a.length - 1 | 0,accu=0,idx=idx$1;
      for(;;)
       {if(caml_call2(symbol$5,idx,0))return accu;
        var
         idx$0=idx - 1 | 0,
         accu$0=[0,blunt_str_array_get(a,idx),accu],
         accu=accu$0,
         idx=idx$0;
        continue}}
    function split(r,s)
     {r.lastIndex = 0;
      return list_of_js_array(caml_jsbytes_of_string(s).split(r))}
    function bounded_split(r,s,i)
     {r.lastIndex = 0;
      return list_of_js_array(caml_jsbytes_of_string(s).split(r,i))}
    var quote_re=regexp(cst);
    function quote(s)
     {return caml_js_to_byte_string
              (caml_jsbytes_of_string(s).replace(quote_re,"\\$&"))}
    function regexp_string(s){return regexp(quote(s))}
    function regexp_string_case_fold(s){return regexp_case_fold(quote(s))}
    var
     Js_of_ocaml_Regexp=
      [0,
       regexp,
       regexp_case_fold,
       regexp_with_flag,
       quote,
       regexp_string,
       regexp_string_case_fold,
       string_match,
       search_forward,
       search_forward,
       matched_string,
       matched_group,
       global_replace,
       replace_first,
       split,
       bounded_split];
    caml_register_global(1649,Js_of_ocaml_Regexp,"Js_of_ocaml__Regexp");
    var Local_exn=[248,cst_Js_of_ocaml_Url_Local_exn,caml_fresh_oo_id(0)];
    function interrupt(param){throw Local_exn}
    var
     plus_re=regexp_string(cst$0),
     plus_re_js_string=new regExp_withFlags("\\+","g");
    function urldecode_js_string_string(s)
     {plus_re_js_string.lastIndex = 0;
      return caml_js_to_byte_string
              (unescape(s.replace(plus_re_js_string," ")))}
    function urldecode(s)
     {return caml_js_to_byte_string
              (unescape
                (caml_jsbytes_of_string(global_replace(plus_re,s,cst$1))))}
    function urlencode(opt,s)
     {if(opt)var sth=opt[1],with_plus=sth;else var with_plus=1;
      if(with_plus)
       {var s$0=caml_js_to_byte_string(escape(caml_jsbytes_of_string(s)));
        return global_replace(plus_re,s$0,cst_2B)}
      return caml_js_to_byte_string(escape(caml_jsbytes_of_string(s)))}
    var
     Not_an_http_protocol=
      [248,cst_Js_of_ocaml_Url_Not_an_http_protocol,caml_fresh_oo_id(0)],
     default_http_port=80,
     default_https_port=443;
    function path_of_path_string(s)
     {var l=caml_ml_string_length(s);
      function aux(i)
       {try
         {var _ex_=caml_call3(String[18],s,i,47),j=_ex_}
        catch(_ey_)
         {_ey_ = caml_wrap_exception(_ey_);
          if(_ey_ !== Stdlib[8])throw _ey_;
          var j=l}
        var word=caml_call3(String[4],s,i,j - i | 0);
        return caml_call2(symbol$10,j,l)?[0,word,0]:[0,word,aux(j + 1 | 0)]}
      var a=aux(0);
      if(a)
       if(! caml_string_notequal(a[1],cst$2))
        {var _ew_=a[2];
         if(! _ew_)return 0;
         if(! caml_string_notequal(_ew_[1],cst$3))if(! _ew_[2])return _o_}
      return a}
    function encode_arguments(l)
     {function _er_(param)
       {var
         v=param[2],
         n=param[1],
         _et_=urlencode(0,v),
         _eu_=caml_call2(Stdlib[28],cst$4,_et_),
         _ev_=urlencode(0,n);
        return caml_call2(Stdlib[28],_ev_,_eu_)}
      var _es_=caml_call2(Stdlib_list[17],_er_,l);
      return caml_call2(String[7],cst$5,_es_)}
    function decode_arguments_js_string(s)
     {var arr=s.split(caml_call2(String[1],1,38).toString()),len=arr.length;
      function aux(acc,idx)
       {var idx$0=idx;
        for(;;)
         {if(caml_call2(symbol$5,idx$0,0))return acc;
          try
           {var
             _ej_=idx$0 - 1 | 0,
             _ek_=
              function(s)
               {function _ep_(param)
                 {var
                   y=param[2],
                   x=param[1],
                   _eq_=urldecode_js_string_string(y);
                  return [0,urldecode_js_string_string(x),_eq_]}
                var index=s.indexOf(caml_call2(String[1],1,61).toString());
                if(caml_call2(symbol$5,index,0))
                 var _eo_=t37;
                else
                 var
                  _en_=s.slice(index + 1 | 0),
                  _eo_=[0,s.slice(0,index),_en_];
                return caml_call3(Optdef[7],_eo_,interrupt,_ep_)},
             _el_=
              aux
               ([0,caml_call3(Optdef[7],arr[idx$0],interrupt,_ek_),acc],_ej_);
            return _el_}
          catch(_em_)
           {_em_ = caml_wrap_exception(_em_);
            if(_em_ === Local_exn)
             {var idx$1=idx$0 - 1 | 0,idx$0=idx$1;continue}
            throw _em_}}}
      return aux(0,len - 1 | 0)}
    function decode_arguments(s)
     {return decode_arguments_js_string(caml_jsbytes_of_string(s))}
    var
     url_re=
      new
       regExp_withFlags
       (caml_jsbytes_of_string
         (cst_Hh_Tt_Tt_Pp_Ss_0_9a_zA_Z_0_9a_zA_Z_0_9A_Fa_f_0_9)),
     file_re=new regExp_withFlags(caml_jsbytes_of_string(cst_Ff_Ii_Ll_Ee));
    function url_of_js_string(s)
     {function _d2_(res)
       {var
         prot_string=caml_call2(Optdef[8],res[1],interrupt),
         match=caml_js_to_byte_string(prot_string.toLowerCase());
        if(caml_string_notequal(match,cst_file$0))
         if(caml_string_notequal(match,cst_file$1))
          {if(caml_string_notequal(match,cst_http))
            if(caml_string_notequal(match,cst_http$0))
             {if(caml_string_notequal(match,cst_https))
               if(caml_string_notequal(match,cst_https$0))
                var switch$0=1,switch$1=0;
               else
                var switch$1=1;
              else
               var switch$1=1;
              if(switch$1)var ssl=1,switch$0=2}
            else
             var switch$0=0;
           else
            var switch$0=0;
           switch(switch$0)
            {case 0:var ssl=0,switch$2=1;break;
             case 1:var switch$2=0;break;
             default:var switch$2=1}
           if(switch$2)
            {var
              _ea_=function(param){return caml_jsbytes_of_string(cst$7)},
              path_str=
               urldecode_js_string_string(caml_call2(Optdef[8],res[6],_ea_)),
              _eb_=function(param){return caml_jsbytes_of_string(cst$8)},
              _ec_=
               urldecode_js_string_string(caml_call2(Optdef[8],res[10],_eb_)),
              _ed_=function(param){return caml_jsbytes_of_string(cst$9)},
              _ee_=
               decode_arguments_js_string(caml_call2(Optdef[8],res[8],_ed_)),
              _ef_=path_of_path_string(path_str),
              _eg_=function(param){return caml_jsbytes_of_string(cst$10)},
              s=caml_js_to_byte_string(caml_call2(Optdef[8],res[4],_eg_)),
              _eh_=
               caml_string_notequal(s,cst$6)?caml_int_of_string(s):ssl?443:80,
              url=
               [0,
                urldecode_js_string_string
                 (caml_call2(Optdef[8],res[2],interrupt)),
                _eh_,
                _ef_,
                path_str,
                _ee_,
                _ec_],
              _ei_=ssl?[1,url]:[0,url];
             return [0,_ei_]}}
        throw Not_an_http_protocol}
      function _d3_(param)
       {function _d5_(res)
         {var
           path_str=
            urldecode_js_string_string(caml_call2(Optdef[8],res[2],interrupt));
          function _d8_(param){return caml_jsbytes_of_string(cst$11)}
          var _d9_=caml_js_to_byte_string(caml_call2(Optdef[8],res[6],_d8_));
          function _d__(param){return caml_jsbytes_of_string(cst$12)}
          var
           _d$_=
            decode_arguments_js_string(caml_call2(Optdef[8],res[4],_d__));
          return [0,[2,[0,path_of_path_string(path_str),path_str,_d$_,_d9_]]]}
        function _d6_(param){return 0}
        var _d7_=file_re.exec(s);
        return caml_call3(Opt[7],_d7_,_d6_,_d5_)}
      var _d4_=url_re.exec(s);
      return caml_call3(Opt[7],_d4_,_d3_,_d2_)}
    function url_of_string(s)
     {return url_of_js_string(caml_jsbytes_of_string(s))}
    function string_of_url(param)
     {switch(param[0])
       {case 0:
         var
          match=param[1],
          frag=match[6],
          args=match[5],
          path=match[3],
          port=match[2],
          host=match[1];
         if(caml_string_notequal(frag,cst$13))
          var _dp_=urlencode(0,frag),_dq_=caml_call2(Stdlib[28],cst$14,_dp_);
         else
          var _dq_=cst$21;
         if(args)
          var
           _dr_=encode_arguments(args),
           _ds_=caml_call2(Stdlib[28],cst$15,_dr_);
         else
          var _ds_=cst$20;
         var
          _dt_=caml_call2(Stdlib[28],_ds_,_dq_),
          _du_=function(x){return urlencode(0,x)},
          _dv_=caml_call2(Stdlib_list[17],_du_,path),
          _dw_=caml_call2(String[7],cst$16,_dv_),
          _dx_=caml_call2(Stdlib[28],_dw_,_dt_),
          _dy_=caml_call2(Stdlib[28],cst$17,_dx_);
         if(80 === port)
          var _dz_=cst$18;
         else
          var
           _dD_=caml_call1(Stdlib[33],port),
           _dz_=caml_call2(Stdlib[28],cst$19,_dD_);
         var
          _dA_=caml_call2(Stdlib[28],_dz_,_dy_),
          _dB_=urlencode(0,host),
          _dC_=caml_call2(Stdlib[28],_dB_,_dA_);
         return caml_call2(Stdlib[28],cst_http$1,_dC_);
        case 1:
         var
          match$0=param[1],
          frag$0=match$0[6],
          args$0=match$0[5],
          path$0=match$0[3],
          port$0=match$0[2],
          host$0=match$0[1];
         if(caml_string_notequal(frag$0,cst$22))
          var
           _dE_=urlencode(0,frag$0),
           _dF_=caml_call2(Stdlib[28],cst$23,_dE_);
         else
          var _dF_=cst$30;
         if(args$0)
          var
           _dG_=encode_arguments(args$0),
           _dH_=caml_call2(Stdlib[28],cst$24,_dG_);
         else
          var _dH_=cst$29;
         var
          _dI_=caml_call2(Stdlib[28],_dH_,_dF_),
          _dJ_=function(x){return urlencode(0,x)},
          _dK_=caml_call2(Stdlib_list[17],_dJ_,path$0),
          _dL_=caml_call2(String[7],cst$25,_dK_),
          _dM_=caml_call2(Stdlib[28],_dL_,_dI_),
          _dN_=caml_call2(Stdlib[28],cst$26,_dM_);
         if(443 === port$0)
          var _dO_=cst$27;
         else
          var
           _dS_=caml_call1(Stdlib[33],port$0),
           _dO_=caml_call2(Stdlib[28],cst$28,_dS_);
         var
          _dP_=caml_call2(Stdlib[28],_dO_,_dN_),
          _dQ_=urlencode(0,host$0),
          _dR_=caml_call2(Stdlib[28],_dQ_,_dP_);
         return caml_call2(Stdlib[28],cst_https$1,_dR_);
        default:
         var
          match$1=param[1],
          frag$1=match$1[4],
          args$1=match$1[3],
          path$1=match$1[1];
         if(caml_string_notequal(frag$1,cst$31))
          var
           _dT_=urlencode(0,frag$1),
           _dU_=caml_call2(Stdlib[28],cst$32,_dT_);
         else
          var _dU_=cst$36;
         if(args$1)
          var
           _dV_=encode_arguments(args$1),
           _dW_=caml_call2(Stdlib[28],cst$33,_dV_);
         else
          var _dW_=cst$35;
         var
          _dX_=caml_call2(Stdlib[28],_dW_,_dU_),
          _dY_=function(x){return urlencode(0,x)},
          _dZ_=caml_call2(Stdlib_list[17],_dY_,path$1),
          _d0_=caml_call2(String[7],cst$34,_dZ_),
          _d1_=caml_call2(Stdlib[28],_d0_,_dX_);
         return caml_call2(Stdlib[28],cst_file$2,_d1_)}}
    var _p_=caml_call1(Optdef[2],_g_.location);
    if(caml_call1(Optdef[5],_p_))
     var _q_=_g_.location;
    else
     var
      t29="",
      t40=function(param,_do_){return 0},
      t39=function(param,_dn_){return 0},
      t38=function(param){return 0},
      _q_=
       {"href":t29,
        "protocol":t29,
        "host":t29,
        "hostname":t29,
        "port":t29,
        "pathname":t29,
        "search":t29,
        "hash":t29,
        "origin":t37,
        "reload":caml_js_wrap_meth_callback(t38),
        "replace":caml_js_wrap_meth_callback(t39),
        "assign":caml_js_wrap_meth_callback(t40)};
    var
     host=urldecode_js_string_string(_q_.hostname),
     protocol=urldecode_js_string_string(_q_.protocol),
     _r_=0,
     port=
      function(param)
        {try
          {var _dl_=[0,caml_int_of_string(caml_js_to_byte_string(_q_.port))];
           return _dl_}
         catch(_dm_)
          {_dm_ = caml_wrap_exception(_dm_);
           if(_dm_[1] === Stdlib[7])return 0;
           throw _dm_}}
       (_r_),
     path_string=urldecode_js_string_string(_q_.pathname),
     path=path_of_path_string(path_string),
     _s_=_q_.search.charAt(0) === "?"?_q_.search.slice(1):_q_.search,
     arguments$0=decode_arguments_js_string(_s_);
    function get_fragment(param)
     {function _dh_(res){return caml_js_to_string(res[1])}
      function _di_(param){return cst$37}
      var _dj_=new regExp_withFlags("#(.*)"),_dk_=_q_.href.match(_dj_);
      return caml_call3(Opt[7],_dk_,_di_,_dh_)}
    function set_fragment(s)
     {return _q_.hash = caml_jsbytes_of_string(urlencode(0,s))}
    function get$2(param){return url_of_js_string(_q_.href)}
    function set$0(u)
     {return _q_.href = caml_jsbytes_of_string(string_of_url(u))}
    var
     as_string=urldecode_js_string_string(_q_.href),
     Js_of_ocaml_Url=
      [0,
       urldecode,
       urlencode,
       default_http_port,
       default_https_port,
       path_of_path_string,
       encode_arguments,
       decode_arguments,
       url_of_string,
       string_of_url,
       [0,
        host,
        port,
        protocol,
        path_string,
        path,
        arguments$0,
        get_fragment,
        set_fragment,
        get$2,
        set$0,
        as_string]];
    caml_register_global(1651,Js_of_ocaml_Url,"Js_of_ocaml__Url");
    var Js_of_ocaml_Lib_version=[0,s,git_version];
    caml_register_global
     (1652,Js_of_ocaml_Lib_version,"Js_of_ocaml__Lib_version");
    function update_file(name,content)
     {var oc=caml_call1(Stdlib[60],name);
      caml_call2(Stdlib[66],oc,content);
      return caml_call1(Stdlib[76],oc)}
    function set_channel_flusher(out_channel,f)
     {var
       f$0=
        caml_js_wrap_callback
         (function(s){return caml_call1(f,caml_js_to_byte_string(s))});
      return runtime.caml_ml_set_channel_output(out_channel,f$0)}
    function set_channel_filler(in_channel,f)
     {var f$0=caml_js_wrap_callback(f);
      return runtime.caml_ml_set_channel_refill(in_channel,f$0)}
    function mount(path,f)
     {return runtime.caml_mount_autoload
              (path,
               caml_js_wrap_callback
                (function(prefix,path){return caml_call2(f,prefix,path)}))}
    var unmount=runtime.caml_unmount;
    if(caml_call2(String[38],git_version,cst$38))
     var js_of_ocaml_version=s;
    else
     var
      _cm_=caml_call2(Stdlib[28],cst$41,git_version),
      js_of_ocaml_version=caml_call2(Stdlib[28],s,_cm_);
    var
     _t_=runtime.caml_create_file,
     _u_=runtime.caml_read_file_content,
     Js_of_ocaml_Sys_js=
      [0,
       set_channel_flusher,
       set_channel_filler,
       function(_dg_){return runtime.caml_list_mount_point(_dg_)},
       unmount,
       mount,
       _u_,
       _t_,
       update_file,
       js_of_ocaml_version];
    caml_register_global(1653,Js_of_ocaml_Sys_js,"Js_of_ocaml__Sys_js");
    function empty_resize_observer_options(param){return {}}
    var resizeObserver=Unsafe[1].ResizeObserver;
    function is_supported$0(param)
     {return caml_call1(Optdef[5],resizeObserver)}
    function observe(node,f,box,param)
     {var obs=new resizeObserver(caml_js_wrap_callback(f));
      if(box)
       {var box$0=box[1],opts={};opts.box = box$0;obs.observe(node,opts)}
      else
       obs.observe(node);
      return obs}
    var
     Js_of_ocaml_ResizeObserver=
      [0,empty_resize_observer_options,resizeObserver,is_supported$0,observe];
    caml_register_global
     (1654,Js_of_ocaml_ResizeObserver,"Js_of_ocaml__ResizeObserver");
    function empty_mutation_observer_init(param){return {}}
    var mutationObserver=Unsafe[1].MutationObserver;
    function is_supported$1(param)
     {return caml_call1(Optdef[5],mutationObserver)}
    function observe$0
     (node,
      f,
      child_list,
      attributes,
      character_data,
      subtree,
      attribute_old_value,
      character_data_old_value,
      attribute_filter,
      param)
     {function opt_iter(x,f)
       {if(x){var x$0=x[1];return caml_call1(f,x$0)}return 0}
      var obs=new mutationObserver(caml_js_wrap_callback(f)),cfg={};
      opt_iter(child_list,function(v){return cfg.childList = v});
      opt_iter(attributes,function(v){return cfg.attributes = v});
      opt_iter(character_data,function(v){return cfg.characterData = v});
      opt_iter(subtree,function(v){return cfg.subtree = v});
      opt_iter
       (attribute_old_value,function(v){return cfg.attributeOldValue = v});
      opt_iter
       (character_data_old_value,
        function(v){return cfg.characterDataOldValue = v});
      opt_iter
       (attribute_filter,
        function(l)
         {return cfg.attributeFilter
                 =
                 caml_js_from_array(caml_call1(Stdlib_array[12],l))});
      obs.observe(node,cfg);
      return obs}
    var
     Js_of_ocaml_MutationObserver=
      [0,
       empty_mutation_observer_init,
       mutationObserver,
       is_supported$1,
       observe$0];
    caml_register_global
     (1655,Js_of_ocaml_MutationObserver,"Js_of_ocaml__MutationObserver");
    var obj=Unsafe[1].Object;
    function create$1(param){return new obj()}
    function add$0(t,k,v){return t[k.concat("_")] = v}
    function remove(t,k){return delete t[k.concat("_")]}
    function find(t,k){return t[k.concat("_")]}
    function keys(t)
     {var
       key_array=Unsafe[1].Object.keys(t),
       res=[0,0],
       _dc_=key_array.length - 1 | 0,
       _db_=0;
      if(! (_dc_ < 0))
       {var i=_db_;
        for(;;)
         {var
           _dd_=function(param){return caml_call1(Stdlib[2],cst_Jstable_keys)},
           key=caml_call2(Optdef[8],key_array[i],_dd_),
           _de_=res[1];
          res[1] = [0,key.substring(0,key.length - 1 | 0),_de_];
          var _df_=i + 1 | 0;
          if(_dc_ !== i){var i=_df_;continue}
          break}}
      return caml_call1(Stdlib_list[9],res[1])}
    var Js_of_ocaml_Jstable=[0,create$1,add$0,remove,find,keys];
    caml_register_global(1656,Js_of_ocaml_Jstable,"Js_of_ocaml__Jstable");
    var json=runtime.caml_json(0);
    function reviver(this$0,key,value)
     {return typeof value == typeof "foo"?caml_js_to_byte_string(value):value}
    var input_reviver=caml_js_wrap_meth_callback(reviver);
    function unsafe_input(s){return json.parse(s,input_reviver)}
    var mlString_constr=dummy_string.constructor;
    function output_reviver(key,value)
     {return value instanceof mlString_constr
              ?caml_jsbytes_of_string(value)
              :value}
    function output(obj){return json.stringify(obj,output_reviver)}
    var Js_of_ocaml_Json=[0,output,unsafe_input];
    caml_register_global(1657,Js_of_ocaml_Json,"Js_of_ocaml__Json");
    function string_of_name(param)
     {var _da_=param;
      if(74 <= _da_)
       {if(111 <= _da_)
         switch(_da_)
          {case 111:return cst_palevioletred;
           case 112:return cst_papayawhip;
           case 113:return cst_peachpuff;
           case 114:return cst_peru;
           case 115:return cst_pink;
           case 116:return cst_plum;
           case 117:return cst_powderblue;
           case 118:return cst_purple;
           case 119:return cst_red;
           case 120:return cst_rosybrown;
           case 121:return cst_royalblue;
           case 122:return cst_saddlebrown;
           case 123:return cst_salmon;
           case 124:return cst_sandybrown;
           case 125:return cst_seagreen;
           case 126:return cst_seashell;
           case 127:return cst_sienna;
           case 128:return cst_silver;
           case 129:return cst_skyblue;
           case 130:return cst_slateblue;
           case 131:return cst_slategray;
           case 132:return cst_slategrey;
           case 133:return cst_snow;
           case 134:return cst_springgreen;
           case 135:return cst_steelblue;
           case 136:return cst_tan;
           case 137:return cst_teal;
           case 138:return cst_thistle;
           case 139:return cst_tomato;
           case 140:return cst_turquoise;
           case 141:return cst_violet;
           case 142:return cst_wheat;
           case 143:return cst_white;
           case 144:return cst_whitesmoke;
           case 145:return cst_yellow;
           default:return cst_yellowgreen}
        switch(_da_)
         {case 74:return cst_lightpink;
          case 75:return cst_lightsalmon;
          case 76:return cst_lightseagreen;
          case 77:return cst_lightskyblue;
          case 78:return cst_lightslategray;
          case 79:return cst_lightslategrey;
          case 80:return cst_lightsteelblue;
          case 81:return cst_lightyellow;
          case 82:return cst_lime;
          case 83:return cst_limegreen;
          case 84:return cst_linen;
          case 85:return cst_magenta;
          case 86:return cst_maroon;
          case 87:return cst_mediumaquamarine;
          case 88:return cst_mediumblue;
          case 89:return cst_mediumorchid;
          case 90:return cst_mediumpurple;
          case 91:return cst_mediumseagreen;
          case 92:return cst_mediumslateblue;
          case 93:return cst_mediumspringgreen;
          case 94:return cst_mediumturquoise;
          case 95:return cst_mediumvioletred;
          case 96:return cst_midnightblue;
          case 97:return cst_mintcream;
          case 98:return cst_mistyrose;
          case 99:return cst_moccasin;
          case 100:return cst_navajowhite;
          case 101:return cst_navy;
          case 102:return cst_oldlace;
          case 103:return cst_olive;
          case 104:return cst_olivedrab;
          case 105:return cst_orange;
          case 106:return cst_orangered;
          case 107:return cst_orchid;
          case 108:return cst_palegoldenrod;
          case 109:return cst_palegreen;
          default:return cst_paleturquoise}}
      if(37 <= _da_)
       switch(_da_)
        {case 37:return cst_darkslategrey;
         case 38:return cst_darkturquoise;
         case 39:return cst_darkviolet;
         case 40:return cst_deeppink;
         case 41:return cst_deepskyblue;
         case 42:return cst_dimgray;
         case 43:return cst_dimgrey;
         case 44:return cst_dodgerblue;
         case 45:return cst_firebrick;
         case 46:return cst_floralwhite;
         case 47:return cst_forestgreen;
         case 48:return cst_fuchsia;
         case 49:return cst_gainsboro;
         case 50:return cst_ghostwhite;
         case 51:return cst_gold;
         case 52:return cst_goldenrod;
         case 53:return cst_gray;
         case 54:return cst_grey;
         case 55:return cst_green;
         case 56:return cst_greenyellow;
         case 57:return cst_honeydew;
         case 58:return cst_hotpink;
         case 59:return cst_indianred;
         case 60:return cst_indigo;
         case 61:return cst_ivory;
         case 62:return cst_khaki;
         case 63:return cst_lavender;
         case 64:return cst_lavenderblush;
         case 65:return cst_lawngreen;
         case 66:return cst_lemonchiffon;
         case 67:return cst_lightblue;
         case 68:return cst_lightcoral;
         case 69:return cst_lightcyan;
         case 70:return cst_lightgoldenrodyellow;
         case 71:return cst_lightgray;
         case 72:return cst_lightgreen;
         default:return cst_lightgrey}
      switch(_da_)
       {case 0:return cst_aliceblue;
        case 1:return cst_antiquewhite;
        case 2:return cst_aqua;
        case 3:return cst_aquamarine;
        case 4:return cst_azure;
        case 5:return cst_beige;
        case 6:return cst_bisque;
        case 7:return cst_black;
        case 8:return cst_blanchedalmond;
        case 9:return cst_blue;
        case 10:return cst_blueviolet;
        case 11:return cst_brown;
        case 12:return cst_burlywood;
        case 13:return cst_cadetblue;
        case 14:return cst_chartreuse;
        case 15:return cst_chocolate;
        case 16:return cst_coral;
        case 17:return cst_cornflowerblue;
        case 18:return cst_cornsilk;
        case 19:return cst_crimson;
        case 20:return cst_cyan;
        case 21:return cst_darkblue;
        case 22:return cst_darkcyan;
        case 23:return cst_darkgoldenrod;
        case 24:return cst_darkgray;
        case 25:return cst_darkgreen;
        case 26:return cst_darkgrey;
        case 27:return cst_darkkhaki;
        case 28:return cst_darkmagenta;
        case 29:return cst_darkolivegreen;
        case 30:return cst_darkorange;
        case 31:return cst_darkorchid;
        case 32:return cst_darkred;
        case 33:return cst_darksalmon;
        case 34:return cst_darkseagreen;
        case 35:return cst_darkslateblue;
        default:return cst_darkslategray}}
    function name_of_string(s)
     {var switch$0=caml_string_compare(s,cst_lightgrey$0);
      if(0 <= switch$0)
       {if(! (0 < switch$0))return 73;
        var switch$1=caml_string_compare(s,cst_paleturquoise$0);
        if(0 <= switch$1)
         {if(! (0 < switch$1))return 110;
          var switch$2=caml_string_compare(s,cst_skyblue$0);
          if(0 <= switch$2)
           {if(! (0 < switch$2))return 129;
            var switch$3=caml_string_compare(s,cst_thistle$0);
            if(0 <= switch$3)
             {if(! (0 < switch$3))return 138;
              if(! caml_string_notequal(s,cst_tomato$0))return 139;
              if(! caml_string_notequal(s,cst_turquoise$0))return 140;
              if(! caml_string_notequal(s,cst_violet$0))return 141;
              if(! caml_string_notequal(s,cst_wheat$0))return 142;
              if(! caml_string_notequal(s,cst_white$0))return 143;
              if(! caml_string_notequal(s,cst_whitesmoke$0))return 144;
              if(! caml_string_notequal(s,cst_yellow$0))return 145;
              if(! caml_string_notequal(s,cst_yellowgreen$0))return 146}
            else
             {if(! caml_string_notequal(s,cst_slateblue$0))return 130;
              if(! caml_string_notequal(s,cst_slategray$0))return 131;
              if(! caml_string_notequal(s,cst_slategrey$0))return 132;
              if(! caml_string_notequal(s,cst_snow$0))return 133;
              if(! caml_string_notequal(s,cst_springgreen$0))return 134;
              if(! caml_string_notequal(s,cst_steelblue$0))return 135;
              if(! caml_string_notequal(s,cst_tan$0))return 136;
              if(! caml_string_notequal(s,cst_teal$0))return 137}}
          else
           {var switch$4=caml_string_compare(s,cst_rosybrown$0);
            if(0 <= switch$4)
             {if(! (0 < switch$4))return 120;
              if(! caml_string_notequal(s,cst_royalblue$0))return 121;
              if(! caml_string_notequal(s,cst_saddlebrown$0))return 122;
              if(! caml_string_notequal(s,cst_salmon$0))return 123;
              if(! caml_string_notequal(s,cst_sandybrown$0))return 124;
              if(! caml_string_notequal(s,cst_seagreen$0))return 125;
              if(! caml_string_notequal(s,cst_seashell$0))return 126;
              if(! caml_string_notequal(s,cst_sienna$0))return 127;
              if(! caml_string_notequal(s,cst_silver$0))return 128}
            else
             {if(! caml_string_notequal(s,cst_palevioletred$0))return 111;
              if(! caml_string_notequal(s,cst_papayawhip$0))return 112;
              if(! caml_string_notequal(s,cst_peachpuff$0))return 113;
              if(! caml_string_notequal(s,cst_peru$0))return 114;
              if(! caml_string_notequal(s,cst_pink$0))return 115;
              if(! caml_string_notequal(s,cst_plum$0))return 116;
              if(! caml_string_notequal(s,cst_powderblue$0))return 117;
              if(! caml_string_notequal(s,cst_purple$0))return 118;
              if(! caml_string_notequal(s,cst_red$0))return 119}}}
        else
         {var switch$5=caml_string_compare(s,cst_mediumslateblue$0);
          if(0 <= switch$5)
           {if(! (0 < switch$5))return 92;
            var switch$6=caml_string_compare(s,cst_navy$0);
            if(0 <= switch$6)
             {if(! (0 < switch$6))return 101;
              if(! caml_string_notequal(s,cst_oldlace$0))return 102;
              if(! caml_string_notequal(s,cst_olive$0))return 103;
              if(! caml_string_notequal(s,cst_olivedrab$0))return 104;
              if(! caml_string_notequal(s,cst_orange$0))return 105;
              if(! caml_string_notequal(s,cst_orangered$0))return 106;
              if(! caml_string_notequal(s,cst_orchid$0))return 107;
              if(! caml_string_notequal(s,cst_palegoldenrod$0))return 108;
              if(! caml_string_notequal(s,cst_palegreen$0))return 109}
            else
             {if(! caml_string_notequal(s,cst_mediumspringgreen$0))return 93;
              if(! caml_string_notequal(s,cst_mediumturquoise$0))return 94;
              if(! caml_string_notequal(s,cst_mediumvioletred$0))return 95;
              if(! caml_string_notequal(s,cst_midnightblue$0))return 96;
              if(! caml_string_notequal(s,cst_mintcream$0))return 97;
              if(! caml_string_notequal(s,cst_mistyrose$0))return 98;
              if(! caml_string_notequal(s,cst_moccasin$0))return 99;
              if(! caml_string_notequal(s,cst_navajowhite$0))return 100}}
          else
           {var switch$7=caml_string_compare(s,cst_limegreen$0);
            if(0 <= switch$7)
             {if(! (0 < switch$7))return 83;
              if(! caml_string_notequal(s,cst_linen$0))return 84;
              if(! caml_string_notequal(s,cst_magenta$0))return 85;
              if(! caml_string_notequal(s,cst_maroon$0))return 86;
              if(! caml_string_notequal(s,cst_mediumaquamarine$0))return 87;
              if(! caml_string_notequal(s,cst_mediumblue$0))return 88;
              if(! caml_string_notequal(s,cst_mediumorchid$0))return 89;
              if(! caml_string_notequal(s,cst_mediumpurple$0))return 90;
              if(! caml_string_notequal(s,cst_mediumseagreen$0))return 91}
            else
             {if(! caml_string_notequal(s,cst_lightpink$0))return 74;
              if(! caml_string_notequal(s,cst_lightsalmon$0))return 75;
              if(! caml_string_notequal(s,cst_lightseagreen$0))return 76;
              if(! caml_string_notequal(s,cst_lightskyblue$0))return 77;
              if(! caml_string_notequal(s,cst_lightslategray$0))return 78;
              if(! caml_string_notequal(s,cst_lightslategrey$0))return 79;
              if(! caml_string_notequal(s,cst_lightsteelblue$0))return 80;
              if(! caml_string_notequal(s,cst_lightyellow$0))return 81;
              if(! caml_string_notequal(s,cst_lime$0))return 82}}}}
      else
       {var switch$8=caml_string_compare(s,cst_darkslategray$0);
        if(0 <= switch$8)
         {if(! (0 < switch$8))return 36;
          var switch$9=caml_string_compare(s,cst_greenyellow$0);
          if(0 <= switch$9)
           {if(! (0 < switch$9))return 56;
            var switch$10=caml_string_compare(s,cst_lavenderblush$0);
            if(0 <= switch$10)
             {if(! (0 < switch$10))return 64;
              if(! caml_string_notequal(s,cst_lawngreen$0))return 65;
              if(! caml_string_notequal(s,cst_lemonchiffon$0))return 66;
              if(! caml_string_notequal(s,cst_lightblue$0))return 67;
              if(! caml_string_notequal(s,cst_lightcoral$0))return 68;
              if(! caml_string_notequal(s,cst_lightcyan$0))return 69;
              if(! caml_string_notequal(s,cst_lightgoldenrodyellow$0))
               return 70;
              if(! caml_string_notequal(s,cst_lightgray$0))return 71;
              if(! caml_string_notequal(s,cst_lightgreen$0))return 72}
            else
             {if(! caml_string_notequal(s,cst_grey$0))return 54;
              if(! caml_string_notequal(s,cst_honeydew$0))return 57;
              if(! caml_string_notequal(s,cst_hotpink$0))return 58;
              if(! caml_string_notequal(s,cst_indianred$0))return 59;
              if(! caml_string_notequal(s,cst_indigo$0))return 60;
              if(! caml_string_notequal(s,cst_ivory$0))return 61;
              if(! caml_string_notequal(s,cst_khaki$0))return 62;
              if(! caml_string_notequal(s,cst_lavender$0))return 63}}
          else
           {var switch$11=caml_string_compare(s,cst_floralwhite$0);
            if(0 <= switch$11)
             {if(! (0 < switch$11))return 46;
              if(! caml_string_notequal(s,cst_forestgreen$0))return 47;
              if(! caml_string_notequal(s,cst_fuchsia$0))return 48;
              if(! caml_string_notequal(s,cst_gainsboro$0))return 49;
              if(! caml_string_notequal(s,cst_ghostwhite$0))return 50;
              if(! caml_string_notequal(s,cst_gold$0))return 51;
              if(! caml_string_notequal(s,cst_goldenrod$0))return 52;
              if(! caml_string_notequal(s,cst_gray$0))return 53;
              if(! caml_string_notequal(s,cst_green$0))return 55}
            else
             {if(! caml_string_notequal(s,cst_darkslategrey$0))return 37;
              if(! caml_string_notequal(s,cst_darkturquoise$0))return 38;
              if(! caml_string_notequal(s,cst_darkviolet$0))return 39;
              if(! caml_string_notequal(s,cst_deeppink$0))return 40;
              if(! caml_string_notequal(s,cst_deepskyblue$0))return 41;
              if(! caml_string_notequal(s,cst_dimgray$0))return 42;
              if(! caml_string_notequal(s,cst_dimgrey$0))return 43;
              if(! caml_string_notequal(s,cst_dodgerblue$0))return 44;
              if(! caml_string_notequal(s,cst_firebrick$0))return 45}}}
        else
         {var switch$12=caml_string_compare(s,cst_cornsilk$0);
          if(0 <= switch$12)
           {if(! (0 < switch$12))return 18;
            var switch$13=caml_string_compare(s,cst_darkkhaki$0);
            if(0 <= switch$13)
             {if(! (0 < switch$13))return 27;
              if(! caml_string_notequal(s,cst_darkmagenta$0))return 28;
              if(! caml_string_notequal(s,cst_darkolivegreen$0))return 29;
              if(! caml_string_notequal(s,cst_darkorange$0))return 30;
              if(! caml_string_notequal(s,cst_darkorchid$0))return 31;
              if(! caml_string_notequal(s,cst_darkred$0))return 32;
              if(! caml_string_notequal(s,cst_darksalmon$0))return 33;
              if(! caml_string_notequal(s,cst_darkseagreen$0))return 34;
              if(! caml_string_notequal(s,cst_darkslateblue$0))return 35}
            else
             {if(! caml_string_notequal(s,cst_crimson$0))return 19;
              if(! caml_string_notequal(s,cst_cyan$0))return 20;
              if(! caml_string_notequal(s,cst_darkblue$0))return 21;
              if(! caml_string_notequal(s,cst_darkcyan$0))return 22;
              if(! caml_string_notequal(s,cst_darkgoldenrod$0))return 23;
              if(! caml_string_notequal(s,cst_darkgray$0))return 24;
              if(! caml_string_notequal(s,cst_darkgreen$0))return 25;
              if(! caml_string_notequal(s,cst_darkgrey$0))return 26}}
          else
           {var switch$14=caml_string_compare(s,cst_blue$0);
            if(0 <= switch$14)
             {if(! (0 < switch$14))return 9;
              if(! caml_string_notequal(s,cst_blueviolet$0))return 10;
              if(! caml_string_notequal(s,cst_brown$0))return 11;
              if(! caml_string_notequal(s,cst_burlywood$0))return 12;
              if(! caml_string_notequal(s,cst_cadetblue$0))return 13;
              if(! caml_string_notequal(s,cst_chartreuse$0))return 14;
              if(! caml_string_notequal(s,cst_chocolate$0))return 15;
              if(! caml_string_notequal(s,cst_coral$0))return 16;
              if(! caml_string_notequal(s,cst_cornflowerblue$0))return 17}
            else
             {if(! caml_string_notequal(s,cst_aliceblue$0))return 0;
              if(! caml_string_notequal(s,cst_antiquewhite$0))return 1;
              if(! caml_string_notequal(s,cst_aqua$0))return 2;
              if(! caml_string_notequal(s,cst_aquamarine$0))return 3;
              if(! caml_string_notequal(s,cst_azure$0))return 4;
              if(! caml_string_notequal(s,cst_beige$0))return 5;
              if(! caml_string_notequal(s,cst_bisque$0))return 6;
              if(! caml_string_notequal(s,cst_black$0))return 7;
              if(! caml_string_notequal(s,cst_blanchedalmond$0))return 8}}}}
      var _c$_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_color_name);
      throw [0,Stdlib[6],_c$_]}
    function rgb_of_name(param)
     {var _c__=param;
      if(74 <= _c__)
       {if(111 <= _c__)
         switch(_c__)
          {case 111:return _bo_;
           case 112:return _bp_;
           case 113:return _bq_;
           case 114:return _br_;
           case 115:return _bs_;
           case 116:return _bt_;
           case 117:return _bu_;
           case 118:return _bv_;
           case 119:return _bw_;
           case 120:return _bx_;
           case 121:return _by_;
           case 122:return _bz_;
           case 123:return _bA_;
           case 124:return _bB_;
           case 125:return _bC_;
           case 126:return _bD_;
           case 127:return _bE_;
           case 128:return _bF_;
           case 129:return _bG_;
           case 130:return _bH_;
           case 131:return _bI_;
           case 132:return _bJ_;
           case 133:return _bK_;
           case 134:return _bL_;
           case 135:return _bM_;
           case 136:return _bN_;
           case 137:return _bO_;
           case 138:return _bP_;
           case 139:return _bQ_;
           case 140:return _bR_;
           case 141:return _bS_;
           case 142:return _bT_;
           case 143:return _bU_;
           case 144:return _bV_;
           case 145:return _bW_;
           default:return _bX_}
        switch(_c__)
         {case 74:return _aP_;
          case 75:return _aQ_;
          case 76:return _aR_;
          case 77:return _aS_;
          case 78:return _aT_;
          case 79:return _aU_;
          case 80:return _aV_;
          case 81:return _aW_;
          case 82:return _aX_;
          case 83:return _aY_;
          case 84:return _aZ_;
          case 85:return _a0_;
          case 86:return _a1_;
          case 87:return _a2_;
          case 88:return _a3_;
          case 89:return _a4_;
          case 90:return _a5_;
          case 91:return _a6_;
          case 92:return _a7_;
          case 93:return _a8_;
          case 94:return _a9_;
          case 95:return _a__;
          case 96:return _a$_;
          case 97:return _ba_;
          case 98:return _bb_;
          case 99:return _bc_;
          case 100:return _bd_;
          case 101:return _be_;
          case 102:return _bf_;
          case 103:return _bg_;
          case 104:return _bh_;
          case 105:return _bi_;
          case 106:return _bj_;
          case 107:return _bk_;
          case 108:return _bl_;
          case 109:return _bm_;
          default:return _bn_}}
      if(37 <= _c__)
       switch(_c__)
        {case 37:return _ae_;
         case 38:return _af_;
         case 39:return _ag_;
         case 40:return _ah_;
         case 41:return _ai_;
         case 42:return _aj_;
         case 43:return _ak_;
         case 44:return _al_;
         case 45:return _am_;
         case 46:return _an_;
         case 47:return _ao_;
         case 48:return _ap_;
         case 49:return _aq_;
         case 50:return _ar_;
         case 51:return _as_;
         case 52:return _at_;
         case 53:return _au_;
         case 54:return _av_;
         case 55:return _aw_;
         case 56:return _ax_;
         case 57:return _ay_;
         case 58:return _az_;
         case 59:return _aA_;
         case 60:return _aB_;
         case 61:return _aC_;
         case 62:return _aD_;
         case 63:return _aE_;
         case 64:return _aF_;
         case 65:return _aG_;
         case 66:return _aH_;
         case 67:return _aI_;
         case 68:return _aJ_;
         case 69:return _aK_;
         case 70:return _aL_;
         case 71:return _aM_;
         case 72:return _aN_;
         default:return _aO_}
      switch(_c__)
       {case 0:return _v_;
        case 1:return _w_;
        case 2:return _x_;
        case 3:return _y_;
        case 4:return _z_;
        case 5:return _A_;
        case 6:return _B_;
        case 7:return _C_;
        case 8:return _D_;
        case 9:return _E_;
        case 10:return _F_;
        case 11:return _G_;
        case 12:return _H_;
        case 13:return _I_;
        case 14:return _J_;
        case 15:return _K_;
        case 16:return _L_;
        case 17:return _M_;
        case 18:return _N_;
        case 19:return _O_;
        case 20:return _P_;
        case 21:return _Q_;
        case 22:return _R_;
        case 23:return _S_;
        case 24:return _T_;
        case 25:return _U_;
        case 26:return _V_;
        case 27:return _W_;
        case 28:return _X_;
        case 29:return _Y_;
        case 30:return _Z_;
        case 31:return ___;
        case 32:return _$_;
        case 33:return _aa_;
        case 34:return _ab_;
        case 35:return _ac_;
        default:return _ad_}}
    function rgb(a,r,g,b)
     {if(a){var a$0=a[1];return [3,[0,r,g,b,a$0]]}return [1,[0,r,g,b]]}
    function hsl(a,h,s,l)
     {if(a){var a$0=a[1];return [6,[0,h,s,l,a$0]]}return [5,[0,h,s,l]]}
    function string_of_t(param)
     {switch(param[0])
       {case 0:var n=param[1];return string_of_name(n);
        case 1:
         var match=param[1],b=match[3],g=match[2],r=match[1];
         return caml_call4(Stdlib_printf[4],_bY_,r,g,b);
        case 2:
         var match$0=param[1],b$0=match$0[3],g$0=match$0[2],r$0=match$0[1];
         return caml_call4(Stdlib_printf[4],_bZ_,r$0,g$0,b$0);
        case 3:
         var
          match$1=param[1],
          a=match$1[4],
          b$1=match$1[3],
          g$1=match$1[2],
          r$1=match$1[1];
         return caml_call5(Stdlib_printf[4],_b0_,r$1,g$1,b$1,a);
        case 4:
         var
          match$2=param[1],
          a$0=match$2[4],
          b$2=match$2[3],
          g$2=match$2[2],
          r$2=match$2[1];
         return caml_call5(Stdlib_printf[4],_b1_,r$2,g$2,b$2,a$0);
        case 5:
         var match$3=param[1],l=match$3[3],s=match$3[2],h=match$3[1];
         return caml_call4(Stdlib_printf[4],_b2_,h,s,l);
        default:
         var
          match$4=param[1],
          a$1=match$4[4],
          l$0=match$4[3],
          s$0=match$4[2],
          h$0=match$4[1];
         return caml_call5(Stdlib_printf[4],_b3_,h$0,s$0,l$0,a$1)}}
    function hex_of_rgb(param)
     {var blue=param[3],green=param[2],red=param[1];
      function in_range(i)
       {var
         _c6_=caml_call2(symbol$5,i,0),
         _c7_=_c6_ || caml_call2(symbol$9,i,255);
        if(_c7_)
         {var
           _c8_=caml_call1(Stdlib[33],i),
           _c9_=caml_call2(Stdlib[28],_c8_,cst_is_out_of_valid_range);
          throw [0,Stdlib[6],_c9_]}
        return _c7_}
      in_range(red);
      in_range(green);
      in_range(blue);
      return caml_call4(Stdlib_printf[4],_b4_,red,green,blue)}
    function js_t_of_js_string(s)
     {var
       rgb_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_rgb_s_d_s_d_s_d)),
       rgb_pct_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_rgb_s_d_s_d_s_d$0)),
       rgba_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_rgba_s_d_s_d_s_d_d_d)),
       rgba_pct_re=
        new
         regExp_withFlags
         (caml_jsbytes_of_string(cst_rgba_s_d_s_d_s_d_d_d$0)),
       hsl_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_hsl_s_d_s_d_s_d)),
       hsla_re=
        new regExp_withFlags(caml_jsbytes_of_string(cst_hsla_s_d_s_d_s_d_d_d));
      if(! (rgb_re.test(s) | 0))
       if(! (rgba_re.test(s) | 0))
        if(! (rgb_pct_re.test(s) | 0))
         if(! (rgba_pct_re.test(s) | 0))
          if(! (hsl_re.test(s) | 0))
           if(! (hsla_re.test(s) | 0))
            {if(caml_call2(Stdlib_list[32],caml_js_to_string(s),_b5_))
              return s;
             var
              _c5_=
               caml_call2
                (Stdlib[28],caml_js_to_string(s),cst_is_not_a_valid_color);
             throw [0,Stdlib[6],_c5_]}
      return s}
    function js(c)
     {if(0 === c[0]){var n=c[1];return string_of_name(n).toString()}
      return string_of_t(c).toString()}
    function ml(c)
     {var s=caml_js_to_string(c);
      try
       {var _cS_=[0,name_of_string(s)];return _cS_}
      catch(_cT_)
       {_cT_ = caml_wrap_exception(_cT_);
        if(_cT_[1] === Stdlib[6])
         {var
           fail=
            function(param)
             {var _c4_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_color$0);
              throw [0,Stdlib[6],_c4_]},
           re_rgb=regexp(cst_rgba_d_d_d_d_d),
           re_rgb_pct=regexp(cst_rgba_d_d_d_d_d$0),
           re_hsl=regexp(cst_hsla_d_d_d_d_d),
           i_of_s_o=
            function(param)
             {if(param)
               {var i=param[1];
                try
                 {var _c2_=caml_int_of_string(i);return _c2_}
                catch(_c3_)
                 {_c3_ = caml_wrap_exception(_c3_);
                  if(_c3_[1] === Stdlib[6])
                   var s=_c3_[2];
                  else
                   {if(_c3_[1] !== Stdlib[7])throw _c3_;var s=_c3_[2]}
                  var
                   _cZ_=caml_call2(Stdlib[28],cst$39,s),
                   _c0_=caml_call2(Stdlib[28],i,_cZ_),
                   _c1_=caml_call2(Stdlib[28],cst_color_conversion_error,_c0_);
                  throw [0,Stdlib[6],_c1_]}}
              return fail(0)},
           f_of_s=
            function(f)
             {try
               {var _cX_=caml_float_of_string(f);return _cX_}
              catch(_cY_)
               {_cY_ = caml_wrap_exception(_cY_);
                if(_cY_[1] === Stdlib[6])
                 var s=_cY_[2];
                else
                 {if(_cY_[1] !== Stdlib[7])throw _cY_;var s=_cY_[2]}
                var
                 _cU_=caml_call2(Stdlib[28],cst$40,s),
                 _cV_=caml_call2(Stdlib[28],f,_cU_),
                 _cW_=caml_call2(Stdlib[28],cst_color_conversion_error$0,_cV_);
                throw [0,Stdlib[6],_cW_]}},
           match=string_match(re_rgb,s,0);
          if(match)
           {var
             r=match[1],
             red=matched_group(r,2),
             green=matched_group(r,3),
             blue=matched_group(r,4),
             alpha=matched_group(r,5),
             match$0=matched_group(r,1);
            if(match$0)
             {var _cA_=match$0[1];
              if(! caml_string_notequal(_cA_,cst_rgb))
               {if(alpha)return fail(0);
                var _cE_=i_of_s_o(blue),_cF_=i_of_s_o(green);
                return [1,[0,i_of_s_o(red),_cF_,_cE_]]}
              if(! caml_string_notequal(_cA_,cst_rgba))
               {if(alpha)
                 {var
                   a=alpha[1],
                   _cB_=f_of_s(a),
                   _cC_=i_of_s_o(blue),
                   _cD_=i_of_s_o(green);
                  return [3,[0,i_of_s_o(red),_cD_,_cC_,_cB_]]}
                return fail(0)}}
            return fail(0)}
          var match$1=string_match(re_rgb_pct,s,0);
          if(match$1)
           {var
             r$0=match$1[1],
             red$0=matched_group(r$0,2),
             green$0=matched_group(r$0,3),
             blue$0=matched_group(r$0,4),
             alpha$0=matched_group(r$0,5),
             match$2=matched_group(r$0,1);
            if(match$2)
             {var _cG_=match$2[1];
              if(! caml_string_notequal(_cG_,cst_rgb$0))
               {if(alpha$0)return fail(0);
                var _cK_=i_of_s_o(blue$0),_cL_=i_of_s_o(green$0);
                return [2,[0,i_of_s_o(red$0),_cL_,_cK_]]}
              if(! caml_string_notequal(_cG_,cst_rgba$0))
               {if(alpha$0)
                 {var
                   a$0=alpha$0[1],
                   _cH_=f_of_s(a$0),
                   _cI_=i_of_s_o(blue$0),
                   _cJ_=i_of_s_o(green$0);
                  return [4,[0,i_of_s_o(red$0),_cJ_,_cI_,_cH_]]}
                return fail(0)}}
            return fail(0)}
          var match$3=string_match(re_hsl,s,0);
          if(match$3)
           {var
             r$1=match$3[1],
             red$1=matched_group(r$1,2),
             green$1=matched_group(r$1,3),
             blue$1=matched_group(r$1,4),
             alpha$1=matched_group(r$1,5),
             match$4=matched_group(r$1,1);
            if(match$4)
             {var _cM_=match$4[1];
              if(! caml_string_notequal(_cM_,cst_hsl))
               {if(alpha$1)return fail(0);
                var _cQ_=i_of_s_o(blue$1),_cR_=i_of_s_o(green$1);
                return [5,[0,i_of_s_o(red$1),_cR_,_cQ_]]}
              if(! caml_string_notequal(_cM_,cst_hsla))
               {if(alpha$1)
                 {var
                   a$1=alpha$1[1],
                   _cN_=f_of_s(a$1),
                   _cO_=i_of_s_o(blue$1),
                   _cP_=i_of_s_o(green$1);
                  return [6,[0,i_of_s_o(red$1),_cP_,_cO_,_cN_]]}
                return fail(0)}}
            return fail(0)}
          return fail(0)}
        throw _cT_}}
    function string_of_t$0(param)
     {if(typeof param === "number")
       return cst_0;
      else
       switch(param[0])
        {case 0:
          var f=param[1];return caml_call3(Stdlib_printf[4],_b6_,f,cst_em$0);
         case 1:
          var f$0=param[1];
          return caml_call3(Stdlib_printf[4],_b7_,f$0,cst_ex);
         case 2:
          var f$1=param[1];
          return caml_call3(Stdlib_printf[4],_b8_,f$1,cst_px);
         case 3:
          var f$2=param[1];
          return caml_call3(Stdlib_printf[4],_b9_,f$2,cst_gd);
         case 4:
          var f$3=param[1];
          return caml_call3(Stdlib_printf[4],_b__,f$3,cst_rem);
         case 5:
          var f$4=param[1];
          return caml_call3(Stdlib_printf[4],_b$_,f$4,cst_vw);
         case 6:
          var f$5=param[1];
          return caml_call3(Stdlib_printf[4],_ca_,f$5,cst_vh);
         case 7:
          var f$6=param[1];
          return caml_call3(Stdlib_printf[4],_cb_,f$6,cst_vm);
         case 8:
          var f$7=param[1];
          return caml_call3(Stdlib_printf[4],_cc_,f$7,cst_ch);
         case 9:
          var f$8=param[1];
          return caml_call3(Stdlib_printf[4],_cd_,f$8,cst_mm);
         case 10:
          var f$9=param[1];
          return caml_call3(Stdlib_printf[4],_ce_,f$9,cst_cm);
         case 11:
          var f$10=param[1];
          return caml_call3(Stdlib_printf[4],_cf_,f$10,cst_in);
         case 12:
          var f$11=param[1];
          return caml_call3(Stdlib_printf[4],_cg_,f$11,cst_pt);
         default:
          var f$12=param[1];
          return caml_call3(Stdlib_printf[4],_ch_,f$12,cst_pc)}}
    function js$0(t){return string_of_t$0(t).toString()}
    function ml$0(t)
     {var s=caml_js_to_string(t);
      if(caml_call2(String[38],s,cst_0$0))return 0;
      function fail(param)
       {var _cz_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_length);
        throw [0,Stdlib[6],_cz_]}
      var re=regexp(cst_d_d_s_S),match=string_match(re,s,0);
      if(match)
       {var r=match[1],match$0=matched_group(r,1);
        if(match$0)
         {var f=match$0[1];
          try
           {var _cx_=caml_float_of_string(f)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn[1] === Stdlib[6])
             {var
               s$0=exn[2],
               _cw_=caml_call2(Stdlib[28],cst_length_conversion_error,s$0);
              throw [0,Stdlib[6],_cw_]}
            throw exn}
          var f$0=_cx_}
        else
         var f$0=fail(0);
        var match$1=matched_group(r,2);
        if(match$1)
         {var _cy_=match$1[1],switch$0=caml_string_compare(_cy_,cst_pc$0);
          if(0 <= switch$0)
           {if(! (0 < switch$0))return [13,f$0];
            if(! caml_string_notequal(_cy_,cst_pt$0))return [12,f$0];
            if(! caml_string_notequal(_cy_,cst_px$0))return [2,f$0];
            if(! caml_string_notequal(_cy_,cst_rem$0))return [4,f$0];
            if(! caml_string_notequal(_cy_,cst_vh$0))return [6,f$0];
            if(! caml_string_notequal(_cy_,cst_vm$0))return [7,f$0];
            if(! caml_string_notequal(_cy_,cst_vw$0))return [5,f$0]}
          else
           {if(! caml_string_notequal(_cy_,cst_ch$0))return [8,f$0];
            if(! caml_string_notequal(_cy_,cst_cm$0))return [10,f$0];
            if(! caml_string_notequal(_cy_,cst_em$1))return [0,f$0];
            if(! caml_string_notequal(_cy_,cst_ex$0))return [1,f$0];
            if(! caml_string_notequal(_cy_,cst_gd$0))return [3,f$0];
            if(! caml_string_notequal(_cy_,cst_in$0))return [11,f$0];
            if(! caml_string_notequal(_cy_,cst_mm$0))return [9,f$0]}
          return fail(0)}
        return fail(0)}
      return fail(0)}
    var Length=[0,string_of_t$0,js$0,ml$0];
    function string_of_t$1(param)
     {switch(param[0])
       {case 0:
         var f=param[1];return caml_call3(Stdlib_printf[4],_ci_,f,cst_deg);
        case 1:
         var f$0=param[1];
         return caml_call3(Stdlib_printf[4],_cj_,f$0,cst_grad);
        case 2:
         var f$1=param[1];
         return caml_call3(Stdlib_printf[4],_ck_,f$1,cst_rad);
        default:
         var f$2=param[1];
         return caml_call3(Stdlib_printf[4],_cl_,f$2,cst_turns)}}
    function js$1(t){return string_of_t$1(t).toString()}
    function ml$1(j)
     {var s=caml_js_to_string(j),re=regexp(cst_d_d_deg_grad_rad_turns);
      function fail(param)
       {var _cv_=caml_call2(Stdlib[28],s,cst_is_not_a_valid_length$0);
        throw [0,Stdlib[6],_cv_]}
      var match=string_match(re,s,0);
      if(match)
       {var r=match[1],match$0=matched_group(r,1);
        if(match$0)
         {var f=match$0[1];
          try
           {var _ct_=caml_float_of_string(f)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn[1] === Stdlib[6])
             {var
               s$0=exn[2],
               _cs_=caml_call2(Stdlib[28],cst_length_conversion_error$0,s$0);
              throw [0,Stdlib[6],_cs_]}
            throw exn}
          var f$0=_ct_}
        else
         var f$0=fail(0);
        var match$1=matched_group(r,2);
        if(match$1)
         {var _cu_=match$1[1];
          if(! caml_string_notequal(_cu_,cst_deg$0))return [0,f$0];
          if(! caml_string_notequal(_cu_,cst_grad$0))return [1,f$0];
          if(! caml_string_notequal(_cu_,cst_rad$0))return [2,f$0];
          if(! caml_string_notequal(_cu_,cst_turns$0))return [3,f$0]}
        return fail(0)}
      return fail(0)}
    var
     Angle=[0,string_of_t$1,js$1,ml$1],
     Js_of_ocaml_CSS=
      [0,
       [0,
        string_of_name,
        rgb_of_name,
        hex_of_rgb,
        rgb,
        hsl,
        string_of_t,
        js,
        ml,
        js_t_of_js_string],
       Length,
       Angle];
    caml_register_global(1658,Js_of_ocaml_CSS,"Js_of_ocaml__CSS");
    function listen(opt,target,typ,cb)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var _cr_=! ! capture;
      return addEventListener
              (target,
               typ,
               full_handler(function(n,e){return ! ! caml_call2(cb,n,e)}),
               _cr_)}
    var Js_of_ocaml_Dom_events=[0,Event$0,listen,removeEventListener];
    caml_register_global
     (1659,Js_of_ocaml_Dom_events,"Js_of_ocaml__Dom_events");
    var
     xmlns="http://www.w3.org/2000/svg",
     SVGError=[248,cst_Js_of_ocaml_Dom_svg_SVGError,caml_fresh_oo_id(0)];
    function createElement$0(doc,name)
     {return doc.createElementNS(xmlns,name.toString())}
    function unsafeCreateElement$0(doc,name){return createElement$0(doc,name)}
    function createA$0(doc){return unsafeCreateElement$0(doc,cst_a$2)}
    function createAltGlyph(doc)
     {return unsafeCreateElement$0(doc,cst_altglyph)}
    function createAltGlyphDef(doc)
     {return unsafeCreateElement$0(doc,cst_altglyphdef)}
    function createAltGlyphItem(doc)
     {return unsafeCreateElement$0(doc,cst_altglyphitem)}
    function createAnimate(doc){return unsafeCreateElement$0(doc,cst_animate)}
    function createAnimateColor(doc)
     {return unsafeCreateElement$0(doc,cst_animatecolor)}
    function createAnimateMotion(doc)
     {return unsafeCreateElement$0(doc,cst_animatemotion)}
    function createAnimateTransform(doc)
     {return unsafeCreateElement$0(doc,cst_animatetransform)}
    function createCircle(doc){return unsafeCreateElement$0(doc,cst_circle)}
    function createClipPath(doc)
     {return unsafeCreateElement$0(doc,cst_clippath)}
    function createCursor(doc){return unsafeCreateElement$0(doc,cst_cursor)}
    function createDefs(doc){return unsafeCreateElement$0(doc,cst_defs)}
    function createDesc(doc){return unsafeCreateElement$0(doc,cst_desc)}
    function createEllipse(doc){return unsafeCreateElement$0(doc,cst_ellipse)}
    function createFilter(doc){return unsafeCreateElement$0(doc,cst_filter)}
    function createFont(doc){return unsafeCreateElement$0(doc,cst_font)}
    function createFontFace(doc)
     {return unsafeCreateElement$0(doc,cst_font_face)}
    function createFontFaceFormat(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_format)}
    function createFontFaceName(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_name)}
    function createFontFaceSrc(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_src)}
    function createFontFaceUri(doc)
     {return unsafeCreateElement$0(doc,cst_font_face_uri)}
    function createForeignObject(doc)
     {return unsafeCreateElement$0(doc,cst_foreignObject)}
    function createG(doc){return unsafeCreateElement$0(doc,cst_g$0)}
    function createGlyph(doc){return unsafeCreateElement$0(doc,cst_glyph)}
    function createGlyphRef(doc)
     {return unsafeCreateElement$0(doc,cst_glyphref)}
    function createhkern(doc){return unsafeCreateElement$0(doc,cst_hkern)}
    function createImage(doc){return unsafeCreateElement$0(doc,cst_image)}
    function createLineElement(doc)
     {return unsafeCreateElement$0(doc,cst_line)}
    function createLinearElement(doc)
     {return unsafeCreateElement$0(doc,cst_lineargradient)}
    function createMask(doc){return unsafeCreateElement$0(doc,cst_mask)}
    function createMetaData(doc)
     {return unsafeCreateElement$0(doc,cst_metadata)}
    function createMissingGlyph(doc)
     {return unsafeCreateElement$0(doc,cst_missing_glyph)}
    function createMPath(doc){return unsafeCreateElement$0(doc,cst_mpath)}
    function createPath(doc){return unsafeCreateElement$0(doc,cst_path)}
    function createPattern(doc){return unsafeCreateElement$0(doc,cst_pattern)}
    function createPolygon(doc){return unsafeCreateElement$0(doc,cst_polygon)}
    function createPolyline(doc)
     {return unsafeCreateElement$0(doc,cst_polyline)}
    function createRadialgradient(doc)
     {return unsafeCreateElement$0(doc,cst_radialgradient)}
    function createRect(doc){return unsafeCreateElement$0(doc,cst_rect)}
    function createScript$0(doc)
     {return unsafeCreateElement$0(doc,cst_script$2)}
    function createSet(doc){return unsafeCreateElement$0(doc,cst_set)}
    function createStop(doc){return unsafeCreateElement$0(doc,cst_stop)}
    function createStyle$0(doc){return unsafeCreateElement$0(doc,cst_style$2)}
    function createSvg(doc){return unsafeCreateElement$0(doc,cst_svg)}
    function createSwitch(doc){return unsafeCreateElement$0(doc,cst_switch)}
    function createSymbol(doc){return unsafeCreateElement$0(doc,cst_symbol)}
    function createTextElement(doc)
     {return unsafeCreateElement$0(doc,cst_text$0)}
    function createTextpath(doc)
     {return unsafeCreateElement$0(doc,cst_textpath)}
    function createTitle$0(doc){return unsafeCreateElement$0(doc,cst_title$2)}
    function createTref(doc){return unsafeCreateElement$0(doc,cst_tref)}
    function createTspan(doc){return unsafeCreateElement$0(doc,cst_tspan)}
    function createUse(doc){return unsafeCreateElement$0(doc,cst_use)}
    function createView(doc){return unsafeCreateElement$0(doc,cst_view)}
    function createvkern(doc){return unsafeCreateElement$0(doc,cst_vkern)}
    var svg_element=Unsafe[1].SVGElement,document$1=Unsafe[1].document;
    function getElementById$0(id)
     {function _co_(e){if(e instanceof svg_element)return e;throw Stdlib[8]}
      function _cp_(param){throw Stdlib[8]}
      var _cq_=Unsafe[1].document.getElementById(id.toString());
      return caml_call3(Opt[7],_cq_,_cp_,_co_)}
    function element$2(e){return e instanceof svg_element?e:no_handler}
    function unsafeCoerce$0(e,tag)
     {var _cn_=tag.toString();
      return e.tagName.toLowerCase() === _cn_?e:no_handler}
    function a$0(e){return unsafeCoerce$0(e,cst_a$3)}
    function altGlyph(e){return unsafeCoerce$0(e,cst_altglyph$0)}
    function altGlyphDef(e){return unsafeCoerce$0(e,cst_altglyphdef$0)}
    function altGlyphItem(e){return unsafeCoerce$0(e,cst_altglyphitem$0)}
    function animate(e){return unsafeCoerce$0(e,cst_animate$0)}
    function animateColor(e){return unsafeCoerce$0(e,cst_animatecolor$0)}
    function animateMotion(e){return unsafeCoerce$0(e,cst_animatemotion$0)}
    function animateTransform(e)
     {return unsafeCoerce$0(e,cst_animatetransform$0)}
    function circle(e){return unsafeCoerce$0(e,cst_circle$0)}
    function clipPath(e){return unsafeCoerce$0(e,cst_clippath$0)}
    function cursor(e){return unsafeCoerce$0(e,cst_cursor$0)}
    function defs(e){return unsafeCoerce$0(e,cst_defs$0)}
    function desc(e){return unsafeCoerce$0(e,cst_desc$0)}
    function ellipse(e){return unsafeCoerce$0(e,cst_ellipse$0)}
    function filter(e){return unsafeCoerce$0(e,cst_filter$0)}
    function font(e){return unsafeCoerce$0(e,cst_font$0)}
    function fontFace(e){return unsafeCoerce$0(e,cst_font_face$0)}
    function fontFaceFormat(e)
     {return unsafeCoerce$0(e,cst_font_face_format$0)}
    function fontFaceName(e){return unsafeCoerce$0(e,cst_font_face_name$0)}
    function fontFaceSrc(e){return unsafeCoerce$0(e,cst_font_face_src$0)}
    function fontFaceUri(e){return unsafeCoerce$0(e,cst_font_face_uri$0)}
    function foreignObject(e){return unsafeCoerce$0(e,cst_foreignobject)}
    function g(e){return unsafeCoerce$0(e,cst_g$1)}
    function glyph(e){return unsafeCoerce$0(e,cst_glyph$0)}
    function glyphRef(e){return unsafeCoerce$0(e,cst_glyphref$0)}
    function hkern(e){return unsafeCoerce$0(e,cst_hkern$0)}
    function image(e){return unsafeCoerce$0(e,cst_image$0)}
    function lineElement(e){return unsafeCoerce$0(e,cst_line$0)}
    function linearElement(e){return unsafeCoerce$0(e,cst_lineargradient$0)}
    function mask(e){return unsafeCoerce$0(e,cst_mask$0)}
    function metaData(e){return unsafeCoerce$0(e,cst_metadata$0)}
    function missingGlyph(e){return unsafeCoerce$0(e,cst_missing_glyph$0)}
    function mPath(e){return unsafeCoerce$0(e,cst_mpath$0)}
    function path$0(e){return unsafeCoerce$0(e,cst_path$0)}
    function pattern(e){return unsafeCoerce$0(e,cst_pattern$0)}
    function polygon(e){return unsafeCoerce$0(e,cst_polygon$0)}
    function polyline(e){return unsafeCoerce$0(e,cst_polyline$0)}
    function radialgradient(e){return unsafeCoerce$0(e,cst_radialgradient$0)}
    function rect(e){return unsafeCoerce$0(e,cst_rect$0)}
    function script$0(e){return unsafeCoerce$0(e,cst_script$3)}
    function set$1(e){return unsafeCoerce$0(e,cst_set$0)}
    function stop(e){return unsafeCoerce$0(e,cst_stop$0)}
    function style$0(e){return unsafeCoerce$0(e,cst_style$3)}
    function svg(e){return unsafeCoerce$0(e,cst_svg$0)}
    function switch$0(e){return unsafeCoerce$0(e,cst_switch$0)}
    function symbol$12(e){return unsafeCoerce$0(e,cst_symbol$0)}
    function textElement(e){return unsafeCoerce$0(e,cst_text$1)}
    function textpath(e){return unsafeCoerce$0(e,cst_textpath$0)}
    function title$0(e){return unsafeCoerce$0(e,cst_title$3)}
    function tref(e){return unsafeCoerce$0(e,cst_tref$0)}
    function tspan(e){return unsafeCoerce$0(e,cst_tspan$0)}
    function use(e){return unsafeCoerce$0(e,cst_use$0)}
    function view(e){return unsafeCoerce$0(e,cst_view$0)}
    function vkern(e){return unsafeCoerce$0(e,cst_vkern$0)}
    var
     Js_of_ocaml_Dom_svg=
      [0,
       xmlns,
       SVGError,
       createElement$0,
       createA$0,
       createAltGlyph,
       createAltGlyphDef,
       createAltGlyphItem,
       createAnimate,
       createAnimateColor,
       createAnimateMotion,
       createAnimateTransform,
       createCircle,
       createClipPath,
       createCursor,
       createDefs,
       createDesc,
       createEllipse,
       createFilter,
       createFont,
       createFontFace,
       createFontFaceFormat,
       createFontFaceName,
       createFontFaceSrc,
       createFontFaceUri,
       createForeignObject,
       createG,
       createGlyph,
       createGlyphRef,
       createhkern,
       createImage,
       createLineElement,
       createLinearElement,
       createMask,
       createMetaData,
       createMissingGlyph,
       createMPath,
       createPath,
       createPattern,
       createPolygon,
       createPolyline,
       createRadialgradient,
       createRect,
       createScript$0,
       createSet,
       createStop,
       createStyle$0,
       createSvg,
       createSwitch,
       createSymbol,
       createTextElement,
       createTextpath,
       createTitle$0,
       createTref,
       createTspan,
       createUse,
       createView,
       createvkern,
       svg_element,
       document$1,
       getElementById$0,
       [0,
        element$2,
        a$0,
        altGlyph,
        altGlyphDef,
        altGlyphItem,
        animate,
        animateColor,
        animateMotion,
        animateTransform,
        circle,
        clipPath,
        cursor,
        defs,
        desc,
        ellipse,
        filter,
        font,
        fontFace,
        fontFaceFormat,
        fontFaceName,
        fontFaceSrc,
        fontFaceUri,
        foreignObject,
        g,
        glyph,
        glyphRef,
        hkern,
        image,
        lineElement,
        linearElement,
        mask,
        metaData,
        missingGlyph,
        mPath,
        path$0,
        pattern,
        polygon,
        polyline,
        radialgradient,
        rect,
        script$0,
        set$1,
        stop,
        style$0,
        svg,
        switch$0,
        symbol$12,
        textElement,
        textpath,
        title$0,
        tref,
        tspan,
        use,
        view,
        vkern]];
    caml_register_global(1660,Js_of_ocaml_Dom_svg,"Js_of_ocaml__Dom_svg");
    function withCredentials(b)
     {var init={};init.withCredentials = ! ! b;return init}
    var
     eventSource=Unsafe[1].EventSource,
     eventSource_options=Unsafe[1].EventSource,
     Js_of_ocaml_EventSource=
      [0,withCredentials,eventSource,eventSource_options,addEventListener];
    caml_register_global
     (1661,Js_of_ocaml_EventSource,"Js_of_ocaml__EventSource");
    var
     console=runtime.caml_js_get_console(0),
     Js_of_ocaml_Firebug=[0,console];
    caml_register_global(1662,Js_of_ocaml_Firebug,"Js_of_ocaml__Firebug");
    function empty_position_options(param){return {}}
    var
     x=Unsafe[1].navigator,
     geolocation=caml_call1(Optdef[5],x)?x.geolocation:x;
    function is_supported$2(param){return caml_call1(Optdef[5],geolocation)}
    var
     Js_of_ocaml_Geolocation=
      [0,empty_position_options,geolocation,is_supported$2];
    caml_register_global
     (1663,Js_of_ocaml_Geolocation,"Js_of_ocaml__Geolocation");
    function object_options(param){return {"localeMatcher":"best fit"}}
    function options(param)
     {return {"localeMatcher":"best fit",
              "usage":"sort",
              "sensitivity":"variant",
              "ignorePunctuation":false$0,
              "numeric":false$0,
              "caseFirst":"false"}}
    var Collator=[0,object_options,options];
    function options$0(param)
     {return {"localeMatcher":"best fit",
              "timeZone":t37,
              "hour12":t37,
              "hourCycle":t37,
              "formatMatcher":"best fit",
              "weekday":t37,
              "era":t37,
              "year":t37,
              "month":t37,
              "day":t37,
              "hour":t37,
              "minute":t37,
              "second":t37,
              "timeZoneName":t37}}
    var DateTimeFormat=[0,object_options,options$0];
    function options$1(param)
     {return {"localeMatcher":"best fit",
              "style":"decimal",
              "currency":t37,
              "currencyDisplay":t37,
              "useGrouping":true$0,
              "minimumIntegerDigits":t37,
              "minimumFractionDigits":t37,
              "maximumFractionDigits":t37,
              "minimumSignificantDigits":t37,
              "maximumSignificantDigits":t37}}
    var NumberFormat=[0,object_options,options$1];
    function options$2(param)
     {return {"localeMatcher":"best fit","type":"cardinal"}}
    var
     PluralRules=[0,object_options,options$2],
     intl=Unsafe[1].Intl,
     collator_constr=Unsafe[1].Intl.Collator,
     dateTimeFormat_constr=Unsafe[1].Intl.DateTimeFormat,
     numberFormat_constr=Unsafe[1].Intl.NumberFormat,
     pluralRules_constr=Unsafe[1].Intl.PluralRules;
    function is_supported$3(param){return caml_call1(Optdef[5],intl)}
    var
     Js_of_ocaml_Intl=
      [0,
       Collator,
       DateTimeFormat,
       NumberFormat,
       PluralRules,
       intl,
       collator_constr,
       dateTimeFormat_constr,
       numberFormat_constr,
       pluralRules_constr,
       is_supported$3];
    caml_register_global(1664,Js_of_ocaml_Intl,"Js_of_ocaml__Intl");
    var Js_of_ocaml$0=[0];
    caml_register_global(1665,Js_of_ocaml$0,"Js_of_ocaml");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc19vZl9vY2FtbC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
