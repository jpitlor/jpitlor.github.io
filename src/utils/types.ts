interface Data<T> {
  [k: string]: T;
}

interface Nodes<T> {
  nodes: T[];
}

export interface GatsbyArrayQuery<T> {
  data: Data<Nodes<T>>;
}

export interface GatsbyQuery<T> {
  data: Data<T>;
}
