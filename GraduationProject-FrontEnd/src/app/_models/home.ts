export class Home {
    constructor(
        public carDetailsID: number,
        public transmissionType: string,
        public imageName: string,
        public carType: string,
        public carName: string,
        public className: string,
        public fuel: number,
        public cylinders: number,
        public price: number,
        public year: number,
    )
    {}
}
