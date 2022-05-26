export class Content{
        public id : number|undefined;
        public name : string|undefined;
        public tagsIds: []|undefined;
        public creatorId : number|undefined;
        public createdAt : Date|undefined;
        public releaseDate : Date|undefined;
        public desc: string|undefined;
        public imageURL: string|undefined;
        constructor(id: number|undefined, name:string|undefined, tags: []|undefined, creatorId: number|undefined, createdAt: Date|undefined, releaseDate: Date|undefined, desc: string|undefined, imageURL: string|undefined){
            this.id =id;
            this.name = name;
            this.tagsIds = tags;
            this.creatorId = creatorId;
            this.createdAt = createdAt;
            this.releaseDate = releaseDate;
            this.desc = desc;
            this.imageURL = imageURL;
        }
}