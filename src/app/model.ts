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
    public detectedLanguages: DetLang[]
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
