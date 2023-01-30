-- CreateTable
CREATE TABLE "films" (
    "id" SERIAL NOT NULL,
    "movie" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "summary" TEXT,

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform" (
    "id" SERIAL NOT NULL,
    "app" TEXT NOT NULL,

    CONSTRAINT "platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platformFilms" (
    "id" SERIAL NOT NULL,
    "platformId" INTEGER,
    "filmId" INTEGER,

    CONSTRAINT "platformFilms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "platformFilms" ADD CONSTRAINT "platformFilms_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "platformFilms" ADD CONSTRAINT "platformFilms_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
