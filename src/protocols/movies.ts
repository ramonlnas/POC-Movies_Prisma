export type MovieEntity = {
    id: number,
    movie: string,
    gender: string,
    summary: string,
}

export type MovieInput = Omit<MovieEntity, "id" | "summary">