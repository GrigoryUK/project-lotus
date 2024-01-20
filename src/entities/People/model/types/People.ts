export interface People {
  name: string;
  birth_year: string;
  mass: string;
  height: string;
  gender: string;
}

export interface PeopleResult {
  results: People[];
}
