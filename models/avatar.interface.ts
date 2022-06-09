export interface AvatarType {
    _id: number;
    name: string;
    affiliation: string;
    gender:string;
    allies?:string[];
    enemies?:string[];
    weapon:string;
    photoUrl:string;
    proffesion:string;
    love?:string;
    skin?:string;
    predecessor?:string
    
}