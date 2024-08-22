export interface newsGroupDataType {
  title: string,
  contents: [newsContentsDataType]
}

export interface newsContentsDataType {
  id: number,
  thumbnail: string,
  player: boolean,
  title: string,
  media: string,
  photo: boolean,
  contents: string,
  date: string
}

export interface newsRankContentsDataType {
  id: number,
  rank: number,
  title: string
}