select "customers"."firstName",
"customers"."lastName"
from "rentals"
join "inventory" using ("inventoryId")
join "films" using ("filmId")
join "customers" using ("customerId")
where "films"."title" = 'Magic Mallrats';
