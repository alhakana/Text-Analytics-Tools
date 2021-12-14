export interface Image {
  full: string,
  thumbnail: string
}

export interface Annotation {
  abstract: string,
  categories: string[],
  confidence: number,
  end: number,
  id: number,
  image: Image,
  label: string,
  spot: string,
  start: number,
  title: string,
  uri: string
}


export class Similarity {
  constructor(
    public timestamp: string,
    public time: number,
    public lang: string,
    public langConfidence: number,
    public text1: string,
    public url1: string,
    public text2: string,
    public url2: string,
    public similarity: number
  ) {
  }
}

export interface DetLang {
  lang: string,
  confidence: number
}

export class Languages {
  constructor(
    public timestamp: string,
    public time: number,
    public text: string,
    public url: string,
    public detectedLangs: DetLang[]
  ) {
  }
}

export class SentimentValue{
  constructor(
    public score:number,
    public type:string
  ) {
  }
}
