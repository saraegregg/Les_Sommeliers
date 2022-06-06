-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Wine" (
    "Wine_ID" int   NOT NULL,
    "Wine_title" varchar   NOT NULL,
    "Winery_ID" int   NOT NULL,
    "Variety" varchar   NOT NULL,
    "Price" int   NOT NULL,
    CONSTRAINT "pk_Wine" PRIMARY KEY (
        "Wine_ID"
     )
);

CREATE TABLE "Winery" (
    "Winery_ID" int   NOT NULL,
    "Winery_name" varchar   NOT NULL,
    "Province_ID" int   NOT NULL,
    CONSTRAINT "pk_Winery" PRIMARY KEY (
        "Winery_ID"
     )
);

CREATE TABLE "Evaluation" (
    "Tasting_No" int   NOT NULL,
    "Wine_ID" int   NOT NULL,
    "Taster_ID" int   NOT NULL,
    "Description" varchar   NOT NULL,
    "Points" int   NOT NULL,
    CONSTRAINT "pk_Evaluation" PRIMARY KEY (
        "Tasting_No"
     )
);

CREATE TABLE "Sommelier" (
    "Taster_ID" int   NOT NULL,
    "Taster_name" varchar   NOT NULL,
    CONSTRAINT "pk_Sommelier" PRIMARY KEY (
        "Taster_ID"
     )
);

CREATE TABLE "Country" (
    "Country_ID" int   NOT NULL,
    "Country_name" varchar   NOT NULL,
    CONSTRAINT "pk_Country" PRIMARY KEY (
        "Country_ID"
     )
);

CREATE TABLE "Province" (
    "Province_ID" int   NOT NULL,
    "Province_name" varchar   NOT NULL,
    "Country_ID" int   NOT NULL,
    CONSTRAINT "pk_Province" PRIMARY KEY (
        "Province_ID"
     )
);

ALTER TABLE "Wine" ADD CONSTRAINT "fk_Wine_Winery_ID" FOREIGN KEY("Winery_ID")
REFERENCES "Winery" ("Winery_ID");

ALTER TABLE "Winery" ADD CONSTRAINT "fk_Winery_Province_ID" FOREIGN KEY("Province_ID")
REFERENCES "Province" ("Province_ID");

ALTER TABLE "Evaluation" ADD CONSTRAINT "fk_Evaluation_Wine_ID" FOREIGN KEY("Wine_ID")
REFERENCES "Wine" ("Wine_ID");

ALTER TABLE "Evaluation" ADD CONSTRAINT "fk_Evaluation_Taster_ID" FOREIGN KEY("Taster_ID")
REFERENCES "Sommelier" ("Taster_ID");

ALTER TABLE "Province" ADD CONSTRAINT "fk_Province_Country_ID" FOREIGN KEY("Country_ID")
REFERENCES "Country" ("Country_ID");

