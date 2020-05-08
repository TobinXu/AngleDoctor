// 服药说明
export class Take_Medicine {
    id: number;
    name: string;
    usage: string;
    imageUrl: string;
}

// 费用
export class Cost {
    id: number;
    title: string;
    desc: string;
    imageUrl: string;
}

// 我的检测
export class Detect {
    id: number;
    title: string;
    notification: string;
    imageUrl: string; 
}