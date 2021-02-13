set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "gamescore" cascade;

create schema "gamescore";

CREATE TABLE "comments" (
	"commentId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"commentBody" TEXT NOT NULL,
	"gameId" integer NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY ("commentId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "rating" (
	"ratingId" serial NOT NULL,
	"gameId" serial NOT NULL,
	"rating" integer NOT NULL,
	CONSTRAINT "rating_pk" PRIMARY KEY ("ratingId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "screenshots" (
	"screenId" serial NOT NULL,
	"commentId" integer NOT NULL,
	"screenUrl" TEXT NOT NULL,
	CONSTRAINT "screenshots_pk" PRIMARY KEY ("screenId")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "screenshots" ADD CONSTRAINT "screenshots_fk0" FOREIGN KEY ("commentId") REFERENCES "comments"("commentId");

