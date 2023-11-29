export interface Actor {
    id?: number;
    name?: string;
    biography?: string;
    birthday?: string;
    gender?: number;
    place_of_birth?: string;
    also_known_as?: string[]|any; 
    known_for_department?: string;  
    profile_path?:string; 
  }
  
  export interface Credits{
    id?:number;
    title?: string;
    poster_path?: string;
    vote_average?:number;
    release_date?:string;
  }