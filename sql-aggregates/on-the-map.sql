select "countries"."name" as "Country",
count("cities"."name") as "Cities"
from "countries"
join "cities" using ("countryId")
group by "countries"."name"
order by "Country";
