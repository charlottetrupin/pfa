open Ecs

type t = {
  player : Entity.t;
  score : Entity.t;
  (* Ajouter d'autres champs : niveau courant, score, points de vie, … *)
}

let global_state = ref None

let get_state () = match !global_state with
  None -> failwith "Jeu non initialisé"
| Some s -> s

let init e1 e2 =
  global_state := Some { player = e1; score = e2 }


let get_player () = (get_state ()) . player

let get_score () = (get_state ()) . score
